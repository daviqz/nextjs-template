import LayoutProvider from '@/components/global/LayoutProvider'

import '@mantine/core/styles.css'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
	title: 'Next.js Template',
	description: 'This is a Next.js template!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<LayoutProvider>
				{children}
				<Toaster richColors position='bottom-right' />
			</LayoutProvider>
		</html>
	)
}
