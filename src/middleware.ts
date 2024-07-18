import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';

export function middleware(request: NextRequest) {
    const cookie = request.headers.get('cookie');
    const cookies = parse(cookie || '');
    const token = cookies.token;

    if (request.nextUrl.pathname === '/admin' && token) {
        return NextResponse.redirect(new URL('/admin/news', request.url));
    }

    if (!token && request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin') {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/admin'],
};
