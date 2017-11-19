import React from 'react'
import PropTypes from 'prop-types'
import {
	ChatUserContainer as Container,
} from 'Components/Styles'

const User = ({ username }) => (
	<Container>
		<div>username: {username}</div>
		<div>mute</div>
	</Container>
)

User.propTypes = {
	username: PropTypes.string.isRequired,
}

export default User
