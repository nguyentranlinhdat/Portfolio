# CLAUDE.md — Personal Portfolio

## Project Overview

Bilingual (EN/VI) personal portfolio website for **Nguyễn Trần Lĩnh Đạt** — Frontend Developer Intern. Built as a frontend internship technical test. Must feel like a **premium modern developer portfolio**, not a traditional CV template.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Build | Vite |
| UI | React + TypeScript |
| Routing | React Router DOM v6+ |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | ESLint |

**Do NOT add unnecessary libraries.** If it can be done with React, Tailwind, or native browser APIs — don't install another package.

---

## Design Direction

### Theme: Dark Mode (Default)

The portfolio uses a **dark theme** as its primary (and only) visual mode. Inspired by modern developer portfolios — minimal, editorial, professional.

### Color System

```
Background:       #0A0A0A
Surface/Cards:    #111111
Surface Elevated: #1A1A1A
Border:           #222222
Text Primary:     #FAFAFA
Text Secondary:   #A0A0A0
Text Muted:       #666666
Accent:           #C8FF4D    (lime green — used sparingly)
Accent Hover:     #B8E645
```

### Typography

- **Primary Font:** Inter (weights: 300, 400, 500, 600, 700)
- Strong typographic hierarchy
- Hero heading: very large, bold
- Section headings: clearly distinguishable
- Uppercase/small-caps labels for metadata where appropriate
- Consistent font sizes, line heights, letter spacing, font weights, spacing

### Visual Style

```
Premium | Minimal | Editorial | Modern | Clean | Technical | Professional
```

**Avoid:**
- Generic dashboard UI
- Traditional resume templates
- Excessive gradients / glassmorphism
- Rounded cards with heavy shadows
- Excessive animations or bouncing effects
- Overly colorful UI
- Light mode

---

## Project Architecture

```
src/
├── assets/
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageTransition.tsx
│   └── common/
│       ├── SectionTitle.tsx
│       ├── Button.tsx
│       ├── ScrollToTop.tsx
│       └── LanguageSwitcher.tsx
├── features/
│   ├── home/
│   ├── resume/
│   ├── skills/
│   ├── projects/
│   │   ├── components/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilter.tsx
│   │   │   └── ProjectGrid.tsx
│   │   └── projectUtils.ts
│   └── contact/
│       ├── components/
│       │   └── ContactForm.tsx
│       └── contactValidation.ts
├── pages/
│   ├── Home.tsx
│   ├── Resume.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── profile.ts
│   └── navigation.ts
├── contexts/
│   └── LanguageContext.tsx
├── locales/
│   ├── en.ts
│   └── vi.ts
├── hooks/
│   ├── useLanguage.ts
│   └── useScrollToTop.ts
├── types/
│   └── index.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

**Rules:**
- If a component is only used by one feature → keep inside that feature's folder
- Shared components go in `components/` only when actually reusable
- Data in `src/data/`, translations in `src/locales/`
- Do NOT create unnecessary files

---

## Routing

React Router DOM v6+ with centralized route config:

```
/           → Home
/resume     → Resume
/skills     → Skills
/projects   → Projects
/contact    → Contact
/*          → NotFound (404)
```

- Use `NavLink` for navbar (active state with accent color)
- Use `Link` / `useNavigate` for internal navigation
- Do NOT use `<a href="">` for internal routes

---

## Bilingual Support (EN/VI)

- Default language: **EN**
- `LanguageContext` provides: `language`, `setLanguage`, `t` (translations)
- Persist language choice to `localStorage`
- ALL user-facing text must be translated: navbar, hero, buttons, sections, resume, skills, projects, contact form, validation messages, loading/success/error states, 404, footer
- Locale files: `src/locales/en.ts` and `src/locales/vi.ts`

---

## Personal Information

```
Full Name:    Nguyễn Trần Lĩnh Đạt
Role:         Frontend Developer Intern
DOB:          20/10/2002
Gender:       Male
Location:     An Lac, Binh Tan, Ho Chi Minh City
Email:        datlinhnt.work@gmail.com
Phone:        0363439477
```

Do NOT invent additional personal information.

---

## Pages Summary

### Home (`/`)
- Hero: avatar, full name (large), role, short intro, 2 CTAs
- "View Resume" → opens `CV.pdf` (external)
- "Explore Projects" → navigates to `/projects`
- Staggered entrance animation

### Resume (`/resume`)
- Personal info, career objective, education, work experience, CV download
- Education: UIT (VNUHCM), Japanese-oriented IT, 09/2020–11/2025, GPA 8.2/10
- Work: Frontend Developer at VNNext, 06/2024–08/2024

### Skills (`/skills`)
- 6 categories: Programming Languages, Web Technologies, Frameworks & Libraries, DB & Tools, Soft Skills, Languages
- Level indicators: Advanced / Intermediate / Familiar (NOT percentages)

### Projects (`/projects`)
- Data-driven from `src/data/projects.ts`, rendered with `.map()`
- Search by name + category filter (All, Next.js, React, TypeScript, AI, E-commerce, 3D)
- GitHub links required; Demo links disabled when unavailable ("Not Deployed")
- Empty state when no results

### Contact (`/contact`)
- Fields: name, email, subject, message (all required; message min 20 chars)
- Field-level validation errors (NO `alert()`)
- States: idle → loading (Sending..., disabled) → success → error
- Mock submit with `setTimeout` (~1.5s)

### NotFound (`/*`)
- 404 page with "Go Home" button, bilingual

---

## Animation Rules (Framer Motion)

### Route Transitions (Mandatory)
- Exit: `opacity: 1→0`, `y: 0→-10`
- Enter: `opacity: 0→1`, `y: 10→0`
- Duration: ~0.3s, easeInOut
- `AnimatePresence mode="wait"` in App.tsx

### Scroll Reveal
- `whileInView` with `viewport={{ once: true }}`
- Apply to sections, cards, list items

### Micro-interactions
- Button hover/tap: subtle scale
- Project card hover: subtle lift
- Mobile menu: slide from right + overlay fade
- Staggered children for lists

**All animations must be fast, smooth, subtle, purposeful. Never hurt usability.**

---

## Responsive Design

| Breakpoint | Width |
|-----------|-------|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

- Mobile: hamburger menu, single-column, responsive typography
- Desktop: horizontal nav, multi-column grids
- Touch targets: min 44×44px on mobile
- Design mobile layouts intentionally — do NOT just shrink desktop

---

## Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images with meaningful `alt` text
- Form `<label htmlFor="...">` matching `<input id="...">`
- Visible focus states: `focus-visible:ring-2 focus-visible:ring-[#C8FF4D]`
- Keyboard navigation through all interactive elements
- Mobile menu: focus trap + Escape to close
- ARIA labels on icon buttons, hamburger (`aria-expanded`), language switcher
- Do NOT rely only on color to communicate state

---

## Code Quality

- **TypeScript strict mode** — no `any` types
- **ESLint clean** — no warnings or errors
- Clear naming, small components, reusable patterns
- No unnecessary duplication or magic numbers
- Prefer Tailwind classes over inline styles
- Keep business/data logic separate from UI
- No console errors in browser

---

## Development Workflow

### Phase Order
1. **Setup** — Vite, React, TS, Tailwind, Router, Framer Motion, ESLint
2. **Architecture** — Folders, routes, layout, shared components
3. **Navigation** — Navbar, mobile menu, active routes, language switcher, ScrollToTop, 404
4. **Pages** — Home, Resume, Skills, Projects, Contact
5. **Features** — Search, filter, validation, loading/success states, transitions
6. **Polish** — Responsive, accessibility, animation, empty/error states, performance
7. **QA** — Full checklist verification
8. **Deploy** — Vercel

### Commit Convention
```
feat: initialize react portfolio
feat: add routing structure
feat: implement navbar and layout
feat: add bilingual support
feat: build home page
feat: build resume page
feat: build skills page
feat: build projects page
feat: add project filtering
feat: build contact form
feat: add route transitions
feat: improve responsive layout
fix: resolve mobile navigation issue
fix: improve form validation
chore: update README
```

No meaningless commits (update, fix, test, abc, final).

---

## Environment Variables

- Never expose secrets in source code
- Only public config uses `VITE_*` prefix
- `.env` in `.gitignore`, never committed

---

## Error Handling

- Missing project image → fallback image
- Missing Demo → disabled button
- Empty filter results → bilingual "No projects found"
- Form error → error state (not crash)
- Invalid route → 404 page

---

## Before Each Feature

1. Read this `CLAUDE.md`
2. Inspect existing project structure
3. Reuse existing components
4. Do not rewrite working code
5. Keep architecture consistent
6. No unnecessary dependencies
7. Required features before bonus features
8. Verify TypeScript and ESLint after changes
9. Do not claim completion without checking

## Definition of Done

The project is NOT complete until:
- All routes work with active states
- Route transitions animate
- Language switcher works on ALL pages with ALL text
- Projects are data-driven with search + filter
- Contact form validates, shows loading/success/error
- Responsive on mobile, tablet, desktop
- Accessible (semantic HTML, labels, focus, keyboard)
- Zero TypeScript/ESLint/console errors
- Clean build
- Deployed on Vercel
