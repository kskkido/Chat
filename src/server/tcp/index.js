import faye from 'faye'
import net from 'net'
import { baseUrl, tPort } from 'Root'
import createSocketEvents from './sockets'

export default (HTMLServer) => {
	const bae = new faye.NodeAdapter({
		mount: '/faye',
		timeout: 45
	})
	const newSocket = createSocketEvents(bae)
	const server = net.createServer(newSocket)

	bae.attach(HTMLServer)

	server.on('error', (err) => {
		throw (err)
	})
	server.listen(tPort, () => {
		console.log('connected TCP server')
		console.log('Listening TCP connection on', tPort)
	})
}
