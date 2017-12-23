import { combineReducers } from 'redux'
import allIds from './allIds'
import byId from './byId'

const reducer = combineReducers({
	allIds,
	byId
})

export default reducer
