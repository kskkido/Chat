import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userColor, userMute } from 'Reducers/users'
import WithRender from 'Components/WithRender'
import { ChatUserContainer as Container } from 'Components/Styles'
import Control from './Control'

const mapDispatchToProps = (dispatch, { username }) => ({
	dispatchColor: color => dispatch(userColor({ username, color })),
	dispatchMute: mute => dispatch(userMute({ username, mute }))
})

const DispatchProvider = connect(null, mapDispatchToProps)(WithRender)

const User = ({ mute, color, username }) => (
	<DispatchProvider username={username}>
		{({ dispatchColor, dispatchMute }) => (
			<Container>
				<div>user: {username}</div>
				<Control
					color={color}
					mute={mute}
					handleColor={dispatchColor}
					handleMute={dispatchMute}
				/>
			</Container>
		)}
	</DispatchProvider>
)

User.propTypes = {
	color: PropTypes.string.isRequired,
	mute: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired,
}

export default User
