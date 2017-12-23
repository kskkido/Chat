import combineSelectors from './utils'

const getMessages = state => state.messages
const getUsers = state => state.users.byId

const selectMessagesVisible = combineSelectors(
	[getMessages, getUsers],
	(messages, users) => messages.filter((message) => {
		const { username } = message
		const { mute } = users[username]

		return !mute
	})
)

export default selectMessagesVisible
