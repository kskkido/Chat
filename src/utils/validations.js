/* eslint-disable import/prefer-default-export */
export const username = (_username = '') => {
	let error = ''

	if (!/^\w+$/.test(_username)) {
		error += 'username must consist of alphabets'
	}

	return error
}
