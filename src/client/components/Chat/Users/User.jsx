import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { curry } from 'ramda'
import { userColor, userMute } from 'Reducers/users'
import { ChatUserContainer as Container } from 'Components/Styles'
import Control from './Control'
import WithRender from 'Components/WithRender'

const mapDispatchToProps = dispatch => ({
	dispatchColor: curry((username, color) => dispatch(userColor({ username, color }))),
	dispatchMute: curry((username, mute) => dispatch(userMute({ username, mute })))
})

const DispatchProvider = connect(null, mapDispatchToProps)(WithRender)

const User = ({ mute, color, username }) => (
	<Container>
		<div>username: {username}</div>
		<DispatchProvider>
			{({ dispatchColor, dispatchMute }) => (
				<Control
					color={color}
					mute={mute}
					handleColor={dispatchColor(username)}
					handleMute={dispatchMute(username)}
				/>
			)}
		</DispatchProvider>
	</Container>
)

User.propTypes = {
	color: PropTypes.string.isRequired,
	mute: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired,
}

export default User
