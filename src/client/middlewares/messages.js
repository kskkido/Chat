import { userConnect } from 'Actions/users'
import { messageCreate, MESSAGE_CREATE } from 'Actions/messages'

const createMessageWithUser = ({ getState }) => next =>
	(action) => {
		if (action.type === MESSAGE_CREATE) {
			const message = action.payload
			const { username } = message
			const { users } = getState()

			if (!users.byId[username]) {
				next(userConnect({ username }))
			}

			return next(messageCreate({ message }))
		}

		return next(action)
	}

export default createMessageWithUser
