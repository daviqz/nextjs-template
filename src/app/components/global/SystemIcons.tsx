import { IconAt, IconLock, IconUser, IconMoonStars, IconFlare, IconProps, Icon } from '@tabler/icons-react'
import { rem } from '@mantine/core'
import { FC, ForwardRefExoticComponent } from 'react'

type SystemIconProps = {
	width?: number
	height?: number
	size?: number
}

const generateIcon = (Icon: ForwardRefExoticComponent<Omit<IconProps, 'ref'>>, { width, height, size = 16 }: SystemIconProps) => (
	<Icon style={{ width: rem(width || size), height: rem(height || size) }} />
)

export const AtIcon = (props: SystemIconProps) => generateIcon(IconAt, props)

export const LockIcon = (props: SystemIconProps) => generateIcon(IconLock, props)

export const UserIcon = (props: SystemIconProps) => generateIcon(IconUser, props)

export const MoonStartsIcon = (props: SystemIconProps) => generateIcon(IconMoonStars, props)

export const FlareIcon = (props: SystemIconProps) => generateIcon(IconFlare, props)
