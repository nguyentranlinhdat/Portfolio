import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
      className="px-3 py-1.5 text-sm font-medium rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
      aria-label={language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh'}
    >
      {language === 'en' ? 'VI' : 'EN'}
    </button>
  );
}
