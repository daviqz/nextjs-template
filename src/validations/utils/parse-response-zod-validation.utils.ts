import { translateValidationMessage } from './translation-zod-validation.utils'
import { ZodType } from 'zod'
// type RegisterValidationFormType = z.infer<typeof RegisterForm>

const parseZodResponse = <T>(zodObject: ZodType<T>, formObject: T): Record<keyof T, string> | null => {
	const result = zodObject.safeParse(formObject)
	let errors = null
	if (!result.success) {
		errors = result.error.errors.reduce((acc, err) => {
			const field = err.path.join('.')
			const message = translateValidationMessage(err.message)
			return { ...acc, [field]: message }
		}, {})
	}
	return errors as Record<keyof T, string> | null
}

export { parseZodResponse }
