import actionCreator from 'Actions/utils'

/* ====== DEFINE ACTION TYPES ====== */
export const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_FAIL = 'AUTH_FAIL'

/* ====== DEFINE ACTION CREATOR ====== */
export const authRequest = actionCreator(
	AUTH_REQUEST,
	({ username }) => ({ username })
)

export const authSuccess = actionCreator(
	AUTH_SUCCESS,
	({ username }) => ({ username })
)
export const authFail = actionCreator(
	AUTH_FAIL,
	({ error }) => ({ error })
)
