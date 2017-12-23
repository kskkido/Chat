import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'Reducers'
import messagesMiddleware from 'Middlewares/messages'
import authMiddleware from 'Middlewares/auth'

const configureStore = () => {
	const middlewares = [
		authMiddleware,
		messagesMiddleware,
		thunkMiddleware
	]

	let applyHandler = applyMiddleware

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(createLogger({ collapsed: true }))
		applyHandler = composeWithDevTools(applyHandler)
	}

	const store = createStore(
		rootReducer,
		applyHandler(...middlewares)
	)

	return store
}

export default configureStore
