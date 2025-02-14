import Menu from '@/components/Menu';
import SectionList from '@/components/common/SectionList';

export const dynamic = 'force-static';
export const dynamicParams = false; // Only generate pages for the languages specified in generateStaticParams
export const revalidate = 3600; // revalidate every hour

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}

type Props = {
  readonly params: {
    readonly lang: string
  }
}

export default async function Home({ params }: Props) {
  const { lang } = params;
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Menu language={lang} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionList language={lang} />
      </div>
    </main>
  );
}
