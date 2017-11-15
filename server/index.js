import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import { env, port, root } from '../'
import db from '../db'
import hmr from './hmr'
import api from './api'

const PUBLIC_PATH = path.join(root, 'dist/public')
const app = express()

export default app
	.use(env.NODE_ENV === 'development' ? hmr : (req, res, next) => next())

	.use(morgan('dev'))

	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())

	.use(express.static(PUBLIC_PATH))
	.use('/api', api)

	.get('*', (req, res) => {
		res.sendFile(`${PUBLIC_PATH}/index.html`)
	})

	.use((err, req, res) => {
		console.error(err)
		res.status(err.status || 500).send(err.message || 'Internal server error')
	})

if (module === require.main) {
	db.syncAndLaunch(() => {
		console.log('successfully synced database')
		const server = app.listen(
			port,
			() => {
				console.log('connected')
				const { address } = server.address()
				const host = address === '::' ? 'localhost' : address
				const urlSafeHost = host.includes(':') ? `[${host}]` : host
				console.log(`Listening on http://${urlSafeHost}:${port}`)
			}
		)
	})
}
