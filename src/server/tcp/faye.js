import Faye from 'faye'
import { fayeUrl } from 'Root'
import EventManager from 'Utils/eventManager'
import { logChannelCount } from 'Utils/dev'

class FayeProvider {
	constructor() {
		this.client = new Faye.Client(fayeUrl)
		this.cache = {}
		this.channelManager = {}
		this.fayeManager = {}
	}

	static onChannelMessage = (eventManager, message, cache) => {
		eventManager.raise(null, message)

		cache.push(message)
		while (cache.length > 2000) {
			cache.shift()
		}
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
}

export default () => new FayeProvider()
