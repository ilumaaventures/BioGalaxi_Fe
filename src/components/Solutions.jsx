import React, { useState } from 'react';
import { 
  Layers, 
  UserRound, 
  Network, 
  Users, 
  Heart, 
  Award, 
  ShieldCheck, 
  Gift,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X
} from 'lucide-react';
import SectionEyebrow from './ui/SectionEyebrow';
import Reveal from './ui/Reveal';
import Card from './ui/Card';
import Button from './ui/Button';
import { siteContent } from '../data/content';

export default function Solutions() {
  const { solutions } = siteContent;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const iconMap = {
    layers: Layers,
    'user-round': UserRound,
    network: Network,
    users: Users,
    heart: Heart,
    award: Award,
    'shield-check': ShieldCheck,
    gift: Gift,
  };

  const filteredItems = activeCategory === 'all'
    ? solutions.items
    : solutions.items.filter((item) => item.category === activeCategory);

  return (
    <section id="solutions" className="py-20 lg:py-28 relative bg-white/70">
      {/* Background Subtle Wave Texture */}
      <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow text={solutions.eyebrow} />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#3B1366] tracking-tight leading-[1.12]">
                <span>Everything Your People Function Needs. </span>
                <span className="bg-gradient-to-r from-[#6D28D9] to-[#10B981] bg-clip-text text-transparent">
                  Under One Roof.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-base text-[#475569] leading-relaxed mt-4">
                {solutions.paragraph}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Button href="#contact" variant="primary" size="md">
              {solutions.cta.label}
            </Button>
          </Reveal>
        </div>

        {/* Interactive Category Filter Pills */}
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#EDE9FE]">
            {solutions.categories?.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 select-none ${
                    isActive
                      ? 'bg-[#3B1366] text-white shadow-[0_4px_14px_rgba(59,19,102,0.2)]'
                      : 'bg-white/80 text-[#64748B] hover:text-[#3B1366] hover:bg-white border border-[#6D28D9]/15'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* 8-Card Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {filteredItems.map((item, idx) => {
            const Icon = iconMap[item.icon] || Layers;

            return (
              <Reveal key={item.id} delay={0.05 * (idx + 1)}>
                <Card className="h-full p-5 sm:p-6 flex flex-col justify-between bg-white/95 border border-[#6D28D9]/15 hover:border-[#6D28D9]/40 transition-all duration-300 group hover:shadow-[0_16px_36px_rgba(59,19,102,0.1)]">
                  <div>
                    {/* Top Row: Icon + Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-[#6D28D9] shadow-xs group-hover:bg-[#3B1366] group-hover:text-white transition-all duration-300">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#10B981]/20">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#3B1366] leading-snug tracking-tight mb-2 group-hover:text-[#6D28D9] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metric & Interaction */}
                  <div className="pt-3 border-t border-[#EDE9FE] flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-[#3B1366] font-medium truncate max-w-[170px]">
                      {item.metrics}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedSolution(item)}
                      className="text-[#6D28D9] hover:text-[#3B1366] p-1 transition-colors"
                      aria-label={`View details for ${item.title}`}
                    >
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Modal / Detail Inspection Dialog */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_25px_60px_rgba(59,19,102,0.25)] border border-[#6D28D9]/20 relative">
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F8F6FD] text-[#64748B] hover:text-[#3B1366] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full">
                  {selectedSolution.tag}
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">
                  Bio Galaxi Operating Module
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#3B1366] mb-3">
                {selectedSolution.title}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-5">
                {selectedSolution.description}
              </p>

              <div className="bg-[#F8FBFF] p-4 rounded-2xl border border-[#EDE9FE] mb-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#3B1366]">
                  <CheckCircle2 size={14} className="text-[#10B981]" />
                  <span>Key Impact: {selectedSolution.metrics}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#475569]">
                  <CheckCircle2 size={14} className="text-[#6D28D9]" />
                  <span>Integrated with Bio Galaxi TMS software and advisory pod</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#475569]">
                  <CheckCircle2 size={14} className="text-[#6D28D9]" />
                  <span>Configured specifically for Bio, Pharma & Life Sciences orgs</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <Button
                  onClick={() => setSelectedSolution(null)}
                  variant="secondary"
                  size="sm"
                  hasArrow={false}
                >
                  Close
                </Button>
                <Button
                  href="#contact"
                  onClick={() => setSelectedSolution(null)}
                  variant="primary"
                  size="sm"
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
