import { cache } from 'react'
import PageContent from './PageContent';
import type { ResumeData } from '@/types/resume';

const getResumeData = cache(async (lang: string): Promise<ResumeData> => {
  const data = await import(`../data${lang === 'es' ? '.es' : ''}.json`);
  return data.default;
});

interface ResumeContentProps {
  readonly lang: string;
}

export default async function ResumeContent({ lang }: ResumeContentProps) {
  const resumeData = await getResumeData(lang);
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageContent lang={lang} resumeData={resumeData} />
    </main>
  );
}
