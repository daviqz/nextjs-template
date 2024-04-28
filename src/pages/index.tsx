'use client'
import React, { useState } from 'react'

const Login = () => {
	const [loginForm, setLoginForm] = useState({ email: '', password: '' })

	const handleChange = (e: any, field: string) => {
		setLoginForm({ ...loginForm, [field]: e.target.value })
	}

	return (
		<div>
			<h1>Página Login</h1>
			<p>Esta é a página Login do meu aplicativo Next.js.</p>
			{/* <Button onClick={(e) => handleChange(e, 'email')}>Navegar para outra página</Button>
			<Button onClick={(e) => handleChange(e, 'password')}>Navegar para outra página</Button> */}
		</div>
	)
}

export default Login
