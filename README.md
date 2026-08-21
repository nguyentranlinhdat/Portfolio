# Personal Portfolio — Nguyễn Trần Lĩnh Đạt

Bilingual (EN/VI) personal portfolio website for **Nguyễn Trần Lĩnh Đạt** — Frontend Developer Intern. Built as a frontend internship technical test.

> 🌐 Live demo: _coming soon_ (Vercel deployment — paste URL here after deploy)

## 📸 Screenshots

| Home | Skills |
|------|--------|
| ![Home page](docs/screenshots/home.png) | _Add screenshot: `docs/screenshots/skills.png`_ |

_More screenshots: run `npm run dev`, capture each page at 1440px width, save into `docs/screenshots/`._

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Build | Vite |
| UI | React + TypeScript (strict mode) |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | Oxlint |

## 🚀 Getting Started

Requirements: Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start dev server → http://localhost:5173
npm run dev

# Production build & preview
npm run build
npm run preview

# Lint
npm run lint
```

## ✨ Features

### Core
- **Routing** — 5 pages (`/`, `/resume`, `/skills`, `/projects`, `/contact`) + custom 404, active nav states via `NavLink`
- **Route transitions** — `AnimatePresence mode="wait"` fade/slide between pages (~0.3s)
- **Scroll reveal** — sections/cards animate in on scroll (`whileInView`, once)
- **Dark / Light theme** — toggle in navbar, persisted to `localStorage`, no flash-on-load (anti-FOUC script)

### Pages
- **Home** — hero with avatar card, floating tech badges, contact info, CTAs (Download CV / Explore Projects)
- **Resume** — personal info, career objective (short/long term), education (UIT — GPA 8.2/10), work experience, CV download
- **Skills** — 6 categories, 18 skills; level badges (Advanced / Intermediate / Familiar) + animated progress bars
- **Projects** — data-driven from `src/data/projects.ts`; live search by name + category filter (7 categories); empty state when no results
- **Contact** — form validation (required fields, email format, message ≥ 20 chars), inline field errors, idle → loading → success states, mock submit
- **404** — animated Not Found page with Go Home link

### Bilingual (EN/VI)
- Full translation coverage: navbar, hero, all pages, form validation messages, loading/success states, 404, footer
- Language switcher persisted to `localStorage`; updates `<html lang>`

### Responsive & Accessibility
- Mobile-first: hamburger menu (slide-in drawer), single-column layouts, responsive typography
- Touch targets ≥ 44×44px on mobile
- Semantic HTML (`header`/`nav`/`main`/`section`/`footer`)
- Mobile menu: focus trap, Escape-to-close, focus restore, `aria-modal`
- Visible focus states, ARIA labels on icon buttons, keyboard navigable

## 📁 Project Structure

```
src/
├── components/     # layout (Navbar, Footer, MobileMenu...), common (Button, SectionTitle...), ui
├── features/       # feature logic: contactValidation.ts, projectUtils.ts
├── pages/          # Home, Resume, Skills, Projects, Contact, NotFound
├── contexts/       # LanguageContext, ThemeContext
├── locales/        # en.ts, vi.ts
├── data/           # profile, skills, projects, navigation
├── hooks/          # useLanguage, useTheme, useScrollToTop
├── types/          # shared TypeScript types
└── lib/            # utils (cn, getLocalizedValue, validateEmail...)
```

---

© 2026 Nguyễn Trần Lĩnh Đạt · [GitHub](https://github.com/) · [LinkedIn](https://www.linkedin.com/)
