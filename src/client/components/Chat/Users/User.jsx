import React from 'react'
import PropTypes from 'prop-types'
import { ChatUserContainer as Container } from 'Components/Styles'
import HandlerProvider from 'Components/../containers/User'
import Control from './Control'

const User = ({ mute, color, username }) => (
	<Container>
		<div>username: {username}</div>
		<HandlerProvider username={username}>
			{({ handleColor, handleMute }) => (
				<Control
					color={color}
					mute={mute}
					handleColor={handleColor}
					handleMute={handleMute}
				/>
			)}
		</HandlerProvider>
	</Container>
)

User.propTypes = {
	color: PropTypes.string.isRequired,
	mute: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired,
}

export default User
