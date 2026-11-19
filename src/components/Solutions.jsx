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
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2A5E] tracking-tight leading-[1.12]">
                <span>Everything Your People Function Needs. </span>
                <span className="bg-gradient-to-r from-[#2F7BEA] to-[#1AA6A6] bg-clip-text text-transparent">
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
          <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#E3EFFE]">
            {solutions.categories?.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 select-none ${
                    isActive
                      ? 'bg-[#0A2A5E] text-white shadow-[0_4px_14px_rgba(10,42,94,0.2)]'
                      : 'bg-white/80 text-[#64748B] hover:text-[#0A2A5E] hover:bg-white border border-[#2F7BEA]/15'
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
                <Card className="h-full p-5 sm:p-6 flex flex-col justify-between bg-white/95 border border-[#2F7BEA]/15 hover:border-[#2F7BEA]/40 transition-all duration-300 group hover:shadow-[0_16px_36px_rgba(10,42,94,0.1)]">
                  <div>
                    {/* Top Row: Icon + Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#E3EFFE] flex items-center justify-center text-[#2F7BEA] shadow-xs group-hover:bg-[#0A2A5E] group-hover:text-white transition-all duration-300">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#1AA6A6] bg-[#EBFBFA] px-2 py-0.5 rounded-full border border-[#1AA6A6]/20">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#0A2A5E] leading-snug tracking-tight mb-2 group-hover:text-[#2F7BEA] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metric & Interaction */}
                  <div className="pt-3 border-t border-[#E3EFFE] flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-[#0A2A5E] font-medium truncate max-w-[170px]">
                      {item.metrics}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedSolution(item)}
                      className="text-[#2F7BEA] hover:text-[#0A2A5E] p-1 transition-colors"
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
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_25px_60px_rgba(10,42,94,0.25)] border border-[#2F7BEA]/20 relative">
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F4F9FF] text-[#64748B] hover:text-[#0A2A5E] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase font-bold text-[#1AA6A6] bg-[#EBFBFA] px-2.5 py-0.5 rounded-full">
                  {selectedSolution.tag}
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">
                  Bio Galaxi Operating Module
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#0A2A5E] mb-3">
                {selectedSolution.title}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-5">
                {selectedSolution.description}
              </p>

              <div className="bg-[#F8FBFF] p-4 rounded-2xl border border-[#E3EFFE] mb-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2A5E]">
                  <CheckCircle2 size={14} className="text-[#1AA6A6]" />
                  <span>Key Impact: {selectedSolution.metrics}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#475569]">
                  <CheckCircle2 size={14} className="text-[#2F7BEA]" />
                  <span>Integrated with Bio Galaxi TMS software and advisory pod</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#475569]">
                  <CheckCircle2 size={14} className="text-[#2F7BEA]" />
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
