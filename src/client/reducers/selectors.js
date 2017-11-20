import { combineSelectors } from 'Utils'

const getMessages = state => state.messages.allIds
const getUsers = state => state.users

const selectMessagesVisible = combineSelectors(
	[getMessages, getUsers],
	(messages, users) => messages.filter((message) => {
		const { username } = message
		const { mute } = users[username]

		return !mute
	})
)

export default selectMessagesVisible
