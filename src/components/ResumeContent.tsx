import { cache } from 'react'
import PageContent from './PageContent';

const getResumeData = cache(async (lang: string) => {
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
