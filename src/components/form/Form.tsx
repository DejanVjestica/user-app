import React, { useState } from 'react'

import styles from './Form.module.scss'
import { UserType, ModalState, ErrorMessages } from '../../App.types'

import { Button } from '../UI/button/Button'

type UserDataProps = {
	onNewUserSave: (user: UserType) => void
	toogleModal: (data: ModalState) => void
	errorMessages: ErrorMessages
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

		const isNameEmpty = userData.name.trim().length === 0
		const isAgeEmpty =
			userData.age.trim().length <= 0 ||
			parseInt(userData.age.trim()) <= 0

		const setAgeErrorText = (value: string): string => {
			if (value.length <= 0) {
				return props.errorMessages.ageMissing
			} else {
				return props.errorMessages.ageIsMinus
			}
		}

		if (isNameEmpty || isAgeEmpty) {
			let errorText = ''

			errorText = props.errorMessages.both

			if (isNameEmpty && !isAgeEmpty) {
				errorText = props.errorMessages.name
			}
			if (isAgeEmpty && !isNameEmpty) {
				errorText = setAgeErrorText(userData.age)
			}

			props.toogleModal({
				text: errorText,
				isValid: true
			})
		} else {
			props.onNewUserSave(userData)

			setUserData({
				name: '',
				age: ''
			})

			props.toogleModal({
				text: '',
				isValid: false
			})
		}
	}

	return (
		<form className={styles.form} onSubmit={onSubmitHandler}>
			<div className={styles.form__control}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					onChange={nameChangeHandler}
					value={userData.name}></input>
			</div>
			<div className={styles.form__control}>
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
