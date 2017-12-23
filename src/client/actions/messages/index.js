import actionCreator from 'Actions/utils'
import { userConnect } from 'Actions/users'

/* ====== DEFINE ACTION TYPES ====== */
export const MESSAGE_CREATE = 'MESSAGE_CREATE'

/* ====== DEFINE ACTION CREATOR ====== */
export const messageCreate = actionCreator(
	MESSAGE_CREATE,
	({ message }) => message
)
