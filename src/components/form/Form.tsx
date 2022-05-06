import React, { useState } from 'react'
import styles from './Form.module.scss'
import { Button } from '../UI/button/Button'

type UserDataProps = {
	name: string
	age: string
}

export const Form = (): JSX.Element => {
	const [userData, setUserData] = useState<UserDataProps>({
		name: '',
		age: ''
	})

	const onSubmitHandler = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault()
	}

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
