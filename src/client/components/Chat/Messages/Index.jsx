import React from 'react'
import selectMessagesVisible from 'Reducers/selectors'
import { ChatMessagesContainer as Container } from 'Components/Styles'
import WithRedux from 'Components/WithRedux'
import ScrollBottom from 'Components/ScrollBottom'
import Item from './Item'

/* selects messages from non-muted users */
const MessagesProvider = WithRedux(state => ({
	messages: selectMessagesVisible(state)
}))

const MessagesList = () => (
	<MessagesProvider>
		{({ messages }) => (
			<ScrollBottom watch={messages.length}>
				<Container>
					{messages.map(({ content, timestamp, username }) => (
						<Item
							key={timestamp}
							content={content}
							timestamp={timestamp}
							username={username}
						/>))
					}
				</Container>
			</ScrollBottom>
		)}
	</MessagesProvider>
)

export default MessagesList
