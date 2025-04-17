'use client';

import { useState, useCallback } from 'react';
import { useTranslation as useTranslationOriginal } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

export function useTranslation() {
  const { t, i18n } = useTranslationOriginal();
  const { isRTL } = useTheme();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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

  const getTranslation = useCallback((key: string, options?: any) => {
    try {
      const translation = t(key, options);
      // If the translation is the same as the key, it might be missing
      if (translation === key) {
        console.warn(`Missing translation for key: ${key}`);
      }
      return translation;
    } catch (err) {
      console.error(`Translation error for key ${key}:`, err);
      return key; // Fallback to key
    }
  }, [t]);
  
  return {
    t: getTranslation,
    i18n,
    changeLanguage,
    currentLanguage: i18n.language,
    isRTL,
    isChangingLanguage,
    error
  };
} 