import type { ResumeData } from '@/types/resume';

export async function loadResumeData(lang: string): Promise<ResumeData> {
  try {
    const data = await import(`../data${lang === 'es' ? '.es' : ''}.json`);
    return data.default;
  } catch (error) {
    console.error(`Failed to load resume data for language: ${lang}`, error);
    throw error;
  }
}
