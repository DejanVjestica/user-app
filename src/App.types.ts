export type UserType = {
	name: string
	age: string
}

export type ModalState = {
	text?: string
	isValid: boolean
}

export type ErrorMessages = {
	name: string
	ageMissing: string
	ageIsMinus: string
	both: string
}
