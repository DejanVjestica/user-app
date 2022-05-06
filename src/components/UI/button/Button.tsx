import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset'
	children: React.ReactNode
}

export const Button = ({
	type = 'button',
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button type={type} className={styles.button}>
			{props.children}
		</button>
	)
}
