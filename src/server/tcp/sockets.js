import { cleanInput, messageToTerminal, messageFromSelf } from 'Utils/tcp'
import handleHandshake from './handshake'
import createClient from './faye'

const sockets = new Set()

const createHandlers = (client, username) => {
	let subscription

	return {
		onData: (socket, data) => {
			const cleanData = cleanInput(data)

			if (cleanData === '@quit') {
				socket.end('bye\n')
			} else {
				client.publish('/message', {
					username,
					content: cleanData,
					timestamp: (new Date()).valueOf()
				})
			}
		},

		onConnect: (socket) => {
			sockets.add(socket)

			client.publish('/user/connect', { username })

			subscription = client.subscribe(
				'/message',
				(_, _message) => {
					const isSelf = _message.username === username
					const message = isSelf ? messageFromSelf(_message) : _message

					socket.write(messageToTerminal(message))
				}
			)
		},

		onDisconnect: (socket) => {
			if (subscription) {
				subscription.unsubscribe(true)
			}
			sockets.delete(socket)
		}
	}
}

export default (socket, username) => {
	const client = createClient()
	const { onConnect, onDisconnect, onData } = createHandlers(client, username)

	socket.write(`Hi, ${username}! Get yappin\n`, () => onConnect(socket))
	socket.on('data', data => onData(socket, data))
	socket.on('end', () => onDisconnect(socket))
}
