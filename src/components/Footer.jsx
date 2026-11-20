import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, Globe, Activity } from 'lucide-react';
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import Logo from './ui/Logo';
import { siteContent } from '../data/content';

export default function Footer() {
  const { footer, company } = siteContent;
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIconMap = {
    LinkedIn: FaLinkedinIn,
    YouTube: FaYoutube,
    X: FaXTwitter,
    Instagram: FaInstagram,
  };

  const hubs = [
    { city: 'Cambridge / Boston', code: 'US-BOS' },
    { city: 'Basel / Zurich', code: 'CH-BSL' },
    { city: 'London / Oxford', code: 'UK-LON' },
    { city: 'Singapore', code: 'SG-SIN' },
    { city: 'Bangalore / Hyd', code: 'IN-BLR' },
  ];

  return (
    <footer className="bg-white border-t border-[#6D28D9]/15 pt-16 pb-12 text-[#475569] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Global Life Sciences Hubs Bar */}
        <div className="pb-8 mb-10 border-b border-[#EDE9FE] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe size={15} className="text-[#6D28D9]" />
            <span className="text-xs font-mono font-bold text-[#3B1366] uppercase tracking-wider">
              Life Sciences Talent Corridors:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] font-mono text-[#64748B]">
            {hubs.map((hub) => (
              <div key={hub.city} className="flex items-center gap-1.5 bg-[#F8FBFF] px-2.5 py-1 rounded-lg border border-[#EDE9FE]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="font-semibold text-[#3B1366]">{hub.city}</span>
                <span className="text-[#94A3B8]">({hub.code})</span>
              </div>
            ))}
          </div>

          {/* System Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/20 text-[10px] font-mono text-[#3B1366]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span>All Systems Operational</span>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#EDE9FE]">
          
          {/* Column 1: Logo, Positioning & Social Icons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <a href="#hero" className="mb-4 inline-block">
              <Logo />
            </a>
            
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
              {footer.description}
            </p>

            {/* Compliance & Standards Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-[#F8F6FD] border border-[#6D28D9]/15 text-[10px] font-mono text-[#3B1366] flex items-center gap-1">
                <ShieldCheck size={11} className="text-[#10B981]" />
                GxP Aligned
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#F8F6FD] border border-[#6D28D9]/15 text-[10px] font-mono text-[#3B1366] flex items-center gap-1">
                <ShieldCheck size={11} className="text-[#6D28D9]" />
                ISO 9001 Process
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#F8F6FD] border border-[#6D28D9]/15 text-[10px] font-mono text-[#3B1366] flex items-center gap-1">
                <ShieldCheck size={11} className="text-[#3B1366]" />
                SOC-2 Ready
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {footer.socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.name] || FaLinkedinIn;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-8 h-8 rounded-full bg-[#F8F6FD] border border-[#6D28D9]/20 flex items-center justify-center text-[#3B1366] hover:bg-[#3B1366] hover:text-white hover:border-[#3B1366] transition-all duration-300 shadow-xs"
                  >
                    <IconComponent size={13} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold text-[#3B1366] uppercase tracking-wider mb-4">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#64748B] hover:text-[#6D28D9] transition-colors duration-150 inline-block font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Solutions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#3B1366] uppercase tracking-wider mb-4">
              {footer.solutionsTitle}
            </h4>
            <ul className="space-y-2.5">
              {footer.solutions.map((sol) => (
                <li key={sol}>
                  <a
                    href="#solutions"
                    className="text-xs text-[#64748B] hover:text-[#6D28D9] transition-colors duration-150 inline-block font-medium"
                  >
                    {sol}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch & Direct Advisory (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#3B1366] uppercase tracking-wider mb-4">
              {footer.contactTitle}
            </h4>
            <ul className="space-y-3.5 mb-6">
              {footer.contactInfo.map((item, idx) => {
                const Icon = item.type === 'email' ? Mail : item.type === 'phone' ? Phone : MapPin;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-[#6D28D9] flex-shrink-0 mt-0.5">
                      <Icon size={13} />
                    </div>
                    {item.href && item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="text-xs text-[#64748B] hover:text-[#3B1366] transition-colors duration-150 leading-relaxed font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xs text-[#64748B] leading-relaxed font-medium">
                        {item.value}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="p-3 rounded-xl bg-[#F8FBFF] border border-[#6D28D9]/15">
              <span className="text-[10px] font-mono text-[#10B981] font-bold block mb-0.5">
                Talent Advisory Desk
              </span>
              <p className="text-[11px] text-[#475569]">
                Inquiries routed directly to our Life Sciences Practice Directors.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="font-mono text-[11px]">
            {footer.copyright}
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            {footer.legalLinks.map((legal) => (
              <a
                key={legal.label}
                href={legal.href}
                className="hover:text-[#3B1366] transition-colors"
              >
                {legal.label}
              </a>
            ))}
          </div>

          {/* Smooth Scroll to Top Action */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F6FD] border border-[#6D28D9]/20 text-[11px] font-mono font-bold text-[#3B1366] hover:bg-[#3B1366] hover:text-white transition-all shadow-xs"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
