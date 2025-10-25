export interface Experience {
  id: string;
  title: string;
  organization: string;
  role: string;
  duration: string;
  tech: string[];
  description: string[];
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  title: string;
  tagline: string;
}

