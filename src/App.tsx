/* eslint-disable multiline-ternary */
import React, { useState } from 'react'

import styles from './App.module.scss'
import { UserType, ModalState, ErrorMessages } from './App.types'

import { Form } from './components/form/Form'
import { UserList } from './components/users/userList'
import { Modal } from './components/modal/Modal'

export const App = (): JSX.Element => {
	const [users, setUsers] = useState<UserType[]>([])
	const [modal, setModal] = useState<ModalState>({
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

	const toogleModal = (data: ModalState): void => {
		setModal({
			text: data.text,
			isNotValid: data.isNotValid
		})
	}

	return (
		<div className={styles.main}>
			{!modal.isNotValid ? (
				<>
					<Form
						errorMessages={errorMessages}
						onNewUserSave={onAddNewUser}
						toogleModal={toogleModal}
					/>
					<UserList users={users}></UserList>
				</>
			) : (
				<Modal
					toogle={modal.isNotValid}
					text={modal.text as string}
					toogleModal={toogleModal}></Modal>
			)}
		</div>
	)
}
