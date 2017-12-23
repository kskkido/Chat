const username = (_username = '') => {
	let error = ''

	if (!/^\w+$/.test(_username)) {
		error += 'name cannot contain space or special characters'
	}

	return error
}

export default username
