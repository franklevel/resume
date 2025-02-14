import ResumeContent from '@/components/ResumeContent';
import { loadResumeData } from '@/utils/loadResumeData';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 3600;

interface Props {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}

// Pre-load data at build time
export async function generateMetadata({ params }: Props) {
  const resumeData = await loadResumeData(params.lang);
  return {
    title: `${resumeData.profile.description.split('.')[0]} - Resume`,
    description: resumeData.profile.description,
  };
}

export default async function Home({ params }: Props) {
  const resumeData = await loadResumeData(params.lang);
  return <ResumeContent lang={params.lang} resumeData={resumeData} />;
}
