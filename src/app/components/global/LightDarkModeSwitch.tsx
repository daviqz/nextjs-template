'use client'
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'

function LightDarkModeSwitch() {
	const { setColorScheme } = useMantineColorScheme()
	const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

	return (
		<div className='absolute right-5 top-2'>
			<ActionIcon
				onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
				variant='default'
				size='xl'
				aria-label='Toggle color scheme'
			>
				<IconSun stroke={1.5} />
				<IconMoon stroke={1.5} />
			</ActionIcon>
		</div>
	)
}
export { LightDarkModeSwitch }
