import faye from 'faye'
import net from 'net'
import { compose, curry } from 'ramda'
import { baseUrl, tPort } from 'Root'

const numberIterator = {
	[Symbol.iterator]() {
		let number = 0

		return {
			next: () => {
				number += 1
				return { done: false, value: number }
			}
		}
	}
}

const next = iterator => iterator.next().value
const newClientId = id => `tcp_client_${id}`

const newSocket = curry((baeClient, idIterator, socket) => {
	const nextId = next(idIterator)
	const clientId = newClientId(nextId)

	socket.write(`receieved connection from, ${clientId}`)
	baeClient.publish('/user/connect', { username: clientId })
	
	socket.data('data', )
})

export default (HTMLServer) => {
	const bae = new faye.NodeAdapter({
		mount: '/faye',
		timeout: 45
	})
	const idIterator = numberIterator[Symbol.iterator]()
	const listener = newSocket(bae.getClient(), idIterator)
	const server = net.createServer(listener)

	bae.attach(HTMLServer)

	server.listen(tPort, () => {
		console.log('connected TCP server')
		console.log('Listening TCP connection on', tPort)
	})
}
