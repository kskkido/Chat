import express from 'express'

const router = express.Router()

export default router
	.use((req, res, next) => {
		const err = new Error('not found')
		err.status = 404
		next(err)
	})

