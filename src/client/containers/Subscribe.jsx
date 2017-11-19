/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Subscribe extends Component { // subscribe, get message
	static propTypes = {
		children: PropTypes.func.isRequired,
		createChannel: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)

		this.subscriptionManager = {}
	}

	componentWillUnmount() {
		/* close subscriptionManager */
		Reflect.ownKeys(this.subscriptionManager).forEach(this.unsubscribe)
	}

	subscribe = (channel, streamHandlerFn) => {
		const channelMulticast = this.props.createChannel(channel)
		const subscription = streamHandlerFn(channelMulticast)
		this.subscriptionManager[channel] = subscription
	}

	unsubscribe = (channel) => {
		this.subscriptionManager[channel].unsubscribe()
	}

	render() {
		return this.props.children({
			subscribe: this.subscribe,
			unsubscribe: this.unsubscribe
		})
	}
}

export default Subscribe
