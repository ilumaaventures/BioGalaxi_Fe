import React from 'react';
import { Award, Clock, Users, ShieldCheck } from 'lucide-react';

export default function StatsCounters() {
  const stats = [
    {
      value: '500+',
      label: 'Specialists Deployed',
      detail: 'Bio, Pharma & Life Sciences',
      icon: Users,
    },
    {
      value: '18 Days',
      label: 'Avg. Placement Sprint',
      detail: '62% faster than industry norm',
      icon: Clock,
    },
    {
      value: '98.4%',
      label: 'First-Year Retention Rate',
      detail: 'In critical scientific & R&D roles',
      icon: Award,
    },
    {
      value: '100%',
      label: 'GxP & Audit Compliance',
      detail: 'Cleanroom & trial clearance records',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 bg-[#033E6B] text-white relative overflow-hidden">
      <div className="absolute inset-0 subtle-grid-bg opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#B9D057] mb-3">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#B9D057] tracking-tight mb-1">
                  {st.value}
                </span>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  {st.label}
                </h4>
                <p className="text-[11px] text-white/70 font-normal">
                  {st.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
