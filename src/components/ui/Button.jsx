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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2F7BEA]/40 group active:scale-[0.98] select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  }[size] || 'text-sm px-6 py-2.5 gap-2';

  const variantStyles = {
    primary: 'bg-[#0A2A5E] text-white hover:bg-[#123B7A] shadow-[0_4px_16px_rgba(10,42,94,0.2)] hover:shadow-[0_6px_20px_rgba(10,42,94,0.3)]',
    secondary: 'bg-transparent text-[#0A2A5E] border border-[#0A2A5E]/80 hover:bg-[#E3EFFE]/70 hover:border-[#0A2A5E]',
    ghost: 'bg-white/80 text-[#0A2A5E] border border-[rgba(47,123,234,0.2)] hover:bg-white hover:border-[#2F7BEA]',
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
