export type Language = 'en' | 'vi';

export interface LocalizedString {
  en: string;
  vi: string;
}

export interface Profile {
  name: LocalizedString;
  role: LocalizedString;
  email: string;
  phone: string;
  dob: string;
  gender: LocalizedString;
  location: LocalizedString;
  avatar: string;
  intro: LocalizedString;
  careerObjective: LocalizedString;
}

export interface Education {
  institution: LocalizedString;
  degree: LocalizedString;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface WorkExperience {
  company: string;
  position: LocalizedString;
  startDate: string;
  endDate: string;
  description: LocalizedString;
  highlights: LocalizedString[];
}

export type SkillLevel = 'advanced' | 'intermediate' | 'familiar';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: LocalizedString;
  skills: Skill[];
}

export type ProjectCategory = 'all' | 'nextjs' | 'react' | 'typescript' | 'ai' | 'ecommerce' | '3d';

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  category: ProjectCategory[];
}

export interface NavItem {
  label: LocalizedString;
  path: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}
