import {
	actionCreator,
	createReducer,
	createSubstateFactory,
	updateObject
} from 'Utils/reducers'
import { userConnect } from './users'

/* ====== DEFINE ACTION TYPES ====== */
const MESSAGE_CREATE = 'MESSAGE_CREATE'

/* ====== DEFINE ACTION CREATOR ====== */
export const messageCreate = actionCreator(MESSAGE_CREATE) // not sure about this

/* ====== DEFINE STATE ====== */
const initialState = { // id of Messages
	allIds: []
}

const initialMessageState = {
	username: null,
	content: '',
	timestamp: ''
}

/* ====== DEFINE MessageS CASE REDUCER ====== */
const createMessage = createSubstateFactory(initialMessageState)

const onCreate = (state, action) => {
	const newMessage = createMessage(action)
	const newState = updateObject(state, {
		allIds: [...state.allIds, newMessage],
	})

	return newState
}

/* ====== DEFINE REDUCER ====== */
export const reducer = createReducer(initialState, {
	MESSAGE_CREATE: onCreate
})

export default reducer

/* ====== DEFINE DISPATCHER ====== */
export const messageCreateWithUser = message =>
	(dispatch, getState) => {
		const { username } = message
		const { users } = getState()

		if (!users[username]) {
			dispatch(userConnect({ username }))
		}

		return dispatch(messageCreate(message))
	}
