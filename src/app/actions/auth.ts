'use server'
import { createAuthSession } from '@/app/lib/session'
import { AuthType } from '@/types/auth-types'

export async function registerLoginCookie(authenticatedUser: AuthType): Promise<void> {
	await createAuthSession(JSON.stringify(authenticatedUser))
}
