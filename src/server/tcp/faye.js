import { curry, mapObjIndexed } from 'ramda'
import { createChannel, unsubscribeChannels } from 'Utils/faye'
import { messageToBrowser } from 'Utils/tcp'

/* store subscriptions */
const channelManager = {}
const clientManager = {}

const subscribeChannel = curry((client, channel) => {
	let channelSub = channelManager[channel]

	if (!channelSub) {
		channelSub = createChannel(client, channel)
	}

	return channelSub
})

const createMessage = curry(messageToBrowser)

/* create faye client actions to be used by tcp socket */
export default (client, username) => {
	const subsribeClientChannel = subscribeChannel(client)
	const createClientMessage = createMessage(username)
	const clientSubscriptions = {}

	return {
		username,

		publish(channel, message = {}) { client.publish(channel, createClientMessage(message)) },

		subscribe(channel, callback) {
			const channel$ = subsribeClientChannel(channel)

			clientSubscriptions[channel] = channel$.subscribe(callback)
			clientManager[username] = clientSubscriptions
		},

		unsubscribe(channel) {
			clientSubscriptions[channel].unsubscribe()
			delete clientSubscriptions[channel]
		},

		unsubscribeAll() {
			unsubscribeChannels(this.unsubscribe, clientSubscriptions)
		}
	}
}
