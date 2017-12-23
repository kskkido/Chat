/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import WithRedux from 'Components/WithRedux'
import {
	AppSubText as SubText,
	ChatMessageBody as Body,
	ChatMessageBodyContent as Content,
	ChatMessageBodySender as Sender,
	ChatMessageBodyTime as Time,
	ChatMessageContainer as Container,
	ChatMessageText as Text,
} from 'Components/Styles'

/* Receives color and isSelf property from user with provided username */
const MessageConfigProvider = WithRedux(({ auth, users }, { username }) => ({
	color: users.byId[username].color,
	isSelf: username === auth.username
}))

/* ==== DISPLAY FOR USERNAME ==== */
const MessageSender = ({ isSelf, username }) => (
	<Sender>
		<SubText>
			{isSelf ? `[ ${username} ]` : username}
		</SubText>
	</Sender>
)

MessageSender.propTypes = {
	isSelf: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired
}

/* ==== DISPLAY FOR CONTENT ==== */
const MessageContent = ({ content, color, timestamp }) => {
	const splitByLine = content.split('\n')

	return (
		<Content>
			{splitByLine.map((text, i) => (
				<Text
					key={`text_${timestamp}_${i}`}
					color={color || 'purple'}
				>
					{text}
				</Text>
			))}
		</Content>
	)
}

MessageContent.propTypes = {
	content: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
}

/* ==== DISPLAY FOR DATE ==== */
const MessageDate = ({ timestamp }) => (
	<Time>
		<SubText>
			{parseDate(timestamp)}
		</SubText>
	</Time>
)

MessageDate.propTypes = {
	timestamp: PropTypes.number.isRequired,
}

/* ==== puts it all together ==== */
const Message = ({ content, timestamp, username }) => (
	<MessageConfigProvider username={username}>
		{({ color, isSelf }) => (
			<Container>
				<Body>
					<MessageSender
						isSelf={isSelf}
						username={username}
					/>
					<MessageContent
						color={color}
						content={content}
						timestamp={timestamp}
					/>
				</Body>
				<MessageDate timestamp={timestamp} />
			</Container>
		)}
	</MessageConfigProvider>
)

Message.propTypes = {
	content: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
	username: PropTypes.string.isRequired
}

function parseDate(timestamp) {
	return (new Date(timestamp)).toLocaleString()
}

export default Message
