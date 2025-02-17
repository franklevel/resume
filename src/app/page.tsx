'use client';

import ResumeContent from '@/components/ResumeContent';
import { loadResumeData } from '@/utils/loadResumeData';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

export default function Home() {
  const { i18n } = useTranslation();
  const resumeData = loadResumeData(i18n.language);

  return <ResumeContent resumeData={resumeData} />;
}
