'use client'
import { SystemToast } from '@/components/global/Toast'
import { fetchDataNoToast } from '@/service/service.config'

export const fetchData = async (url, body) => {
	const response = await fetchDataNoToast(url, body)

	if (response?.toast) {
		SystemToast(response.toast.message, response.toast.type)
	}

	return response
}
