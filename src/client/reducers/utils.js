const reducerCreator = (initialState, handlers) => (state = initialState, action) =>
	action.type in handlers ?
		handlers[action.type](state, action) :
		state

export default reducerCreator
