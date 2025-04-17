'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSidebar } from '@/contexts/SidebarContext';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

const Header = () => {
  const { theme, toggleTheme, isRTL, toggleDirection } = useTheme();
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

  // Helper function to ensure string type for translations
  const translate = (key: string): string => String(t(key));

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center justify-center rounded-sm bg-white p-2 text-body hover:bg-gray-200 dark:bg-boxdark dark:text-bodydark dark:hover:bg-boxdark-2"
            aria-label={translate('toggleSidebar')}
            aria-expanded="false"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Logo */}
          <Link 
            className="block flex-shrink-0 lg:hidden" 
            href="/"
            aria-label={translate('home')}
          >
            <span className="text-xl font-bold">TailAdmin</span>
          </Link>
        </div>

        <div className="hidden sm:block">
          <form action="#">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 px-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill="#637381"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill="#637381"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder={translate('search')}
                className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-12 pr-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-boxdark dark:text-white"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <li>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-sm bg-gray-100 p-2 text-body hover:bg-gray-200 dark:bg-boxdark-2 dark:text-bodydark dark:hover:bg-boxdark"
                aria-label={translate('toggleTheme')}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'dark' ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M17.8099 13.7101C17.5499 13.7701 17.2799 13.8101 16.9999 13.8101C14.1399 13.8101 11.8099 11.4801 11.8099 8.62006C11.8099 6.78006 12.7599 5.16006 14.2099 4.20006C14.4199 4.05006 14.4799 3.77006 14.3499 3.54006C14.2199 3.31006 13.9399 3.21006 13.7099 3.34006C10.5899 4.81006 8.58994 8.05006 8.58994 11.6301C8.58994 15.9201 12.0699 19.4001 16.3599 19.4001C17.9499 19.4001 19.4499 18.9701 20.7499 18.1701C20.9799 18.0401 21.0699 17.7601 20.9399 17.5301C20.8099 17.3001 20.5299 17.2101 20.2999 17.3401C19.6999 17.7101 19.0499 17.9901 18.3599 18.1701C18.1799 18.0401 17.9999 17.8901 17.8099 17.7301V13.7101Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                <span className="sr-only">
                  {translate(theme === 'dark' ? 'switchToLightMode' : 'switchToDarkMode')}
                </span>
              </button>
            </li>
            
            {/* Language Switcher */}
            <li>
              <button
                onClick={handleLanguageChange}
                disabled={isChangingLanguage}
                className={`
                  inline-flex items-center justify-center rounded-sm bg-gray-100 p-2 text-body 
                  hover:bg-gray-200 dark:bg-boxdark-2 dark:text-bodydark dark:hover:bg-boxdark
                  transition-opacity duration-200
                  ${isChangingLanguage ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                aria-label={translate('changeLanguage')}
                aria-busy={isChangingLanguage}
              >
                <span className="text-sm font-medium">
                  {isChangingLanguage ? '...' : (isRTL ? 'EN' : 'فا')}
                </span>
                <span className="sr-only">
                  {translate(isRTL ? 'switchToEnglish' : 'switchToPersian')}
                </span>
              </button>
            </li>
          </ul>

          {/* User Dropdown */}
          <div className="relative user-dropdown">
            <button
              onClick={handleToggleDropdown}
              className="flex items-center gap-2"
            >
              <span className="hidden h-10 w-10 rounded-full bg-gray-200 text-center text-base font-medium text-black ltr:mr-2 rtl:ml-2 sm:inline-flex sm:items-center sm:justify-center">
                {isRTL ? 'آ' : 'A'}
              </span>
              <span className="hidden font-medium text-black dark:text-white sm:block">
                {isRTL ? 'آرپ وب' : 'ARP Web'}
              </span>
              
              <svg
                className={`hidden fill-current sm:block ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                  fill=""
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-4 w-62.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3.5 text-sm font-medium text-black duration-300 ease-in-out hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                          fill="currentColor"
                        />
                        <path
                          d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                          fill="currentColor"
                        />
                      </svg>
                      {isRTL ? 'ویرایش پروفایل' : 'Edit profile'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3.5 text-sm font-medium text-black duration-300 ease-in-out hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1875 0.625H2.81247C1.57812 0.625 0.624969 1.60937 0.624969 2.79687V17.2031C0.624969 18.4219 1.60937 19.375 2.81247 19.375H17.2187C18.4375 19.375 19.4219 18.3906 19.4219 17.2031V2.79687C19.375 1.60937 18.3906 0.625 17.1875 0.625ZM17.75 17.2031C17.75 17.4844 17.5 17.7344 17.2187 17.7344H2.81247C2.53122 17.7344 2.28122 17.4844 2.28122 17.2031V2.79687C2.28122 2.51562 2.53122 2.26562 2.81247 2.26562H17.2187C17.5 2.26562 17.75 2.51562 17.75 2.79687V17.2031Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.9999 11.25C11.4374 11.25 12.4999 10.125 12.4999 8.75C12.4999 7.33594 11.4374 6.25 9.9999 6.25C8.59365 6.25 7.4999 7.33594 7.4999 8.75C7.4999 10.125 8.59365 11.25 9.9999 11.25ZM9.9999 7.85156C10.5624 7.85156 10.9374 8.22656 10.9374 8.75C10.9374 9.30469 10.5624 9.64844 9.9999 9.64844C9.43771 9.64844 9.06271 9.30469 9.06271 8.75C9.06271 8.22656 9.43771 7.85156 9.9999 7.85156Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.125 13.75H6.875C6.53125 13.75 6.25 14.0312 6.25 14.375C6.25 14.7188 6.53125 15 6.875 15H13.125C13.4688 15 13.75 14.7188 13.75 14.375C13.75 14.0312 13.4688 13.75 13.125 13.75Z"
                          fill="currentColor"
                        />
                      </svg>
                      {isRTL ? 'تنظیمات حساب' : 'Account settings'}
                    </Link>
                  </li>
                </ul>
                <button 
                  className="flex w-full items-center gap-3.5 px-6 py-4 text-sm font-medium text-black duration-300 ease-in-out hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                      fill="currentColor"
                    />
                  </svg>
                  {isRTL ? 'خروج' : 'Sign out'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 