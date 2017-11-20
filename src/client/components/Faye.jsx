/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createChannel, unsubscribeChannels } from 'Utils/faye'

class FayeProvider extends Component {
	static propTypes = {
		render: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)

		this.client = new Faye.Client(`${window.location.href}faye`)
		this.channelManager = {}
	}

	componentWillUnmount() {
		unsubscribeChannels(this.unsubscribe, this.channelManager)

		this.client.publish('/meta/disconnect')
	}

	subscribeChannel = (channel) => {
		let channel$ = this.channelManager[channel]

		if (!channel$) {
			this.channelManager[channel] = createChannel(this.client, channel)
			channel$ = this.channelManager[channel]
		}

		return channel$
	}

	publish = (channel, message) => this.client.publish(channel, message)

	unsubscribe = (channel) => {
		delete this.channelManager[channel]
	}

	render() {
		return this.props.render({
			subscribeChannel: this.subscribeChannel,
			publish: this.publish
		})
	}
}

export default FayeProvider
