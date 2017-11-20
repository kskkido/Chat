/* eslint-disable no-unused-expressions */
import React from 'react'
import { injectGlobal } from 'styled-components'
import { Global } from './components/Styles'
import Auth from './components/Auth'
import Chat from './components/Chat'
import Faye from './components/Faye'
import Register from './components/Register'

injectGlobal`${Global}`

const App = () => (
	<Auth>
		{ ({ username, error, authRequest }) =>
			username === null ?
				<Register
					error={error}
					authRequest={authRequest}
				/> :
				<Faye>
					{({ publish, subscribe }) => (
						<Chat
							publish={publish}
							self={username}
							subscribe={subscribe}
						/>
					)}
				</Faye>
		}
	</Auth>
)

export default App
