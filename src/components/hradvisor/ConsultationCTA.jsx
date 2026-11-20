import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Building, Phone } from 'lucide-react';

export default function ConsultationCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Biotechnology');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#1B062E] via-[#3B1366] to-[#581C87] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 subtle-grid-bg opacity-15 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#10B981] block mb-2">
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4">
                Let’s Build a Stronger People Ecosystem.
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8 font-normal max-w-lg">
                Whether you need specialized life sciences recruiting, board-level strategic HR guidance or turnkey TMS technology, our practice directors are ready to partner with you.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-3 w-full text-xs text-white/90">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#10B981]">
                    <Phone size={14} />
                  </div>
                  <span className="font-semibold">+91 00000 00000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#10B981]">
                    <Mail size={14} />
                    </div>
                  <span className="font-semibold">info@biogalaxi.com</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Booking Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-[#2A2A2A] shadow-xl">
                <h3 className="text-base font-bold text-[#6D28D9] mb-1">
                  Schedule a Strategic Consultation
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Connect directly with a Life Sciences Talent Advisory Director.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#F8F6FD] border border-[#6D28D9]/20 text-center space-y-2">
                    <CheckCircle2 size={32} className="text-[#10B981] mx-auto" />
                    <h4 className="text-sm font-bold text-[#6D28D9]">Request Received</h4>
                    <p className="text-xs text-slate-600">
                      We have received your diagnostic request. Our advisory team will reach out to <span className="font-bold text-[#6D28D9]">{email}</span> within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Primary Sector
                      </label>
                      <select
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6FD] border border-slate-200 text-xs text-[#2A2A2A] font-medium focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/30"
                      >
                        <option>Biotechnology & Gene Therapy</option>
                        <option>Pharmaceuticals & Clinical Ops</option>
                        <option>Life Sciences & MedTech</option>
                        <option>Executive / Board-Level CHRO</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6FD] border border-slate-200 text-xs text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/30"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md active:scale-98"
                    >
                      <span>Request Free Consultation</span>
                      <Send size={13} />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                      <ShieldCheck size={12} className="text-[#10B981]" />
                      <span>Confidential · NDA-governed talent advisory</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
