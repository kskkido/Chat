/* eslint-disable react/no-array-index-key, no-use-before-define */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import selectMessagesVisible from 'Reducers/selectors'
import { ChatMessagesContainer as Container } from 'Components/Styles'
import WithRender from 'Components/WithRender'
import ScrollBottom from 'Components/ScrollBottom'
import Message from './Message'

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

function parseDate(timestamp) {
	return (new Date(timestamp)).toLocaleString()
}

export default MessagesList
