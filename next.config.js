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
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, // حل مشکل Suspense
  },
  poweredByHeader: false,
  reactStrictMode: true,
  // برای کار کردن با assetPrefix در محیط‌های مختلف
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig; 