import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { identity } from 'ramda'
import ChatDisplay from './Display'

/* publish to faye on mount, and provide child with a method to publish message */
class ChatController extends Component {
	static propTypes = {
		publish: PropTypes.func.isRequired,
		self: PropTypes.string.isRequired,
	}

	componentWillReceiveProps(nextProps) {
		const { publish, self } = this.props

		if (nextProps.self && nextProps.self !== self) {
			publish('/user/connect', { username: nextProps.self })
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
		const { self } = this.props

		return <ChatDisplay onMessage={self ? this.onMessage : identity} />
	}
}

export default ChatController
