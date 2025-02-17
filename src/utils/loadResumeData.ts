import type { ResumeData } from '@/types/resume';
import enData from '../data.json';
import esData from '../data.es.json';

export function loadResumeData(lang: string): ResumeData {
  return lang === 'es' ? esData : enData;
}
