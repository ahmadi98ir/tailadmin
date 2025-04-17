'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Direction = 'ltr' | 'rtl';

type ThemeContextType = {
  theme: Theme;
  isRTL: boolean;
  isSystemTheme: boolean;
  toggleTheme: () => void;
  toggleDirection: () => void;
  setTheme: (theme: Theme) => void;
  setSystemTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isRTL, setIsRTL] = useState(true);
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const storedDirection = localStorage.getItem('direction') === 'ltr' ? false : true;
    const storedIsSystemTheme = localStorage.getItem('isSystemTheme') === 'true';
    
    setIsSystemTheme(storedIsSystemTheme);
    
    if (!storedTheme || storedIsSystemTheme) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    } else {
      setTheme(storedTheme);
    }
    
    setIsRTL(storedDirection);
    
    // Apply theme and direction to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = storedDirection ? 'rtl' : 'ltr';
    document.documentElement.lang = storedDirection ? 'fa' : 'en';

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (isSystemTheme) {
        setTheme(e.matches ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, isSystemTheme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsSystemTheme(false);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('isSystemTheme', 'false');
  };

  const toggleDirection = () => {
    const newDirection = !isRTL;
    setIsRTL(newDirection);
    document.documentElement.dir = newDirection ? 'rtl' : 'ltr';
    document.documentElement.lang = newDirection ? 'fa' : 'en';
    localStorage.setItem('direction', newDirection ? 'rtl' : 'ltr');
  };

  const setSystemTheme = () => {
    setIsSystemTheme(true);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', systemPrefersDark);
    localStorage.setItem('isSystemTheme', 'true');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      isRTL, 
      isSystemTheme,
      toggleTheme, 
      toggleDirection, 
      setTheme,
      setSystemTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 