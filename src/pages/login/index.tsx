import React, { useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { AtIcon, LockIcon } from '@/components/global/SystemIcons/SystemIcons'
import { validateLoginForm } from '../../validations/auth.validation'
import { LoginFormType } from '@/types/auth-types'

const DEFAULT_ERROR_FIELD_VALUE = new Map()
const DEFAULT_LOGIN_FORM = { email: '', password: '' }

const LoginPage = () => {
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
		<div className='dark-blue-950 flex h-screen w-screen items-center justify-center '>
			<div className='grid h-2/3 w-1/3 grid-flow-row grid-cols-1 items-center justify-items-center gap-5 shadow-md'>
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
				<Button color='blue' mt='md' radius='md' onClick={handleSubmitLoginForm}>
					Entrar
				</Button>
				<p className='mb-5 flex justify-center text-center font-bold'>
					Não possui uma conta?
					<Link href='/register'>
						<span className='ml-1 text-blue-500 hover:underline'>Registre-se</span>
					</Link>
				</p>
			</div>
		</div>
	)
}

export default LoginPage
