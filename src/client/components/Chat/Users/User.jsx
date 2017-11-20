import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userColor, userMute } from 'Reducers/users'
import WithRender from 'Components/WithRender'
import { ChatUserContainer as Container } from 'Components/Styles'
import Control from './Control'

const mapStateToProps = ({ auth }, { username }) => ({
	isSelf: auth.username === username
})

const mapDispatchToProps = (dispatch, { username }) => ({
	dispatchColor: color => dispatch(userColor({ username, color })),
	dispatchMute: mute => dispatch(userMute({ username, mute }))
})

const DispatchProvider = connect(mapStateToProps, mapDispatchToProps)(WithRender)

const User = ({ mute, color, username }) => (
	<DispatchProvider username={username}>
		{({ dispatchColor, dispatchMute, isSelf }) => (
			<Container>
				<div>user: {isSelf ? `[ ${username} ]` : username}</div>
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
