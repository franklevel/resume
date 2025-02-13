import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-static';

export default function Home() {
  // This ensures the redirect works both during static export and runtime
  const headersList = headers();
  const host = headersList.get('host') || '';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  redirect(`${protocol}://${host}/en`);
}
