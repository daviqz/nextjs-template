'use client'

import React, { useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { AtIcon, LockIcon } from '@/components/global/SystemIcons/SystemIcons'
import { validateLoginForm } from '@/validations/auth.validation'
import { LoginFormType } from '@/types/auth-types'

const DEFAULT_ERROR_FIELD_VALUE = new Map()
const DEFAULT_LOGIN_FORM = { email: '', password: '' }

const LoginForm = () => {
	const [loginForm, setLoginForm] = useState<LoginFormType>(DEFAULT_LOGIN_FORM)
	const [errorFields, setErrorFields] = useState<Map<string, string>>(DEFAULT_ERROR_FIELD_VALUE)

	const handleChangeLoginForm = (value: string, field: string) => {
		if (field && errorFields && errorFields.has(field)) {
			const newErrorFields = new Map(errorFields)
			newErrorFields.delete(field)
			setErrorFields(newErrorFields)
		}
		setLoginForm((prevState) => ({ ...prevState, [field]: value }))
	}

	const handleSubmitLoginForm = () => {
		const errors = validateLoginForm(loginForm)
		if (errors) {
			setErrorFields(errors)
		} else {
			setErrorFields(DEFAULT_ERROR_FIELD_VALUE)
		}
	}

	return (
		<form className='grid h-3/5 w-1/3 grid-flow-row grid-cols-1 items-center justify-items-center shadow-md'>
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
				error={errorFields?.get('email')}
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
				error={errorFields?.get('password')}
			/>
			<Button color='blue' radius='md' onClick={handleSubmitLoginForm}>
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
