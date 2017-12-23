import { messageCreate } from 'Actions/messages'
import reducerCreator from 'Reducers/utils'

/* INITIAL STATE */
const initialState = {
	username: null,
	content: '',
	timestamp: ''
}

/* REDUCER HANDLER */
const handleCreate = (state, action) => ({
	...state,
	...action.payload
})

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[messageCreate.type]: handleCreate
	}
)

export default reducer
