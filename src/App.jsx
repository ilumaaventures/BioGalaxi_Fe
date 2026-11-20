import React from 'react';
import HRAdvisorHero from './components/hradvisor/HRAdvisorHero';
import HowWeAreDifferent from './components/hradvisor/HowWeAreDifferent';
import CompaniesBenefits from './components/hradvisor/CompaniesBenefits';
import DarkCalloutBanner from './components/hradvisor/DarkCalloutBanner';
import ServicesGrid from './components/hradvisor/ServicesGrid';
import Testimonials from './components/hradvisor/Testimonials';
import Footer from './components/hradvisor/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#4C4C4C] font-sans antialiased overflow-x-hidden selection:bg-[#10B981]/30 selection:text-[#3B1366]">
      {/* 1. Header Navigation & Auto Smooth Hero Slider */}
      <HRAdvisorHero />

      <main>
        {/* 2. How We Are Different (media_1795086871662_7f27abd0.jpg) */}
        <HowWeAreDifferent />

        {/* 3. Companies Benefits & 4 Stats Counters (media_1795086880493_03a203ae.png) */}
        <CompaniesBenefits />

        {/* 4. Full-Width Quote Parallax Callout Banner (media_1795086895035_30f51740.jpg) */}
        <DarkCalloutBanner />

        {/* 5. Core Services 4-Card Grid (media_1795086905319_0a297a66.jpg) */}
        <ServicesGrid />

        {/* 6. Testimonials with Split Image (media_1795086916254_fd82d0b3.jpg) */}
        <Testimonials />
      </main>

      {/* 7. Full-Width Blue Footer (media_1795086929031_c73cfbfe.jpg) */}
      <Footer />
    </div>
  );
}