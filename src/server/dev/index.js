/* eslint-disable global-require */
import Express from 'express'
import { env } from 'Root'

const router = Express.Router()

export default env.NODE_ENV === 'development' ?
	router
		.use(require('./hmr').default)
		.use(require('morgan')('dev'))
		.use((req, res, next) => {
			require('source-map-support').install()
			next()
		}) :
	(req, res, next) => next()
