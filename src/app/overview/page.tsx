import { OverviewContent } from '@/components/page/OverviewContent/OverviewContent'
import { withAuth } from '../lib/private-route'

const OverviewPage = async () => {
	return (
		<div className='dark-blue-950 flex h-screen w-screen items-center justify-center '>
			<OverviewContent />
		</div>
	)
}

export default withAuth(OverviewPage)
