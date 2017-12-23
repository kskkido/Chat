import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Messages from './Messages'
import Users from './Users'
import {
	ChatContainer as Container,
	ChatLeft as Left,
	ChatRight as Right,
	ChatHeader as Header,
} from 'Components/Styles'

const View = ({ onMessage }) => (
	<Container>
		<Left>
			<Header>
				<span>Users</span>
			</Header>
			<Users />
		</Left>
		<Right>
			<Header>
				<span>Messages</span>
			</Header>
			<Messages />
			<Input onMessage={onMessage} />
		</Right>
	</Container>
)

View.propTypes = {
	onMessage: PropTypes.func.isRequired,
}

export default View
