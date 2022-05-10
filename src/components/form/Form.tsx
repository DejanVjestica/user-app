import React, { useRef } from 'react'

import styles from './Form.module.scss'
import { UserType, ErrorState, ErrorMessages } from '../../App.types'

import { Button } from '../UI/button/Button'

type UserDataProps = {
	onNewUserSave: (user: UserType) => void
	toogleModal: (data: ErrorState) => void
	errorMessages: ErrorMessages
}

export const Form = (props: UserDataProps): JSX.Element => {
	const nameInputRef = useRef<HTMLInputElement>(null)
	const ageInputRef = useRef<HTMLInputElement>(null)

	const onSubmitHandler = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault()

		const enteredName = nameInputRef.current?.value
		const enteredAge = ageInputRef.current?.value

		const isNameEmpty = (enteredName as string).trim().length === 0
		const isAgeEmpty =
			(enteredAge as string).trim().length <= 0 ||
			parseInt((enteredAge as string).trim()) <= 0

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
				errorText = setAgeErrorText(
					enteredAge as string
				)
			}

			props.toogleModal({
				text: errorText,
				isNotValid: true
			})
		} else {
			props.onNewUserSave({
				name: enteredName as string,
				age: enteredAge as string
			})

			props.toogleModal({
				text: '',
				isNotValid: false
			})

			if (
				nameInputRef.current !== null &&
				ageInputRef.current !== null
			) {
				nameInputRef.current.value = ''
				ageInputRef.current.value = ''
			}
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
					ref={nameInputRef}></input>
			</div>
			<div className={styles.form__control}>
				<label htmlFor="age">Age</label>
				<input
					type="number"
					name="age"
					id="age"
					ref={ageInputRef}></input>
			</div>
			<Button type="submit">add new user</Button>
		</form>
	)
}
