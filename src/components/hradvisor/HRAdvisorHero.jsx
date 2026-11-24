
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';

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

  const { theme, heroWhiteSide, heroBackground } = useTheme();
  const isRightWhite = heroWhiteSide === 'right';

  return (
    <div
      id="home"
      className="w-full bg-white select-none font-sans overflow-hidden"
    >
      {/* ================= HEADER ================= */}

      <header
        className="w-full relative z-30 border-b border-slate-100/60 transition-all duration-300"
        style={{ background: heroBackground }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">

          {/* Left Section: Logo */}

          <div className="w-full lg:w-[28%] px-6 sm:px-10 lg:pl-[5.8%] lg:pr-4 py-5 flex items-center justify-between">

            {/* Bio Galaxi Official Brand Logo (Dark on White, White on Dark) */}

            <a
              href="#home"
              className="flex items-center group py-0.5"
              aria-label="Bio Galaxi Home"
            >
              <img
                src={isRightWhite ? logoWhite : logoDark}
                alt="Bio Galaxi - Integrated Talent Partner"
                className="h-10 sm:h-11 w-auto max-h-[46px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>

          </div>

          {/* Right Section: Navigation Menu + Phone, Social & Search */}

          <div className="w-full lg:w-[72%] px-6 sm:px-8 lg:pr-[5.8%] lg:pl-6 py-4 lg:py-0 flex items-center justify-between lg:justify-end gap-6 xl:gap-8">

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[12px] font-extrabold tracking-[0.18em] uppercase">

              <a
                href="#home"
                style={{ color: isRightWhite ? theme.primary : theme.accent }}
                className="transition-colors font-extrabold"
              >
                HOME
              </a>

              <a
                href="#services"
                className={`${isRightWhite ? 'text-[#2D1B36] hover:text-[#555]' : 'text-white hover:opacity-90'} transition-opacity`}
              >
                SOLUTIONS
              </a>

              <a
                href="#about"
                className={`${isRightWhite ? 'text-[#2D1B36] hover:text-[#555]' : 'text-white hover:opacity-90'} transition-opacity`}
              >
                ABOUT US
              </a>

              <a
                href="#testimonials"
                className={`${isRightWhite ? 'text-[#2D1B36] hover:text-[#555]' : 'text-white hover:opacity-90'} transition-opacity`}
              >
                IMPACT
              </a>

              <a
                href="#contacts"
                className={`${isRightWhite ? 'text-[#2D1B36] hover:text-[#555]' : 'text-white hover:opacity-90'} transition-opacity`}
              >
                CONTACT
              </a>

            </nav>

            <span className={`${isRightWhite ? 'text-slate-300' : 'text-white/30'} font-light hidden lg:inline`}>
              |
            </span>

            {/* Phone */}

            <div className="flex items-center gap-2">
              <Phone size={13} style={{ color: isRightWhite ? theme.primary : theme.accent }} />

              <a
                href="tel:+910000000000"
                className={`font-bold ${isRightWhite ? 'text-[#2D1B36]' : 'text-white'} text-[12px] tracking-tight hover:opacity-80 transition-opacity`}
              >
                +91 00000 00000
              </a>
            </div>

            <span className={`${isRightWhite ? 'text-slate-300' : 'text-white/30'} font-light hidden sm:inline`}>
              |
            </span>

            {/* Social Icons */}

            <div className={`flex items-center gap-3 ${isRightWhite ? 'text-[#2D1B36]' : 'text-white'} text-xs`}>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-75 transition-opacity"
              >
                <FaLinkedinIn size={12} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:opacity-75 transition-opacity"
              >
                <FaXTwitter size={11} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:opacity-75 transition-opacity"
              >
                <FaYoutube size={13} />
              </a>

            </div>

          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}

      <div className="w-full relative pb-10 sm:pb-12 lg:pb-16">

        {/* Dynamic Hero Canvas Background (Gradient or Solid, Left or Right) */}

        <div
          className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
          style={{ background: heroBackground }}
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

                  <span
                    style={{ color: theme.primary }}
                    className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase mb-4"
                  >
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

                  {/* Dynamic Themed CTA Button */}

                  <a
                    href={slide.buttonHref}
                    style={{ backgroundColor: theme.primary }}
                    className="inline-flex items-center justify-center px-9 py-3.5 hover:brightness-110 text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-md hover:shadow-lg active:scale-95 rounded-none"
                  >
                    {slide.buttonText}
                  </a>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

          {/* ================= SLIDER CONTROLS ================= */}

          <div className="w-full pt-4 sm:pt-5 flex items-center justify-between">

            {/* Previous / Next Arrows */}

            <div className="flex items-center gap-7">

              <button
                type="button"
                onClick={prevSlide}
                style={{ color: isRightWhite ? '#FFFFFF' : theme.primary }}
                className="hover:opacity-80 transition-colors p-1 flex items-center group cursor-pointer focus:outline-none"
                aria-label="Previous slide"
              >
                <span className="text-2xl sm:text-3xl leading-none font-light group-hover:-translate-x-1 transition-transform">
                  &larr;
                </span>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                style={{ color: isRightWhite ? '#FFFFFF' : theme.primary }}
                className="hover:opacity-80 transition-colors p-1 flex items-center group cursor-pointer focus:outline-none"
                aria-label="Next slide"
              >
                <span className="text-2xl sm:text-3xl leading-none font-light group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>

            </div>

            {/* Slide Indicators */}

            <div className="flex items-center gap-2 pr-4 sm:pr-8">

              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  style={currentSlide === idx ? { backgroundColor: theme.accent } : undefined}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentSlide === idx
                      ? 'w-6'
                      : isRightWhite
                        ? 'w-2 bg-slate-300 hover:bg-slate-500'
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
