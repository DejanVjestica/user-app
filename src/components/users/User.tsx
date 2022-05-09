import React from 'react'
import { UserType } from '../../App.types'

import styles from './User.module.scss'

type UserProps = {
	user: UserType
}

export const User = (props: UserProps): JSX.Element => {
	return (
		<ul className={styles['list-item']}>
			<p>
				{props.user.name} ({props.user.age} years old)
			</p>
		</ul>
	)
}
