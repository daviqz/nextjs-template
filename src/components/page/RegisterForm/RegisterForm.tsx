'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { AtIcon, LockIcon, UserIcon } from '@/components/global/SystemIcons/SystemIcons'
import { RegisterFormType } from '@/types/auth-types'
import { validateRegisterForm } from '@/validations/auth.validation'

const DEFAULT_ERROR_FIELD_VALUE = new Map()
const DEFAULT_REGISTER_FORM = { username: '', email: '', password: '', confirmPassword: '' }

const RegisterForm = () => {
	const [registerForm, setRegisterForm] = useState<RegisterFormType>(DEFAULT_REGISTER_FORM)
	const [errorFields, setErrorFields] = useState<Map<string, string>>(DEFAULT_ERROR_FIELD_VALUE)
	const handleChangeRegisterForm = (value: string, field: string) => {
		if (field && errorFields && errorFields.has(field)) {
			const newErrorFields = new Map(errorFields)
			newErrorFields.delete(field)
			setErrorFields(newErrorFields)
		}
		setRegisterForm((prevState) => ({ ...prevState, [field]: value }))
	}

	const onSubmitRegisterForm = () => {
		const errors = validateRegisterForm(registerForm)
		if (errors) {
			setErrorFields(errors)
		} else {
			setErrorFields(DEFAULT_ERROR_FIELD_VALUE)
		}
	}

	return (
		<form className='grid h-3/4 w-1/2 grid-flow-row grid-cols-1 items-center justify-items-center gap-5 shadow-md'>
			<h1 className='text-2xl font-bold'>Cadastre sua conta</h1>
			<TextInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<UserIcon size={16} />}
				label={<span className='font-bold'>Nome</span>}
				placeholder='Nome de usuário'
				value={registerForm.username}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'username')}
				autoComplete='username'
				error={errorFields?.get('username')}
			/>
			<TextInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<AtIcon size={16} />}
				label={<span className='font-bold'>Email</span>}
				placeholder='Email'
				value={registerForm.email}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'email')}
				autoComplete='email'
				error={errorFields?.get('email')}
			/>
			<PasswordInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<LockIcon size={16} />}
				label={<span className='font-bold'>Senha</span>}
				placeholder='Senha'
				value={registerForm.password}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'password')}
				autoComplete='new-password'
				error={errorFields?.get('password')}
			/>
			<PasswordInput
				className='w-full max-w-xs'
				leftSectionPointerEvents='none'
				leftSection={<LockIcon size={16} />}
				label={<span className='font-bold'>Confirmação de senha</span>}
				placeholder='Confirmação de senha'
				value={registerForm?.confirmPassword}
				onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'confirmPassword')}
				autoComplete='new-password'
				error={errorFields?.get('confirmPassword')}
			/>
			<Button color='blue' mt='md' radius='md' onClick={onSubmitRegisterForm}>
				Cadastrar
			</Button>
			<Link href='/login' className='mt-8 flex justify-center text-center text-sm'>
				Já possui uma conta?
				<span className='ml-1 font-bold text-blue-500 hover:underline'>Voltar para o login</span>
			</Link>
		</form>
	)
}

export { RegisterForm }
