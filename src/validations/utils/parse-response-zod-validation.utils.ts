import { translateValidationMessage } from './translation-zod-validation.utils'
import { ZodTypeAny } from 'zod'
// type RegisterValidationFormType = z.infer<typeof RegisterForm>

const parseZodResponse = <T>(zodObject: ZodTypeAny, formObject: T): Record<string, string> | null => {
	const result = zodObject.safeParse(formObject)
	let errors = null
	if (!result.success) {
		errors = result.error.errors.reduce((acc, err) => {
			const field = err.path.join('.')
			const message = translateValidationMessage(err)
			return { ...acc, [field]: message }
		}, {})
	}
	return errors
}

export { parseZodResponse }
