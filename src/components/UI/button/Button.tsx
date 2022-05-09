import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset'
	children: React.ReactNode
	onClick?: () => void
}

export const Button = ({
	type = 'button',
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			type={type}
			className={styles.button}
			onClick={props.onClick}>
			{props.children}
		</button>
	)
}
