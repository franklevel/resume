import type { ResumeData } from '@/types/resume';
import validatedData from '../validatedData.json';

export async function loadResumeData(lang: string): Promise<ResumeData> {
  return validatedData[lang as keyof typeof validatedData];
}
