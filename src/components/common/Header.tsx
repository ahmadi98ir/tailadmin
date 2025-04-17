'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSidebar } from '@/contexts/SidebarContext';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  SunIcon, 
  MoonIcon, 
  ComputerIcon, 
  TextLeftIcon, 
  TextRightIcon,
  MenuIcon,
  ChevronDownIcon,
  UserIcon,
  LogoutIcon,
  SearchIcon,
  LoadingIcon,
  XMarkIcon,
  BellIcon,
  CogIcon,
  HomeIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  BoltIcon,
  CommandLineIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon
} from '@/components/icons';

const Header = () => {
  const { theme, isRTL, isSystemTheme, toggleTheme, toggleDirection, setSystemTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const { t, changeLanguage, isChangingLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const [keyboardShortcutsOpen, setKeyboardShortcutsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark' | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const notificationSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    notificationSound.current = new Audio('/sounds/notification.mp3');
  }, []);

  // Mock data - replace with actual data
  const notifications = [
    { id: 1, title: 'New message', message: 'You have a new message from John', time: '2m ago', read: false },
    { id: 2, title: 'System update', message: 'System maintenance scheduled for tomorrow', time: '1h ago', read: true },
  ];

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const quickActions = [
    { label: 'New User', icon: UserIcon, action: () => router.push('/users/new') },
    { label: 'Settings', icon: CogIcon, action: () => router.push('/settings') },
    { label: 'Help', icon: QuestionMarkCircleIcon, action: () => setHelpOpen(true) },
  ];

  const keyboardShortcuts = [
    { key: 'Ctrl/Cmd + K', action: 'Search' },
    { key: 'Ctrl/Cmd + T', action: 'Toggle Theme' },
    { key: 'Ctrl/Cmd + D', action: 'Toggle Direction' },
    { key: 'Ctrl/Cmd + H', action: 'Show Help' },
    { key: 'Ctrl/Cmd + Q', action: 'Quick Actions' },
  ];

  // Mock search suggestions - replace with actual API call
  const suggestions = [
    'Dashboard',
    'Users',
    'Settings',
    'Profile',
    'Analytics'
  ];

  // Generate breadcrumbs from pathname
  const breadcrumbs = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: '/' + array.slice(0, index + 1).join('/'),
      isLast: index === array.length - 1
    }));

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Ctrl/Cmd + T for theme toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        toggleTheme();
      }
      // Ctrl/Cmd + D for direction toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleDirection();
      }
      // Ctrl/Cmd + H for help
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        setHelpOpen(true);
      }
      // Ctrl/Cmd + Q for quick actions
      if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
        e.preventDefault();
        setQuickActionsOpen(true);
      }
      // Escape to close all dropdowns
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setLanguageDropdownOpen(false);
        setSettingsDropdownOpen(false);
        setNotificationsOpen(false);
        setHelpOpen(false);
        setQuickActionsOpen(false);
        setKeyboardShortcutsOpen(false);
        setShowSuggestions(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme, toggleDirection]);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setSettingsDropdownOpen(false);
    setNotificationsOpen(false);
    setHelpOpen(false);
    setQuickActionsOpen(false);
  };

  const handleToggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
    setSettingsDropdownOpen(false);
    setNotificationsOpen(false);
    setHelpOpen(false);
    setQuickActionsOpen(false);
  };

  const handleToggleSettings = () => {
    setSettingsDropdownOpen(!settingsDropdownOpen);
    setDropdownOpen(false);
    setNotificationsOpen(false);
    setHelpOpen(false);
    setQuickActionsOpen(false);
  };

  const handleToggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    setDropdownOpen(false);
    setSettingsDropdownOpen(false);
    setHelpOpen(false);
    setQuickActionsOpen(false);
    if (!isMuted && notificationSound.current) {
      notificationSound.current.play();
    }
  };

  const handleToggleHelp = () => {
    setHelpOpen(!helpOpen);
    setDropdownOpen(false);
    setSettingsDropdownOpen(false);
    setNotificationsOpen(false);
    setQuickActionsOpen(false);
  };

  const handleToggleQuickActions = () => {
    setQuickActionsOpen(!quickActionsOpen);
    setDropdownOpen(false);
    setSettingsDropdownOpen(false);
    setNotificationsOpen(false);
    setHelpOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleThemePreview = (newTheme: 'light' | 'dark') => {
    setPreviewTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleThemePreviewEnd = () => {
    setPreviewTheme(null);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  // Close the dropdowns when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.user-dropdown') && 
          !target.closest('.language-dropdown') && 
          !target.closest('.search-container') &&
          !target.closest('.settings-dropdown') &&
          !target.closest('.notifications-dropdown') &&
          !target.closest('.help-dropdown') &&
          !target.closest('.quick-actions-dropdown') &&
          !target.closest('.mobile-menu')) {
        setDropdownOpen(false);
        setLanguageDropdownOpen(false);
        setSettingsDropdownOpen(false);
        setNotificationsOpen(false);
        setHelpOpen(false);
        setQuickActionsOpen(false);
        setIsSearchFocused(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = async (lang: string) => {
    await changeLanguage(lang);
    toggleDirection();
    setLanguageDropdownOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    } else if (e.key === 'ArrowDown' && showSuggestions) {
      e.preventDefault();
      const firstSuggestion = document.querySelector('.suggestion-item');
      if (firstSuggestion instanceof HTMLElement) {
        firstSuggestion.focus();
      }
    }
  };

  const handleSuggestionKeyDown = (e: KeyboardEvent<HTMLButtonElement>, suggestion: string) => {
    if (e.key === 'Enter') {
      setSearchQuery(suggestion);
      setShowSuggestions(false);
      inputRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextSuggestion = e.currentTarget.nextElementSibling;
      if (nextSuggestion instanceof HTMLElement) {
        nextSuggestion.focus();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevSuggestion = e.currentTarget.previousElementSibling;
      if (prevSuggestion instanceof HTMLElement) {
        prevSuggestion.focus();
      } else {
        inputRef.current?.focus();
      }
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleLogout = async () => {
    try {
      // Here you would typically call your logout API
      // await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
            aria-label={t('toggleSidebar')}
            title={t('toggleSidebar')}
          >
            <MenuIcon className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="w-5 h-5" />
            <span className="font-semibold">TailAdmin</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                )}
                {crumb.isLast ? (
                  <span className="text-gray-600 dark:text-gray-300">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative search-container">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setShowSuggestions(true);
                }}
                onKeyDown={handleKeyDown}
                placeholder={t('search')}
                className="w-full px-4 py-2 pl-10 pr-10 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                aria-label={t('search')}
                role="combobox"
                aria-expanded={showSuggestions}
                aria-controls="search-suggestions"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400 hidden md:block">
                Ctrl + K
              </div>
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label={t('clearSearch')}
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              )}
            </form>
            {showSuggestions && searchQuery && (
              <div
                id="search-suggestions"
                className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn"
                role="listbox"
              >
                {suggestions
                  .filter(suggestion => 
                    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 outline-none suggestion-item"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSuggestions(false);
                      }}
                      onKeyDown={(e) => handleSuggestionKeyDown(e, suggestion)}
                      role="option"
                      tabIndex={0}
                    >
                      {suggestion}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative quick-actions-dropdown">
            <button
              onClick={handleToggleQuickActions}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('quickActions')}
              title={t('quickActions')}
            >
              <BoltIcon className="w-5 h-5" />
            </button>
            {quickActionsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      action.action();
                      setQuickActionsOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <action.icon className="w-4 h-4 mr-2" />
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative notifications-dropdown">
            <button
              onClick={handleToggleNotifications}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
              aria-label={t('notifications')}
              title={t('notifications')}
            >
              <BellIcon className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-semibold">{t('notifications')}</h3>
                  <button
                    onClick={handleToggleMute}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label={isMuted ? t('unmuteNotifications') : t('muteNotifications')}
                  >
                    {isMuted ? (
                      <SpeakerXMarkIcon className="w-4 h-4" />
                    ) : (
                      <SpeakerWaveIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative settings-dropdown">
            <button
              onClick={handleToggleSettings}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('settings')}
              title={t('settings')}
            >
              <CogIcon className="w-5 h-5" />
            </button>
            {settingsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold">{t('theme')}</h3>
                </div>
                <button
                  onClick={toggleTheme}
                  onMouseEnter={() => handleThemePreview(theme === 'dark' ? 'light' : 'dark')}
                  onMouseLeave={handleThemePreviewEnd}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="w-4 h-4 mr-2" />
                      {t('switchToLight')}
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-4 h-4 mr-2" />
                      {t('switchToDark')}
                    </>
                  )}
                </button>
                <button
                  onClick={setSystemTheme}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ComputerIcon className="w-4 h-4 mr-2" />
                  {t('useSystemTheme')}
                </button>
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold">{t('direction')}</h3>
                </div>
                <button
                  onClick={toggleDirection}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {isRTL ? (
                    <>
                      <TextLeftIcon className="w-4 h-4 mr-2" />
                      {t('switchToLTR')}
                    </>
                  ) : (
                    <>
                      <TextRightIcon className="w-4 h-4 mr-2" />
                      {t('switchToRTL')}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          <div className="relative help-dropdown">
            <button
              onClick={handleToggleHelp}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('help')}
              title={t('help')}
            >
              <QuestionMarkCircleIcon className="w-5 h-5" />
            </button>
            {helpOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold">{t('help')}</h3>
                </div>
                <button
                  onClick={() => {
                    setKeyboardShortcutsOpen(true);
                    setHelpOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <CommandLineIcon className="w-4 h-4 mr-2" />
                  {t('keyboardShortcuts')}
                </button>
                <Link
                  href="/help"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <QuestionMarkCircleIcon className="w-4 h-4 mr-2" />
                  {t('documentation')}
                </Link>
              </div>
            )}
          </div>

          <div className="relative language-dropdown">
            <button
              onClick={handleToggleLanguageDropdown}
              className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('changeLanguage')}
              title={t('changeLanguage')}
              disabled={isChangingLanguage}
            >
              <span>{isRTL ? 'فارسی' : 'English'}</span>
              {isChangingLanguage ? (
                <LoadingIcon className="w-4 h-4 animate-spin" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  disabled={isChangingLanguage}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('fa')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  disabled={isChangingLanguage}
                >
                  فارسی
                </button>
              </div>
            )}
          </div>

          <div className="relative user-dropdown">
            <button
              onClick={handleToggleDropdown}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('userMenu')}
              title={t('userMenu')}
            >
              <UserIcon className="w-5 h-5" />
              <span className="hidden md:inline">Admin</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 animate-fadeIn">
                <Link
                  href="/profile"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  {t('profile')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
                >
                  <LogoutIcon className="w-4 h-4 mr-2" />
                  {t('logout')}
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleToggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
            aria-label={t('menu')}
            title={t('menu')}
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleToggleMobileMenu} />
          <div className="fixed right-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-lg animate-slideIn">
            <nav className="p-4">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <HomeIcon className="w-5 h-5 mr-2" />
                  {t('home')}
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <UserIcon className="w-5 h-5 mr-2" />
                  {t('profile')}
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <CogIcon className="w-5 h-5 mr-2" />
                  {t('settings')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
                >
                  <LogoutIcon className="w-5 h-5 mr-2" />
                  {t('logout')}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
      {keyboardShortcutsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setKeyboardShortcutsOpen(false)} />
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4">{t('keyboardShortcuts')}</h2>
            <div className="space-y-2">
              {keyboardShortcuts.map((shortcut, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">{shortcut.action}</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
            <button
              onClick={() => setKeyboardShortcutsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={t('close')}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 