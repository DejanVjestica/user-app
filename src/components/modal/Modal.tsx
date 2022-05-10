import React from 'react'

import styles from './Modal.module.scss'

import { Button } from '../UI/button/Button'
import { ModalState } from '../../App.types'

type ModalProps = {
	toogle: boolean
	text: string
	toogleModal: (data: ModalState) => void
}

export const Modal = (props: ModalProps): JSX.Element | null => {
	const onClickHandler = (): void => {
		props.toogleModal({
			text: '',
			isNotValid: false
		})
	}

	if (!props.toogle) {
		return null
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
