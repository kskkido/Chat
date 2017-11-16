import { actionCreator, updateObject } from 'Utils/reducers'
import { clientConnenct } from 'Reducers/client'

/* ====== DEFINE ACTION TYPES ====== */
const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_FAIL = 'AUTH_FAIL'

/* ====== DEFINE ACTION CREATOR ====== */
export const authRequest = actionCreator(AUTH_REQUEST)
export const authSuccess = actionCreator(AUTH_SUCCESS)
export const authFail = actionCreator(AUTH_FAIL)

/* ====== DEFINE STATE ====== */
const initialState = {
	loading: false,
	authenticated: false,
	error: ''
}

/* === DEFINE CASE HANDLERS === */
const onRequest = (state, action) => updateObject(state, { loading: true })
const onSuccess = (state, action) => updateObject(state, { authenticated: true })
const onFail = (state, action) => updateObject(state, { error: action.payload.error })

/* ====== DEFINE REDUCER ====== */
const reducer = (initialState, {
	AUTH_SUCCESS: onSuccess,
	AUTH_FAIL: onFail
})

export default reducer
