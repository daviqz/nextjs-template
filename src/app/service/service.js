'use client'
import { SystemToast } from '@/app/components/global/Toast'
import { fetchDataNoToast } from './service.config'

export const fetchData = async (url, body) => {
	const response = await fetchDataNoToast(url, body)
	if (response?.toast) {
		SystemToast(response.toast.message, response.toast.type)
	}

	return response
}
