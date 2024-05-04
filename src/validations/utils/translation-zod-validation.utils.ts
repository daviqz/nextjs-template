const translateValidationMessage = (message: string) => {
	if (message === 'Invalid email') return 'Email inválido'
	if (message === 'Expected string') return 'Este campo é obrigatório'
	if (message === 'Too long') return 'Conteúdo muito longo'
	if (message === 'Too short') return 'Conteúdo muito curto'
	if (message === 'Passwords do not match') return 'As senhas digitadas são diferentes'
	if (message === 'String must contain at least 8 character(s)') return 'Este campo tem que ter no mínimo 8 caracteres'
	if (message === 'String must contain at most 40 character(s)') return 'Este campo tem que ter no máximo 40 caracteres'
	return 'Campo inválido'
}

export { translateValidationMessage }
