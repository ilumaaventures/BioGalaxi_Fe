import React, { useState } from 'react';

export default function ServicesGrid() {
  const [activeId, setActiveId] = useState(4); // Default active on Staffing & Workforce

  const services = [
    {
      id: 1,
      titleLine1: 'TALENT MANAGEMENT',
      titleLine2: 'SYSTEM (TMS)',
      desc: 'A technology platform to support and simplify people management processes.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="26" rx="2" />
          <line x1="18" y1="40" x2="30" y2="40" />
          <line x1="24" y1="34" x2="24" y2="40" />
          <line x1="12" y1="16" x2="22" y2="16" />
          <line x1="12" y1="22" x2="18" y2="22" />
          <circle cx="32" cy="21" r="5" />
        </svg>
      ),
    },
    {
      id: 2,
      titleLine1: 'FRACTIONAL CHRO',
      titleLine2: 'SOLUTIONS',
      desc: 'Experienced talent leadership and strategic HR guidance for growing organisations.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="7" />
          <path d="M10 38 C10 30 16 26 24 26 C32 26 38 30 38 38" />
          <polygon points="24,26 21,32 27,32" fill="#10B981" />
          <line x1="24" y1="32" x2="24" y2="38" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 3,
      titleLine1: 'END-TO-END TALENT',
      titleLine2: 'MANAGEMENT',
      desc: 'Comprehensive support to manage and transform organisational people functions.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="12" r="5" />
          <circle cx="12" cy="36" r="5" />
          <circle cx="36" cy="36" r="5" />
          <line x1="24" y1="17" x2="14" y2="31" />
          <line x1="24" y1="17" x2="34" y2="31" />
          <line x1="17" y1="36" x2="31" y2="36" />
        </svg>
      ),
    },
    {
      id: 4,
      titleLine1: 'STAFFING & WORKFORCE',
      titleLine2: 'SOLUTIONS',
      desc: 'Workforce solutions that help life sciences organisations meet evolving talent requirements.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 28 V16" />
          <path d="M24 20 C22 17 18 16 16 18 C14 20 16 24 24 24" />
          <path d="M24 16 C26 13 30 12 32 14 C34 16 32 20 24 20" />
          <path d="M10 34 C14 34 18 30 24 30 C28 30 34 32 38 31 C42 30 44 28 44 28" />
          <path d="M10 40 C16 40 20 36 26 36 C32 36 40 39 44 36" />
        </svg>
      ),
    },
    {
      id: 5,
      titleLine1: 'EMPLOYEE',
      titleLine2: 'ENGAGEMENT',
      desc: 'Initiatives and experiences that help build connected and engaged workplaces.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 38 C24 38 10 29 10 18 C10 13 14 9 19 9 C22 9 23.5 11 24 12 C24.5 11 26 9 29 9 C34 9 38 13 38 18 C38 29 24 38 24 38 Z" />
        </svg>
      ),
    },
    {
      id: 6,
      titleLine1: 'REWARDS &',
      titleLine2: 'RECOGNITION',
      desc: 'Meaningful recognition and reward initiatives that celebrate employee contributions.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="18" r="10" />
          <circle cx="24" cy="18" r="5" />
          <path d="M19 26 L16 38 L24 33 L32 38 L29 26" />
        </svg>
      ),
    },
    {
      id: 7,
      titleLine1: 'EMPLOYEE',
      titleLine2: 'WELFARE',
      desc: 'People-focused initiatives that support employee wellbeing and workplace experience.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 8 L38 14 V24 C38 33 24 40 24 40 C24 40 10 33 10 24 V14 L24 8 Z" />
          <path d="M24 16 V28 M18 22 H30" />
        </svg>
      ),
    },
    {
      id: 8,
      titleLine1: 'CORPORATE',
      titleLine2: 'GIFTING',
      desc: 'Thoughtful corporate gifting solutions for employees, partners and business relationships.',
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="18" width="32" height="22" rx="2" />
          <line x1="8" y1="26" x2="40" y2="26" />
          <line x1="24" y1="18" x2="24" y2="40" />
          <path d="M24 18 C24 18 20 10 16 12 C12 14 16 18 24 18 Z" />
          <path d="M24 18 C24 18 28 10 32 12 C36 14 32 18 24 18 Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="pt-20 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Top 2-Column Split: Title & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-6">
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#6D28D9] block mb-3">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-[#2D1B36] font-carnas leading-[1.18] tracking-normal">
              Everything Your People Function Needs. Under One Roof.
            </h2>
          </div>

          {/* Right Column: Paragraph Description from User's Prompt */}
          <div className="lg:col-span-6 lg:pt-8 text-[#666666] text-sm leading-[1.8] space-y-4">
            <p>
              Our offerings go beyond traditional recruitment and include our Talent Management System (TMS) platform, Fractional CHRO solutions, end-to-end talent function management, staffing and workforce solutions.
            </p>
            <p>
              We also deliver employee engagement, Rewards & Recognition, employee welfare and corporate gifting &mdash; bringing together the right technology, strategic expertise and operational support.
            </p>
          </div>

        </div>

        {/* 8 Core Offerings Grid (4x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const isSelected = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`p-7 sm:p-8 flex flex-col items-center text-center justify-between min-h-[260px] cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#3B1366] to-[#581C87] text-white shadow-xl shadow-purple-950/20 scale-[1.02] ring-2 ring-[#10B981]/50'
                    : 'bg-[#F8F6FD] text-[#333333] hover:bg-white hover:shadow-md hover:border hover:border-[#6D28D9]/20'
                }`}
              >
                <div className={`mb-5 flex items-center justify-center ${
                  isSelected ? 'text-[#10B981]' : 'text-[#6D28D9]'
                }`}>
                  {item.icon}
                </div>

                <div>
                  <h4 className={`text-xs sm:text-[13px] font-extrabold tracking-[0.16em] uppercase leading-relaxed mb-2.5 ${
                    isSelected ? 'text-white' : 'text-[#333333]'
                  }`}>
                    <span className="block">{item.titleLine1}</span>
                    <span className="block">{item.titleLine2}</span>
                  </h4>
                  <p className={`text-[11px] leading-relaxed line-clamp-3 ${
                    isSelected ? 'text-white/85' : 'text-[#777777]'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}