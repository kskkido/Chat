/* eslint-disable no-use-before-define */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { curry } from 'ramda'
import { userColor, userMute } from 'Reducers/users'
import WithRender from 'Components/WithRender'

const mapDispatchToProps = dispatch => ({
	dispatchColor: curry((username, color) => dispatch(userColor({ username, color }))),
	dispatchMute: curry((username, mute) => dispatch(userMute({ username, mute })))
})

const DispatchProvider = connect(null, mapDispatchToProps)(WithRender)

const UserController = ({ children, username }) => (
	<DispatchProvider>
		{({ dispatchColor, dispatchMute }) => children({
			handleColor: dispatchColor(username),
			handleMute: dispatchMute(username)
		})}
	</DispatchProvider>
)

UserController.propTypes = {
	children: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

export default UserController
