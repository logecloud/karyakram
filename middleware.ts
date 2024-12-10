import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  
  // Check if user is trying to access protected routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
    
    // Check for admin routes
    if (!['ADMIN', 'SUPER_ADMIN'].includes(token.role as string)) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Super admin only routes
  if (request.nextUrl.pathname.startsWith('/super-admin')) {
    if (!token || token.role !== 'SUPER_ADMIN') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/super-admin/:path*', '/dashboard/:path*']
} 