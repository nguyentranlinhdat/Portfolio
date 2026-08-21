import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-lg">{subtitle}</p>
      )}
      <div className="mt-4 w-12 h-0.5 bg-accent" />
    </motion.div>
  );
}
