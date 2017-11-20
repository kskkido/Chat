/* cleans up incoming socket data to useable data */
export const cleanInput = data => data.toString().replace(/(\r\n|\n|\r)/gm, '')

export const messageToBrowser = (username, messageObj) =>
	Object.assign({ username }, messageObj)

export const messageToTerminal = ({ content, username, timestamp }) => `
---------------------
time: ${new Date(timestamp).toLocaleString()}
username: ${username}
content: ${content}
---------------------
`

export const messageFromSelf = (message) => {
	const { username } = message

	return Object.assign({}, message, { username: `[ ${username} ]` })
}
