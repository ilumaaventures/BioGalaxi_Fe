import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  hasArrow = true,
  size = 'md',
  type = 'button',
  ariaLabel,
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/40 group active:scale-[0.98] select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  }[size] || 'text-sm px-6 py-2.5 gap-2';

  const variantStyles = {
    primary: 'bg-[#3B1366] text-white hover:bg-[#4C1D95] shadow-[0_4px_16px_rgba(59,19,102,0.2)] hover:shadow-[0_6px_20px_rgba(59,19,102,0.3)]',
    secondary: 'bg-transparent text-[#3B1366] border border-[#3B1366]/80 hover:bg-[#F8F6FD] hover:border-[#3B1366]',
    ghost: 'bg-white/80 text-[#3B1366] border border-[#6D28D9]/20 hover:bg-white hover:border-[#10B981]',
  }[variant] || '';

  const content = (
    <>
      <span>{children}</span>
      {hasArrow && (
        <ArrowRight 
          size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} 
          className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
          strokeWidth={2}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
