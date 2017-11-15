import Sequelize from 'sequelize'
import db from '../_db'

const { STRING, VIRTUAL } = Sequelize

const schema = {
	name: STRING,
	email: {
		type: STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	google_id: STRING,
	password_digest: STRING,
	password: VIRTUAL
}

const options = {}

const User = db.define('user', schema, options)
// define instance methods

export default User
