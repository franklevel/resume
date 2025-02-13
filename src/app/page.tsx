'use client';

import React, { useState } from 'react';
import Menu from '@/components/Menu';
import SectionList from '@/components/common/SectionList';

export default function Home() {
  const [language, setLanguage] = useState('en');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Menu language={language} onLanguageChange={setLanguage} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionList language={language} />
      </div>
    </main>
  );
}
