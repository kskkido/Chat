import { curry } from 'ramda'
import { cleanInput } from 'Utils/tcp'
import { username as validation } from 'Utils/validations'

const onInput = socket => new Promise((res, rej) => {
	socket.on('data', function response(data) {
		const username = cleanInput(data)
		const error = validation(username)

		socket.removeListener('data', response)

		return error ? rej(error) : res(username)
	})
})

/*  will be partially applied with .require('./sockets').default */
const onHandshake = curry((nextFn, socket, _error = '') => {
	socket.write(_error ?
		`Failed: ${_error}\nTry again!\n` :
		'Welcome to the chat! Give yourself a username!\n')

	onInput(socket).then(
		username => nextFn(socket, username),
		error => onHandshake(nextFn, socket, error)
	)
})

export default onHandshake
