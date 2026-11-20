import React from 'react';

export default function CompaniesBenefits() {
  const stats = [
    {
      value: '500+',
      label: 'SCIENTISTS & LEADERS PLACED',
      icon: (
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="4" fill="#10B981" />
          <line x1="38" y1="10" x2="44" y2="4" />
          <path d="M40 4 L44 4 L44 8" />
        </svg>
      ),
    },
    {
      value: '18 Days',
      label: 'AVERAGE TIME-TO-HIRE',
      icon: (
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="14" width="32" height="24" rx="3" />
          <path d="M18 14 V10 C18 8.89 18.89 8 20 8 H28 C29.11 8 30 8.89 30 10 V14" />
          <line x1="8" y1="24" x2="40" y2="24" />
          <circle cx="24" cy="24" r="2.5" fill="#10B981" />
        </svg>
      ),
    },
    {
      value: '98.4%',
      label: 'TALENT RETENTION RATE',
      icon: (
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="22" rx="2" />
          <line x1="14" y1="16" x2="22" y2="16" />
          <line x1="14" y1="21" x2="26" y2="21" />
          <line x1="14" y1="26" x2="34" y2="26" />
          <line x1="16" y1="32" x2="10" y2="42" />
          <line x1="32" y1="32" x2="38" y2="42" />
          <line x1="24" y1="32" x2="24" y2="40" />
        </svg>
      ),
    },
    {
      value: '100%',
      label: 'GXP & CLINICAL COMPLIANCE',
      icon: (
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="6" />
          <path d="M10 38 C10 30 16 26 24 26 C32 26 38 30 38 38" />
          <polygon points="24,26 21,32 27,32" fill="#10B981" />
          <line x1="24" y1="32" x2="24" y2="38" strokeWidth="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-24 bg-[#F8F6FD]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Bio Galaxi Value Prop & Action Button */}
          <div className="lg:col-span-6">
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#6D28D9] block mb-3">
              TALENT ECOSYSTEM & IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] text-[#2D1B36] font-carnas leading-[1.15] tracking-normal mb-8">
              Companies Benefits
            </h2>

            <div className="text-[#666666] text-sm leading-[1.8] space-y-5 mb-9">
              <p>
                Our offerings go beyond traditional recruitment and include our Talent Management System (TMS) platform, Fractional CHRO solutions, end-to-end talent function management, staffing and workforce solutions, employee engagement, Rewards & Recognition, employee welfare and corporate gifting.
              </p>
              <p>
                Our approach is to provide organisations with a complete talent partnership by bringing together the right technology, strategic expertise and operational support under one roof, with a special focus on the Bio, Pharma and Life Sciences industry.
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#4C1D95] via-[#581C87] to-[#10B981] hover:from-[#3B1366] hover:to-[#059669] text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-md hover:shadow-lg active:scale-95 rounded-none"
            >
              MORE INFO
            </a>
          </div>

          {/* Right Column: 2x2 Grid of 4 Counters */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-14">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <div className="text-4xl sm:text-[46px] font-carnas text-[#2D1B36] leading-none mb-3">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-[#777777]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}