import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import HRAdvisorHero from './components/hradvisor/HRAdvisorHero';
import ServicesGrid from './components/hradvisor/ServicesGrid';
import HowWeAreDifferent from './components/hradvisor/HowWeAreDifferent';
import DarkCalloutBanner from './components/hradvisor/DarkCalloutBanner';
import Testimonials from './components/hradvisor/Testimonials';
import Footer from './components/hradvisor/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-[#4C4C4C] font-sans antialiased overflow-x-hidden selection:bg-[#10B981]/30 selection:text-[#3B1366]">
        {/* 1. Header Navigation & Auto Smooth Hero Slider */}
        <HRAdvisorHero />

        <main>
          {/* 2. Core Services 8-Card Grid: OUR SOLUTIONS */}
          <ServicesGrid />

          {/* 3. How We Are Different */}
          <HowWeAreDifferent />

          {/* 4. Full-Width Quote Parallax Callout Banner */}
          <DarkCalloutBanner />

          {/* 5. Testimonials with Interactive Right-to-Left Scroll */}
          <Testimonials />
        </main>

        {/* 6. Footer */}
        <Footer />

        {/* Live Color Theme Switcher Widget */}
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}