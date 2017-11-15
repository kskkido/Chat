// define constants such as env
// module.exports getters that check for environment variables
// some how make symlink work like bones
const pkg = require('./package.json')
const process = require('process')

const { env } = process

module.exports = {
	get baseUrl() {
		return env.BASE_URL || `http://localhost:${module.exports.port}`
	},
	get name() { return pkg.name },
	get port() { return env.PORT || 1337 },
	get root() { return process.cwd() },
	package: pkg,
	env,
}
