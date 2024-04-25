// import { Button } from "@/components/ui/button";
import Link from 'next/link'

const Home = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h2 className='mb-3 text-2xl font-semibold'>
				<Link href='/login'>{/* <Button>Navegar para outra página</Button> */}</Link>
			</h2>
		</main>
	)
}

export default Home
