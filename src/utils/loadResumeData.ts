import type { ResumeData } from '@/types/resume';

export function loadResumeData(lang: string): ResumeData {
  try {
    return require(`../data${lang === 'es' ? '.es' : ''}.json`);
  } catch (error) {
    console.error(`Failed to load resume data for language: ${lang}`, error);
    // Fallback to English
    return require('../data.json');
  }
}
