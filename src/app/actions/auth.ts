'use server'
import { createAuthSession, deleteAuthSession, updateAuthSession, getAuthSession } from '@/app/lib/session'
import { AuthType } from '@/app/types/auth-types'

export async function createAuthSessionAction(authenticatedUser: AuthType): Promise<void> {
	await createAuthSession(JSON.stringify(authenticatedUser))
}

export async function deleteAuthSessionAction(): Promise<void> {
	await deleteAuthSession()
}

export async function updateAuthSessionAction(): Promise<void> {
	await updateAuthSession()
}

export async function getAuthSessionAction(): Promise<AuthType> {
	return await getAuthSession()
}
