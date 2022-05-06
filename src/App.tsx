import React from 'react'
import styles from './App.module.scss'

import { Form } from './components/form/Form'

export const App = (): JSX.Element => {
	return (
		<div className={styles.main}>
			<Form></Form>
		</div>
	)
}
