'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  isRTL: boolean;
  toggleTheme: () => void;
  toggleDirection: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');
  const [isRTL, setIsRTL] = useState(true); // Default to RTL for Persian

  // Initialize theme from localStorage (if available)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    const storedDirection = localStorage.getItem('direction') === 'ltr' ? false : true;
    
    setTheme(storedTheme);
    setIsRTL(storedDirection);
    
    // Apply theme and direction to document
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    document.documentElement.dir = storedDirection ? 'rtl' : 'ltr';
    document.documentElement.lang = storedDirection ? 'fa' : 'en';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
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
    <ThemeContext.Provider value={{ theme, isRTL, toggleTheme, toggleDirection }}>
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