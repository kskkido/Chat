import { username as validate } from 'Utils/validations'
import {
	actionCreator,
	createReducer,
	updateObject
} from 'Utils/reducers'

/* ====== DEFINE ACTION TYPES ====== */
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_FAIL = 'AUTH_FAIL'

/* ====== DEFINE ACTION CREATOR ====== */
export const authSuccess = actionCreator(AUTH_SUCCESS)
export const authFail = actionCreator(AUTH_FAIL)

/* ====== DEFINE STATE ====== */
const initialState = {
	username: '',
	error: ''
}

/* === DEFINE CASE HANDLERS === */
const onSuccess = (state, action) => updateObject(state, { error: '', username: action.payload.username })
const onFail = (state, action) => updateObject(state, { error: action.payload.error })

/* ====== DEFINE REDUCER ====== */
const reducer = createReducer(initialState, {
	AUTH_SUCCESS: onSuccess,
	AUTH_FAIL: onFail
})

export default reducer

/* ====== DEFINE DISPATCHER ====== */

export const authRequest = username => (dispatch) => {
	const error = validate(username)

	if (error.length > 0) {
		return dispatch(authFail({ error }))
	}

	return dispatch(authSuccess({ username }))
}

