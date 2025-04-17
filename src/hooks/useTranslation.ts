'use client';

import { useState, useCallback } from 'react';
import { useTranslation as useTranslationOriginal } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

type TranslationKey = string;

export function useTranslation() {
  const { t: originalT, i18n } = useTranslationOriginal();
  const { isRTL } = useTheme();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const t = useCallback((key: TranslationKey): string => {
    try {
      const translation = originalT(key);
      return typeof translation === 'string' ? translation : key;
    } catch (err) {
      console.error(`Translation error for key ${key}:`, err);
      return key;
    }
  }, [originalT]);

  const changeLanguage = useCallback(async (language: string) => {
    try {
      setIsChangingLanguage(true);
      setError(null);
      await i18n.changeLanguage(language);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to change language');
      console.error('Language change error:', err);
    } finally {
      setIsChangingLanguage(false);
    }
  }, [i18n]);
  
  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage: i18n.language,
    isRTL,
    isChangingLanguage,
    error
  };
} 