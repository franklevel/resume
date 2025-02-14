'use client';

import MenuWrapper from './MenuWrapper';
import SectionList from './common/SectionList';
import type { ResumeData } from '@/types/resume';

interface PageContentProps {
  readonly lang: string;
  readonly resumeData: ResumeData;
}

export default function PageContent({ lang, resumeData }: PageContentProps) {
  return (
    <>
      <MenuWrapper language={lang} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionList language={lang} resumeData={resumeData} />
      </div>
    </>
  );
}
