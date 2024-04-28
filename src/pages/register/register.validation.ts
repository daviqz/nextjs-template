import { RegisterFormType } from '@/types/auth-types'
import { z } from 'zod'

const RegisterForm = z
	.object({
		username: z.string().min(3).max(20),
		email: z.string().email().max(20),
		password: z.string().min(8).max(20),
		confirmPassword: z.string().min(8).max(20)
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas digitadas são diferentes',
		path: ['confirmPassword']
	})
// type RegisterValidationFormType = z.infer<typeof RegisterForm>

//{ success: false; error: ZodError }
const validateRegister = (registerForm: RegisterFormType) => {
	const result = RegisterForm.safeParse(registerForm)
	if (!result.success) {
		return result.error.errors
	}
	return null
}

export { validateRegister }
