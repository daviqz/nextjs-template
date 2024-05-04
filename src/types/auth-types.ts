export type RegisterFormType = { username: string; email: string; password: string; confirmPassword: string }
export type LoginFormType = { email: string; password: string }
export type AuthType = {
	account: AuthAccountType
	token: string
}

type AuthAccountType = {
	username: string
	email: string
}
