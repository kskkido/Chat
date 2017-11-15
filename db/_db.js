import Sequelize from 'sequelize'
import childProcess from 'child_process'
import app from '../'

const name = app.env.DATABASE_NAME || app.name
const url = app.env.DATABASE_URL || `postgres://localhost:5432/${name}`
const sync = app.env.NODE_ENV === 'development' ? { force: true } : {}

const db = new Sequelize(url, {
	define: {
		freezeTableName: true,
		timestamps: true,
		underscored: true
	},
	logging: false
})

// syncs database and runs callback if successful, called in ../server
db.syncAndLaunch = (callback) => {
	const attemptSync = (reattempt = false) => {
		db.sync(sync)
			.then(callback)
			.catch((err) => {
				console.error('failed to sync database')
				if (!reattempt) {
					console.log('reattempting start up')
					return new Promise((res) => {
						childProcess.exec(`createdb "${name}"`, res)
					})
						.then(() => attemptSync(true))
				}
				console.error('failed to reattempt sync', err)
				return null
			})
	}
	return attemptSync()
}

export default db
