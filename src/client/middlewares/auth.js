import validate from 'Utils/validations'
import {
	AUTH_REQUEST,
	authFail,
	authSuccess
} from 'Actions/auth'

const authRequest = ({ dispatch }) => next =>
	(action) => {
		if (action.type === AUTH_REQUEST) {
			const { username } = action.payload
			const error = validate(username)

			if (error.length > 0) {
				return dispatch(authFail({ error }))
			}

			return dispatch(authSuccess({ username }))
		}

		return next(action)
	}

export default authRequest
