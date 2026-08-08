export type SkillLevel = "learning" | "proficient" | "advanced" | "expert";

export interface Skill {
  name: string;
  level: SkillLevel;
  /** 0-100, drives the XP-bar fill */
  xp: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack?: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  featured?: boolean;
  stack: string[];
  features: string[];
  links: ProjectLink[];
  accent?: "signal" | "steel";
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  detail: string;
  period: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}
