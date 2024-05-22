import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import LayoutProvider from '@/app/components/global/LayoutProvider'

import '@mantine/core/styles.css'
import '@/app/globals.css'

export const metadata = {
	title: 'Next.js Template',
	description: 'This is a Next.js template!'
}

type Props = {
	children: ReactNode
	params: { locale: string }
}

export default function RootLayout({ children, params: { locale } }: Props) {
	const messages = useMessages()
	return (
		<html lang={locale}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<LayoutProvider>
					{children}
					<Toaster richColors position='bottom-right' />
				</LayoutProvider>
			</NextIntlClientProvider>
		</html>
	)
}
