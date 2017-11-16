/* eslint-disable import/no-extraneous-dependencies */
/* import/no-unresolved */
import { actionCreator, createReducer, createSubstateFactory, updateObject } from 'Utils/reducers'

/* ====== DEFINE ACTION TYPES ====== */
const MESSAGE_CREATE = 'MESSAGE_CREATE'

/* ====== DEFINE ACTION CREATOR ====== */
export const messageCreate = actionCreator(MESSAGE_CREATE) // not sure about this

/* ====== DEFINE STATE ====== */
const initialState = { // id of Messages
	byId: {},
	allIds: []
}

const initialMessageState = {
	id: null,
	userId: null,
	text: '',
	timestamp: ''
}

/* ====== DEFINE MessageS CASE REDUCER ====== */
const createMessage = createSubstateFactory(initialMessageState)

const onCreate = (state, action) => {
	const newMessage = createMessage(action)
	const newState = updateObject(state, {
		allIds: [...state.allIds, newMessage.id],
		byId: updateObject(state.byId, { [newMessage.id]: newMessage })
	})

	return newState
}

/* ====== DEFINE REDUCER ====== */
export const reducer = createReducer(initialState, {
	MESSAGE_CREATE: onCreate
})

export default reducer

/* ====== DEFINE DISPATCHER ====== */
