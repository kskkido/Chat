import React from 'react'
import PropTypes from 'prop-types'
import { userColor, userMute } from 'Actions/users'
import { ChatUserContainer as Container } from 'Components/Styles'
import WithRedux from 'Components/WithRedux'
import Color from './Color'

const mapStateToProps = ({ auth, users }, { username }) => ({
	user: users.byId[username],
	isSelf: auth.username === username
})

const mapDispatchToProps = (dispatch, { username }) => ({
	dispatchColor: color => dispatch(userColor({ username, color })),
	dispatchMute: mute => dispatch(userMute({ username, mute }))
})

const UserProvider = WithRedux(mapStateToProps, mapDispatchToProps)

const User = ({ username }) => (
	<UserProvider username={username}>
		{({
			dispatchColor,
			dispatchMute,
			isSelf,
			user
		}) => (
			<Container>
				<div>user: {isSelf ? `[ ${username} ]` : username}</div>
				<Color
					color={user.color}
					mute={user.mute}
					handleColor={dispatchColor}
					handleMute={dispatchMute}
				/>
			</Container>
		)}
	</UserProvider>
)

User.propTypes = {
	username: PropTypes.string.isRequired,
}

export default User
