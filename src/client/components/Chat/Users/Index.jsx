import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { values } from 'ramda'
import {
	ChatUserContainer,
	ChatUsersContainer,
} from 'Components/Styles'
import WithRender from 'Components/WithRender'
import User from './User'

const UsersProvider = connect(({ users }) => ({ users: values(users) }))(WithRender)

const UserList = () => (
	<UsersProvider>
		{({ users }) => (
			<ChatUsersContainer>
				{users.map(({ username, color, mute }) => (
					<User
						key={username}
						color={color}
						mute={mute}
						username={username}
					/>))
				}
			</ChatUsersContainer>
		)}
	</UsersProvider>
)

export default UserList
