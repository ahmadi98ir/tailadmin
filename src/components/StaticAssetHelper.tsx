'use client';

import { useEffect, useState } from 'react';

// این کامپوننت مسیرهای فایل‌های استاتیک را از طریق API ما پردازش می‌کند
export function useStaticAsset(relativePath: string): string {
  const [assetUrl, setAssetUrl] = useState<string>('');
  
  useEffect(() => {
    // استفاده از مسیر مستقیم یا از طریق API بسته به محیط
    if (relativePath) {
      if (process.env.NODE_ENV === 'development') {
        // در محیط توسعه، مستقیماً از پوشه public استفاده می‌کنیم
        setAssetUrl(relativePath);
      } else {
        // در محیط تولید، از API استاتیک خود استفاده می‌کنیم
        // حذف / از ابتدای مسیر اگر وجود دارد
        const cleanPath = relativePath.startsWith('/') 
          ? relativePath.substring(1) 
          : relativePath;
          
        setAssetUrl(`/api/static/${cleanPath}`);
      }
    }
  }, [relativePath]);
  
  return assetUrl;
}

// کامپوننت Image با پشتیبانی از API استاتیک
interface StaticImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function StaticImage({ src, alt, width, height, className }: StaticImageProps) {
  const assetUrl = useStaticAsset(src);
  
  return (
    <img 
      src={assetUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
} 