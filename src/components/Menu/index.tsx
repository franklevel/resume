'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

interface MenuProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

const Menu: React.FC<MenuProps> = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  if (!mounted) {
    return null;
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    onLanguageChange(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm mb-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center justify-between flex-1 md:justify-start">
            <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
              Frank Ruiz
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex md:ml-10 md:space-x-8">
              <Link href="#experience" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                {t('menu.experience')}
              </Link>
              <Link href="#education" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                {t('menu.education')}
              </Link>
              <Link href="#skills" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                {t('menu.skills')}
              </Link>
              <Link href="#portfolio" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                {t('menu.portfolio')}
              </Link>
            </div>
          </div>

          {/* Theme toggle, language selector and mobile menu button */}
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm"
            >
              <option value="en">{t('language.english')}</option>
              <option value="es">{t('language.spanish')}</option>
            </select>
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden py-2`}>
          <div className="space-y-1">
            <Link
              href="#experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {t('menu.experience')}
            </Link>
            <Link
              href="#education"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {t('menu.education')}
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {t('menu.skills')}
            </Link>
            <Link
              href="#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {t('menu.portfolio')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
