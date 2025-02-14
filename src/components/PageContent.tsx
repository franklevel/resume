'use client';

import MenuWrapper from './MenuWrapper';
import SectionList from './common/SectionList';

interface PageContentProps {
  lang: string;
}

export default function PageContent({ lang }: PageContentProps) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MenuWrapper language={lang} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionList language={lang} />
      </div>
    </main>
  );
}
