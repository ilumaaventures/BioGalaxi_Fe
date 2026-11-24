import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Testimonials() {
  const { theme } = useTheme();
  const testimonials = [
    {
      id: 1,
      quote:
        'Bio Galaxi transformed our people operations. Their combination of the TMS platform and Fractional CHRO leadership helped us scale clinical teams with speed and compliance.',
      role: 'Chief Scientific Officer',
      tag: 'Clinical Scaling & TMS',
    },
    {
      id: 2,
      quote:
        'Having technology, leadership advisory, and workforce execution under one roof saved our executive team months of friction. They understand life sciences like no other.',
      role: 'VP of Operations',
      tag: 'Executive Leadership',
    },
    {
      id: 3,
      quote:
        'From executive staffing to employee welfare and rewards, Bio Galaxi provided our research organization with a complete talent partnership from strategy to daily execution.',
      role: 'Managing Director',
      tag: 'Talent Partnership',
    },
  ];

  // Repeat the 3 cards to allow continuous infinite loop scrolling
  const carouselItems = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll loop from right to left
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId;
    const scrollSpeed = 0.8; // Smooth gliding speed

    const step = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += scrollSpeed;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  // Click & Drag to scroll right or left with mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-white py-10 sm:py-12 lg:py-14 overflow-hidden"
    >
      {/* Scrollable Container with Smooth Edge Fade */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Interactive Track: Moves Right-to-Left, Draggable & Scrollable with Mouse */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="flex gap-4 sm:gap-5 px-6 overflow-x-auto select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2"
        >
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{ backgroundColor: theme.softTint }}
              className="w-[380px] sm:w-[460px] lg:w-[500px] flex-shrink-0 hover:bg-white rounded-xl py-4 px-5 sm:py-4.5 sm:px-6 flex flex-col justify-between border border-slate-200/80 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Top: Quote Icon + Category Tag */}
                <div className="flex items-center justify-between mb-2">
                  <div
                    style={{ backgroundColor: `${theme.accent}1A`, color: theme.accent }}
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <span
                    style={{ color: theme.primary }}
                    className="text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white border border-slate-200/80 shadow-xs"
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-[12px] sm:text-[12.5px] text-[#333333] font-normal leading-[1.58] mb-3">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom: Role Only + Verified Partner Icon */}
              <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wide text-[#2D1B36]">
                  {item.role}
                </span>

                <div
                  style={{ backgroundColor: `${theme.accent}1A`, color: theme.accent }}
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  title="Verified Client"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
