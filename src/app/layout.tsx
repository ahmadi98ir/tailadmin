import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContextProviders } from "../contexts";

// Import i18n binding component
import I18nBinding from "./i18n-binding";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "آرپ وب | پنل مدیریت",
  description: "پنل مدیریت آرپ وب با استفاده از Next.js و Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nBinding />
        <ContextProviders>{children}</ContextProviders>
      </body>
    </html>
  );
}
