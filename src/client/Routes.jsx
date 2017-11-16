import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Main from './components/Main'

const Routes = () => (
	<App>
		<Route exact path="/" component={Main} />
	</App>
)

export default Routes
