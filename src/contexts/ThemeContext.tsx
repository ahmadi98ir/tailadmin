'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Direction = 'ltr' | 'rtl';

type ThemeContextType = {
  theme: Theme;
  isRTL: boolean;
  toggleTheme: () => void;
  toggleDirection: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isRTL, setIsRTL] = useState(true); // Default to RTL for Persian

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const storedDirection = localStorage.getItem('direction') === 'ltr' ? false : true;
    
    // If no stored theme, use system preference
    if (!storedTheme) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    } else {
      setTheme(storedTheme);
    }
    
    setIsRTL(storedDirection);
    
    // Apply theme and direction to document
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    document.documentElement.dir = storedDirection ? 'rtl' : 'ltr';
    document.documentElement.lang = storedDirection ? 'fa' : 'en';

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const toggleDirection = () => {
    const newDirection = !isRTL;
    setIsRTL(newDirection);
    document.documentElement.dir = newDirection ? 'rtl' : 'ltr';
    document.documentElement.lang = newDirection ? 'fa' : 'en';
    localStorage.setItem('direction', newDirection ? 'rtl' : 'ltr');
  };

  return (
    <ThemeContext.Provider value={{ theme, isRTL, toggleTheme, toggleDirection, setTheme }}>
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