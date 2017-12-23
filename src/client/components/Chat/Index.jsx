import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { identity } from 'ramda'
import View from './View'
import Subscribe from './Subscribe'

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
			<Subscribe subscribe={subscribe}>
				<View onMessage={self ? this.onMessage : identity} />
			</Subscribe>
		)
	}
}

export default Chat
