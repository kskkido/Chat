/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { unsubscribeChannels } from 'Utils/faye'

class Subscribe extends Component { // subscribe, get message
	static propTypes = {
		children: PropTypes.func.isRequired,
		subscribeChannel: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)

		this.subscriptionManager = {}
	}

	componentWillUnmount() {
		unsubscribeChannels(this.unsubscribe, this.subscriptionManager)
	}

	subscribe = (channel, streamHandlerFn) => {
		const channel$ = this.props.subscribeChannel(channel)
		const subscription = streamHandlerFn(channel$)

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
