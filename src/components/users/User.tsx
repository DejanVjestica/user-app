import React from 'react'
import { UserType } from '../../App.types'

type UserProps = {
	user: UserType
}

export const User = (props: UserProps): JSX.Element => {
	return (
		<ul>
			<p>
				{props.user.name} ({props.user.age} years old)
			</p>
		</ul>
	)
}
