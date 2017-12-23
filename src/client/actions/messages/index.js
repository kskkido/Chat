import actionCreator from 'Actions/utils'
import { userConnect } from 'Actions/users'

/* ====== DEFINE ACTION TYPES ====== */
export const MESSAGE_CREATE = 'MESSAGE_CREATE'

/* ====== DEFINE ACTION CREATOR ====== */
export const messageCreate = actionCreator(
	MESSAGE_CREATE,
	({ message }) => message
)

/* ====== DEFINE DISPATCHER ====== */
export const messageCreateWithUser = message =>
	(dispatch, getState) => {
		const { username } = message
		const { users } = getState()

		if (!users.byId[username]) {
			dispatch(userConnect({ username }))
		}

		return dispatch(messageCreate(message))
	}
