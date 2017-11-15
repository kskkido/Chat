import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import Main from './components/Main'
// import { Router, Route, Switch, Link } from 'react-router-dom'

const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<Main />
		</Provider>
	</BrowserRouter>
)

export default App
