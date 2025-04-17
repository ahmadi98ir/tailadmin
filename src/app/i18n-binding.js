'use client';

// این فایل اطمینان می‌دهد که کل اپلیکیشن به i18n دسترسی دارد
import { useEffect } from 'react';
import i18n from '../utils/i18n';

export default function I18nBinding() {
  useEffect(() => {
    // اطمینان از اینکه i18n در سمت کلاینت به درستی اجرا می‌شود
    if (!i18n.isInitialized) {
      console.warn('i18n has not been initialized properly');
    }
  }, []);

  return null;
} 