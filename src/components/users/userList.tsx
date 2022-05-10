import React from 'react'

import { User } from './User'
import styles from './UserList.module.scss'

import { UserType } from '../../App.types'

type UserListProps = {
	users: UserType[]
}

export const UserList = (props: UserListProps): JSX.Element => {
	return (
		<li className={styles['user-list']}>
			{props.users.map((user) => {
				return (
					<User
						key={Math.random().toString()}
						user={user}></User>
				)
			})}
		</li>
	)
}
