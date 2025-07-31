import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/auth/login',
    '/auth/register-student',
    '/auth/register-teacher',
    '/dashboard/:path*',
    '/assignments/:path*',
    '/chat/:path*',
    '/courses/:path*',
    '/enrolled/:path*',
    '/notes/:path*',
    '/resource/:path*',
    '/setting/:path*',
    '/teacher/:path*',
    '/reset-password'
  ],
};

// define public routes & protected routes
const publicRoutes = [
  '/auth/login',
  '/auth/register-student',
  '/auth/register-teacher',
];

const protectedRoutes = [
  '/dashboard',
  '/assignments',
  '/chat',
  '/courses',
  '/enrolled',
  '/notes',
  '/resource',
  '/setting',
  '/teacher',
];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('refresh_token');
  const pathname = req.nextUrl.pathname;

  // ถ้าเจอ public routes แต่ user มี token อยู่แล้ว -> redirect ไป dashboard
  if (publicRoutes.some(route => pathname === route) && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // ถ้าเจอ protected routes แต่ไม่มี token -> redirect ไป login
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}
