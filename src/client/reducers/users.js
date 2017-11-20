/* eslint-disable import/no-extraneous-dependencies */
import { identity, map } from 'ramda'
import { COLORS } from 'Constants'
import {
	actionCreator,
	createReducer,
	createSubstateFactory,
	updateObject
} from 'Utils'

/* ====== DEFINE ACTION TYPES ====== */
const USER_CONNECT = 'USER_CONNECT'
const USER_DISCONNECT = 'USER_DISCONNECT'
const USER_COLOR = 'USER_COLOR'
const USER_MUTE = 'USER_MUTE'

/* ====== DEFINE ACTION CREATOR ====== */
export const userConnect = actionCreator(USER_CONNECT) // not sure about this
export const userDisconnect = actionCreator(USER_DISCONNECT)
export const userColor = actionCreator(USER_COLOR)
export const userMute = actionCreator(USER_MUTE)

/* ====== DEFINE STATE ====== */
const initialState = { // id of users
}

const initialUserState = { // user state
	username: '',
	color: COLORS.black,
	mute: false,
}

/* ====== DEFINE USERS CASE REDUCER ====== */
const createUserState = createSubstateFactory(initialUserState)

const withUser = map(handlerFn => (state, action) => {
	const { username } = action.payload
	const userState = state[username] || createUserState(action)
	const newState = updateObject(state, { [username]: handlerFn(userState, action) })

	return newState
})

const onUserConnect = identity

const onUserColor = (userState, { payload }) => {
	const { color } = payload
	const newUserState = updateObject(userState, { color })
	console.log(newUserState, ' what')
	return newUserState
}

const onUserMute = (userState, { payload }) => {
	const { mute } = payload
	const newUserState = updateObject(userState, { mute })

	return newUserState
}

/* ====== DEFINE REDUCER ====== */
// reducer that directly interacts with each user indexed by id

const usersReducer = createReducer(initialState, withUser({
	USER_CONNECT: onUserConnect, // passes through userReducer to create new user
	USER_COLOR: onUserColor,
	USER_MUTE: onUserMute,
}))

export default usersReducer

/* ====== DEFINE DISPATCHER ====== */
