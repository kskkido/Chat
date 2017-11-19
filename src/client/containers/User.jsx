import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userColor, userMute } from 'Reducers/users'

class UserController extends Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
		dispatchColor: Proptypes.func.isRequired,
		dispatchMute: PropTypes.func.isRequired
	}


}

const mapDispatchToProps = dispatch => ({
	dispatchColor: (username, color) => dispatch(userColor({ username, color })),
	dispatchMute: (username, mute) => dispatch(userMute({ username, mute }))
})

export default connect(null, mapDispatchToProps)(User)
