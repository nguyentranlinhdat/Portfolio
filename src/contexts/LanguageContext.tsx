import { createContext, useState, useEffect, type ReactNode } from 'react';
import type { Language } from '@/types';
import { en } from '@/locales/en';
import { vi } from '@/locales/vi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslationValues = Record<string, any>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationValues;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, TranslationValues> = { en, vi };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved === 'en' || saved === 'vi') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
