import React from 'react';
import { Dna, Pill, FlaskConical, ArrowRight } from 'lucide-react';
import indBioImg from '../../assets/generated/ind_biotech.png';
import indPhaImg from '../../assets/generated/ind_pharma.png';
import indLifeImg from '../../assets/generated/ind_lifesciences.png';

export default function ProgramsAndIndustries() {
  const industries = [
    {
      id: 'biotech',
      category: 'Target Discovery to Clinical Trials',
      title: 'Biotechnology & Gene Therapy',
      desc: 'Deploying bench scientists, CRISPR/Cas9 specialists, RNA therapeutics engineers, and bioprocess leads to accelerated research sprints.',
      image: indBioImg,
      icon: Dna,
      badge: 'Tier-1 Focus',
    },
    {
      id: 'pharma',
      category: 'Clinical Development & Regulatory',
      title: 'Pharmaceuticals & GxP Compliance',
      desc: 'Expert placements across Phase I-IV clinical operations, pharmacovigilance, FDA/EMA submissions, and certified laboratory clearance.',
      image: indPhaImg,
      icon: Pill,
      badge: 'Audit-Ready',
    },
    {
      id: 'lifesciences',
      category: 'Analytical Systems & Diagnostics',
      title: 'Life Sciences & MedTech',
      desc: 'Bridging computational genomics, diagnostic instrument engineering, ISO 13485 quality systems, and turnkey laboratory automation.',
      image: indLifeImg,
      icon: FlaskConical,
      badge: 'Rapid Scale',
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-24 bg-[#F1F6FB] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#B9D057] rounded-full inline-block" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#035A95]">
              Sector Focus
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#2A2A2A] leading-tight tracking-tight mb-3">
            Built Around People. Focused on Life Sciences.
          </h2>

          <p className="text-sm text-slate-500 font-normal">
            Specialized programs engineered for organizations operating in precision scientific environments.
          </p>
        </div>

        {/* 3 Course/Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Image Preview at Top */}
                <div className="h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-[#035A95] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {ind.badge}
                  </span>

                  {/* Icon at bottom-right of image */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-[#035A95] flex items-center justify-center shadow-md">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9D057] block mb-1">
                      {ind.category}
                    </span>
                    <h3 className="text-base font-bold text-[#2A2A2A] group-hover:text-[#035A95] transition-colors mb-2 leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#035A95] group-hover:text-[#B9D057] transition-colors uppercase tracking-wider">
                      Explore Sector
                    </span>
                    <ArrowRight size={13} className="text-[#035A95] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
