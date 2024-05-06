'use client'
import { toast } from 'sonner'

const SystemToast = (message: string, type: string) => {
	if (type === 'success') {
		toast.success(message)
	} else if (type === 'error') {
		toast.error(message)
	} else if (type === 'warning') {
		toast.warning(message)
	} else if (type === 'info') {
		toast.info(message)
	} else {
		toast(message)
	}
	return toast
}

export { SystemToast }
