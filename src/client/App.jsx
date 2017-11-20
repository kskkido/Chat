/* eslint-disable no-unused-expressions */
import React from 'react'
import { injectGlobal } from 'styled-components'
import { Global } from './components/Styles'
import Auth from './components/Auth'
import Chat from './components/Chat'
import Faye from './components/Faye'
import Subscribe from './components/Subscribe'
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
				<Faye render={({ subscribeChannel, publish }) => (
					<Subscribe subscribeChannel={subscribeChannel}>
						{({ subscribe }) => (
							<Chat
								publish={publish}
								subscribe={subscribe}
								self={username}
							/>
						)}
					</Subscribe>
				)}
				/>
		}
	</Auth>
)

export default App
