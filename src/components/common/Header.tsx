'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSidebar } from '@/contexts/SidebarContext';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { SunIcon, MoonIcon, ComputerIcon, TextLeftIcon, TextRightIcon } from '@/components/icons';

const Header = () => {
  const { theme, isRTL, isSystemTheme, toggleTheme, toggleDirection, setSystemTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const { t, changeLanguage, isChangingLanguage } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.user-dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = async () => {
    await changeLanguage(isRTL ? 'en' : 'fa');
    toggleDirection();
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={theme === 'dark' ? t('switchToLight') : t('switchToDark')}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          
          <button
            onClick={setSystemTheme}
            className={`p-2 rounded-lg transition-colors ${
              isSystemTheme 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label={t('useSystemTheme')}
          >
            <ComputerIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDirection}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={isRTL ? t('switchToLTR') : t('switchToRTL')}
          >
            {isRTL ? (
              <TextLeftIcon className="w-5 h-5" />
            ) : (
              <TextRightIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 