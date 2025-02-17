export interface Experience {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly achievements: readonly string[];
}

export interface Education {
  readonly degree: string;
  readonly school: string;
  readonly period: string;
  readonly details: string;
}

export interface Skill {
  readonly category: string;
  readonly items: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly technologies: readonly string[];
  readonly description: string;
}

export interface Profile {
  readonly description: string;
}

export interface ResumeData {
  readonly profile: Profile;
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly skills: readonly Skill[];
  readonly projects: readonly Project[];
}
