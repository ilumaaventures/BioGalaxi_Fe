import React, { useState, useEffect } from 'react';
import testimonialTeamHd from '../../assets/hradvisor/testimonials_team_hd.jpg';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: 'Bio Galaxi is an integrated talent partner that truly transformed our people operations. Their combination of the TMS platform and Fractional CHRO leadership helped us scale our clinical teams with speed and compliance.',
      author: 'DR. ARUN SHARMA',
      role: 'Chief Scientific Officer, GeneTech Labs',
    },
    {
      id: 2,
      quote: 'Having technology, leadership advisory, and workforce execution under one roof saved our executive team months of friction. They understand the nuances of the life sciences industry like no other.',
      author: 'ELIZABETH CHEN',
      role: 'VP of Operations, BioTherapeutics Inc.',
    },
    {
      id: 3,
      quote: 'From executive staffing to employee welfare and rewards, Bio Galaxi provided our research organization with a complete talent partnership from strategy to daily execution.',
      author: 'MARCUS VANCE',
      role: 'Managing Director, PharmaInnovate',
    },
  ];

  const changeSlide = (newIdx) => {
    if (newIdx === currentIdx) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIdx(newIdx);
      setIsFading(false);
    }, 180);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 180);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIdx];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-white overflow-hidden py-10 lg:py-14"
    >
      {/* Soft Lavender Background Bleed
          - On Desktop: Begins at 36px from section top
          - Covers left edge of screen to 61% of viewport width
          - Ends 56px lower than photo bottom, forming the signature ledge under photo */}
      <div className="absolute hidden lg:block left-0 top-[36px] w-[61%] h-[385px] bg-[#F8F6FD] z-0" />

      {/* Main Grid Container aligned with site width (1200px) */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Mobile View: Clean Stacked Layout */}
        <div className="lg:hidden w-full bg-[#F8F6FD] overflow-hidden">
          <div className="w-full h-[240px] sm:h-[300px]">
            <img
              src={testimonialTeamHd}
              alt="Bio Galaxi life sciences research leadership and clinical team scaling"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="p-7 sm:p-9">
            <div className="text-[#10B981] text-4xl font-serif leading-none mb-3 select-none">
              &ldquo;
            </div>
            <p className="text-[16px] sm:text-[17px] font-sans text-[#222222] font-normal leading-[1.45] mb-4">
              {current.quote}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#6D28D9]">
                {current.author}
              </span>
              <span className="text-[11px] text-[#666666]">
                {current.role}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => changeSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIdx === i ? 'w-5 bg-[#10B981]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View: Architectural Stepped Overlap */}
        <div className="hidden lg:block relative w-full h-[410px]">
          
          {/* Left Column: Quote Content */}
          <div className="w-[380px] xl:w-[410px] pt-14 pb-8 flex flex-col justify-between h-[375px]">
            <div>
              {/* Quotation Mark */}
              <div className="text-[#10B981] text-4xl xl:text-5xl font-serif leading-none mb-3 select-none">
                &ldquo;
              </div>

              {/* Reduced, Refined Font Size Quote */}
              <p 
                className={`text-[17px] xl:text-[18px] font-sans text-[#222222] font-normal leading-[1.46] mb-5 transition-opacity duration-200 ${
                  isFading ? 'opacity-40' : 'opacity-100'
                }`}
              >
                {current.quote}
              </p>

              {/* Author & Role */}
              <div 
                className={`flex flex-wrap items-baseline gap-x-1.5 gap-y-1 transition-opacity duration-200 ${
                  isFading ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#6D28D9]">
                  {current.author}
                </span>
                <span className="text-[12px] text-[#666666]">
                  {current.role}
                </span>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => changeSlide(i)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                    currentIdx === i ? 'w-5 bg-[#10B981]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Photograph
              - Top: 0px (36px higher than light-blue background)
              - Height: 355px (ends 56px before light-blue background bottom)
              - Width: 54% (starts at left 46%, overlaps light-blue from 46% to 61%) */}
          <div className="absolute -top-15 right-0 w-[53%] xl:w-[52%] h-[355px] overflow-hidden shadow-sm">
            <img
              src={testimonialTeamHd}
              alt="Bio Galaxi life sciences research leadership and clinical team scaling"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
