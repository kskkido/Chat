/* global Faye, window */
import EventManager from 'Utils/eventManager'
import store from './store'

// const createSomething = () => {
// 	const STATES = {
// 		DISCONNECTED: 0,
// 		CONNECTING: 1,
// 		CONNECTED: 2
// 	}

// 	let state = STATES.DISCONNECTED

// 	const maxChannelCacheSize = 2000

// 	const cache = {}
// 	const channelEventManager = {}
// 	const fayeSubscriptions = {}

// 	const onConnectEventManager = EventManager.create()
// 	const onDisconnectEventManager = EventManager.create()

// 	client.on('transport:up', () => {
// 		state = STATES.CONNECTED
// 		onConnectEventManager.raise(null)
// 	})

// 	client.on('transport:down', () => {
// 		state = STATES.DISCONNECTED
// 		onDisconnectEventManager.raise(null)
// 	})

// 	function onChannelMessage(channel, message, _cache) {
// 		channelEventManager[channel].raise(null, message)

// 		_cache.push(message)
// 		while (_cache.length > maxChannelCacheSize) {
// 			_cache.shift()
// 		}
// 	}

// 	function subscribe(channel, callback, fetchHistory) {
// 		let eventManager = channelEventManager[channel]
// 		let needToSubscribe = false

// 		if (eventManager === undefined) {
// 			channelEventManager[channel] = EventManager.create()
// 			eventManager = channelEventManager[channel]
// 			needToSubscribe = true
// 		}

// 		if (cache[channel] === undefined) {
// 			cache[channel] = []
// 		}

// 		const subscription = eventManager.subscribe(null, callback)
// 		const cacheMessages = cache[channel]

// 		if (fetchHistory) { }

// 		if (needToSubscribe) {
// 			fayeSubscriptions[channel] = client.subscribe(channel, (message) => {
// 				onChannelMessage(channel, message, cacheMessages)
// 			})
// 		}

// 		return {
// 			unsubscribe(disconnect) {
// 				subscription.unsubscribe()

// 				if (disconnect && eventManager.subscribeCount() === 0) {
// 					fayeSubscriptions[channel].cance()
// 					delete fayeSubscriptions[channel]

// 					delete channelEventManager[channel]
// 				}
// 			}
// 		}
// 	}

// 	function onConnect(callback) {
// 		const subscription = onConnectEventManager.subscribe(null, () => {

// 		})

// 		if (state === STATES.CONNECTED) {
// 			callback()
// 		}

// 		return {
// 			unsubscribe() {
// 				subscription.unsubcribe()
// 			}
// 		}
// 	}

// 	function onDisconnect(callback) {
// 		const subscription = onDisconnectEventManager.subscribe(null, () => {

// 		})

// 		if (state === STATES.DISCONNECTED) {
// 			callback()
// 		}

// 		return {
// 			unsubscribe() {
// 				subscription.unsubscribe()
// 			}
// 		}
// 	}

// 	return {
// 		onConnect,
// 		onDisconnect,
// 		subscribe,
// 		STATES,
// 		getState() {
// 			return state
// 		},
// 		publish(channel, message) {
// 			client.publish(channel, message)
// 		},
// 	}
// }

// export default client

function connectFaye () {
	const client = new Faye.Client(`${window.location.pathname}/faye`)
	
	return new Promise((res) => {
		client.on('transition:up', res(client))
	})
}

function subscribe (client, channel, dispatch) {
	
}

function publish (client, channel, message) {
	client.publish(channel, message)
}

/*
	entities:
	-	fayeSubscription: stores faye client subscriptions
	- channelSubscription: stores local event managers
	- cache: an array of messages sent within a channel

	actions:
		subscribe:
		- when faye client subscribes to a channel, it is assigned as a property of fayeSubscription
		- as a side effect a new event manager is subscribed to the channelSubscription entity
		dispatch:
		- faye client subscribes to a channell with a callback function that calls listeners in channelSubscription entity
			and cache the message to cache entity
		-
		unsubscribe:
		- unsubscribes/remove handler from the channelSubscription entity first
		- if channelSubscription length === 0 and disconnect is true, we also disconnect client from the channel

	strat:
		faye client:
		- have faye client stored in some individual file
		- will dispatch events to redux store which stores local event listeners/channelSubscription
		channelSubscription:
		- store in redux
		- actions are dispatched along side faye client actions
		emulate provided above functions
		dispatchers:
		- we create an event listener on different channel actions
		- as a callback to the listener, we assign dispatchers
		- flow: client subscribes -> dispatchers subscribe -> channel action made -> client callback called -> callback calls dispatchers through local listeners

	reducer entities:
		self:
		- userId
		user: - /user channel
		- userId
		- userName
		- color-coding
		- blocked
		message: - /message channel
		- messageId
		- userId
		- text
		messageStack: -/message channel
		- [messageId]
*/
