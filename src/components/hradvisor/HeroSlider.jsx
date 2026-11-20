import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Shield, Cpu } from 'lucide-react';
import heroSphereImg from '../../assets/generated/hero_sphere.png';
import buildingImg from '../../assets/building.jpg';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'EXPERT KNOWLEDGE',
      title: 'Transforming The Workplace.',
      highlight: 'Empowering Growth.',
      description: 'Your integrated talent partner, combining proprietary TMS technology, strategic leadership and specialized workforce execution for Bio, Pharma and Life Sciences.',
      primaryBtn: { label: 'Explore Solutions', href: '#services' },
      secondaryBtn: { label: 'Talk to Our Team', href: '#contact' },
      bgGradient: 'from-[#1B062E] via-[#3B1366] to-[#581C87]',
      badge: 'Life Sciences Focus',
    },
    {
      id: 2,
      tag: 'STRATEGIC ADVISORY',
      title: 'Human Resource',
      highlight: 'Solution Partner.',
      description: 'With seasoned Fractional CHROs and automated TMS analytics at your disposal, face complex hiring, GxP compliance and retention challenges with confidence.',
      primaryBtn: { label: 'Discover TMS Platform', href: '#ecosystem' },
      secondaryBtn: { label: 'Schedule Consultation', href: '#contact' },
      bgGradient: 'from-[#120324] via-[#260A3F] to-[#4C1D95]',
      badge: 'GxP Certified Pipelines',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div id="home" className="relative min-h-[580px] lg:min-h-[660px] overflow-hidden text-white flex items-center">
      {/* Background with Dark Corporate Gradient Sheen */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-all duration-1000 ease-in-out`} />
      
      {/* Background Graphic Texture */}
      <div className="absolute inset-0 subtle-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Slide Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Block (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#10B981] text-xs font-extrabold uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>{slide.tag}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight mb-4">
              <span>{slide.title}</span><br />
              <span className="text-[#10B981]">{slide.highlight}</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed mb-8 font-normal">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={slide.primaryBtn.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#10B981] text-[#1B062E] text-xs font-extrabold uppercase tracking-wider hover:bg-white hover:text-[#3B1366] transition-all shadow-md active:scale-95"
              >
                <span>{slide.primaryBtn.label}</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>

              <a
                href={slide.secondaryBtn.href}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-transparent border-2 border-white/80 text-white text-xs font-extrabold uppercase tracking-wider hover:bg-white/10 transition-all shadow-2xs active:scale-95"
              >
                {slide.secondaryBtn.label}
              </a>
            </div>

          </div>

          {/* Right Visual (approx 42%) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Glowing Aura Ring */}
              <div className="absolute inset-4 rounded-full bg-white/5 border border-white/15 animate-spin-slow pointer-events-none" />
              <img
                src={heroSphereImg}
                alt="Bio Galaxi Connected Talent Network"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-all z-20 backdrop-blur-xs"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-all z-20 backdrop-blur-xs"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-[#10B981]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
