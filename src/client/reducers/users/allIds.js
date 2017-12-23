import { userConnect } from 'Actions/users'
import reducerCreator from 'Reducers/utils'

/* INITIAL STATE */
const initialState = []

/* REDUCER HANDLER */
const handleConnect = (state, action) =>
	[...state, action.payload.username]

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[userConnect.type]: handleConnect
	}
)

export default reducer
