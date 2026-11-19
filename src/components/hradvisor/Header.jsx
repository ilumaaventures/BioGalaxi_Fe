import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Search } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { 
      label: 'Services', 
      href: '#services',
      hasDropdown: true,
      items: [
        { name: 'Talent Management System (TMS)', href: '#services' },
        { name: 'Fractional CHRO Solutions', href: '#services' },
        { name: 'End-to-End Talent Function Management', href: '#services' },
        { name: 'Staffing & Workforce Solutions', href: '#services' },
        { name: 'Employee Engagement & Culture', href: '#services' },
        { name: 'Rewards, Recognition & Welfare', href: '#services' },
        { name: 'Corporate Gifting Collections', href: '#services' },
      ]
    },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Life Sciences', href: '#industries' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-[0_4px_25px_rgba(3,90,149,0.08)] py-3 border-b border-slate-100'
          : 'py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <Logo height="h-10" />
          <div className="hidden sm:block border-l border-slate-200 pl-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#035A95] block leading-tight">
              HR Advisor
            </span>
            <span className="text-[9px] text-slate-400 block leading-tight">
              Talent & Workforce OS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold uppercase tracking-wide text-[#2A2A2A]">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 py-2 hover:text-[#035A95] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#035A95]' : ''}`} />
                  </a>

                  {servicesDropdown && (
                    <div className="absolute top-full left-0 pt-2 w-72 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 space-y-1">
                        {link.items.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-3 py-2 text-xs font-semibold normal-case text-slate-600 hover:text-[#035A95] hover:bg-[#F1F6FB] rounded-lg transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="py-2 hover:text-[#035A95] transition-colors"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Search Trigger */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B9D057] text-[#035A95] text-xs font-extrabold uppercase tracking-wider hover:bg-[#a6bd47] transition-all shadow-sm active:scale-95"
          >
            <span>Free Consultation</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#035A95] rounded-lg hover:bg-slate-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-5 shadow-xl">
          <nav className="flex flex-col space-y-3 text-xs font-bold uppercase tracking-wide text-[#2A2A2A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#035A95] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#B9D057] text-[#035A95] text-xs font-extrabold uppercase tracking-wider shadow-sm"
              >
                <span>Free Consultation</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
