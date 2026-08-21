import type { Project, ProjectCategory, Language } from '@/types';

export function filterProjects(
  projects: Project[],
  category: ProjectCategory,
  searchQuery: string,
  language: Language
): Project[] {
  let filtered = projects;

  if (category !== 'all') {
    filtered = filtered.filter((p) => p.category.includes(category));
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title[language].toLowerCase().includes(query) ||
        p.description[language].toLowerCase().includes(query)
    );
  }

  return filtered;
}
