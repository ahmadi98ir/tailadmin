/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // در زمان ساخت، حتی با وجود خطاهای ESLint اجازه ادامه دهید
    ignoreDuringBuilds: true,
  },
  typescript: {
    // در زمان ساخت، خطاهای TypeScript را نادیده بگیرید
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  trailingSlash: true, // این باعث می‌شود که URL‌ها با / پایان یابند
  images: {
    unoptimized: true, // حل مشکل بهینه‌سازی تصاویر
    domains: ['localhost'],
  },
  poweredByHeader: false,
  reactStrictMode: false,
  // حل مشکل دسترسی به فایل‌های استاتیک
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // اضافه کردن تنظیمات باز نویسی درخواست‌ها
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig; 