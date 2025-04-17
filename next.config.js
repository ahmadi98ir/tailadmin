/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // در زمان ساخت، حتی با وجود خطاهای ESLint اجازه ادامه دهید
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 