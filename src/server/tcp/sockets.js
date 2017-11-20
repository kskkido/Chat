import { cleanInput, messageToTerminal, messageFromSelf } from 'Utils/tcp'
import handleHandshake from './handshake'
import createClientHandlers from './faye'

const sockets = new Set()

const createHandlers = client => ({
	onData: (socket, data) => {
		const cleanData = cleanInput(data)

		if (cleanData === '@quit') {
			socket.end('bye\n')
		} else {
			client.publish('/message', {
				content: cleanData,
				timestamp: (new Date()).valueOf()
			})
		}
	},

	onConnect: (socket) => {
		sockets.add(socket)

		client.publish('/user/connect')

		client.subscribe(
			'/message',
			(_message) => {
				const isSelf = _message.username === client.username
				const message = isSelf ? messageFromSelf(_message) : _message

				socket.write(messageToTerminal(message))
			}
		)
	},

	onDisconnect: (socket) => {
		client.unsubscribeAll()
		sockets.delete(socket)
	}
})

export default handleHandshake((socket, baeClient, username) => {
	const client = createClientHandlers(baeClient, username)
	const { onConnect, onDisconnect, onData } = createHandlers(client)

	socket.write(`Hi, ${username}! Get yappin\n`, () => onConnect(socket))
	socket.on('data', data => onData(socket, data))
	socket.on('end', () => onDisconnect(socket))
})
