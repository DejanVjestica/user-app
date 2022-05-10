import React from 'react'

import styles from './Modal.module.scss'

import { Button } from '../UI/button/Button'
import { ErrorState } from '../../App.types'

type ModalProps = {
	text: string
	toogleModal: (data: ErrorState) => void
}

export const Modal = (props: ModalProps): JSX.Element | null => {
	const onClickHandler = (): void => {
		props.toogleModal({
			text: '',
			isNotValid: false
		})
	}

	return (
		<aside className={styles.modal}>
			<div className={styles.modal__content}>
				<p>{props.text}</p>
				<Button onClick={onClickHandler}>Close</Button>
			</div>
		</aside>
	)
}
