import React from 'react'

import { User } from './User'

import { UserType } from '../../App.types'

type UserListProps = {
	users: UserType[]
}

export const UserList = (props: UserListProps): JSX.Element => {
	return (
		<li>
			{props.users.map((user) => {
				return (
					<User
						key={Math.random()}
						user={user}></User>
				)
			})}
		</li>
	)
}
