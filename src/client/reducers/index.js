import { combineReducers } from 'redux'

import auth from './auth'
import client from './client'
import messages from './messages'
import users from './users'

export default combineReducers({
	auth,
	client,
	messages,
	users
})
