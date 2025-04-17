'use client';

import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useTheme } from '@/contexts/ThemeContext';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { theme, isRTL } = useTheme();

  // Update the document class on theme or RTL change
  useEffect(() => {
    const root = document.documentElement;
    
    // Handle dark mode
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Handle RTL mode
    if (isRTL) {
      root.dir = 'rtl';
      root.lang = 'fa';
    } else {
      root.dir = 'ltr';
      root.lang = 'en';
    }
  }, [theme, isRTL]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout; 