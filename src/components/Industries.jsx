import React, { useState } from 'react';
import { Dna, Pill, FlaskConical, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionEyebrow from './ui/SectionEyebrow';
import Reveal from './ui/Reveal';
import Card from './ui/Card';
import ArrowButton from './ui/ArrowButton';
import { siteContent } from '../data/content';
import biotechImg from '../assets/biotech.jpg';
import pharmaImg from '../assets/pharma.jpg';
import lifeSciencesImg from '../assets/lifesciences.jpg';

export default function Industries() {
  const { industries } = siteContent;
  const [hoveredCard, setHoveredCard] = useState(null);

  const imageMap = {
    biotech: biotechImg,
    pharma: pharmaImg,
    lifesciences: lifeSciencesImg,
  };

  const iconMap = {
    dna: Dna,
    vials: Pill,
    flask: FlaskConical,
  };

  return (
    <section id="industries" className="py-20 lg:py-28 relative bg-[#F4F9FF]">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2F7BEA]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#1AA6A6]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Eyebrow, Heading, Copy & Domain Badges */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <Reveal>
              <SectionEyebrow text={industries.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A2A5E] tracking-tight leading-[1.12] mb-5">
                <span>Built Around People. </span>
                <span className="bg-gradient-to-r from-[#2F7BEA] to-[#1AA6A6] bg-clip-text text-transparent">
                  Focused on Life Sciences.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                {industries.paragraph}
              </p>
            </Reveal>

            {/* Specialized Competency Highlights */}
            <Reveal delay={0.25}>
              <div className="bg-white/90 p-4 rounded-2xl border border-[#2F7BEA]/15 shadow-xs w-full space-y-2 mb-6">
                <span className="text-[10px] font-mono uppercase text-[#1AA6A6] font-bold tracking-wider block">
                  Domain Specialization
                </span>
                <p className="text-xs font-semibold text-[#0A2A5E]">
                  We understand the regulatory intricacies of FDA/EMA submissions, cleanroom protocol standards, and biological intellectual property.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2A5E] hover:text-[#2F7BEA] transition-colors group"
              >
                <span>Discuss Your Specialized Talent Requirement</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: Three Immersive Industry Cards with Technical Sub-domains */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Dna;
              const img = imageMap[item.id] || biotechImg;
              const isHovered = hoveredCard === item.id;

              return (
                <Reveal key={item.id} delay={0.12 * (idx + 1)}>
                  <div
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="h-[360px] sm:h-[400px] relative rounded-3xl overflow-hidden group border border-[#2F7BEA]/20 shadow-[0_16px_40px_rgba(10,42,94,0.12)] flex flex-col justify-between p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(10,42,94,0.18)]"
                  >
                    {/* Background Image with Rich Deep-Sea Tint */}
                    <img
                      src={img}
                      alt={item.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover filter saturate-[1.15] transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Gradient Overlay for high-contrast typography */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061838]/95 via-[#0A2A5E]/60 to-[#0A2A5E]/20 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Top Row: Icon Badge + Domain Tag */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#2F7BEA] shadow-md group-hover:bg-[#1AA6A6] group-hover:text-white transition-colors duration-300">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-mono text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
                        Tier-1 Focus
                      </span>
                    </div>

                    {/* Bottom Area: Title, Technical Domains, Metric & Action */}
                    <div className="relative z-10 flex flex-col justify-end">
                      <h3 className="text-xl font-extrabold text-white tracking-wide leading-tight mb-1">
                        {item.title}
                      </h3>
                      
                      <p className="text-[11px] text-[#B7D3FA] mb-3 leading-snug">
                        {item.subtitle}
                      </p>

                      {/* Domain Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {item.domains?.map((dom) => (
                          <span
                            key={dom}
                            className="text-[9px] font-mono bg-white/15 backdrop-blur-xs text-white px-2 py-0.5 rounded border border-white/20"
                          >
                            {dom}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Metric & Arrow Button */}
                      <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#4FE1E1] font-semibold">
                          {item.metrics}
                        </span>
                        <ArrowButton 
                          href="#solutions" 
                          ariaLabel={`Learn more about ${item.title}`} 
                          className="bg-white/95 text-[#0A2A5E] hover:bg-[#1AA6A6] hover:text-white"
                        />
                      </div>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
