/* eslint-disable multiline-ternary */
import React, { useState } from 'react'

import styles from './App.module.scss'
import { UserType, ErrorState, ErrorMessages } from './App.types'

import { Form } from './components/form/Form'
import { UserList } from './components/users/userList'
import { Modal } from './components/modal/Modal'

export const App = (): JSX.Element => {
	const [users, setUsers] = useState<UserType[]>([])
	const [error, setError] = useState<ErrorState>({
		text: '',
		isNotValid: false
	})

	const errorMessages: ErrorMessages = {
		name: 'Name is required',
		ageMissing: 'Age is required',
		ageIsMinus: 'Please enter a positive number',
		both: 'Name and age are required'
	}

	const onAddNewUser = (user: UserType): void => {
		setUsers((prevState) => {
			return [...prevState, user]
		})
	}

	const toogleModal = (data: ErrorState): void => {
		setError({
			text: data.text,
			isNotValid: data.isNotValid
		})
	}

	return (
		<div className={styles.main}>
			<Form
				errorMessages={errorMessages}
				onNewUserSave={onAddNewUser}
				toogleModal={toogleModal}
			/>
			<UserList users={users}></UserList>
			{error.isNotValid && (
				<Modal
					text={error.text as string}
					toogleModal={toogleModal}></Modal>
			)}
		</div>
	)
}
