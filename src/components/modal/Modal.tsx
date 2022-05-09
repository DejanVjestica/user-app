import React from 'react'

import { Button } from '../UI/button/Button'
import { modalState } from '../../App.types'

type ModalProps = {
	toogle: boolean
	text: string
	toogleModal: (data: modalState) => void
}

export const Modal = (props: ModalProps): JSX.Element | null => {
	const onClickHandler = (): void => {
		props.toogleModal({
			text: '',
			isValid: false
		})
	}

	if (!props.toogle) {
		return null
	}
	return (
		<aside className="modal">
			<p>{props.text}</p>
			<Button onClick={onClickHandler}>Close</Button>
		</aside>
	)
}
