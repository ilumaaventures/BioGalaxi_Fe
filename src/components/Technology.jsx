import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  Award, 
  FileText, 
  Search, 
  Bell, 
  User, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Dna,
  Zap,
  Layers
} from 'lucide-react';
import SectionEyebrow from './ui/SectionEyebrow';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { siteContent } from '../data/content';

export default function Technology() {
  const { technology } = siteContent;
  const [activeTab, setActiveTab] = useState('pipeline');

  return (
    <section id="technology" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#F4F9FF] via-[#E8F2FD] to-[#F4F9FF]">
      {/* Background glow and subtle dots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2F7BEA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1AA6A6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Tilted 3D Tablet Mockup of TMS Dashboard */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[590px]"
              style={{ perspective: '1200px' }}
            >
              {/* Tablet Outer Shell */}
              <div 
                className="bg-white rounded-3xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(10,42,94,0.18)] border border-[#2F7BEA]/20 transition-transform duration-500"
                style={{
                  transform: 'rotateX(6deg) rotateY(-6deg) rotateZ(1deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Dashboard Inner Screen */}
                <div className="bg-[#F8FBFF] rounded-2xl border border-[#E3EFFE] p-3 sm:p-4 grid grid-cols-12 gap-3 min-h-[360px]">
                  
                  {/* Left Sidebar Menu */}
                  <div className="col-span-3 bg-white rounded-xl p-2.5 border border-[#E3EFFE] flex flex-col justify-between shadow-xs">
                    <div>
                      {/* TMS Brand */}
                      <div className="flex items-center gap-1.5 mb-4 px-1.5 pt-1">
                        <div className="w-5 h-5 rounded-md bg-[#2F7BEA] flex items-center justify-center text-white text-[10px] font-extrabold">
                          T
                        </div>
                        <span className="text-xs font-black tracking-wider text-[#0A2A5E]">TMS-OS</span>
                      </div>

                      {/* Navigation Items */}
                      <div className="space-y-1">
                        {[
                          { id: 'pipeline', label: 'Pipeline', icon: LayoutDashboard },
                          { id: 'matrix', label: 'Competencies', icon: Dna },
                          { id: 'compliance', label: 'GxP Audits', icon: ShieldCheck },
                          { id: 'engagement', label: 'Engagement', icon: HeartHandshake },
                          { id: 'reports', label: 'Telemetry', icon: FileText },
                        ].map((item) => {
                          const isCurrent = activeTab === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setActiveTab(item.id)}
                              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] font-semibold transition-all text-left ${
                                isCurrent
                                  ? 'bg-[#0A2A5E] text-white shadow-xs'
                                  : 'text-[#64748B] hover:text-[#0A2A5E] hover:bg-[#F4F9FF]'
                              }`}
                            >
                              <item.icon size={12} className={isCurrent ? 'text-[#4FE1E1]' : ''} />
                              <span className="truncate">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E3EFFE] px-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#1AA6A6] animate-pulse" />
                        <span className="text-[9px] font-mono text-[#0A2A5E] truncate">Sync: Global Node</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Dynamic Content Canvas */}
                  <div className="col-span-9 flex flex-col justify-between space-y-3">
                    
                    {/* Top Bar: Search + Notification */}
                    <div className="flex items-center justify-between bg-white rounded-xl p-2.5 border border-[#E3EFFE]">
                      <div>
                        <h4 className="text-xs font-extrabold text-[#0A2A5E] flex items-center gap-1.5">
                          <span>TMS Life Sciences Intelligence</span>
                          <span className="px-1.5 py-0.2 bg-[#EBFBFA] text-[#1AA6A6] text-[9px] font-mono rounded">v2.4</span>
                        </h4>
                        <p className="text-[9px] text-[#64748B] font-mono">Module: {activeTab.toUpperCase()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#F4F9FF] border border-[#E3EFFE] flex items-center justify-center text-[#2F7BEA]">
                          <Bell size={11} />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#0A2A5E] text-white flex items-center justify-center text-[10px] font-bold">
                          BG
                        </div>
                      </div>
                    </div>

                    {/* Dynamic View: Tab 1 (Pipeline) */}
                    {activeTab === 'pipeline' && (
                      <div className="space-y-2.5">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white p-2 rounded-xl border border-[#E3EFFE]">
                            <span className="text-[9px] text-[#64748B] block font-mono">Sourced</span>
                            <span className="text-sm font-extrabold text-[#0A2A5E]">48 Specialists</span>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-[#E3EFFE]">
                            <span className="text-[9px] text-[#64748B] block font-mono">GxP Qualified</span>
                            <span className="text-sm font-extrabold text-[#1AA6A6]">19 Verified</span>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-[#E3EFFE]">
                            <span className="text-[9px] text-[#64748B] block font-mono">Sprint Velocity</span>
                            <span className="text-sm font-extrabold text-[#2F7BEA]">14 Days</span>
                          </div>
                        </div>

                        {/* Candidate Pipeline Cards */}
                        <div className="bg-white rounded-xl p-2.5 border border-[#E3EFFE] space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] font-bold text-[#0A2A5E] pb-1 border-b border-[#E3EFFE]">
                            <span>Active Scientific Matches</span>
                            <span className="text-[#1AA6A6] font-mono">AI Score: 98%</span>
                          </div>
                          {[
                            { name: 'Dr. Katherine Wood', role: 'Staff Scientist, mRNA Chemistry', match: '98%' },
                            { name: 'Rajesh Patel', role: 'Director, Analytical Development', match: '96%' },
                          ].map((cand, i) => (
                            <div key={i} className="flex items-center justify-between p-1.5 rounded-lg bg-[#F8FBFF] text-[10px]">
                              <div>
                                <span className="font-bold text-[#0A2A5E] block leading-tight">{cand.name}</span>
                                <span className="text-[9px] text-[#64748B]">{cand.role}</span>
                              </div>
                              <span className="px-1.5 py-0.5 rounded bg-[#E3EFFE] text-[#2F7BEA] font-bold text-[9px] font-mono">
                                {cand.match}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Dynamic View: Tab 2 (Competencies) */}
                    {activeTab === 'matrix' && (
                      <div className="bg-white rounded-xl p-3 border border-[#E3EFFE] space-y-2">
                        <span className="text-[10px] font-bold text-[#0A2A5E] block">Life Sciences Competency Radar</span>
                        <div className="space-y-2 text-[10px]">
                          {[
                            { skill: 'CRISPR / Cas9 Target Validation', pct: '94%', col: '#1AA6A6' },
                            { skill: 'Bioreactor Scale-up (cGMP)', pct: '88%', col: '#2F7BEA' },
                            { skill: 'FDA 21 CFR Part 11 Regulatory', pct: '99%', col: '#0A2A5E' },
                            { skill: 'Computational Proteomics', pct: '82%', col: '#8DB8F5' },
                          ].map((sk, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-[9px] font-mono mb-0.5">
                                <span className="text-[#0A2A5E] font-medium">{sk.skill}</span>
                                <span className="font-bold text-[#0A2A5E]">{sk.pct}</span>
                              </div>
                              <div className="w-full bg-[#E3EFFE] rounded-full h-1.5">
                                <div className="h-1.5 rounded-full" style={{ width: sk.pct, backgroundColor: sk.col }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Dynamic View: Tab 3 (Compliance / Others) */}
                    {(activeTab === 'compliance' || activeTab === 'engagement' || activeTab === 'reports') && (
                      <div className="bg-white rounded-xl p-3 border border-[#E3EFFE] space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#0A2A5E]">GxP Regulatory Audit Readiness</span>
                          <span className="text-[9px] font-mono font-bold text-[#1AA6A6] bg-[#EBFBFA] px-1.5 py-0.5 rounded">
                            Audit Passed
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#F8FBFF] border border-[#E3EFFE] flex items-center justify-between">
                          <div>
                            <span className="text-[9px] text-[#64748B] block">Cleanroom & Lab Clearances</span>
                            <span className="text-base font-extrabold text-[#0A2A5E]">100% Verified</span>
                          </div>
                          <ShieldCheck size={28} className="text-[#1AA6A6]" />
                        </div>
                        <p className="text-[9px] text-[#64748B] font-mono leading-relaxed">
                          Automated tracking of biosafety training, medical surveillance certifications, and electronic signatures.
                        </p>
                      </div>
                    )}

                    {/* Bottom Dynamic Status */}
                    <div className="flex items-center justify-between text-[9px] text-[#64748B] font-mono pt-1">
                      <span>Live Bio Galaxi Data Mesh</span>
                      <span className="text-[#2F7BEA] font-bold">Latency: 12ms</span>
                    </div>

                  </div>

                </div>
              </div>

              {/* Floating Holographic Badge at Top-Right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#2F7BEA]/20 shadow-[0_14px_32px_rgba(10,42,94,0.14)] flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-full bg-[#E3EFFE] flex items-center justify-center text-[#2F7BEA] font-bold text-xs">
                  <User size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#0A2A5E]">Dr. Sarah Jenkins</span>
                    <CheckCircle2 size={12} className="text-[#1AA6A6]" />
                  </div>
                  <span className="text-[10px] text-[#64748B] block font-mono">Principal Scientist · CRISPR</span>
                </div>
              </motion.div>

              {/* Floating Live Sync Chip at Bottom-Left */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-[#2F7BEA]/20 shadow-[0_12px_28px_rgba(10,42,94,0.12)] z-20 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#1AA6A6] animate-ping" />
                <span className="text-[10px] font-bold text-[#0A2A5E]">Real-Time GxP Sync</span>
              </motion.div>

            </motion.div>
          </div>

          {/* Right Column: Eyebrow, Heading, Interactive Tab Cards & Action */}
          <div className="lg:col-span-5 flex flex-col items-start pl-0 lg:pl-6">
            <Reveal>
              <SectionEyebrow text={technology.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2A5E] tracking-tight leading-[1.12] mb-4">
                <span>Technology That Makes </span>
                <span className="bg-gradient-to-r from-[#2F7BEA] to-[#1AA6A6] bg-clip-text text-transparent">
                  People Management Smarter.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-base text-[#475569] leading-relaxed mb-6 font-normal">
                {technology.paragraph}
              </p>
            </Reveal>

            {/* Interactive Tab Cards connecting to Tablet UI */}
            <Reveal delay={0.22}>
              <div className="w-full space-y-3 mb-8">
                {technology.tabs?.map((tab) => {
                  const isSelected = activeTab === tab.id;
                  return (
                    <div
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`p-3.5 rounded-2xl cursor-pointer border transition-all duration-300 ${
                        isSelected
                          ? 'bg-white border-[#2F7BEA] shadow-[0_8px_24px_rgba(47,123,234,0.12)] scale-[1.02]'
                          : 'bg-white/60 border-[#2F7BEA]/15 hover:bg-white hover:border-[#2F7BEA]/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs sm:text-sm font-bold text-[#0A2A5E]">
                          {tab.title}
                        </h4>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                          isSelected ? 'bg-[#E3EFFE] text-[#2F7BEA]' : 'bg-[#F4F9FF] text-[#64748B]'
                        }`}>
                          {tab.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {tab.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <Button href={technology.cta.href} variant="primary" size="md">
                {technology.cta.label}
              </Button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
