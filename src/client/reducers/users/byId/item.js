import { COLORS } from 'Constants'
import {
	userColor,
	userConnect,
	userMute
} from 'Actions/users'
import reducerCreator from 'Reducers/utils'

/* INITIAL STATE */
const initialState = { // user state
	username: '',
	color: COLORS.black,
	mute: false,
}

/* REDUCER HANDLER */

const handleConnect = (state, { payload }) => {
	const { username } = payload

	return {
		...state,
		username
	}
}

const handleColor = (state, { payload }) => {
	const { color } = payload

	return {
		...state,
		color
	}
}

const handleMute = (state, { payload }) => {
	const { mute } = payload

	return {
		...state,
		mute
	}
}

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[userConnect.type]: handleConnect,
		[userColor.type]: handleColor,
		[userMute.type]: handleMute
	}
)

export default reducer
