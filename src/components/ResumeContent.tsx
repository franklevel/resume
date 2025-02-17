import type { ResumeData } from '@/types/resume';
import SectionList from './common/SectionList';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import ScrollToTop from './ScrollToTop';

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
      
      <div className="max-w-3xl mx-auto dark:content-wrapper">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 glow-effect">
            Frank Ruiz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {lang === 'es' ? 'Desarrollador de Software' : 'Software Developer'}
          </p>
          <a
            href="https://calendar.google.com/calendar/u/1?cid=ZnJhbmsucnVpei5hckBnbWFpbC5jb20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {lang === 'es' ? 'Agendar una entrevista' : 'Book an interview'}
          </a>
        </header>

        <SectionList language={lang} resumeData={resumeData} />
      </div>

      <ScrollToTop />
    </main>
  );
}
