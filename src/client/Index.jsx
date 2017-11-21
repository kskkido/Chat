/* eslint-disable global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import store from './store'
import App from './App'

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}

render(App)

if (module.hot) {
	/* method suggested in react-hot-module docs did not work */
	module.hot.accept('./App', () => { render(require('./App').default) })
}
