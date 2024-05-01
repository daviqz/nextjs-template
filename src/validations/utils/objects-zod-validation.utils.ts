import { z } from 'zod'

const RegisterFormZod = z
	.object({
		username: z.string().min(3).max(20),
		email: z.string().email().min(5).max(40),
		password: z.string().min(8).max(20),
		confirmPassword: z.string().min(8).max(20)
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword']
	})

const LoginFormZod = z.object({
	email: z.string().email().min(5).max(40),
	password: z.string().min(8).max(20)
})

export { RegisterFormZod, LoginFormZod }
