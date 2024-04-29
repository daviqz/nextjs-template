import React, { FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { FlareIcon, MoonStartsIcon } from '../SystemIcons/SystemIcons'

type LightDarkModeSwitchProps = {
	value: 'light' | 'dark'
	onChange: (value: 'light' | 'dark') => void
}

const LightDarkModeSwitch: FC<LightDarkModeSwitchProps> = ({ value, onChange }) => {
	const onChangeThemeType = (value: 'light' | 'dark') => {
		onChange(value)
	}
	return (
		<div className='absolute right-5 top-2'>
			<ActionIcon
				variant='outline'
				color={value === 'dark' ? 'blue' : 'yellow'}
				onClick={() => onChangeThemeType(value === 'dark' ? 'light' : 'dark')}
				title={`Trocar tema para ${value === 'dark' ? 'claro' : 'escuro'}`}
			>
				{value === 'light' ? <FlareIcon size={16} /> : <MoonStartsIcon size={16} />}
			</ActionIcon>
		</div>
	)
}

export { LightDarkModeSwitch }
