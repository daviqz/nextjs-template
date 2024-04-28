import { IconAt, IconLock, IconUser } from '@tabler/icons-react'
import { rem } from '@mantine/core'

type SystemIconProps = {
	width?: number
	height?: number
	size?: number
}

export const AtIcon = ({ width, height, size = 16 }: SystemIconProps) => <IconAt style={{ width: rem(width || size), height: rem(height || size) }} />
export const LockIcon = ({ width, height, size = 16 }: SystemIconProps) => (
	<IconLock style={{ width: rem(width || size), height: rem(height || size) }} />
)
export const UserIcon = ({ width, height, size = 16 }: SystemIconProps) => (
	<IconUser style={{ width: rem(width || size), height: rem(height || size) }} />
)
