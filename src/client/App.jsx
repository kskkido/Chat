/* eslint-disable no-unused-expressions */
import React from 'react'
import { injectGlobal } from 'styled-components'
import { Global } from './components/Styles'
import Auth from './components/Auth'
import Chat from './components/Chat'
import Faye from './components/Faye'
import Modal from './components/Modal'
import Register from './components/Register'

injectGlobal`${Global}`

const App = () => (
	<Auth>
		{ ({ username, error, authRequest }) => (
			<div>
				{username === null && (
					<Modal>
						<Register
							error={error}
							authRequest={authRequest}
						/>
					</Modal>
				)}
				<Faye>
					{({ publish, subscribe }) => (
						<Chat
							publish={publish}
							self={username}
							subscribe={subscribe}
						/>
					)}
				</Faye>
			</div>
		)}
	</Auth>
)

export default App
