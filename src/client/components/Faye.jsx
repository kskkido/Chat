/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventManager from 'Utils/eventManager'
import { logChannelCount } from 'Utils/dev'

class FayeProvider extends Component {
	static propTypes = {
		children: PropTypes.func.isRequired
	}

	static onChannelMessage = (eventManager, message, cache) => {
		eventManager.raise(null, message)

		cache.push(message)
		while (cache.length > 2000) {
			cache.shift()
		}
	}

	constructor(props) {
		super(props)

		this.client = new Faye.Client(`${window.location.href}faye`)
		this.cache = {}
		this.channelManager = {}
		this.fayeManager = {}
	}

	subscribe = (channel, callback, fetchHistory) => { // third parameter to
		let eventManager = this.channelManager[channel]
		let needToSubscribe = false

		if (eventManager === undefined) {
			this.channelManager[channel] = EventManager.create()
			eventManager = this.channelManager[channel]
			needToSubscribe = true
		}

		if (this.cache[channel] === undefined) {
			this.cache[channel] = []
		}

		const subscription = eventManager.subscribe(null, callback)
		const cacheMessages = this.cache[channel]

		logChannelCount(eventManager, channel)

		if (fetchHistory && cacheMessages.length > 0) {
			cacheMessages.map(callback)
		}

		if (needToSubscribe) {
			this.fayeManager[channel] = this.client.subscribe(channel, message =>
				FayeProvider.onChannelMessage(eventManager, message, cacheMessages))
		}

		return 	{
			unsubscribe: (disconnect) => {
				subscription.unsubscribe()

				logChannelCount(eventManager, channel)

				if (disconnect && eventManager.subscriberCount() === 0) {
					this.fayeManager[channel].cancel()

					delete this.fayeManager[channel]
					delete this.channelManager[channel]
				}
			}
		}
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
