import { translateValidationMessage } from './translation-zod-validation.utils'
import { ZodTypeAny } from 'zod'
// type RegisterValidationFormType = z.infer<typeof RegisterForm>

const parseZodResponse = <T>(zodObject: ZodTypeAny, formObject: T) => {
	const result = zodObject.safeParse(formObject)
	let errors = new Map<string, string>()
	if (!result.success) {
		errors = new Map(
			result.error.errors.map((err) => {
				const field = err.path.join('.')
				const message = translateValidationMessage(err)
				return [field, message]
			})
		)
	}
	return errors
}

export { parseZodResponse }
