import { useState, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { createTheme, MantineProvider } from '@mantine/core'
import { LightDarkModeSwitch } from '@/components/global/LightDarkModeSwitch/LightDarkModeSwitch'

import '@/styles/globals.css'
import '@mantine/core/styles.css'

const theme = createTheme({
	fontFamily: 'Open Sans, sans-serif',
	colors: {
		dark: ['#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66', '#34354a', '#2b2c3d', '#1d1e30', '#0c0d21', '#01010a'],
		light: ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529', '#121417']
	}
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)
	const [themeType, setThemeType] = useState<'light' | 'dark'>('light')

	return (
		<>
			<MantineProvider theme={theme} defaultColorScheme='light' forceColorScheme={themeType}>
				<LightDarkModeSwitch onChange={setThemeType} value={themeType} />
				{getLayout(<Component {...pageProps} />)}
			</MantineProvider>
		</>
	)
}
