'use client';

import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
      aria-label="Toggle language"
    >
      <LanguageIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase">
        {i18n.language}
      </span>
    </button>
  );
}
