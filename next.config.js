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
  poweredByHeader: false,
  reactStrictMode: false,
};

module.exports = nextConfig; 