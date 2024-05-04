import { GetServerSidePropsContext } from 'next'
import { redirect } from 'next/navigation'
import { getAuthSession } from './session'

export const withAuth = (getServerSidePropsFunc?: Function) => {
	return async (context: GetServerSidePropsContext) => {
		const authSession = getAuthSession()

		if (!authSession?.token) {
			redirect('/login')
		}

		if (getServerSidePropsFunc) {
			return await getServerSidePropsFunc(context)
		}

		return { props: {} }
	}
}
