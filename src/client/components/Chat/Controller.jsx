import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatDisplay from './Display'

/* publish to faye on mount, and provide child with a method to publish message */
class ChatController extends Component {
	static propTypes = {
		publish: PropTypes.func.isRequired,
		self: PropTypes.string.isRequired,
	}

	componentWillReceiveProps({ publish, self }) {
		console.log(self, 'how')
		if (self !== null) {
			publish('/user/connect', { username: self })
		}
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

export default ChatController
