/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { keys } from 'ramda'
import { channelMulticastFactory } from 'Utils'

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
		keys(this.channelManager).forEach(this.unsubscribe)

		this.client.publish('/meta/disconnect')
	}

	createChannel = (channel) => {
		let multicast = this.channelManager[channel]

		if (!multicast) {
			this.channelManager[channel] = channelMulticastFactory(this.client, channel)
			multicast = this.channelManager[channel]
		}

		return multicast
	}

	unsubscribe = (channel) => {
		delete this.channelManager[channel]
	}

	render() {
		return this.props.render({
			createChannel: this.createChannel,
			client: this.client
		})
	}
}

export default FayeProvider
