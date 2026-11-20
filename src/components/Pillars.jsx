import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionEyebrow from './ui/SectionEyebrow';
import Reveal from './ui/Reveal';
import Card from './ui/Card';
import ArrowButton from './ui/ArrowButton';
import { siteContent } from '../data/content';
import leadershipImg from '../assets/leadership.jpg';
import { User, Users, BarChart3, Activity, Shield, Cpu, Zap, CheckCircle2 } from 'lucide-react';

export default function Pillars() {
  const { pillars } = siteContent;
  const [activeTechMetric, setActiveTechMetric] = useState('talent');

  const techMetrics = {
    talent: { label: 'Scientific Matches', value: '98.6%', trend: '+14% MoM', highlight: 'AI-assisted qualification' },
    velocity: { label: 'Time-to-Hire', value: '18 Days', trend: '-45% days', highlight: 'Accelerated biotech sprints' },
    compliance: { label: 'GxP Verification', value: '100%', trend: 'Audit-ready', highlight: 'Cleanroom & trial clearance' },
  };

  return (
    <section id="pillars" className="py-20 lg:py-28 relative bg-[#F8F6FD]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#6D28D9]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#10B981]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Eyebrow and Headline (about 1/3 width) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <Reveal>
              <SectionEyebrow text={pillars.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3B1366] tracking-tight leading-[1.12]">
                <span>One Integrated Ecosystem. </span>
                <span className="bg-gradient-to-r from-[#6D28D9] to-[#10B981] bg-clip-text text-transparent">
                  Three Powerful Capabilities.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-sm text-[#475569] leading-relaxed mt-4">
                Rather than coordinating isolated vendors, Bio Galaxi harmonizes software intelligence, strategic executive talent direction, and agile operational execution into one seamless partnership.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-[#6D28D9]/15 shadow-xs w-full">
                <span className="text-[10px] font-mono uppercase text-[#10B981] font-bold tracking-wider block mb-1">
                  Synergy Factor
                </span>
                <p className="text-xs font-semibold text-[#3B1366]">
                  Proprietary TMS software powers the decisions of our Fractional CHROs and accelerates specialized laboratory staffing.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Three Enhanced Interactive Pillar Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Technology */}
            <Reveal delay={0.15}>
              <Card className="h-full flex flex-col overflow-hidden bg-white group hover:shadow-[0_20px_45px_rgba(59,19,102,0.12)] border border-[#6D28D9]/15 hover:border-[#6D28D9]/40 transition-all duration-300">
                {/* Top Visual Area: Interactive TMS Telemetry Panel */}
                <div className="h-48 w-full overflow-hidden relative bg-gradient-to-br from-[#EDE9FE] via-[#F8F6FD] to-[#D6E6FB] flex flex-col justify-between p-3.5">
                  <div className="w-full h-full rounded-xl bg-white/95 border border-[#6D28D9]/20 shadow-xs p-3 flex flex-col justify-between overflow-hidden relative">
                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-[#EDE9FE] pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Cpu size={12} className="text-[#6D28D9]" />
                        <span className="text-[10px] font-bold text-[#3B1366]">TMS Telemetry v2.4</span>
                      </div>
                      <span className="text-[9px] bg-[#ECFDF5] text-[#10B981] px-1.5 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> Live
                      </span>
                    </div>

                    {/* Interactive 3-Metric Selector */}
                    <div className="grid grid-cols-3 gap-1.5 my-1">
                      {Object.keys(techMetrics).map((key) => {
                        const m = techMetrics[key];
                        const isSelected = activeTechMetric === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setActiveTechMetric(key)}
                            className={`p-1 rounded text-left transition-all ${
                              isSelected ? 'bg-[#3B1366] text-white shadow-xs' : 'bg-[#F8F6FD] hover:bg-[#EDE9FE]'
                            }`}
                          >
                            <span className={`text-[8px] block font-mono ${isSelected ? 'text-[#A78BFA]' : 'text-[#64748B]'}`}>
                              {key.toUpperCase()}
                            </span>
                            <span className={`text-[11px] font-bold ${isSelected ? 'text-white' : 'text-[#3B1366]'}`}>
                              {m.value}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dynamic Bar Spectrum */}
                    <div className="flex items-end gap-1.5 h-10 pt-1 border-t border-[#EDE9FE]">
                      <div className="w-1/6 bg-[#A78BFA] rounded-t h-[50%]" />
                      <div className="w-1/6 bg-[#6D28D9] rounded-t h-[75%]" />
                      <div className="w-1/6 bg-[#3B1366] rounded-t h-[95%]" />
                      <div className="w-1/6 bg-[#6D28D9] rounded-t h-[60%]" />
                      <div className="w-1/6 bg-[#A78BFA] rounded-t h-[80%]" />
                      <div className="w-1/6 bg-[#10B981] rounded-t h-[100%]" />
                    </div>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
                      <span className="text-[10px] font-mono uppercase text-[#6D28D9] font-bold tracking-wider">
                        Pillar 01
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#3B1366] tracking-tight mb-2">
                      Technology
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Proprietary digital solutions and TMS infrastructure that automate talent discovery, track GxP compliance, and eliminate administrative friction.
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EDE9FE] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#64748B]">Digital Enablers</span>
                    <ArrowButton href="#technology" ariaLabel="Explore Technology Pillar" />
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Pillar 2: Leadership */}
            <Reveal delay={0.25}>
              <Card className="h-full flex flex-col overflow-hidden bg-white group hover:shadow-[0_20px_45px_rgba(59,19,102,0.12)] border border-[#6D28D9]/15 hover:border-[#10B981]/40 transition-all duration-300">
                {/* Top Visual Area: Executive Leadership with Glass Badges */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={leadershipImg}
                    alt="Experienced Strategic Talent Leadership"
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter saturate-[1.1] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B1366]/80 via-[#3B1366]/30 to-transparent pointer-events-none" />
                  
                  {/* Floating Strategic Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-1 shadow-sm flex items-center gap-1.5 border border-white/60">
                    <Shield size={12} className="text-[#10B981]" />
                    <span className="text-[9px] font-bold text-[#3B1366]">Fractional CHRO</span>
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[10px] font-mono">
                    <span>Board-Level Governance</span>
                    <span className="text-[#34D399] font-bold">C-Suite Retained</span>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-[10px] font-mono uppercase text-[#10B981] font-bold tracking-wider">
                        Pillar 02
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#3B1366] tracking-tight mb-2">
                      Leadership
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Fractional CHRO and veteran talent advisors delivering organizational design, board advisory, equity planning, and high-stakes executive hiring.
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EDE9FE] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#64748B]">Strategic HR</span>
                    <ArrowButton href="#solutions" ariaLabel="Explore Leadership Pillar" />
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Pillar 3: Execution */}
            <Reveal delay={0.35}>
              <Card className="h-full flex flex-col overflow-hidden bg-white group hover:shadow-[0_20px_45px_rgba(59,19,102,0.12)] border border-[#6D28D9]/15 hover:border-[#3B1366]/40 transition-all duration-300">
                {/* Top Visual Area: Agile Workforce Deployment Engine */}
                <div className="h-48 w-full rounded-t-xl bg-gradient-to-br from-[#3B1366] via-[#4C1D95] to-[#1B062E] relative overflow-hidden flex flex-col justify-between p-3.5 text-white">
                  {/* Subtle Grid Network SVG */}
                  <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 200 150">
                    <line x1="30" y1="30" x2="100" y2="75" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="170" y1="30" x2="100" y2="75" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="120" x2="100" y2="75" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="150" y1="120" x2="100" y2="75" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="100" cy="75" r="5" fill="#34D399" />
                  </svg>

                  {/* Header */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-mono text-[#34D399] font-bold">DEPLOYMENT SPRINT</span>
                    <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded font-mono">14-Day Velocity</span>
                  </div>

                  {/* Deployment Nodes Flow */}
                  <div className="relative z-10 flex items-center justify-between px-2 my-auto">
                    {[
                      { step: '01', label: 'Talent Discovery' },
                      { step: '02', label: 'GxP Clearance' },
                      { step: '03', label: 'Lab Placement' },
                    ].map((st, i) => (
                      <div key={st.step} className="flex flex-col items-center text-center">
                        <div className="w-7 h-7 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-[10px] font-bold text-white mb-1 shadow-xs">
                          {st.step}
                        </div>
                        <span className="text-[8px] font-mono text-[#C4B5FD]">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Metric */}
                  <div className="relative z-10 flex items-center justify-between text-[9px] text-white/70 border-t border-white/10 pt-1.5">
                    <span>99.2% Retention Target</span>
                    <span className="text-[#34D399] font-bold">Active Sprint</span>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#3B1366]" />
                      <span className="text-[10px] font-mono uppercase text-[#3B1366] font-bold tracking-wider">
                        Pillar 03
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#3B1366] tracking-tight mb-2">
                      Execution
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Specialized life sciences staffing, rapid clinical project staffing, and turnkey people function operations that turn strategy into measurable breakthroughs.
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EDE9FE] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#64748B]">Operational Rigor</span>
                    <ArrowButton href="#solutions" ariaLabel="Explore Execution Pillar" />
                  </div>
                </div>
              </Card>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
