import React from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

interface MenuProps {
  language: string;
}

const Menu: React.FC<MenuProps> = ({ language }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    router.push(`/${newLang}`);
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
            <button
              onClick={toggleLanguage}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden py-2">
          <div className="space-y-1">
            <Link
              href="#experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {t('menu.experience')}
            </Link>
            <Link
              href="#education"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {t('menu.education')}
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {t('menu.skills')}
            </Link>
            <Link
              href="#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
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
