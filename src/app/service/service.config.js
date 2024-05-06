'use server'
import { redirect } from 'next/navigation'
import { getAuthSessionAction, deleteAuthSessionAction } from '../actions/auth'
import { revalidatePath } from 'next/cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchDataNoToast = async (url, body) => {
	let configFetch = {
		method: 'GET',
		headers: {}
	}
	if (body) {
		configFetch = {
			body: JSON.stringify(body),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	}
	const authSession = await getAuthSessionAction()
	if (authSession?.token) {
		const token = authSession.token
		configFetch.headers.Authorization = `Bearer ${token}`
	}
	const response = await fetch(`${API_URL}${url}`, configFetch)
	const data = await response.json()
	if (data.isExpiredToken) {
		await deleteAuthSessionAction()
		revalidatePath('/login')
		redirect('/login')
	}
	return data
}
