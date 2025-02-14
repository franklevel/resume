import PageContent from './PageContent';
import type { ResumeData } from '@/types/resume';

interface ResumeContentProps {
  readonly lang: string;
  readonly resumeData: ResumeData;
}

export default function ResumeContent({ lang, resumeData }: ResumeContentProps) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageContent lang={lang} resumeData={resumeData} />
    </main>
  );
}
