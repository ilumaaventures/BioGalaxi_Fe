import React from 'react';

export default function WavyDivider({ 
  flip = false, 
  fillColor = '#F4F9FF', 
  className = '',
  height = 40 
}) {
  return (
    <div 
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full block"
        style={{ height: `${height}px` }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
