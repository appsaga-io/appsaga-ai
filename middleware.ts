
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Only protect /appsaga-admin routes
    if (request.nextUrl.pathname.startsWith('/appsaga-admin')) {

        // Exception: Allow access to login page
        if (request.nextUrl.pathname === '/appsaga-admin/login') {
            return NextResponse.next();
        }

        // Check for "admin_auth" cookie
        // In a real app, verify the token value (JWT etc). 
        // Here we just check presence for simplicity as requested.
        const authCookie = request.cookies.get('admin_auth');

        if (!authCookie) {
            const loginUrl = new URL('/appsaga-admin/login', request.url);
            // Optional: Redirect back after login
            // loginUrl.searchParams.set('from', request.nextUrl.pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/appsaga-admin/:path*'],
};
