import { LoginFormType, RegisterFormType } from '@/types/auth-types'
import { LoginFormZod, RegisterFormZod } from './utils/objects-zod-validation.utils'
import { parseZodResponse } from './utils/parse-response-zod-validation.utils'

const validateLoginForm = (loginForm: LoginFormType): Record<string, string> | null => {
	return parseZodResponse(LoginFormZod, loginForm)
}

const validateRegisterForm = (registerForm: RegisterFormType): Record<string, string> | null => {
	return parseZodResponse(RegisterFormZod, registerForm)
}

export { validateRegisterForm, validateLoginForm }
