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
				{users.map(({ username, mute }) => (
					<User
						key={username}
						username={username}
						mute={mute}
					/>))
				}
			</ChatUsersContainer>
		)}
	</UsersProvider>
)

export default UserList
