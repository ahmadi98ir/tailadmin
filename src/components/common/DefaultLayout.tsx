'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useTheme } from '@/contexts/ThemeContext';
import { Skeleton, SkeletonCard } from './Skeleton';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { theme, isRTL } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial mounting
  useEffect(() => {
    setIsMounted(true);
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`
      flex h-screen overflow-hidden
      layout-transition
      ${isMounted ? 'layout-enter-active' : 'layout-enter'}
    `}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {isLoading ? (
              <div className="space-y-6">
                <SkeletonCard className="h-[200px]" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonCard key={index} className="h-[160px]" />
                  ))}
                </div>
              </div>
            ) : (
              children
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout; 