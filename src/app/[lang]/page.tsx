import ResumeContent from '@/components/ResumeContent';
import { loadResumeData } from '@/utils/loadResumeData';
import { locales } from '@/config/i18n';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const resumeData = await loadResumeData(params.lang);
  return {
    title: `${resumeData.profile.description.split('.')[0]} - Resume`,
    description: resumeData.profile.description,
  };
}

export default async function Home({ params }: { params: { lang: string } }) {
  const resumeData = await loadResumeData(params.lang);
  return <ResumeContent lang={params.lang} resumeData={resumeData} />;
}
