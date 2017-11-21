import faye from 'faye'
import net from 'net'
import { baseUrl, tPort } from 'Root'
import onHandshake from './handshake'
import createSocketEvents from './sockets'

export default (HTMLServer) => {
	const bae = new faye.NodeAdapter({
		mount: '/faye',
		timeout: 45
	})
	const onNewsocket = onHandshake(createSocketEvents, bae)
	const server = net.createServer(onNewsocket)

	bae.attach(HTMLServer)

	server.on('error', (err) => {
		throw (err)
	})
	server.listen(tPort, () => {
		console.log('connected TCP server')
		console.log('Listening TCP connection on', tPort)
	})
}
