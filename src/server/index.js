import path from 'path'
import morgan from 'morgan'
import express from 'express'
import bodyParser from 'body-parser'
import { env, port, root } from 'Root'
import tcp from './tcp'
import send from './send'
import hmr from './hmr'

const PUBLIC_PATH = path.join(root, 'dist/public')

const app = express()

export default app
	.use(env.NODE_ENV === 'development' ? hmr : (req, res, next) => next())

	.use(morgan('dev'))

	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())

	.use('/public', express.static(PUBLIC_PATH))

	.get('*', send)

	.use((err, req, res) => {
		console.error(err)
		res.status(err.status || 500).send(err.message || 'Internal server error')
	})

if (module === require.main) {
	const server = app.listen(port, () => {
		console.log('connected HTML server')
		const { address } = server.address()
		const host = address === '::' ? 'localhost' : address
		const urlSafeHost = host.includes(':') ? `[${host}]` : host
		console.log(`Listening HTML connection on http://${urlSafeHost}:${port}`)
	})

	tcp(server)
}
