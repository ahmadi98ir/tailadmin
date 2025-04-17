import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // مسیرهای فایل‌های استاتیک را بررسی می‌کند
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/images') ||
    request.nextUrl.pathname.startsWith('/sounds')
  ) {
    // اگر فایل موجود نباشد، می‌توان آن را به مسیر دیگری هدایت کرد
    // اما اینجا فقط اجازه می‌دهیم Next.js خودش مسیریابی را انجام دهد
    return NextResponse.next();
  }

  return NextResponse.next();
}

// مشخص می‌کند که این middleware برای کدام مسیرها اجرا شود
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/images/:path*',
    '/sounds/:path*',
  ],
}; 