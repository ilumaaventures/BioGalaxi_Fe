import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, UserCog, Briefcase, Award, CheckCircle2, Sparkles, Activity, Dna, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { siteContent } from '../data/content';

/* ── Interactive Bio-Digital People Network Canvas ── */
function InteractiveBioNetwork({ activeNode, setActiveNode }) {
  const avatars = [
    { id: 'av-1', name: 'Dr. Elena Rostova', role: 'Head of Gene Editing', domain: 'Biotech · CRISPR/Cas9', x: 260, y: 46, status: 'Deployed' },
    { id: 'av-2', name: 'Marcus Vance', role: 'Fractional CHRO', domain: 'Executive Leadership', x: 130, y: 85, status: 'Active Advisory' },
    { id: 'av-3', name: 'Dr. Priya Nair', role: 'VP Regulatory Affairs', domain: 'Pharma · FDA/EMA', x: 395, y: 70, status: 'Retained' },
    { id: 'av-4', name: 'Kaelen Miller', role: 'Director of Clinical Ops', domain: 'Phase II-III Trials', x: 75, y: 215, status: 'Onsite' },
    { id: 'av-5', name: 'Soraya Chen', role: 'Principal Bioprocess Eng', domain: 'mRNA Synthesis', x: 455, y: 200, status: 'Deployed' },
    { id: 'av-6', name: 'James Thornton', role: 'Workforce Strategy Lead', domain: 'Life Sciences Ops', x: 115, y: 335, status: 'Engaged' },
    { id: 'av-7', name: 'Dr. Liam O’Connor', role: 'Head of Pharmacovigilance', domain: 'Safety & GxP', x: 415, y: 345, status: 'Retained' },
    { id: 'av-8', name: 'Aaliyah Patel', role: 'Talent Systems Architect', domain: 'TMS Integration', x: 265, y: 390, status: 'Active' },
  ];

  const cx = 260, cy = 210;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 530 435"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[580px] overflow-visible"
        style={{ filter: 'drop-shadow(0 14px 40px rgba(109,40,217,0.12))' }}
      >
        <defs>
          <radialGradient id="centralCoreGrad" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#ECFDF5" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#D6EBFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.12" />
          </radialGradient>

          <linearGradient id="bioHelixGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6D28D9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B1366" stopOpacity="0.5" />
          </linearGradient>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Orbital Resonant Rings */}
        <circle cx={cx} cy={cy} r="195" stroke="#C4B5FD" strokeWidth="0.8" strokeDasharray="6 6" opacity="0.35" />
        <circle cx={cx} cy={cy} r="150" stroke="#10B981" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.3" />
        <circle cx={cx} cy={cy} r="105" stroke="#6D28D9" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.3" />

        {/* Dynamic Elliptical Trajectories */}
        <ellipse cx={cx} cy={cy} rx="205" ry="80" stroke="#A78BFA" strokeWidth="0.8" opacity="0.25" transform={`rotate(-22 ${cx} ${cy})`} />
        <ellipse cx={cx} cy={cy} rx="210" ry="70" stroke="#10B981" strokeWidth="0.6" opacity="0.2" transform={`rotate(25 ${cx} ${cy})`} />

        {/* Living Vector Connections to Avatars */}
        {avatars.map((av) => {
          const isSelected = activeNode?.id === av.id;
          return (
            <g key={`conn-${av.id}`}>
              <line
                x1={cx}
                y1={cy}
                x2={av.x}
                y2={av.y}
                stroke={isSelected ? '#10B981' : 'url(#bioHelixGlow)'}
                strokeWidth={isSelected ? 1.8 : 1}
                opacity={isSelected ? 0.9 : 0.45}
                strokeDasharray={isSelected ? 'none' : '4 3'}
                className="transition-all duration-300"
              />
              {/* Traveling energy signal */}
              <circle
                cx={(cx + av.x) / 2}
                cy={(cy + av.y) / 2}
                r={isSelected ? 3.5 : 2}
                fill={isSelected ? '#10B981' : '#6D28D9'}
                opacity={0.8}
              />
            </g>
          );
        })}

        {/* Cross-Vector Mesh among Nodes */}
        {[
          [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 7], [1, 5], [2, 6]
        ].map(([a, b], idx) => (
          <line
            key={`mesh-${idx}`}
            x1={avatars[a].x}
            y1={avatars[a].y}
            x2={avatars[b].x}
            y2={avatars[b].y}
            stroke="#C4B5FD"
            strokeWidth="0.5"
            opacity="0.3"
            strokeDasharray="2 4"
          />
        ))}

        {/* Central Symbiosis Core: Technology + Leadership + Execution */}
        <circle cx={cx} cy={cy} r="86" fill="url(#centralCoreGrad)" filter="url(#softGlow)" />
        <circle cx={cx} cy={cy} r="86" stroke="#6D28D9" strokeWidth="1.2" strokeOpacity="0.2" />

        {/* Core Glyph & Cluster */}
        <g transform={`translate(${cx}, ${cy})`}>
          {/* Subtle Rotating Ring */}
          <circle cx="0" cy="0" r="62" stroke="#10B981" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.4" />
          
          {/* Central Human-Capital Icon */}
          <circle cx="0" cy="-12" r="14" fill="#3B1366" />
          <path d="M-20,18 C-20,2 -10,-2 0,-2 C10,-2 20,2 20,18 Z" fill="#3B1366" />
          <circle cx="-2" cy="-15" r="4" fill="white" opacity="0.2" />

          {/* Left Sub-Node: Technology */}
          <circle cx="-32" cy="12" r="8" fill="#6D28D9" />
          <path d="M-44,30 C-44,20 -38,18 -32,18 C-26,18 -20,20 -20,30 Z" fill="#6D28D9" opacity="0.9" />

          {/* Right Sub-Node: Leadership */}
          <circle cx="32" cy="12" r="8" fill="#10B981" />
          <path d="M20,30 C20,20 26,18 32,18 C38,18 44,20 44,30 Z" fill="#10B981" opacity="0.9" />

          <text x="0" y="44" textAnchor="middle" fill="#3B1366" fontSize="9" fontWeight="800" letterSpacing="0.08em">
            BIO GALAXI CORE
          </text>
        </g>

        {/* Interactive Avatars in Frosted Bio-Nodes */}
        {avatars.map((av, idx) => {
          const isSelected = activeNode?.id === av.id;
          return (
            <g
              key={av.id}
              transform={`translate(${av.x}, ${av.y})`}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setActiveNode(av)}
              onMouseEnter={() => setActiveNode(av)}
            >
              {/* Outer Pulse Wave for selected */}
              {isSelected && (
                <circle cx="0" cy="0" r="28" fill="none" stroke="#10B981" strokeWidth="1.5" className="animate-ping" opacity="0.4" />
              )}

              {/* Glass Bubble Base */}
              <circle
                cx="0"
                cy="0"
                r="22"
                fill={isSelected ? '#3B1366' : 'white'}
                stroke={isSelected ? '#10B981' : '#6D28D9'}
                strokeWidth={isSelected ? '2' : '1.2'}
                strokeOpacity={isSelected ? '1' : '0.4'}
                filter="url(#softGlow)"
              />

              {/* Avatar Head & Torso */}
              <circle cx="0" cy="-5" r="7" fill={isSelected ? '#34D399' : '#6D28D9'} />
              <path
                d="M-10,13 C-10,7 -5,5 0,5 C5,5 10,7 10,13 Z"
                fill={isSelected ? '#FFFFFF' : '#3B1366'}
                opacity={isSelected ? 0.95 : 0.85}
              />

              {/* Status Indicator Dot */}
              <circle
                cx="14"
                cy="-14"
                r="3.5"
                fill={idx % 2 === 0 ? '#10B981' : '#6D28D9'}
                stroke="white"
                strokeWidth="1.5"
              />
            </g>
          );
        })}
      </svg>

      {/* Interactive Floating Detail Inspector Card */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-[#10B981]/40 shadow-[0_16px_36px_rgba(59,19,102,0.18)] rounded-2xl px-4 py-3 min-w-[260px] max-w-[320px] z-30"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <h5 className="text-xs font-bold text-[#3B1366] tracking-tight">{activeNode.name}</h5>
                  <CheckCircle2 size={12} className="text-[#10B981]" />
                </div>
                <p className="text-[11px] font-semibold text-[#6D28D9] leading-tight">{activeNode.role}</p>
                <p className="text-[10px] text-[#64748B] mt-0.5 font-mono">{activeNode.domain}</p>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#ECFDF5] text-[#10B981] border border-[#10B981]/20">
                {activeNode.status}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const { hero } = siteContent;
  const [activeNode, setActiveNode] = useState({
    id: 'av-1',
    name: 'Dr. Elena Rostova',
    role: 'Head of Gene Editing',
    domain: 'Biotech · CRISPR/Cas9',
    status: 'Deployed',
  });

  const iconMap = {
    monitor: Monitor,
    'user-cog': UserCog,
    briefcase: Briefcase,
    award: Award,
  };

  const cardPositions = {
    'top-left': 'lg:top-[2%] lg:left-[2%]',
    'top-right': 'lg:top-[2%] lg:right-[-2%]',
    'bottom-left': 'lg:bottom-[22%] lg:left-[-2%]',
    'bottom-right': 'lg:bottom-[22%] lg:right-[-5%]',
  };

  const floatOffsets = [
    { y: [-4, 4, -4], duration: 5.2 },
    { y: [4, -4, 4], duration: 5.8 },
    { y: [-5, 5, -5], duration: 4.9 },
    { y: [5, -5, 5], duration: 5.5 },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 lg:pt-28 pb-8 lg:pb-12"
      style={{
        background: 'linear-gradient(135deg, #F8F6FD 0%, #EBF4FE 28%, #DCEBFC 58%, #CDE2F4 85%, #C2DCF0 100%)',
      }}
    >
      {/* Precision Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[15%] left-[8%] w-[580px] h-[580px] bg-[#6D28D9]/10 rounded-full blur-[110px]" />
        <div className="absolute top-[30%] right-[5%] w-[480px] h-[480px] bg-[#10B981]/12 rounded-full blur-[90px]" />
        <div className="absolute bottom-[0%] left-[25%] w-[380px] h-[380px] bg-white/70 rounded-full blur-[80px]" />
      </div>

      {/* Grid line texture overlay */}
      <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" />

      {/* Dotted Bio-wave pattern */}
      <svg className="absolute left-0 top-[18%] w-40 h-80 opacity-[0.16] pointer-events-none" viewBox="0 0 130 260">
        {[...Array(10)].map((_, i) => (
          <path
            key={`wave-l-${i}`}
            d={`M${8 + i * 11},0 Q${22 + i * 11},65 ${8 + i * 11},130 Q${-6 + i * 11},195 ${8 + i * 11},260`}
            fill="none"
            stroke="#6D28D9"
            strokeWidth="0.7"
            strokeDasharray="2 4"
          />
        ))}
      </svg>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start pt-4 pb-10 gap-8 lg:gap-4">
          
          {/* Left Column – Strategic Narrative (40%) */}
          <div className="lg:w-[42%] flex flex-col items-start text-left space-y-5 pt-3">
            
            {/* Live Status Pill Badge */}
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#6D28D9]/20 shadow-[0_2px_12px_rgba(109,40,217,0.09)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span className="text-[11px] font-bold tracking-tight text-[#3B1366]">
                  {hero.badge}
                </span>
                <span className="text-[10px] font-mono font-semibold text-[#10B981] bg-[#ECFDF5] px-1.5 py-0.5 rounded">
                  Life Sciences Focus
                </span>
              </div>
            </Reveal>

            {/* Headline with High-Impact Gradient Span */}
            <Reveal delay={0.12}>
              <h1 className="font-extrabold text-[#3B1366] leading-[1.06] tracking-tight text-[38px] sm:text-[44px] lg:text-[48px]">
                <span>Transforming </span>
                <span className="bg-gradient-to-r from-[#3B1366] via-[#6D28D9] to-[#10B981] bg-clip-text text-transparent">
                  People Functions.
                </span>
                <span className="block mt-1">Empowering</span>
                <span className="block bg-gradient-to-r from-[#10B981] to-[#3B1366] bg-clip-text text-transparent">
                  Business Growth.
                </span>
              </h1>
            </Reveal>

            {/* Subparagraph */}
            <Reveal delay={0.20}>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed max-w-lg font-normal">
                {hero.paragraph}
              </p>
            </Reveal>

            {/* Primary & Secondary Action Buttons */}
            <Reveal delay={0.28}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button href={hero.primaryCta.href} variant="primary" size="md">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="md" hasArrow={false}>
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>

            {/* Live Science Verification Tag */}
            <Reveal delay={0.33}>
              <div className="flex items-center gap-2 pt-2 text-[11px] font-medium text-[#64748B]">
                <ShieldCheck size={14} className="text-[#10B981]" />
                <span>GxP-compliant talent pipelines · ISO 9001 aligned methodology</span>
              </div>
            </Reveal>

            {/* Architectural Watermark */}
            <Reveal delay={0.38}>
              <div className="select-none pointer-events-none opacity-[0.07] font-black text-[30px] sm:text-[34px] lg:text-[36px] leading-[1.1] text-[#6D28D9] tracking-wider whitespace-pre pt-2">
                {hero.watermarkLines.map((wLine, idx) => (
                  <div key={idx}>{wLine}</div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column – Interactive Living Bio-Network & Floating Telemetry (58%) */}
          <div className="lg:w-[58%] relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]">
            
            {/* Interactive SVG Network */}
            <div className="w-full">
              <InteractiveBioNetwork activeNode={activeNode} setActiveNode={setActiveNode} />
            </div>

            {/* Floating Glass Telemetry Cards */}
            {hero.floatingCards.map((card, idx) => {
              const Icon = iconMap[card.icon] || UserCog;
              const posClass = cardPositions[card.position] || '';
              const offset = floatOffsets[idx];

              return (
                <motion.div
                  key={card.id}
                  animate={{ y: offset.y }}
                  transition={{ duration: offset.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${posClass} hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#6D28D9]/15 shadow-[0_8px_24px_rgba(59,19,102,0.08)] min-w-[185px] z-20 transition-all hover:scale-105 hover:shadow-[0_12px_30px_rgba(59,19,102,0.14)]`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-[#6D28D9] flex-shrink-0">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#3B1366] tracking-tight leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-[10px] text-[#64748B] font-medium leading-tight mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Real-Time Telemetry Metrics Bar */}
        <Reveal delay={0.4}>
          <div className="mt-4 pt-6 border-t border-[#6D28D9]/15 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {hero.stats?.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#6D28D9]/15 shadow-[0_4px_16px_rgba(59,19,102,0.04)] hover:border-[#10B981]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#3B1366] tracking-tight group-hover:text-[#6D28D9] transition-colors">
                    {stat.value}
                  </span>
                  <Activity size={15} className="text-[#10B981] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h5 className="text-xs font-bold text-[#3B1366] leading-snug">
                  {stat.label}
                </h5>
                <p className="text-[10px] font-mono text-[#64748B] mt-0.5">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
