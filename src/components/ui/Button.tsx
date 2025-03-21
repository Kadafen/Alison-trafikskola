import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  ariaLabel,
}) => {
  // Variants - enhanced for professional, sophisticated look
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:-translate-y-0.5',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:-translate-y-0.5',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5',
    ghost: 'text-blue-600 hover:bg-blue-50 transition-all duration-300',
    subtle: 'bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-300',
  };
  
  // Sizes with improved vertical alignment
  const sizes = {
    sm: 'py-1.5 px-3.5 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl',
  };
  
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg ${
    fullWidth ? 'w-full' : ''
  } ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const iconClasses = 'w-5 h-5';
  
  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className={`${iconClasses} mr-2`}>{icon}</span>
      )}
      
      <span>{children}</span>
      
      {icon && iconPosition === 'right' && (
        <span className={`${iconClasses} ml-2`}>{icon}</span>
      )}
    </>
  );
  
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.01 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  };
  
  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link 
          href={href} 
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;