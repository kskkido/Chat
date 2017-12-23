import actionCreator from 'Actions/utils'

/* ====== DEFINE ACTION TYPES ====== */
const USER_CONNECT = 'USER_CONNECT'
const USER_COLOR = 'USER_COLOR'
const USER_MUTE = 'USER_MUTE'

/* ====== DEFINE ACTION CREATOR ====== */
export const userConnect = actionCreator(
	USER_CONNECT,
	({ username }) => ({ username })
)
export const userColor = actionCreator(
	USER_COLOR,
	({ username, color }) => ({ username, color })
)
export const userMute = actionCreator(
	USER_MUTE,
	({ username, mute }) => ({ username, mute })
)
