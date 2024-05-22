import { NextRequest, NextResponse } from 'next/server'
import { getAuthSessionAction } from './app/actions/auth'
import createIntlMiddleware from 'next-intl/middleware'
import { locales } from './config/i18n-config/i18n.config'

const publicPages = ['/login', '/register', '/']
const publicPagesCantAccessAfterLogin = ['/login', '/register', '/']

const intlMiddleware = createIntlMiddleware({
	locales,
	localePrefix: 'as-needed',
	defaultLocale: 'pt'
})

export default async function middleware(req: NextRequest) {
	const cleanPathname = req.nextUrl.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/')
	const isPublicPage = publicPages.includes(cleanPathname)
	const isPublicCanAccesAfterLogin = !publicPagesCantAccessAfterLogin.includes(cleanPathname)
	const authSession = await getAuthSessionAction()
	if (!isPublicPage && !authSession?.token && !cleanPathname.startsWith('/login')) {
		return NextResponse.redirect(new URL('/login', req.nextUrl))
	}

	if (isPublicPage && authSession?.token && !isPublicCanAccesAfterLogin) {
		return NextResponse.redirect(new URL('/overview', req.nextUrl))
	}

	return intlMiddleware(req)
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
