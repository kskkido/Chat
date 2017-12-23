import {
	userColor,
	userConnect,
	userMute
} from 'Actions/users'
import reducerCreator from 'Reducers/utils'
import itemReducer from './item'

/* INITIAL STATE */
const initialState = {}

/* REDUCER HANDLER */
const handleAction = (state, action) => {
	const { username } = action.payload

	return {
		...state,
		[username]: itemReducer(state[username], action)
	}
}
/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[userConnect.type]: handleAction,
		[userColor.type]: handleAction,
		[userMute.type]: handleAction
	}
)

export default reducer
