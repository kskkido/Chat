import path from 'path'
import morgan from 'morgan'
import express from 'express'
import faye from 'faye'
import bodyParser from 'body-parser'
import { baseUrl, env, port, root } from '../../'
import ssr from './ssr'
import hmr from './hmr'

const PUBLIC_PATH = path.join(root, 'dist/public')

const bae = new faye.NodeAdapter({
	mount: '/faye',
	timeout: 45
})

const app = express()

export default app
	.use(env.NODE_ENV === 'development' ? hmr : (req, res, next) => next())

	.use(morgan('dev'))

	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())

	.use('/public', express.static(PUBLIC_PATH))

	.get('*', ssr)

	.use((err, req, res) => {
		console.error(err)
		res.status(err.status || 500).send(err.message || 'Internal server error')
	})

if (module === require.main) {
	const server = app.listen(port, () => {
		console.log('connected')
		const { address } = server.address()
		const host = address === '::' ? 'localhost' : address
		const urlSafeHost = host.includes(':') ? `[${host}]` : host
		console.log(`Listening on http://${urlSafeHost}:${port}`)
	})

	bae.attach(server)
}
