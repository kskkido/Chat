import express from 'express'
import user from './user'

const router = express.Router()

export default router
	.use('/user', user)
	.use((req, res, next) => {
		const err = new Error('not found')
		err.status = 404
		next(err)
	})

