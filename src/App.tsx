import React, { useState } from 'react'

import styles from './App.module.scss'
import { UserType, modalState } from './App.types'

import { Form } from './components/form/Form'
import { UserList } from './components/users/userList'
import { Modal } from './components/modal/Modal'

export const App = (): JSX.Element => {
	const [users, setUsers] = useState<UserType[]>([])
	const [modal, setModal] = useState<modalState>({
		text: '',
		isValid: false
	})

	const onAddNewUser = (user: UserType): void => {
		setUsers((prevState) => {
			return [...prevState, user]
		})
	}

	const toogleModal = (data: modalState): void => {
		setModal({
			text: data.text,
			isValid: data.isValid
		})
	}

	return (
		<div className={styles.main}>
			<Form
				onNewUserSave={onAddNewUser}
				onUnvalidateinput={toogleModal}
			/>
			<UserList users={users}></UserList>
			<Modal
				toogle={modal.isValid}
				text={'not valid'}
				toogleModal={toogleModal}></Modal>
		</div>
	)
}
