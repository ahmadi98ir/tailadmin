'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeContext';
import { SidebarProvider } from './SidebarContext';

export function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </ThemeProvider>
  );
} 