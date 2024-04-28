import React, { useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { AtIcon, LockIcon } from '@/components/global/SystemIcons/SystemIcons'

const LoginPage = () => {
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: ''
	})

	const handleChangeLoginForm = (value: string, field: string) => {
		setLoginForm({ ...loginForm, [field]: value })
	}

	return (
		<div className='dark-blue-950 flex h-screen w-screen items-center justify-center '>
			<div className='grid h-1/2 w-1/3 grid-flow-row grid-cols-1 items-center justify-items-center gap-5 shadow-md'>
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
				/>
				<Button color='blue' mt='md' radius='md'>
					Entrar
				</Button>
				<p className='flex justify-center text-center font-bold'>
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
