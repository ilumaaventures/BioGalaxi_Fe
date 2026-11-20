import React, { useState } from 'react';
import { 
  Monitor, 
  Users, 
  Settings, 
  Search, 
  Target, 
  Layers, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles
} from 'lucide-react';
import SectionEyebrow from './ui/SectionEyebrow';
import Reveal from './ui/Reveal';
import { siteContent } from '../data/content';

export default function WhyBioGalaxi() {
  const { whyBioGalaxi, approach } = siteContent;
  const [selectedPillar, setSelectedPillar] = useState('center');

  const stepIcons = {
    search: Search,
    target: Target,
    layers: Layers,
    'trending-up': TrendingUp,
  };

  const pillarDetails = {
    tech: { title: 'Technology Pillar', desc: 'Centralizes competency mapping, GxP credentials, and applicant pipelines in one proprietary TMS.' },
    leadership: { title: 'Leadership Pillar', desc: 'Injects seasoned Fractional CHROs and board-level talent strategists without bloated executive overhead.' },
    execution: { title: 'Execution Pillar', desc: 'Mobilizes specialized life sciences hiring sprints and turnkey people operations with 98.4% retention.' },
    center: { title: 'Integrated Partnership Core', desc: 'Where technology accelerates leadership foresight, and operational execution delivers measurable research milestones.' },
  };

  return (
    <section id="why-bio-galaxi" className="py-20 lg:py-28 relative bg-white/80 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Main 2-Column Split: Convergence Matrix (Left) & 4-Step Approach (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Left Side: Why Bio Galaxi + Interactive Convergence Diagram */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Reveal>
              <SectionEyebrow text={whyBioGalaxi.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3B1366] tracking-tight leading-[1.12] mb-5">
                <span>One Partner. </span>
                <span className="bg-gradient-to-r from-[#6D28D9] to-[#10B981] bg-clip-text text-transparent">
                  Connected People Solutions.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-base text-[#475569] leading-relaxed mb-6 font-normal">
                {whyBioGalaxi.paragraph}
              </p>
            </Reveal>

            {/* Interactive Venn-Style Convergence Graphic */}
            <Reveal delay={0.25} className="w-full flex flex-col items-center justify-center pt-2">
              <div className="relative w-full max-w-[360px] aspect-[1/0.95] flex items-center justify-center select-none">
                
                {/* Venn Circle 1: Top (Technology) */}
                <div 
                  onClick={() => setSelectedPillar('tech')}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border backdrop-blur-md flex flex-col items-center pt-5 shadow-[0_8px_24px_rgba(109,40,217,0.12)] cursor-pointer transition-all duration-300 ${
                    selectedPillar === 'tech'
                      ? 'bg-[#D6EBFF] border-[#6D28D9] scale-105 z-20'
                      : 'bg-gradient-to-b from-[#EDE9FE]/90 to-[#D6E6FB]/70 border-[#6D28D9]/30 hover:scale-102'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#6D28D9] mb-1">
                    <Monitor size={16} />
                  </div>
                  <span className="text-xs font-bold text-[#3B1366]">Technology</span>
                  <span className="text-[9px] font-mono text-[#64748B]">TMS & Data</span>
                </div>

                {/* Venn Circle 2: Bottom Left (Leadership) */}
                <div 
                  onClick={() => setSelectedPillar('leadership')}
                  className={`absolute bottom-1 left-2 w-44 h-44 rounded-full border backdrop-blur-md flex flex-col items-start justify-end pl-6 pb-6 shadow-[0_8px_24px_rgba(109,40,217,0.12)] cursor-pointer transition-all duration-300 ${
                    selectedPillar === 'leadership'
                      ? 'bg-[#ECFDF5] border-[#10B981] scale-105 z-20'
                      : 'bg-gradient-to-tr from-[#EDE9FE]/90 to-[#D6E6FB]/70 border-[#6D28D9]/30 hover:scale-102'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#10B981] mb-1">
                    <Users size={16} />
                  </div>
                  <span className="text-xs font-bold text-[#3B1366]">Leadership</span>
                  <span className="text-[9px] font-mono text-[#64748B]">CHRO Strategy</span>
                </div>

                {/* Venn Circle 3: Bottom Right (Execution) */}
                <div 
                  onClick={() => setSelectedPillar('execution')}
                  className={`absolute bottom-1 right-2 w-44 h-44 rounded-full border backdrop-blur-md flex flex-col items-end justify-end pr-6 pb-6 shadow-[0_8px_24px_rgba(109,40,217,0.12)] cursor-pointer transition-all duration-300 ${
                    selectedPillar === 'execution'
                      ? 'bg-[#DCEBFB] border-[#3B1366] scale-105 z-20'
                      : 'bg-gradient-to-tl from-[#EDE9FE]/90 to-[#D6E6FB]/70 border-[#6D28D9]/30 hover:scale-102'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#3B1366] mb-1">
                    <Settings size={16} />
                  </div>
                  <span className="text-xs font-bold text-[#3B1366]">Execution</span>
                  <span className="text-[9px] font-mono text-[#64748B]">Staffing & Ops</span>
                </div>

                {/* Center Intersecting Core: Integrated Talent Partnership */}
                <div 
                  onClick={() => setSelectedPillar('center')}
                  className={`relative z-30 w-32 h-32 rounded-full border-2 border-white shadow-[0_12px_32px_rgba(59,19,102,0.4)] flex flex-col items-center justify-center text-center p-2 text-white cursor-pointer transition-all duration-300 ${
                    selectedPillar === 'center'
                      ? 'bg-[#3B1366] scale-105 ring-4 ring-[#10B981]/40'
                      : 'bg-[#3B1366] hover:scale-105'
                  }`}
                >
                  <Sparkles size={14} className="text-[#34D399] mb-1" />
                  <span className="text-[11px] font-extrabold leading-tight">
                    Integrated
                  </span>
                  <span className="text-[11px] font-extrabold leading-tight">
                    Talent
                  </span>
                  <span className="text-[10px] font-bold leading-tight text-[#A78BFA]">
                    Partnership
                  </span>
                </div>

              </div>

              {/* Dynamic Pillar Inspector */}
              <div className="w-full mt-4 p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#6D28D9]/15 text-left">
                <span className="text-[10px] font-mono uppercase text-[#10B981] font-bold block mb-1">
                  {pillarDetails[selectedPillar].title}
                </span>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {pillarDetails[selectedPillar].desc}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Our Approach + 4-Step Connected Flow */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2 lg:pt-0">
            <Reveal>
              <SectionEyebrow text={approach.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3B1366] tracking-tight leading-[1.12] mb-10">
                <span>From Strategy to Execution. </span>
                <span className="bg-gradient-to-r from-[#6D28D9] to-[#10B981] bg-clip-text text-transparent">
                  Every Step Connected.
                </span>
              </h2>
            </Reveal>

            {/* 4-Step Flow */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 relative mb-10">
              {approach.steps.map((step, idx) => {
                const Icon = stepIcons[step.icon] || Search;

                return (
                  <Reveal key={step.id} delay={0.1 * (idx + 1)} className="h-full">
                    <div className="p-5 rounded-2xl bg-white border border-[#6D28D9]/15 shadow-xs hover:shadow-[0_12px_30px_rgba(59,19,102,0.08)] hover:border-[#6D28D9]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                      
                      {/* Step Header */}
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-[#6D28D9] group-hover:bg-[#3B1366] group-hover:text-white transition-colors">
                          <Icon size={20} strokeWidth={1.8} />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#A78BFA] group-hover:text-[#6D28D9] transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Step Title & Copy */}
                      <div>
                        <h3 className="text-sm font-bold text-[#3B1366] mb-1.5 tracking-tight group-hover:text-[#6D28D9] transition-colors">
                          {step.name}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Comparison Matrix: Siloed Vendors vs Bio Galaxi */}
            <Reveal delay={0.35} className="w-full">
              <div className="bg-[#F8FBFF] rounded-2xl border border-[#6D28D9]/20 p-5 w-full">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#3B1366] font-bold mb-3 flex items-center gap-2">
                  <span>The Operating Model Difference</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/70 border border-red-200/50">
                    <div className="flex items-center gap-1.5 font-bold text-red-600 mb-1">
                      <XCircle size={14} />
                      <span>Traditional Siloed Model</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Disconnected recruiters, disjointed HR tech tools, and absent strategic leadership causing slow hiring and high attrition.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#10B981]/40 shadow-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#10B981] mb-1">
                      <CheckCircle2 size={14} />
                      <span>Bio Galaxi Integrated Model</span>
                    </div>
                    <p className="text-[11px] text-[#3B1366] leading-relaxed">
                      Unified proprietary TMS software, Fractional CHRO strategic steering, and specialized life sciences staffing delivering 98.4% retention.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
