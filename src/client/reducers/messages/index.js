import { messageCreate } from 'Actions/messages'
import reducerCreator from 'Reducers/utils'
import itemReducer from './item'

/* ====== DEFINE STATE ====== */
const initialState = []

const handleCreate = (state, action) =>
	[...state, itemReducer(null, action)]

/* ====== DEFINE REDUCER ====== */
export const reducer = reducerCreator(initialState, {
	[messageCreate.type]: handleCreate
})

export default reducer
