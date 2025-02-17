import type { ResumeData } from '@/types/resume';
import SectionList from './common/SectionList';
import LanguageSwitcher from './LanguageSwitcher';

interface Props {
  resumeData: ResumeData;
}

export default function ResumeContent({ resumeData }: Props) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <LanguageSwitcher />
      </div>
      <SectionList resumeData={resumeData} />
    </main>
  );
}
