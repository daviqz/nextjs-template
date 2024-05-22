'use client'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useLocale, useTranslations } from 'next-intl'
import { AtIcon, LockIcon, UserIcon } from '@/app/components/global/SystemIcons'
import { RegisterFormType } from '@/app/types/auth.types'
import { validateRegisterForm } from '@/app/validations/auth.validation'
import { fetchData } from '@/app/service/service'

const DEFAULT_ERROR_FIELD_VALUE = null
const DEFAULT_REGISTER_FORM = { username: '', email: '', password: '', confirmPassword: '' }

const RegisterForm = () => {
	const [registerForm, setRegisterForm] = useState<RegisterFormType>(DEFAULT_REGISTER_FORM)
	const [errorFields, setErrorFields] = useState<Record<string, string> | null>(DEFAULT_ERROR_FIELD_VALUE)
	const router = useRouter()
	const t = useTranslations('RegisterForm')
	const locale = useLocale()

	const handleChangeRegisterForm = (value: string, field: string) => {
		if (field && errorFields && errorFields.field) {
			const newErrorFields = { ...errorFields }
			delete newErrorFields.field
			setErrorFields(newErrorFields)
		}
		setRegisterForm((prevState) => ({ ...prevState, [field]: value }))
	}

	const handleOnSubmitRegister = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const errors = validateRegisterForm(registerForm)
		if (errors) {
			setErrorFields(errors)
		} else {
			fetchData('/auth/register', registerForm)
				.then(() => {
					router.push('/login', { scroll: false })
				})
				.catch((error) => {
					console.error(error)
				})
				.finally(() => {
					console.info('finally')
				})
		}
	}

	return (
		<form
			className='grid h-3/4 w-1/2 grid-flow-row grid-cols-1 items-center justify-items-center gap-5 shadow-md'
			onSubmit={handleOnSubmitRegister}
		>
			<h1 className='text-2xl font-bold'>{t('registerFormTitle')}</h1>
			<TextInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<UserIcon size={16} />}
				label={<span className='font-bold'>{t('name')}</span>}
				placeholder={t('name')}
				value={registerForm.username}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'username')}
				autoComplete='username'
				error={errorFields?.username}
			/>
			<TextInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<AtIcon size={16} />}
				label={<span className='font-bold'>{t('email')}</span>}
				placeholder={t('email')}
				value={registerForm.email}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'email')}
				autoComplete='email'
				error={errorFields?.email}
			/>
			<PasswordInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<LockIcon size={16} />}
				label={<span className='font-bold'>{t('password')}</span>}
				placeholder={t('password')}
				value={registerForm.password}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'password')}
				autoComplete='new-password'
				error={errorFields?.password}
			/>
			<PasswordInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<LockIcon size={16} />}
				label={<span className='font-bold'>{t('confirmPassword')}</span>}
				placeholder={t('confirmPassword')}
				value={registerForm?.confirmPassword}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'confirmPassword')}
				autoComplete='new-password'
				error={errorFields?.confirmPassword}
			/>
			<Button color='blue' mt='md' radius='md' type='submit'>
				{t('signUp')}
			</Button>
			<Link href={`/${locale}/login`} className='mt-8 flex justify-center text-center text-sm'>
				{t('alreadyHaveAccount')}
				<span className='ml-1 font-bold text-blue-500 hover:underline'>{t('goBackToLogin')}</span>
			</Link>
		</form>
	)
}

export { RegisterForm }
