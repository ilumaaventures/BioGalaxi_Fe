
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';

import heroLeadershipHd from '../../assets/hero_leadership_hd.jpg';
import heroExecutiveHd from '../../assets/hero_executive_hd.jpg';
import logoWhite from '../../assets/logo_biogalaxi_white.png';
import logoDark from '../../assets/logo_biogalaxi.png';

export default function HRAdvisorHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'INTEGRATED TALENT PARTNER',
      titleLine1: 'Transforming',
      titleLine2: 'People Functions',
      description:
        'Empowering business growth through technology, strategic leadership and execution capabilities.',
      buttonText: 'EXPLORE SOLUTIONS',
      buttonHref: '#services',
      image: heroLeadershipHd,
      alt: 'Bio Galaxi strategic talent advisory and executive leadership consultation',
    },
    {
      id: 2,
      tag: 'BIO, PHARMA & LIFE SCIENCES',
      titleLine1: 'Human Resource',
      titleLine2: 'Solution Partner',
      description:
        'Bringing technology, executive CHRO leadership, and operational support together under one roof.',
      buttonText: 'OUR TECHNOLOGY',
      buttonHref: '#about',
      image: heroExecutiveHd,
      alt: 'Modern life sciences innovation center and corporate people operations',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  // Ultra-smooth eased gradient: White on Left Side (Logo), Purple on Right Side (Nav & Canvas)
  const brandGradient =
    'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F9F7FC 19.5%, #EAE4F2 21%, #CDC0E1 22.5%, #AE94CE 24%, #8D6ABD 25.5%, #6E44AA 26.5%, #56289B 27.5%, #4C1D95 28.5%, #4C1D95 100%)';

  return (
    <div
      id="home"
      className="w-full bg-white select-none font-sans overflow-hidden"
    >
      {/* ================= HEADER ================= */}

      <header
        className="w-full relative z-30 border-b border-slate-100/60"
        style={{ background: brandGradient }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">

          {/* Left Section: Logo on White */}

          <div className="w-full lg:w-[28%] px-6 sm:px-10 lg:pl-[5.8%] lg:pr-4 py-5 flex items-center justify-between">

            {/* Bio Galaxi Official Brand Logo (Dark on White) */}

            <a
              href="#home"
              className="flex items-center group py-0.5"
              aria-label="Bio Galaxi Home"
            >
              <img
                src={logoDark}
                alt="Bio Galaxi - Integrated Talent Partner"
                className="h-10 sm:h-11 w-auto max-h-[46px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>

          </div>

          {/* Right Section: Navigation Menu + Phone, Social & Search on Purple */}

          <div className="w-full lg:w-[72%] px-6 sm:px-8 lg:pr-[5.8%] lg:pl-6 py-4 lg:py-0 flex items-center justify-between lg:justify-end gap-6 xl:gap-8">

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[12px] font-extrabold tracking-[0.18em] uppercase">

              <a
                href="#home"
                className="text-[#10B981] transition-colors"
              >
                HOME
              </a>

              <a
                href="#services"
                className="text-white hover:text-[#10B981] transition-colors"
              >
                SOLUTIONS
              </a>

              <a
                href="#about"
                className="text-white hover:text-[#10B981] transition-colors"
              >
                ABOUT US
              </a>

              <a
                href="#testimonials"
                className="text-white hover:text-[#10B981] transition-colors"
              >
                IMPACT
              </a>

              <a
                href="#contacts"
                className="text-white hover:text-[#10B981] transition-colors"
              >
                CONTACT
              </a>

            </nav>

            <span className="text-white/30 font-light hidden lg:inline">
              |
            </span>

            {/* Phone */}

            <div className="flex items-center gap-2">
              <Phone size={13} className="text-[#10B981]" />

              <a
                href="tel:+910000000000"
                className="font-bold text-white text-[12px] tracking-tight hover:text-[#10B981] transition-colors"
              >
                +91 00000 00000
              </a>
            </div>

            <span className="text-white/30 font-light hidden sm:inline">
              |
            </span>

            {/* Social Icons */}

            <div className="flex items-center gap-3 text-white text-xs">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#10B981] transition-colors"
              >
                <FaLinkedinIn size={12} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:text-[#10B981] transition-colors"
              >
                <FaXTwitter size={11} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#10B981] transition-colors"
              >
                <FaYoutube size={13} />
              </a>

            </div>

          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}

      <div className="w-full relative pb-10 sm:pb-12 lg:pb-16">

        {/* Solid Purple Background + Narrow 15% White Transition */}

        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ background: brandGradient }}
        />

        {/* Main Slider Container */}

        <div className="relative z-10 w-[92%] sm:w-[90%] lg:w-[85.2%] ml-[4%] sm:ml-[5%] lg:ml-[5.8%] pt-2 sm:pt-3">

          <div className="w-full bg-white rounded-none shadow-[0_15px_45px_rgba(36,10,62,0.18)] overflow-hidden relative min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex items-center">

            {/* Automatic Cross-Fade Slider */}

            <AnimatePresence mode="popLayout">

              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >

                {/* Background Photo */}

                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-right sm:object-center image-rendering-auto"
                  loading="eager"
                />

                {/* Soft White Scrim on Left Side */}

                <div className="absolute inset-y-0 left-0 w-full sm:w-[62%] lg:w-[50%] bg-gradient-to-r from-white via-white/96 to-transparent pointer-events-none" />

              </motion.div>

            </AnimatePresence>

            {/* Slide Text Content */}

            <div className="relative z-10 px-8 sm:px-14 lg:px-16 py-10 max-w-xl pointer-events-auto">

              <AnimatePresence mode="wait">

                <motion.div
                  key={`text-${slide.id}`}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="flex flex-col items-start"
                >

                  {/* Eyebrow */}

                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#6D28D9] mb-4">
                    {slide.tag}
                  </span>

                  {/* Main Heading */}

                  <h1 className="text-3xl sm:text-4xl lg:text-[50px] text-[#2D1B36] leading-[1.12] tracking-normal mb-4 font-carnas">
                    <span className="block">
                      {slide.titleLine1}
                    </span>

                    <span className="block">
                      {slide.titleLine2}
                    </span>
                  </h1>

                  {/* Description */}

                  <p className="text-sm text-slate-600 font-normal leading-relaxed mb-8 max-w-md">
                    {slide.description}
                  </p>

                  {/* Solid Purple CTA Button */}

                  <a
                    href={slide.buttonHref}
                    className="inline-flex items-center justify-center px-9 py-3.5 bg-[#581C87] hover:bg-[#10B981] text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-md hover:shadow-lg active:scale-95 rounded-none"
                  >
                    {slide.buttonText}
                  </a>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

          {/* ================= SLIDER CONTROLS ================= */}

          <div className="w-full pt-4 sm:pt-5 flex items-center justify-between">

            {/* Previous / Next Arrows (Left side on White background: Dark Purple) */}

            <div className="flex items-center gap-7 text-[#4C1D95]">

              <button
                type="button"
                onClick={prevSlide}
                className="text-[#4C1D95] hover:text-[#10B981] transition-colors p-1 flex items-center group cursor-pointer focus:outline-none"
                aria-label="Previous slide"
              >
                <span className="text-2xl sm:text-3xl leading-none font-light group-hover:-translate-x-1 transition-transform">
                  &larr;
                </span>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="text-[#4C1D95] hover:text-[#10B981] transition-colors p-1 flex items-center group cursor-pointer focus:outline-none"
                aria-label="Next slide"
              >
                <span className="text-2xl sm:text-3xl leading-none font-light group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>

            </div>

            {/* Slide Indicators (Right side on Purple background: Emerald & Translucent White) */}

            <div className="flex items-center gap-2 pr-4 sm:pr-8">

              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentSlide === idx
                      ? 'w-6 bg-[#10B981]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
