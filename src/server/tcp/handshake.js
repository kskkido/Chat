import { curry } from 'ramda'
import { baseUrl } from 'Root'
import { cleanInput } from 'Utils/tcp'
import { username as validation } from 'Utils/validations'

const handleInput = socket => new Promise((res, rej) => {
	socket.on('data', function handleResponse(data) {
		const username = cleanInput(data)
		const error = validation(username)

		socket.removeListener('data', handleResponse)

		return error ? rej(error) : res(username)
	})
})

/* hacky... will be called before require(./sockets).default is called */
const handleHandshake = nextFn => curry((bae, socket, _error = '') => {
	socket.write(_error ?
		`Failed: ${_error}\nTry again!\n` :
		'Welcome to the chat! Give yourself a username!\n')

	handleInput(socket).then(
		username => nextFn(socket, bae.getClient(`${baseUrl}/faye`), username),
		error => handleHandshake(nextFn)(bae, socket, error)
	)
})

export default handleHandshake
