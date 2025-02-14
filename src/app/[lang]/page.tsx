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

export default function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return <PageContent lang={lang} />;
}
