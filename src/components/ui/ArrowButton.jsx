import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ArrowButton({ href = '#', ariaLabel = 'Learn more', className = '' }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`w-9 h-9 rounded-full bg-white border border-[#2F7BEA]/20 flex items-center justify-center text-[#0A2A5E] shadow-sm transition-all duration-300 hover:bg-[#0A2A5E] hover:text-white hover:border-[#0A2A5E] hover:shadow-md group ${className}`}
    >
      <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}
