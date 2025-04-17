'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSidebar } from '@/contexts/SidebarContext';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

const Header = () => {
  const { theme, toggleTheme, isRTL, toggleDirection } = useTheme();
  const { toggleSidebar } = useSidebar();
  const { t, changeLanguage } = useTranslation();
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

  const handleLanguageChange = () => {
    toggleDirection();
    changeLanguage(isRTL ? 'en' : 'fa');
  };

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center justify-center rounded-sm bg-white p-2 text-body hover:bg-gray-200 dark:bg-boxdark dark:text-bodydark dark:hover:bg-boxdark-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <Link className="block flex-shrink-0 lg:hidden" href="/">
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
                placeholder={t('search')}
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
              >
                {theme === 'dark' ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15ZM10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667C9.11595 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11595 6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9821 9.11595 13.3333 10 13.3333Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.09091 0.909092C9.09091 0.407014 9.49792 0 10 0C10.5021 0 10.9091 0.407014 10.9091 0.909092V1.81818C10.9091 2.32026 10.5021 2.72727 10 2.72727C9.49792 2.72727 9.09091 2.32026 9.09091 1.81818V0.909092ZM9.09091 18.1818C9.09091 17.6797 9.49792 17.2727 10 17.2727C10.5021 17.2727 10.9091 17.6797 10.9091 18.1818V19.0909C10.9091 19.593 10.5021 20 10 20C9.49792 20 9.09091 19.593 9.09091 19.0909V18.1818ZM2.92909 4.21455C2.57412 3.85958 2.57412 3.28406 2.92909 2.92909C3.28406 2.57412 3.85958 2.57412 4.21455 2.92909L4.85727 3.57182C5.21224 3.92679 5.21224 4.5023 4.85727 4.85727C4.5023 5.21224 3.92679 5.21224 3.57182 4.85727L2.92909 4.21455ZM15.1427 16.4282C14.7878 16.0732 14.7878 15.4977 15.1427 15.1427C15.4977 14.7878 16.0732 14.7878 16.4282 15.1427L17.0709 15.7855C17.4259 16.1404 17.4259 16.7159 17.0709 17.0709C16.7159 17.4259 16.1404 17.4259 15.7855 17.0709L15.1427 16.4282ZM0.909092 9.09091C0.407014 9.09091 0 9.49792 0 10C0 10.5021 0.407014 10.9091 0.909092 10.9091H1.81818C2.32026 10.9091 2.72727 10.5021 2.72727 10C2.72727 9.49792 2.32026 9.09091 1.81818 9.09091H0.909092ZM18.1818 9.09091C17.6797 9.09091 17.2727 9.49792 17.2727 10C17.2727 10.5021 17.6797 10.9091 18.1818 10.9091H19.0909C19.593 10.9091 20 10.5021 20 10C20 9.49792 19.593 9.09091 19.0909 9.09091H18.1818ZM4.85727 15.1427C5.21224 14.7878 5.21224 14.2122 4.85727 13.8573C4.5023 13.5023 3.92679 13.5023 3.57182 13.8573L2.92909 14.5C2.57412 14.855 2.57412 15.4305 2.92909 15.7855C3.28406 16.1404 3.85958 16.1404 4.21455 15.7855L4.85727 15.1427ZM17.0709 2.92909C17.4259 3.28406 17.4259 3.85958 17.0709 4.21455L16.4282 4.85727C16.0732 5.21224 15.4977 5.21224 15.1427 4.85727C14.7878 4.5023 14.7878 3.92679 15.1427 3.57182L15.7855 2.92909C16.1404 2.57412 16.7159 2.57412 17.0709 2.92909Z"
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
                  >
                    <path
                      d="M10 3.07869C8.05878 3.07869 6.26622 3.8554 4.92602 5.19561C3.58581 6.53582 2.8091 8.32838 2.8091 10.2696C2.8091 12.2108 3.58581 14.0034 4.92602 15.3436C6.26622 16.6838 8.05878 17.4605 10 17.4605C10.9186 17.4605 11.8273 17.2691 12.6644 16.9004C13.5015 16.5316 14.2487 15.9934 14.8586 15.3212C15.4685 14.6491 15.9364 13.8478 16.2247 12.9759C16.513 12.104 16.6151 11.1871 16.5245 10.2819C16.4339 9.37674 16.1525 8.49904 15.6994 7.70471C15.2464 6.91038 14.6317 6.21638 13.8924 5.66899C13.153 5.1216 12.3052 4.73392 11.4089 4.52996C10.5127 4.32599 9.58639 4.3103 8.68482 4.48377"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </li>
            
            {/* Language Switcher */}
            <li>
              <button
                onClick={handleLanguageChange}
                className="inline-flex items-center justify-center rounded-sm bg-gray-100 p-2 text-body hover:bg-gray-200 dark:bg-boxdark-2 dark:text-bodydark dark:hover:bg-boxdark"
              >
                {isRTL ? (
                  <span className="text-sm font-medium">EN</span>
                ) : (
                  <span className="text-sm font-medium">فا</span>
                )}
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