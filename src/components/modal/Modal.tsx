import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.scss'

import { Button } from '../UI/button/Button'
import { ErrorState } from '../../App.types'

type ModalProps = {
	text: string
	toogleModal: (data: ErrorState) => void
}

export const Modal = (props: ModalProps): JSX.Element | null => {
	const ErrorModal = (props: ModalProps): JSX.Element => {
		return (
			<aside className={styles.modal}>
				<div className={styles.modal__content}>
					<p>{props.text}</p>
					<Button onClick={onClickHandler}>
						Close
					</Button>
				</div>
			</aside>
		)
	}

	const onClickHandler = (): void => {
		props.toogleModal({
			text: '',
			isNotValid: false
		})
	}

	return ReactDOM.createPortal(
		<ErrorModal
			text={props.text}
			toogleModal={props.toogleModal}></ErrorModal>,
		document.getElementById('error-modal-root') as HTMLElement
	)
}
