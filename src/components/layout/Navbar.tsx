import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { navItems } from "@/data/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/resume": t.nav.resume,
    "/skills": t.nav.skills,
    "/projects": t.nav.projects,
    "/contact": t.nav.contact,
    menu: t.nav.menu,
    closeMenu: t.nav.closeMenu,
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60">
      {/* Blur lives on <nav> — backdrop-filter on the header would create a containing
          block that traps MobileMenu's position:fixed inside the 76px-tall header */}
      <nav className="w-full bg-bg/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-full items-center justify-between px-5 sm:px-8 lg:px-[60px]">
          {/* Logo */}
          <NavLink
            to="/"
            className="group shrink-0 text-xl font-bold tracking-[-0.04em] text-text-primary transition-colors duration-300 hover:text-accent"
          >
            <span className="text-accent transition-transform duration-300 group-hover:inline-block group-hover:translate-x-0.5">
              Portfolio
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`
                }
              >
                {navLabels[item.path]}

                {/* Active / Hover indicator */}
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-4">
            {/* Theme Toggle */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Language */}
            <div className="hidden sm:block border-l border-border pl-4">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu */}
            <button
              className="flex h-10 w-10 items-center justify-center border border-border text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu
              }
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLabels={navLabels}
      />
    </header>
  );
}
