/* eslint-disable import/no-extraneous-dependencies */
import { actionCreator, updateObject } from 'Utils/reducers'

/* ====== DEFINE ACTION TYPES ====== */
const CHANNEL_ADD = 'CHANNEL_ADD'
const CHANNEL_REMOVE = 'CHANNEL_REMOVE'
const CHANNEL_LOAD = 'CHANNEL_LOAD'
const CHANNEL_LOAD_SUCCESS = 'CHANNEL_LOAD_SUCCESS'
const CHANNEL_LOAD_FAIL = 'CHANNEL_LOAD_FAIL'


/* ====== DEFINE ACTION CREATOR ====== */
export const clientConnect = actionCreator(CLIENT_CONNECT)
export const clientDisconnect = actionCreator(CHANNEL_REMOVE)

/* ====== DEFINE STATE ====== */
const initialState = {
	id: null,
	username: '',
}


/* === DEFINE CASE HANDLERS === */

const onConnect = (state, action) => updateObject(state, createInitialState(action))

const onDisconnect = (state, action) => updateObject(state, initialState)

/* ====== DEFINE REDUCER ====== */
const reducer = (initialState, {
	CLIENT_CONNECT: onConnect,
	CHANNEL_REMOVE: onDisconnect
})

export default reducer

/* ====== DEFINE DISPATCHER ====== */
