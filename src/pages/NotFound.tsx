import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { PageTransition } from '@/components/layout/PageTransition';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-8xl font-bold text-accent mb-4"
          >
            {t.notFound.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-text-secondary mb-8"
          >
            {t.notFound.message}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              {t.notFound.goHome}
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
