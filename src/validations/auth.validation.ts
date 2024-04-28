import { LoginFormType, RegisterFormType } from '@/types/auth-types'
import { LoginFormZod, RegisterFormZod } from './utils/objects-zod-validation.utils'
import { parseZodResponse } from './utils/parse-response-zod-validation.utils'

const validateLoginForm = (loginForm: LoginFormType) => {
	return parseZodResponse(LoginFormZod, loginForm)
}

const validateRegisterForm = (registerForm: RegisterFormType) => {
	return parseZodResponse(RegisterFormZod, registerForm)
}

export { validateRegisterForm, validateLoginForm }
