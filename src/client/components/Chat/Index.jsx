import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userConnect } from 'Reducers/users'
import { messageCreateWithUser } from 'Reducers/messages'
import WithRender from 'Components/WithRender'
import Subscribe from 'Components/Subscribe'
import ChatController from './Controller'

const DispatchProvider = connect(null, dispatch => ({
	dispatchMessage: message => dispatch(messageCreateWithUser(message)),
	dispatchUserConnect: username => dispatch(userConnect(username)),
}))(WithRender)

const Chat = ({ publish, self, subscribe }) => (
	<DispatchProvider>
		{({ dispatchMessage, dispatchUserConnect }) => (
			<Subscribe
				tasks={{
					'/message': (_, message) => dispatchMessage(message),
					'/user/connect': (_, message) => dispatchUserConnect(message)
				}}
				subscribe={subscribe}
			>
				<ChatController
					publish={publish}
					self={self}
				/>
			</Subscribe>
		)}
	</DispatchProvider>
)

Chat.propTypes = {
	publish: PropTypes.func.isRequired,
	subscribe: PropTypes.func.isRequired,
	self: PropTypes.string,
}

Chat.defaultProps = {
	self: ''
}

export default Chat
