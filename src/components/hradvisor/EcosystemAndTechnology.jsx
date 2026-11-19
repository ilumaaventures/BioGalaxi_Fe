import React from 'react';
import { Monitor, Users, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import tmsMockupImg from '../../assets/generated/tms_mockup.png';

export default function EcosystemAndTechnology() {
  return (
    <section id="ecosystem" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#B9D057] rounded-full inline-block" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#035A95]">
              Integrated Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#2A2A2A] leading-tight tracking-tight mb-4">
            One Integrated Ecosystem. Three Powerful Capabilities.
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-normal">
            Instead of managing multiple disconnected service providers, organisations can bring their talent technology, leadership and workforce requirements together through one integrated partner.
          </p>
        </div>

        {/* 2-Column Showcase: TMS 3D Mockup on Left + Venn Diagram on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: TMS Technology Screen */}
          <div className="lg:col-span-7">
            <div className="bg-[#F1F6FB] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#035A95] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs inline-block mb-4">
                Proprietary TMS Platform
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2A2A2A] mb-3">
                Technology That Makes People Management Smarter
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                Our Talent Management System brings precision analytics, skill taxonomy mapping, and candidate pipeline tracking directly into the heart of life sciences HR operations.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src={tmsMockupImg}
                  alt="TMS Platform Intelligence"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 3-Circle Venn Graphic & Value Bullets */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* 3-Circle Venn Convergence */}
            <div className="relative w-[300px] h-[270px] select-none mb-8">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 270">
                <path d="M150 45 C210 50 240 150 220 200" fill="none" stroke="#035A95" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <path d="M150 45 C90 50 60 150 80 200" fill="none" stroke="#035A95" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <path d="M80 200 C150 220 180 220 220 200" fill="none" stroke="#035A95" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <circle cx="150" cy="45" r="3" fill="#035A95" />
                <circle cx="80" cy="200" r="3" fill="#035A95" />
                <circle cx="220" cy="200" r="3" fill="#035A95" />
              </svg>

              {/* Circle 1: Technology */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#EAF2FC] border border-[#BFDBFE] shadow-xs flex flex-col items-center justify-start pt-3 z-10">
                <Monitor size={15} className="text-[#035A95] mb-1" />
                <span className="text-[11px] font-bold text-[#035A95]">Technology</span>
              </div>

              {/* Circle 2: Leadership */}
              <div className="absolute bottom-1 left-2 w-28 h-28 rounded-full bg-[#EAF2FC] border border-[#BFDBFE] shadow-xs flex flex-col items-center justify-end pb-3 z-10">
                <Users size={15} className="text-[#035A95] mb-1" />
                <span className="text-[11px] font-bold text-[#035A95]">Leadership</span>
              </div>

              {/* Circle 3: Execution */}
              <div className="absolute bottom-1 right-2 w-28 h-28 rounded-full bg-[#EAF2FC] border border-[#BFDBFE] shadow-xs flex flex-col items-center justify-end pb-3 z-10">
                <Settings size={15} className="text-[#035A95] mb-1" />
                <span className="text-[11px] font-bold text-[#035A95]">Execution</span>
              </div>

              {/* Center Intersecting Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-24 h-24 rounded-full bg-[#035A95] border-2 border-white shadow-lg flex flex-col items-center justify-center text-center p-2 text-white z-20">
                <span className="text-[9px] font-extrabold leading-tight">Integrated</span>
                <span className="text-[9px] font-extrabold leading-tight">Talent</span>
                <span className="text-[8px] font-bold leading-tight text-[#B9D057]">Partnership</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 w-full bg-[#F1F6FB] p-5 rounded-2xl border border-slate-200/80 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B9D057] flex-shrink-0" />
                <span className="font-semibold">Unified Proprietary Software & Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B9D057] flex-shrink-0" />
                <span className="font-semibold">Fractional Executive CHRO Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B9D057] flex-shrink-0" />
                <span className="font-semibold">Specialized Bench & Technical Placement</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
