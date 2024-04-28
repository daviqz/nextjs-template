import React, { useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { AtIcon, LockIcon, UserIcon } from '@/components/global/SystemIcons/SystemIcons'
import { RegisterFormType } from '@/types/auth-types'
import { validateRegister } from './register.validation'

const RegisterPage = () => {
	const [registerForm, setRegisterForm] = useState<RegisterFormType>({ username: '', email: '', password: '', confirmPassword: '' })
	const [errorFields, setErrorFields] = useState<Record<string, string | null>>({ newPassword: null })

	const handleChangeRegisterForm = (value: string, field: string) => {
		if (['password', 'confirmPassword'].includes(field) && errorFields.newPassword) {
			setErrorFields({ ...errorFields, newPassword: null })
		}
		setRegisterForm({ ...registerForm, [field]: value })
	}

	const onSubmitRegisterForm = () => {
		const error = validateRegister(registerForm)
		console.log(error)
		// if (error) {
		// 	setErrorFields({ newPassword: error })
		// 	return
		// }
		setErrorFields({ newPassword: null })
	}

	return (
		<div className='flex h-screen w-screen items-center justify-center '>
			<div className='grid h-2/3 w-1/2 grid-flow-row grid-cols-1 items-center justify-items-center gap-5 shadow-md'>
				<h1 className='mb-4 text-2xl font-bold'>Cadastre sua conta</h1>
				<TextInput
					className='w-full max-w-xs'
					leftSectionPointerEvents='none'
					leftSection={<UserIcon size={16} />}
					label={<span className='font-bold'>Nome</span>}
					placeholder='Nome de usuário'
					value={registerForm.username}
					onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'username')}
					autoComplete='username'
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
				/>
				<PasswordInput
					className='w-full max-w-xs'
					leftSectionPointerEvents='none'
					leftSection={<LockIcon size={16} />}
					label={<span className='font-bold'>Confirmação de senha</span>}
					placeholder='Confirmação de senha'
					value={registerForm.confirmPassword}
					onChange={(event) => handleChangeRegisterForm(event.currentTarget.value, 'confirmPassword')}
					autoComplete='new-password'
					error={errorFields.newPassword}
				/>
				<Button color='blue' mt='md' radius='md' onClick={onSubmitRegisterForm}>
					Cadastrar
				</Button>
				<Link href='/login' className='mb-5 mt-8 flex justify-center text-center text-sm'>
					Já possui uma conta?
					<span className='ml-1 font-bold text-blue-500 hover:underline'>Voltar para o login</span>
				</Link>
			</div>
		</div>
	)
}

export default RegisterPage
