FROM node:18-alpine AS base

# نصب وابستگی‌های مورد نیاز
FROM base AS deps
WORKDIR /app

# کپی فایل‌های package.json و package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# ساخت پروژه
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ایجاد فایل .env در صورت نیاز
RUN touch .env
RUN echo "PORT=3000" >> .env
RUN echo "NODE_ENV=production" >> .env
RUN echo "NEXT_PUBLIC_APP_URL=https://arp.ahmadi98.ir" >> .env
RUN echo "NEXT_PUBLIC_SITE_URL=https://arp.ahmadi98.ir" >> .env
RUN echo "NEXT_PUBLIC_API_URL=https://arp.ahmadi98.ir/api" >> .env

# اجرای دستور ساخت
RUN npm run build

# اجرای نهایی
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED 1

# کپی فایل‌های مورد نیاز برای اجرا
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# تنظیم کاربر غیر روت برای اجرا
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# تنظیم پورت و دستور اجرا
EXPOSE 3000
CMD ["node", "server.js"] 