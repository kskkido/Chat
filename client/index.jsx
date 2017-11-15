/* eslint-disable import/no-extraneous-dependencies, global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app')
	)
}

render(App)

if (module.hot) {
	/* method suggested in react-hot-module docs did not work */
	module.hot.accept('./App', () => { render(require('./App').default) })
}
