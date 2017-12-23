import React from 'react'
import PropTypes from 'prop-types'
import { userConnect } from 'Actions/users'
import { messageCreate } from 'Actions/messages'
import WithRedux from 'Components/WithRedux'
import Subscribe from 'Components/Subscribe'

const DispatchProvider = WithRedux(null, dispatch => ({
	dispatchMessage: message => dispatch(messageCreate({ message })),
	dispatchUserConnect: username => dispatch(userConnect({ username })),
}))

const ChatSubscribe = ({ children, subscribe }) => (
	<DispatchProvider>
		{({ dispatchMessage, dispatchUserConnect }) => (
			<Subscribe
				tasks={{
					'/message': (_, message) => dispatchMessage(message),
					'/user/connect': (_, message) => dispatchUserConnect(message)
				}}
				subscribe={subscribe}
			>
				{children}
			</Subscribe>
		)}
	</DispatchProvider>
)

ChatSubscribe.propTypes = {
	children: PropTypes.node.isRequired,
	subscribe: PropTypes.func.isRequired,
}

export default ChatSubscribe
