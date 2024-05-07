import Link from 'next/link'

export default function HomePage() {
	return (
		<div className='block justify-center text-center'>
			<div>Home in progress, try</div>
			<div className='mt-10'>
				<Link href='/login'>Login</Link>
			</div>
			<div className='mt-10'>
				<Link href='/register'>Register</Link>
			</div>
			<div className='mt-10'>
				<Link href='/overview'>Overview (authenticated)</Link>
			</div>
		</div>
	)
}
