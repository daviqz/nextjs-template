'use client'
import { fetchData } from '@/service/service'
import { Button } from '@mantine/core'

const privateRouteTest = () => {
	fetchData('/account/protected')
		.then((response) => {
			console.log
		})
		.catch((error) => {
			console.error(error)
		})
		.finally(() => {
			console.info('finally')
		})
}

const OverviewContent = () => {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<h1 className='text-4xl font-bold'>Overview</h1>
			<Button onClick={privateRouteTest}>Chama rota privada</Button>
		</div>
	)
}
export { OverviewContent }
