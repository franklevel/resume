import { redirect } from 'next/navigation';
import { defaultLocale } from '@/config/i18n';

export const dynamic = 'force-static';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
