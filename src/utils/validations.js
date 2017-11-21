/* eslint-disable import/prefer-default-export */
export const username = (_username = '') => {
	let error = ''

	if (!/^\w+$/.test(_username)) {
		error += 'name cannot contain space or special characters'
	}

	return error
}
