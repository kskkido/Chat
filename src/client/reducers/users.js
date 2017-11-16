/* eslint-disable import/no-extraneous-dependencies */
/* import/no-unresolved */
import { actionCreator, createReducer, createSubstateFactory, mapHandlers, updateObject } from 'Utils/reducers'
import { identity } from 'ramda'

/* ====== DEFINE ACTION TYPES ====== */
const USER_CONNECT = 'USER_CONNECT'
const USER_DISCONNECT = 'USER_DISCONNECT'
const USER_COMMENT = 'USER_COMMENT'
const USER_MUTE = 'USER_MUTE'

/* ====== DEFINE ACTION CREATOR ====== */
export const userConnect = actionCreator(USER_CONNECT) // not sure about this
export const userDisconnect = actionCreator(USER_DISCONNECT)
export const userComment = actionCreator(USER_COMMENT)
export const userMute = actionCreator(USER_MUTE)

/* ====== DEFINE STATE ====== */
const initialState = { // id of users
}

const initialUserState = { // user state
	id: null,
	username: '',
	comments: [],
	mute: false
}

/* ====== DEFINE USERS CASE REDUCER ====== */
const createUserState = createSubstateFactory(initialUserState)

const onUserDisconnect = (state, action) => {
	const { payload } = action
	const newState = updateObject({}, state)

	delete newState[payload.id]
	return newState
}

/* ==== DEFINE USER CASE REDUCER ===== */
const provideUser = mapHandlers(handlerFn => (state, action) => {
	const { id } = action.payload
	const userState = state[id] || createUserState(action) // creates new user if id does not exist
	const newState = updateObject(state, { [id]: handlerFn(userState, action) })

	return newState
})

const onUserConnect = identity

const onUserCategory = (userState, action) => {
	const { payload } = action
	const newUserState = updateObject(userState, { category: payload.category })

	return newUserState
}

const onUserComment = (userState, action) => {
	const { payload } = action
	const { comments } = userState
	const newUserState = updateObject(userState, { comments: comments.concat(payload.commentId) })

	return newUserState
}

const onUserMute = (userState, action) => {
	const { payload } = action
	const newUserState = updateObject(userState, { mute: payload.mute })

	return newUserState
}

/* ====== DEFINE REDUCER ====== */
// reducer that directly interacts with each user indexed by id
const userReducer = (initialUserState, provideUser({
	USER_CONNECT: onUserConnect,
	USER_CATEGORY: onUserCategory,
	USER_COMMENT: onUserComment,
	USER_MUTE: onUserMute
}))

const usersReducer = createReducer(initialState, {
	USER_DISCONNECT: onUserDisconnect,
	USER_CONNECT: userReducer, // passes through userReducer to create new user
	USER_CATEGORY: userReducer,
	USER_COMMENT: userReducer,
	USER_MUTE: userReducer,
})

export default usersReducer

/* ====== DEFINE DISPATCHER ====== */
