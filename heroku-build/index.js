const compiler = require('./compiler')
const command = require('./command')
const { pkg } = require('../')

const buildSync = compiler

const installSync = command(
	'starting install of dependencies',
	packages => `yarn add ${packages}`
)
const installDevSync = command(
	'starting install of dev dependencies',
	packages => `yarn add --dev ${packages}`
)
const uninstallSync = command(
	'starting uninstall of dependencies',
	packages => `yarn remove ${packages}`
)

if ('HEROKU' in process.env || ('DYNO' in process.env && process.env.HOME === '/app')) {
	const deps = pkg.devDependencies
	let packages = ''

	Object.keys(deps).forEach((key) => {
		packages += `${key}@${deps[key]} ` // note space at end to separate entries
	})

	try {
		uninstallSync(packages)
		installSync(packages)

		buildSync()

		uninstallSync(packages)
		installDevSync(packages)
	} catch (err) {
		console.error(err.message)
	}
} else {
	console.log('Not Heroku, skipping postinstall build')
}

// const put = (seedHash) => {
// 	const parentHash = Object.assign({}, seedHash)

// 	return (key1, key2, value) => {
// 		const childHash = parentHash[key1] || {}

// 		childHash[key2] = value
// 		parentHash[key1] = childHash
// 	}
// }

// const operate = (key, typedValue) => {
// 	const { value, type } = typedValue
// 	const procedure = get(manager, type, key)

// 	try {
// 		const operated = procedure(value)

// 		return operated
// 	} catch (error) {
// 		throw new Error(error)
// 	}
// }
