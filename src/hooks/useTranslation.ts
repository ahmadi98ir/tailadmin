'use client';

import { useTranslation as useTranslationOriginal } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

export function useTranslation() {
  const { t, i18n } = useTranslationOriginal();
  const { isRTL } = useTheme();
  
  const changeLanguage = (language: string) => {
    return i18n.changeLanguage(language);
  };
  
  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage: i18n.language,
    isRTL
  };
} 