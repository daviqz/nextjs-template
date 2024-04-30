import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '@/theme'
// import { theme, colorSchemeManager } from '@/theme'
import { LightDarkModeSwitch } from '@/components/global/LightDarkModeSwitch/LightDarkModeSwitch'
import '@mantine/core/styles.css'
import './globals.css'

export const metadata = {
	title: 'Next.js Template',
	description: 'This is a Next.js template!'
}

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript defaultColorScheme='auto' />
				<link rel='shortcut icon' href='/favicon.svg' />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
			</head>
			<body>
				{/* <MantineProvider colorSchemeManager={colorSchemeManager} defaultColorScheme='auto'> */}
				<MantineProvider theme={theme} defaultColorScheme='auto'>
					<LightDarkModeSwitch />
					{children}
				</MantineProvider>
			</body>
		</html>
	)
}

