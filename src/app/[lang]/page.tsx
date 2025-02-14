import PageContent from '@/components/PageContent';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  return <PageContent lang={lang} />;
}
