'use client'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '@/app/theme'
// import { theme, colorSchemeManager } from '@/theme'
import { LightDarkModeSwitch } from '@/app/components/global/LightDarkModeSwitch'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<head>
				<ColorSchemeScript defaultColorScheme='auto' />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
			</head>
			<body>
				{/* <MantineProvider colorSchemeManager={colorSchemeManager} defaultColorScheme='auto'> */}
				<MantineProvider theme={theme} defaultColorScheme='auto'>
					<LightDarkModeSwitch />
					{children}
				</MantineProvider>
			</body>
		</>
	)
}
