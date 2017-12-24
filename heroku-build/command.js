const proc = require('child_process')

function measure(msg, fn) {
	return (...args) => {
		console.time('measure')
		console.log(msg)
		fn(...args)
		console.timeEnd('measure')
	}
}

function measureExecSync(msg) {
	return measure(msg, proc.execSync)
}

function commandExecSync(msg, convertFn) {
	const pendingExecSync = measureExecSync(msg)

	const convertpendingExecSync = (cmd) => {
		const nextCmd = convertFn(cmd)

		pendingExecSync(nextCmd)
	}

	return convertFn ? convertpendingExecSync : pendingExecSync
}

module.exports = commandExecSync
