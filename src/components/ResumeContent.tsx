import type { ResumeData } from '@/types/resume';
import SectionList from './common/SectionList';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

interface Props {
  lang: string;
  resumeData: ResumeData;
}

export default function ResumeContent({ lang, resumeData }: Props) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-end items-center gap-2 mb-4">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <SectionList language={lang} resumeData={resumeData} />
    </main>
  );
}
