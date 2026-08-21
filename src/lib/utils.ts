import type { Language, LocalizedString, SkillLevel } from '@/types';

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getLocalizedValue(obj: LocalizedString, lang: Language): string {
  return obj[lang];
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const skillLevelLabels: Record<SkillLevel, { en: string; vi: string }> = {
  advanced: { en: 'Advanced', vi: 'Nâng cao' },
  intermediate: { en: 'Intermediate', vi: 'Trung bình' },
  familiar: { en: 'Familiar', vi: 'Quen thuộc' },
};

export function getSkillLevelLabel(level: SkillLevel, lang: Language): string {
  return skillLevelLabels[level][lang];
}
