import React, { useState } from 'react'

import styles from './Form.module.scss'
import { UserType } from '../../App.types'

import { Button } from '../UI/button/Button'

type UserDataProps = {
	onNewUserSave: (user: UserType) => void
}

export const Form = (props: UserDataProps): JSX.Element => {
	const [userData, setUserData] = useState<UserType>({
		name: '',
		age: ''
	})

	const nameChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserData((prevState) => {
			return {
				...prevState,
				name: event.target.value
			}
		})
	}

	const ageChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUserData((prevState) => {
			return {
				...prevState,
				age: event.target.value
			}
		})
	}

	const onSubmitHandler = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault()
		props.onNewUserSave(userData)
	}

	return (
		<form className={styles.form} onSubmit={onSubmitHandler}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					onChange={nameChangeHandler}
					value={userData.name}></input>
			</div>
			<div>
				<label htmlFor="age">Age</label>
				<input
					type="number"
					name="age"
					id="age"
					onChange={ageChangeHandler}
					value={userData.age}></input>
			</div>
			<Button type="submit">add new user</Button>
		</form>
	)
}
