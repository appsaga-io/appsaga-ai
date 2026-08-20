import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwt } from '@/lib/auth';

export const runtime = 'nodejs';

export function middleware(request: NextRequest) {
    // Only protect /appsaga-admin routes
    if (request.nextUrl.pathname.startsWith('/appsaga-admin')) {

        // Exception: Allow access to login page
        if (request.nextUrl.pathname === '/appsaga-admin/login') {
            return NextResponse.next();
        }

        // Check for admin_auth cookie and verify the JWT
        const authCookie = request.cookies.get('admin_auth');

        if (!authCookie || !authCookie.value) {
            const loginUrl = new URL('/appsaga-admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }

        // Verify the JWT token
        const payload = verifyJwt(authCookie.value);
        if (!payload) {
            const loginUrl = new URL('/appsaga-admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/appsaga-admin/:path*'],
};
