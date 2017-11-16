/* eslint-disable import/no-extraneous-dependencies, global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import store from './store'
import Routes from './Routes'

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<BrowserRouter>
					<Component />
				</BrowserRouter>
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
}

render(Routes)

if (module.hot) {
	/* method suggested in react-hot-module docs did not work */
	module.hot.accept('./Routes', () => { render(require('./Routes').default) })
}
