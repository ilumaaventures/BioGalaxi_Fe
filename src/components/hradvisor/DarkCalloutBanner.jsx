import React from 'react';
import biotechLabImg from '../../assets/biotech_lab_hd.jpg';

export default function DarkCalloutBanner() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden text-white">
      {/* Background Life Sciences Photographic Ultra-HD Image with Deep Mediterranean Blue Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#004B73]">
        <img
          src={biotechLabImg}
          alt="Life sciences laboratory research innovation"
          className="w-full h-full object-cover object-center image-rendering-auto"
          loading="eager"
        />
        {/* Crystal-clear blue translucent color wash */}
        <div className="absolute inset-0 bg-[#007EA8]/82 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#024F75]/55" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Large Lime-Green Quotation Mark */}
        <div className="text-[#B9D057] text-6xl sm:text-7xl font-serif leading-none mb-3 select-none">
          &rdquo;
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-carnas leading-[1.2] tracking-normal mb-8 max-w-4xl">
          <span className="block">Focus on Your Science & Mission</span>
          <span className="block">
            While <span className="text-[#B9D057]">We Transform Your People Operations</span>
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