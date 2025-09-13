import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/admin/:path*',
};

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value;

  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    return NextResponse.next();
  }

  if (!authToken || authToken !== process.env.ADMIN_PASSWORD) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
