import React from 'react';
import { Monitor, Users, Briefcase, ArrowRight } from 'lucide-react';
import pillarTechImg from '../../assets/generated/pillar_tech.png';
import pillarLeadImg from '../../assets/generated/pillar_leadership.png';
import pillarExecImg from '../../assets/generated/pillar_execution.png';

export default function ActionBoxes() {
  const boxes = [
    {
      id: 'tech',
      title: 'Technology & TMS',
      subtitle: 'Digital Enablers',
      description: 'Proprietary TMS infrastructure that automates scientific talent matching, skill taxonomy, and GxP regulatory compliance.',
      icon: Monitor,
      image: pillarTechImg,
      link: '#ecosystem',
    },
    {
      id: 'leadership',
      title: 'Fractional CHRO Solutions',
      subtitle: 'Strategic Leadership',
      description: 'Experienced board-level HR executives delivering strategic organizational direction, compensation design, and leadership governance.',
      icon: Users,
      image: pillarLeadImg,
      link: '#services',
    },
    {
      id: 'execution',
      title: 'Workforce Execution',
      subtitle: 'Operational Expertise',
      description: 'Agile talent deployment connecting specialized biotech, pharma, and life sciences researchers to mission-critical project sprints.',
      icon: Briefcase,
      image: pillarExecImg,
      link: '#services',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {boxes.map((box) => {
          const Icon = box.icon;
          return (
            <div
              key={box.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_rgba(3,90,149,0.08)] hover:shadow-[0_20px_50px_rgba(3,90,149,0.15)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Preview at Top */}
              <div className="w-full h-36 overflow-hidden bg-slate-100 relative">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#035A95] text-white flex items-center justify-center shadow-md">
                  <Icon size={20} strokeWidth={2} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#035A95] block mb-1">
                    {box.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#2A2A2A] group-hover:text-[#035A95] transition-colors mb-2.5">
                    {box.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {box.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={box.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#035A95] hover:text-[#B9D057] transition-colors uppercase tracking-wider"
                  >
                    <span>Read More</span>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
