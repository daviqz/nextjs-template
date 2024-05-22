'use client'
import React, { FormEvent, useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { AtIcon, LockIcon } from '@/app/components/global/SystemIcons'
// import { validateLoginForm } from '@/app/validations/auth.validation'
import { LoginFormType } from '@/app/types/auth.types'
import { fetchData } from '@/app/service/service'
import { createAuthSessionAction } from '@/app/actions/auth'

const DEFAULT_ERROR_FIELD_VALUE = null
const DEFAULT_LOGIN_FORM = { email: '', password: '' }

const LoginForm = () => {
	const [loginForm, setLoginForm] = useState<LoginFormType>(DEFAULT_LOGIN_FORM)
	const [errorFields, setErrorFields] = useState<Record<string, string> | null>(DEFAULT_ERROR_FIELD_VALUE)
	const router = useRouter()
	const t = useTranslations('LoginForm')
	const locale = useLocale()

	const handleChangeLoginForm = (value: string, field: string) => {
		if (field && errorFields && errorFields.field) {
			const newErrorFields = { ...errorFields }
			delete newErrorFields.field
			setErrorFields(newErrorFields)
		}
		setLoginForm((prevState) => ({ ...prevState, [field]: value }))
	}

	const handleOnSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		// const errors = validateLoginForm(loginForm)
		const errors = false

		if (errors) {
			setErrorFields(errors)
		} else {
			fetchData('/auth/login', loginForm)
				.then(async (response) => {
					if (response.token) {
						await createAuthSessionAction(response)
						router.push('/overview')
					}
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
		<form className='grid h-3/5 w-1/3 grid-flow-row grid-cols-1 items-center justify-items-center shadow-md' onSubmit={handleOnSubmitLogin}>
			<h1 className='mb-4 text-2xl font-bold'>{t('loginFormTitle')}</h1>
			<TextInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<AtIcon size={16} />}
				label={<span className='font-bold'>{t('email')}</span>}
				placeholder={t('email')}
				value={loginForm.email}
				onChange={(event) => handleChangeLoginForm(event.currentTarget.value, 'email')}
				autoComplete='email'
				error={errorFields?.email}
			/>
			<PasswordInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<LockIcon size={16} />}
				label={<span className='font-bold'>{t('password')}</span>}
				placeholder={t('password')}
				value={loginForm.password}
				onChange={(event) => handleChangeLoginForm(event.currentTarget.value, 'password')}
				autoComplete='new-password'
				error={errorFields?.password}
			/>
			<Button color='blue' radius='md' type='submit'>
				{t('signIn')}
			</Button>
			<Link href={`/${locale}/register`} className='mt-8 flex justify-center text-center text-sm'>
				{t('dontHaveAccount')}
				<span className='ml-1 font-bold text-blue-500 hover:underline'>{t('signUp')}</span>
			</Link>
		</form>
	)
}

export { LoginForm }
