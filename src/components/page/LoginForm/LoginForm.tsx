'use client'

import React, { FormEvent, useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { AtIcon, LockIcon } from '@/components/global/SystemIcons/SystemIcons'
import { validateLoginForm } from '@/validations/auth.validation'
import { LoginFormType } from '@/types/auth-types'
import { fetchData } from '@/service/service'

const DEFAULT_ERROR_FIELD_VALUE = null
const DEFAULT_LOGIN_FORM = { email: '', password: '' }

const LoginForm = () => {
	const [loginForm, setLoginForm] = useState<LoginFormType>(DEFAULT_LOGIN_FORM)
	const [errorFields, setErrorFields] = useState<Record<string, string> | null>(DEFAULT_ERROR_FIELD_VALUE)

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
		const errors = validateLoginForm(loginForm)

		if (errors) {
			setErrorFields(errors)
		} else {
			fetchData('/auth/login', loginForm)
				.then(() => {
					console.log('TODO')
				})
				.catch((error) => {
					console.error(error)
				})
				.finally(() => {
					console.log('finally')
				})
		}
	}

	return (
		<form className='grid h-3/5 w-1/3 grid-flow-row grid-cols-1 items-center justify-items-center shadow-md' onSubmit={handleOnSubmitLogin}>
			<h1 className='mb-4 text-2xl font-bold'>Entre com a sua conta</h1>
			<TextInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<AtIcon size={16} />}
				label={<span className='font-bold'>Email</span>}
				description='Input description'
				placeholder='Email'
				value={loginForm.email}
				onChange={(event) => handleChangeLoginForm(event.currentTarget.value, 'email')}
				autoComplete='email'
				error={errorFields?.email}
			/>
			<PasswordInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<LockIcon size={16} />}
				label={<span className='font-bold'>Senha</span>}
				description='Input description'
				placeholder='Senha'
				value={loginForm.password}
				onChange={(event) => handleChangeLoginForm(event.currentTarget.value, 'password')}
				autoComplete='new-password'
				error={errorFields?.password}
			/>
			<Button color='blue' radius='md' type='submit'>
				Entrar
			</Button>
			<Link href='/register' className='mt-8 flex justify-center text-center text-sm'>
				Não possui uma conta?
				<span className='ml-1 font-bold text-blue-500 hover:underline'>Registre-se</span>
			</Link>
		</form>
	)
}

export { LoginForm }
