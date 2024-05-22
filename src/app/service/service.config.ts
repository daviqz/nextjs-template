'use server'

import { getAuthSessionAction } from '../actions/auth'

const API_URL = process.env.NEXT_PUBLIC_API_URL

type ConfigFetchType = {
	method: string
	headers: Record<string, string>
	body?: string
}

export const fetchDataNoToast = async (url: string, body?: object) => {
	let configFetch: ConfigFetchType = {
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

	return data
}
