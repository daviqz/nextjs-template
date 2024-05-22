'use client'
import { SystemToast } from '@/app/components/global/Toast'
import { fetchDataNoToast } from './service.config'
import { deleteAuthSessionAction } from '../actions/auth'

export const fetchData = async (url: string, body?: object) => {
	const response = await fetchDataNoToast(url, body)
	if (response?.toast) {
		SystemToast(response.toast.message, response.toast.type)
	}

	if (response.isExpiredToken) {
		await deleteAuthSessionAction()
	}

	return response
}
