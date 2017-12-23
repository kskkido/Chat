import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { identity } from 'ramda'
import ChatView from './View'
import ChatSubscribe from './Subscribe'

/* publish to faye on mount, and provide child with a method to publish message */
class Chat extends Component {
	static propTypes = {
		publish: PropTypes.func.isRequired,
		subscribe: PropTypes.func.isRequired,
		self: PropTypes.string,
	}

	static defaultProps = {
		self: ''
	}

	componentWillReceiveProps(nextProps) {
		const { publish, self } = this.props

		if (nextProps.self && nextProps.self !== self) {
			publish('/user/connect', nextProps.self)
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
		const { self, subscribe } = this.props

		return (
			<ChatSubscribe subscribe={subscribe}>
				<ChatView onMessage={self ? this.onMessage : identity} />
			</ChatSubscribe>
		)
	}
}

export default Chat
