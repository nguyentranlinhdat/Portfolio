import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { navItems } from '@/data/navigation';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLabels: Record<string, string>;
}

export function MobileMenu({ isOpen, onClose, navLabels }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Focus management: move focus into the drawer on open, restore it on close
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const menu = menuRef.current;
    if (menu) {
      const firstFocusable = menu.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      firstFocusable?.focus();
    }

    return () => {
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    };
  }, [isOpen]);

  // Lock background scroll while the drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Keyboard support: Escape to close + Tab focus trap within the drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const menu = menuRef.current;
      if (!menu) return;

      const focusable = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay — full viewport (fixed elements must live outside the blurred header) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-bg/70 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={navLabels.menu ?? 'Navigation menu'}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-[60] flex w-[85%] max-w-sm flex-col bg-surface md:hidden"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {navLabels.menu}
              </span>
              <button
                onClick={onClose}
                aria-label={navLabels.closeMenu ?? 'Close menu'}
                className="flex h-10 w-10 items-center justify-center border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 overflow-y-auto px-6 py-4"
            >
              {navItems.map((item, index) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 border-b border-border py-3.5 text-2xl font-semibold transition-colors ${
                        index === navItems.length - 1 ? 'border-b-0' : ''
                      } ${isActive ? 'text-accent' : 'text-text-primary hover:text-accent'}`
                    }
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {navLabels[item.path]}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            {/* Drawer footer — theme + language controls */}
            <div className="mt-auto flex items-center gap-3 border-t border-border px-6 py-5">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
