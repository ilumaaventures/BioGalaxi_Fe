import React from 'react';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white/85 backdrop-blur-md rounded-2xl border border-[rgba(47,123,234,0.15)] shadow-[0_10px_30px_rgba(30,90,190,0.08)] ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(47,123,234,0.3)] hover:shadow-[0_18px_40px_rgba(30,90,190,0.14)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
