import React, { useState } from 'react'

import styles from './App.module.scss'
import { UserType } from './App.types'

import { Form } from './components/form/Form'
import { UserList } from './components/users/userList'

export const App = (): JSX.Element => {
	const [users, setUsers] = useState<UserType[]>([])

	const onAddNewUser = (user: UserType): void => {
		console.log('user app.tsx', user)

		setUsers((prevState) => {
			return [...prevState, user]
		})
	}

	return (
		<div className={styles.main}>
			<Form onNewUserSave={onAddNewUser}></Form>
			<UserList users={users}></UserList>
		</div>
	)
}
