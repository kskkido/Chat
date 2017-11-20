import React from 'react'
import { connect } from 'react-redux'
import selectMessagesVisible from 'Reducers/selectors'
import { ChatMessagesContainer as Container } from 'Components/Styles'
import WithRender from 'Components/WithRender'
import ScrollBottom from 'Components/ScrollBottom'
import Message from './Message'

/* selects messages from non-muted users */
const MessagesProvider = connect(state => ({
	messages: selectMessagesVisible(state)
}))(WithRender)

const MessagesList = () => (
	<MessagesProvider>
		{({ messages }) => (
			<ScrollBottom watch={messages.length}>
				<Container>
					{messages.map(({ content, timestamp, username }) => (
						<Message
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
