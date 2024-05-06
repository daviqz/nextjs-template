import { NextRequest, NextResponse } from 'next/server'
import { getAuthSessionAction } from './app/actions/auth'

// 1. Specify protected and public routes
const publicRoutes = ['/login', '/register', '/']

export default async function middleware(req: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = req.nextUrl.pathname
	const isPublicRoute = publicRoutes.includes(path)
	const authSession = await getAuthSessionAction()

	// 3. Redirect to /login if the user is not authenticated
	if (!isPublicRoute && !authSession?.token && !path.startsWith('/login')) {
		return NextResponse.redirect(new URL('/login', req.nextUrl))
	}

	// 4. Redirect to /overview if the user is authenticated
	if (isPublicRoute && authSession?.token && !req.nextUrl.pathname.startsWith('/overview')) {
		return NextResponse.redirect(new URL('/overview', req.nextUrl))
	}

	return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
