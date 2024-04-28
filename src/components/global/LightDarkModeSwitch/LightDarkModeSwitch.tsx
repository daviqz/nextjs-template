import React, { FC } from 'react'
import { ActionIcon } from '@mantine/core'

type LightDarkModeSwitchProps = {
	value: 'light' | 'dark'
	onChange: (value: 'light' | 'dark') => void
}

const LightDarkModeSwitch: FC<LightDarkModeSwitchProps> = ({ value, onChange }) => {
	const onChangeThemeType = (value: 'light' | 'dark') => {
		onChange(value)
	}
	return (
		<ActionIcon
			variant='outline'
			color={value === 'dark' ? 'blue' : 'yellow'}
			onClick={() => onChangeThemeType(value === 'dark' ? 'light' : 'dark')}
			title='Toggle color scheme'
		>
			{value === 'dark' ? 'light' : 'dark'}
		</ActionIcon>
	)
}

export { LightDarkModeSwitch }
