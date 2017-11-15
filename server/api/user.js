import express from 'express'
import db from '../../db'

const router = express.Router()
const User = db.model('user')

router.param('id', (req, res, next, id) => {
	User.findById(id)
		.then((user) => {
			if (!user) { return res.sendStatus(404) }

			req.targetUser = user
			next()
			return null
		})
		.catch(next)
})

router.route('/')
	.get((req, res, next) => {
		User.findAll()
			.then(users => res.json(users))
			.catch(next)
	})

export default router
