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
      <div className="flex justify-end items-center gap-2 mb-8">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Frank Ruiz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {lang === 'es' ? 'Desarrollador de Software' : 'Software Developer'}
          </p>
        </header>

        <SectionList language={lang} resumeData={resumeData} />
      </div>
    </main>
  );
}
