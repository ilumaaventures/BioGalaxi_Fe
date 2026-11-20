import React, { useState } from 'react';
import { ShieldCheck, Compass, Target, ArrowRight, Building2, Users2 } from 'lucide-react';
import SectionEyebrow from './ui/SectionEyebrow';
import Reveal from './ui/Reveal';
import Card from './ui/Card';
import { siteContent } from '../data/content';
import buildingImg from '../assets/building.jpg';
import meetingImg from '../assets/meeting.jpg';

export default function About() {
  const { about } = siteContent;
  const [activeHighlight, setActiveHighlight] = useState(0);

  const capabilities = [
    { title: 'Specialized Bio-Competency Mapping', tag: 'Discovery to GxP' },
    { title: 'Fractional & Retained CHRO Oversight', tag: 'Strategic HR' },
    { title: 'Integrated TMS Software Enablers', tag: 'Proprietary Tech' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-white/80">
      {/* Background Subtle Coordinate Lines */}
      <div className="absolute inset-0 subtle-grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Heading, Narrative & Trust Chips */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Reveal>
              <SectionEyebrow text={about.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#3B1366] tracking-tight leading-[1.14] mb-6">
                <span>More Than a Service Provider. </span>
                <span className="bg-gradient-to-r from-[#6D28D9] to-[#10B981] bg-clip-text text-transparent">
                  Your Complete Talent Partner.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-base text-[#475569] leading-relaxed mb-6 font-normal">
                {about.paragraph}
              </p>
            </Reveal>

            {/* Scientific Credibility Tags */}
            <Reveal delay={0.24}>
              <div className="space-y-2.5 w-full pt-2 pb-6 border-y border-[#EDE9FE]">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center justify-between text-xs font-semibold text-[#3B1366]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>{cap.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#6D28D9] bg-[#EDE9FE] px-2 py-0.5 rounded">
                      {cap.tag}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#pillars"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#3B1366] hover:text-[#6D28D9] transition-colors group"
                >
                  <span>Explore the 3 Integrated Pillars</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Glass Architecture + Inset Collaboration Photo + Interactive Highlights */}
          <div className="lg:col-span-7 relative">
            <Reveal delay={0.25}>
              <div className="relative rounded-3xl overflow-visible">
                
                {/* Main Glass Office Building Photo with Scientific Location Metadata */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(59,19,102,0.12)] border border-[#6D28D9]/15 h-[370px] sm:h-[430px] w-full group">
                  <img
                    src={buildingImg}
                    alt="Bio Galaxi Modern Glass Architecture"
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter saturate-[1.1] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* High-end gradient sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3B1366]/40 via-[#6D28D9]/15 to-transparent pointer-events-none" />

                  {/* Top-Right Geographic Coordinate Chip */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#6D28D9]/20 text-[10px] font-mono text-[#3B1366] flex items-center gap-1.5 shadow-sm">
                    <Building2 size={12} className="text-[#6D28D9]" />
                    <span>Global Talent Hubs · US · EU · APAC</span>
                  </div>
                </div>

                {/* Overlapping Inset Photo at Bottom-Left: Collaborative Executive Meeting */}
                <div className="absolute -bottom-8 -left-3 sm:-bottom-10 sm:-left-6 w-48 sm:w-60 h-32 sm:h-38 rounded-2xl overflow-hidden border-4 border-white shadow-[0_16px_40px_rgba(59,19,102,0.2)] z-20 group">
                  <img
                    src={meetingImg}
                    alt="Strategic Talent Collaboration"
                    loading="lazy"
                    className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#3B1366]/20 pointer-events-none" />
                  
                  {/* Small Live Tag on photo */}
                  <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] font-mono text-white flex items-center gap-1">
                    <Users2 size={10} className="text-[#34D399]" />
                    <span>Executive Advisory</span>
                  </div>
                </div>

                {/* Floating Highlights Card Over the Right Side */}
                <div className="relative mt-8 sm:mt-0 sm:absolute sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-[320px] md:w-[350px] z-20">
                  <Card className="p-5 sm:p-6 bg-white/95 backdrop-blur-2xl border border-[#6D28D9]/20 shadow-[0_20px_50px_rgba(59,19,102,0.18)]">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EDE9FE]">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#10B981] font-bold">
                        Core Value Engine
                      </h4>
                      <span className="text-[10px] text-[#64748B] font-mono">01 - 03</span>
                    </div>

                    <div className="divide-y divide-[#EDE9FE]">
                      {about.highlights.map((item, idx) => (
                        <div
                          key={item.number}
                          onMouseEnter={() => setActiveHighlight(idx)}
                          className={`py-3 first:pt-1 last:pb-1 flex items-start gap-3.5 cursor-pointer rounded-xl transition-all duration-200 ${
                            activeHighlight === idx ? 'bg-[#F8F6FD] px-2 -mx-2' : ''
                          }`}
                        >
                          <span className={`text-2xl sm:text-3xl font-extrabold leading-none tracking-tight flex-shrink-0 transition-colors ${
                            activeHighlight === idx ? 'text-[#6D28D9]' : 'text-[#A78BFA]'
                          }`}>
                            {item.number}
                          </span>
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#3B1366] leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
