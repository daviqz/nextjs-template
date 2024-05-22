import { useLocale } from 'next-intl'
import Link from 'next/link'

export default function HomePage() {
	const locale = useLocale()
	return (
		<div className='block justify-center text-center'>
			<div>Home in progress, try</div>
			<div className='mt-10'>
				<Link href={locale + '/login'}>Login</Link>
			</div>
			<div className='mt-10'>
				<Link href={locale + '/register'}>Register</Link>
			</div>
			<div className='mt-10'>
				<Link href={locale + '/overview'}>Overview (authenticated)</Link>
			</div>
		</div>
	)
}
