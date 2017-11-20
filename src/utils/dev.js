import { identity, tap } from 'ramda'

const isProd = process.env.NODE_ENV === 'production'

export const log = isProd ? identity : tap(console.log)

export const measure = isProd ? identity :
	fn => function measureFn(...args) {
		console.time('CALLING FUNCTION', fn)
		const value = fn.apply(this, args)
		console.timeEnd()

		return value
	}
