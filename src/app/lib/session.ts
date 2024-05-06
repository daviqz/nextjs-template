import 'server-only'
import { cookies } from 'next/headers'

const createAuthSession = async (authUser: string) => {
	cookies().set('authSession', authUser, {
		httpOnly: true,
		secure: true
	})
}

const getAuthSession = () => {
	const session = cookies().get('authSession')?.value
	if (!session) {
		return null
	}

	return JSON.parse(session)
}

const updateAuthSession = async () => {
	const session = cookies().get('authSession')?.value

	if (!session) {
		return null
	}

	cookies().set('authSession', session, {
		httpOnly: true,
		secure: true
	})
}

const deleteAuthSession = async () => {
	cookies().delete('authSession')
}

export { createAuthSession, getAuthSession, updateAuthSession, deleteAuthSession }
