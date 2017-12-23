import reducerCreator from 'Reducers/utils'

/* ====== DEFINE STATE ====== */
const initialState = {
	username: '',
	error: ''
}

/* === DEFINE CASE HANDLERS === */
const onSuccess = (state, action) => ({
	...initialState,
	username: action.payload.username
})

const onFail = (state, action) => ({
	...initialState,
	error: action.payload.error
})

/* ====== DEFINE REDUCER ====== */
const reducer = reducerCreator(initialState, {
	AUTH_SUCCESS: onSuccess,
	AUTH_FAIL: onFail
})

export default reducer

