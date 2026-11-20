import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Building, Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { siteContent } from '../data/content';

export default function CTABanner() {
  const { ctaBanner } = siteContent;
  const [selectedFocus, setSelectedFocus] = useState('Biotech');
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#F8F6FD] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6D28D9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1B062E] via-[#3B1366] to-[#4C1D95] border border-[#6D28D9]/30 shadow-[0_25px_60px_rgba(59,19,102,0.3)] p-8 sm:p-12 lg:p-16 text-white">
            
            {/* Subtle Bio-grid Texture overlay */}
            <div className="absolute inset-0 subtle-grid-bg opacity-15 pointer-events-none" />

            {/* Glowing Accent Orbs in Container */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#6D28D9]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading, Narrative, Live Cohort Status & Trust Metrics */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Cohort Availability Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono mb-5 text-[#C4B5FD]">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span>Now Booking: Q1/Q2 Life Sciences Partnerships</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] mb-5">
                  <span>Let’s Build a Stronger </span>
                  <span className="bg-gradient-to-r from-[#34D399] to-[#A78BFA] bg-clip-text text-transparent">
                    People Ecosystem.
                  </span>
                </h2>
                
                <p className="text-base text-[#D6EBFF] leading-relaxed max-w-xl mb-8 font-normal">
                  {ctaBanner.paragraph}
                </p>

                {/* Trust Metrics Pill Row */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-4 border-t border-white/15">
                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#34D399] block font-mono">18 Days</span>
                    <span className="text-[10px] text-[#C4B5FD] font-mono">Avg. Placement Sprint</span>
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#A78BFA] block font-mono">98.4%</span>
                    <span className="text-[10px] text-[#C4B5FD] font-mono">GxP Retention Rate</span>
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-white block font-mono">8-in-1</span>
                    <span className="text-[10px] text-[#C4B5FD] font-mono">Turnkey Ecosystem</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Booking Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-6 sm:p-7 text-[#3B1366] shadow-2xl border border-white/80">
                  <h3 className="text-base font-extrabold text-[#3B1366] mb-1">
                    Schedule a Strategic Diagnostic
                  </h3>
                  <p className="text-xs text-[#64748B] mb-4">
                    Select your primary sector and get connected to our Life Sciences Talent Advisory pod.
                  </p>

                  {/* Industry Focus Pills */}
                  <div className="mb-4">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-[#10B981] font-bold block mb-1.5">
                      1. Industry Focus
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['Biotech', 'Pharma', 'MedTech'].map((focus) => (
                        <button
                          key={focus}
                          type="button"
                          onClick={() => setSelectedFocus(focus)}
                          className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                            selectedFocus === focus
                              ? 'bg-[#3B1366] text-white shadow-xs'
                              : 'bg-[#F8F6FD] text-[#64748B] hover:bg-[#EDE9FE] border border-[#EDE9FE]'
                          }`}
                        >
                          {focus}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Form */}
                  {submitted ? (
                    <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#10B981]/30 text-center space-y-2">
                      <CheckCircle2 size={24} className="text-[#10B981] mx-auto" />
                      <h4 className="text-xs font-bold text-[#3B1366]">Diagnostic Request Received</h4>
                      <p className="text-[11px] text-[#475569]">
                        Our life sciences talent strategist will reach out to <span className="font-mono font-bold text-[#3B1366]">{emailInput}</span> within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-[#10B981] font-bold block mb-1">
                          2. Work Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#6D28D9]/20 text-xs text-[#3B1366] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/40"
                          />
                          <Mail size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#3B1366] hover:bg-[#4C1D95] text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(59,19,102,0.25)] hover:shadow-[0_6px_20px_rgba(59,19,102,0.35)] active:scale-[0.98]"
                      >
                        <Sparkles size={14} className="text-[#34D399]" />
                        <span>Request Strategic Consultation</span>
                        <ArrowRight size={14} />
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#64748B] pt-1">
                        <ShieldCheck size={12} className="text-[#10B981]" />
                        <span>Confidential · NDA-governed life sciences advisory</span>
                      </div>
                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
