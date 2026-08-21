import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
}

const variants = {
  primary: 'bg-accent text-bg hover:bg-accent-hover font-semibold',
  secondary: 'bg-surface text-text-primary hover:bg-surface-elevated border border-border',
  outline: 'bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  disabled = false,
  type = 'button',
  className,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 font-medium',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  if (href && disabled) {
    return (
      <span className={baseClasses}>
        {children}
      </span>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
