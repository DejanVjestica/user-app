export type UserType = {
	name: string
	age: string
}

export type ErrorState = {
	text?: string
	isNotValid: boolean
}

export type ErrorMessages = {
	name: string
	ageMissing: string
	ageIsMinus: string
	both: string
}
