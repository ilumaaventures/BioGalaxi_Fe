import React from 'react';
import logoDark from '../../assets/logo_biogalaxi.png';
import logoWhite from '../../assets/logo_biogalaxi_white.png';

export default function Logo({
  className = '',
  variant = 'dark',
  height = 'h-9',
  alt = 'Bio Galaxi - Integrated Talent Partner'
}) {
  const src = variant === 'white' ? logoWhite : logoDark;

  return (
    <img
      src={src}
      alt={alt}
      className={`${height} w-auto object-contain flex-shrink-0 transition-transform duration-200 ${className}`}
    />
  );
}
