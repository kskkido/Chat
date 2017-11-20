/* global Faye, window */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userConnect, userDisconnect } from 'Reducers/users'
import { messageCreateWithUser } from 'Reducers/messages'
import ChatDisplay from './Display'

class Chat extends Component { // subscribe, get message
	static propTypes = {
		dispatchMessage: PropTypes.func.isRequired,
		dispatchUserConnect: PropTypes.func.isRequired,
		dispatchUserDisconnect: PropTypes.func.isRequired,
		publish: PropTypes.func.isRequired,
		self: PropTypes.string.isRequired,
		subscribe: PropTypes.func.isRequired,
	}

	componentWillMount() {
		const {
			dispatchMessage,
			dispatchUserConnect,
			dispatchUserDisconnect,
			subscribe
		} = this.props

		/* subscribe to channels, can modify streams using rxjs */
		subscribe('/message', channel => channel.subscribe(dispatchMessage))
		subscribe('/user/connect', channel => channel.subscribe(dispatchUserConnect))
		subscribe('/user/disconnect', channel => channel.subscribe(dispatchUserDisconnect))
	}

	componentDidMount() {
		this.onConnect()
	}

	componentWillUnmount() {
		this.onDisconnect()
	}

	onConnect = () => {
		const { publish, self } = this.props

		publish('/user/connect', {
			username: self
		})
	}

	onDisconnect = () => {
		const { publish, self } = this.props

		publish('/user/disconnect', {
			username: self
		})
	}

	onMessage = (content) => {
		const { publish, self } = this.props

		publish('/message', {
			content,
			username: self,
			timestamp: (new Date()).valueOf()
		})
	}

	render() {
		return <ChatDisplay onMessage={this.onMessage} />
	}
}

const mapDispatchToProps = dispatch => ({
	dispatchMessage: message => dispatch(messageCreateWithUser(message)),
	dispatchUserConnect: username => dispatch(userConnect(username)),
	dispatchUserDisconnect: username => dispatch(userDisconnect(username)),
})

export default connect(null, mapDispatchToProps)(Chat)
