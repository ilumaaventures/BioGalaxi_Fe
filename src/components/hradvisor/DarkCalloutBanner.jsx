import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import biotechLabImg from '../../assets/biotech_lab_hd.jpg';

export default function DarkCalloutBanner() {
  const { theme } = useTheme();

  return (
    <section className="relative py-16 sm:py-18 lg:py-20 overflow-hidden text-white">
      {/* Background Life Sciences Photographic Ultra-HD Image with Deep Dynamic Theme Overlay */}
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: theme.primaryDeep }}>
        <img
          src={biotechLabImg}
          alt="Life sciences laboratory research innovation"
          className="w-full h-full object-cover object-center image-rendering-auto"
          loading="eager"
        />
        {/* Dynamic theme translucent color wash */}
        <div
          className="absolute inset-0 mix-blend-multiply opacity-85"
          style={{ backgroundColor: theme.primaryDark }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${theme.primaryDeep}E6, ${theme.primaryDark}B3, ${theme.accent}33)`
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Quotation Mark in Accent Color */}
        <div
          style={{ color: theme.accent }}
          className="text-[42px] sm:text-5xl lg:text-[54px] font-serif leading-none mb-3 select-none"
        >
          &rdquo;
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-carnas leading-[1.2] tracking-normal mb-6 max-w-4xl">
          <span className="block">Focus on Your Science & Mission</span>
          <span className="block">
            While <span style={{ color: theme.accent }}>We Transform Your People Operations</span>
          </span>
        </h2>

        {/* Brand Attribution */}
        <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.25em] text-white/95">
          BIO GALAXI &mdash; YOUR INTEGRATED TALENT PARTNER
        </span>

      </div>
    </section>
  );
}