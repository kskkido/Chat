/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createChannel, unsubscribeChannels } from 'Utils/faye'

class FayeProvider extends Component {
	static propTypes = {
		children: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)

		this.client = new Faye.Client(`${window.location.href}faye`)
		this.channelManager = {}
	}

	componentWillUnmount() {
		unsubscribeChannels(this.deleteChannel, this.channelManager)

		this.client.publish('/meta/disconnect')
	}

	getChannel = (channel) => {
		let channel$ = this.channelManager[channel]

		if (!channel$) {
			this.channelManager[channel] = createChannel(this.client, channel)
			channel$ = this.channelManager[channel]
		}

		return channel$
	}

	deleteChannel = (channel) => {
		delete this.channelManager[channel]
	}

	subscribe = (channel, streamHandlerFn) => {
		const channel$ = this.getChannel(channel)
		const subscription = streamHandlerFn(channel$)

		return subscription
	}

	publish = (channel, message) => this.client.publish(channel, message)

	render() {
		return this.props.children({
			subscribe: this.subscribe,
			publish: this.publish
		})
	}
}

export default FayeProvider
