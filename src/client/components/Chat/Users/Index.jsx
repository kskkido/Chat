import React from 'react'
import { ChatUsersContainer } from 'Components/Styles'
import WithRedux from 'Components/WithRedux'
import Item from './Item'

const UsersProvider = WithRedux(({ users }) => ({ users: users.allIds }))

const UserList = () => (
	<UsersProvider>
		{({ users }) => (
			<ChatUsersContainer>
				{users.map(username => (
					<Item
						key={username}
						username={username}
					/>))
				}
			</ChatUsersContainer>
		)}
	</UsersProvider>
)

export default UserList
