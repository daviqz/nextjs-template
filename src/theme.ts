'use client'
import { createTheme } from '@mantine/core'

const theme = createTheme({
	fontFamily: 'Open Sans, sans-serif',
	autoContrast: true,
	colors: {
		dark: ['#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66', '#34354a', '#2b2c3d', '#1d1e30', '#0c0d21', '#01010a'],
		cyan: ['#e3f6f5', '#b3e6e3', '#7fd6d1', '#4db6b0', '#2a9a94', '#0f7f7a', '#0a6660', '#034b45', '#002e2d', '#001a1a']
	}
})

// In Progress
const colorSchemeManager = {
	storageKey: 'mantine-color-scheme',
	initialColorScheme: 'auto'
}

export { theme, colorSchemeManager }
