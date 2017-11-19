import { combineReducers } from 'redux'
import auth from './auth'
import messages from './messages'
import users from './users'

export default combineReducers({
	auth,
	messages,
	users
})
