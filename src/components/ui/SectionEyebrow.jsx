import React from 'react';

export default function SectionEyebrow({ text, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 mb-3.5 ${className}`}>
      <span className="w-6 h-[2px] bg-[#10B981] rounded-full inline-block flex-shrink-0" />
      <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-[#10B981] uppercase">
        {text}
      </span>
    </div>
  );
}
