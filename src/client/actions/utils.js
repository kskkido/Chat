const noop = () => null

const actionCreator = (type, handlerFn = noop) =>
	Object.assign(
		payload => ({
			type,
			payload: handlerFn(payload)
		}),
		{ type }
	)

export default actionCreator
