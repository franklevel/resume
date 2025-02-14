import ResumeContent from '@/components/ResumeContent';
import { loadResumeData } from '@/utils/loadResumeData';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 3600;

export type ParamsType = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}

// Pre-load data at build time
export async function generateMetadata({ params }: { params: ParamsType }) {
  const { lang } = await params;
  const resumeData = await loadResumeData(lang);
  return {
    title: `${resumeData.profile.description.split('.')[0]} - Resume`,
    description: resumeData.profile.description,
  };
}

export default async function Home({ params }: { params: ParamsType }) {
  const { lang } = await params;
  const resumeData = await loadResumeData(lang);
  return <ResumeContent lang={lang} resumeData={resumeData} />;
}
