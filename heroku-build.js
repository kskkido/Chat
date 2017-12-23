const proc = require('child_process')
const { pkg } = require('./')

if ('HEROKU' in process.env || ('DYNO' in process.env && process.env.HOME === '/app')) {
	const deps = pkg.devDependencies
	let packages = ''

	Object.keys(deps).forEach((key) => {
		packages += `${key}@${deps[key]} ` // note space at end to separate entries
	})

	try {
		console.time('install')
		console.log('starting npm install of dev dependencies')
		proc.execSync(`yarn add ${packages}`)
		console.timeEnd('install')

		console.time('build')
		console.log('starting npm build')
		proc.execSync('npm run build-prod')
		console.timeEnd('build')

		console.time('uninstall')
		console.log('starting npm uninstall of dev dependencies')
		proc.execSync(`npm uninstall ${packages}`)
		console.timeEnd('uninstall')
	} catch (err) {
		console.error(err.message)
	}
} else {
	console.log('Not Heroku, skipping postinstall build')
}
