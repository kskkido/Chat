/* eslint-disable no-unused-expressions */
import React from 'react'
import { injectGlobal } from 'styled-components'
import { Global } from './components/Styles'
import Auth from './components/Auth'
import Chat from './containers/Chat'
import Faye from './containers/Faye'
import Subscribe from './containers/Subscribe'
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
				<Faye render={({ createChannel, client }) => (

					<Subscribe createChannel={createChannel}>
						{({ subscribe }) => (
							<Chat
								client={client}
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
