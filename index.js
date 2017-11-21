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
	get fayeUrl() {
		return `${module.exports.baseUrl}/faye`
	},
	get root() { return process.cwd() },
	get name() { return pkg.name },
	get port() { return env.PORT || 1337 },
	get tPort() { return module.exports.port !== 8000 ? 8000 : 8888 },
	package: pkg,
	env,
}
