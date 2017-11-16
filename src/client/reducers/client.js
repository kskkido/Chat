/* eslint-disable import/no-extraneous-dependencies */
/* import/no-unresolved */
import { actionCreator, createReducer, createSubstateFactory, updateObject } from 'Utils/reducers'
import { authRequest, authSuccess, authFail } from 'Reducers/auth'

/* ====== DEFINE ACTION TYPES ====== */
const CLIENT_CONNECT = 'CLIENT_CONNECT'
const CLIENT_DISCONNECT = 'CLIENT_DISCONNECT'


/* ====== DEFINE ACTION CREATOR ====== */
export const clientConnect = actionCreator(CLIENT_CONNECT)
export const clientDisconnect = actionCreator(CLIENT_DISCONNECT)

/* ====== DEFINE STATE ====== */
const initialState = {
	id: null,
	username: '',
}

const createInitialState = createSubstateFactory(initialState)

/* === DEFINE CASE HANDLERS === */

const onConnect = (state, action) => updateObject(state, createInitialState(action))

const onDisconnect = (state, action) => updateObject(state, initialState)

/* ====== DEFINE REDUCER ====== */
const reducer = (initialState, {
	CLIENT_CONNECT: onConnect,
	CLIENT_DISCONNECT: onDisconnect
})

export default reducer

/* ====== DEFINE DISPATCHER ====== */

const validate = (username) => {
	const errors = []

	if (!/^\w$/.test(username)) {
		errors.push('INVALID CHARACTERS: username must consist of alphabets')
	}

	return errors
}

export const clientCreate = username => (dispatch) => {
	const errors = validate(username)

	if (errors.length > 0) {
		return dispatch(authFail({ errors }))
	}

	dispatch(authRequest())

	// faye stuff promise
	dispatch(authSuccess())
	return dispatch(clientConnect({ id: 0, username }))
}

