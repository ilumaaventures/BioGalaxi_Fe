  import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Shield, Cpu, Users, HeartHandshake } from 'lucide-react';
import Logo from './ui/Logo';
import { siteContent } from '../data/content';

export default function Navbar() {
  const { navbar } = siteContent;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'pillars', 'solutions', 'technology', 'industries', 'why-bio-galaxi', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionCategories = [
    {
      category: 'Technology',
      icon: Cpu,
      color: 'text-[#6D28D9]',
      items: [
        { name: 'Talent Management System (TMS)', desc: 'AI-assisted people platform', href: '#technology' },
      ],
    },
    {
      category: 'Leadership',
      icon: Shield,
      color: 'text-[#10B981]',
      items: [
        { name: 'Fractional CHRO Solutions', desc: 'Board-level strategic HR guidance', href: '#solutions' },
      ],
    },
    {
      category: 'Workforce',
      icon: Users,
      color: 'text-[#3B1366]',
      items: [
        { name: 'Staffing & Scientific Hiring', desc: 'Agile life sciences recruitment', href: '#solutions' },
        { name: 'End-to-End Function Management', desc: 'Turnkey HR operating infrastructure', href: '#solutions' },
      ],
    },
    {
      category: 'Culture & Retention',
      icon: HeartHandshake,
      color: 'text-[#7C3AED]',
      items: [
        { name: 'Employee Engagement & Wellbeing', desc: 'High-trust research cultures', href: '#solutions' },
        { name: 'Rewards, Recognition & Gifting', desc: 'Milestone & discovery celebrations', href: '#solutions' },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-[#6D28D9]/15 shadow-[0_8px_30px_rgba(59,19,102,0.06)] py-2.5'
          : 'bg-white/70 backdrop-blur-md border-b border-white/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Logo & Telemetry Pill */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex items-center gap-2 group transition-transform duration-200 active:scale-95">
            <Logo />
          </a>
          <div className="hidden xl:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#F8F6FD] border border-[#6D28D9]/15 text-[10px] font-mono text-[#3B1366]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Bio-Talent OS v2.4</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#475569]">
          {navbar.links.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group py-2"
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#3B1366] ${
                      activeSection === 'solutions' ? 'text-[#3B1366] font-semibold' : ''
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 text-[#64748B] group-hover:text-[#3B1366] ${
                        solutionsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </a>

                  {/* Mega Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[460px] pt-2 transition-all duration-200 ${
                      solutionsDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-2'
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(59,19,102,0.14)] border border-[#6D28D9]/15 p-4 grid grid-cols-2 gap-3">
                      {solutionCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <div key={cat.category} className="space-y-1.5 p-2 rounded-xl bg-[#F8F6FD] border border-[#EDE9FE]">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#3B1366] tracking-tight">
                              <Icon size={13} className={cat.color} />
                              <span>{cat.category}</span>
                            </div>
                            {cat.items.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setSolutionsDropdownOpen(false)}
                                className="block p-1.5 rounded-lg text-xs hover:bg-white hover:shadow-xs transition-all group/item"
                              >
                                <span className="font-semibold text-[#3B1366] block leading-snug group-hover/item:text-[#6D28D9] transition-colors">
                                  {subItem.name}
                                </span>
                                <span className="text-[10px] text-[#64748B] leading-tight block">
                                  {subItem.desc}
                                </span>
                              </a>
                            ))}
                          </div>
                        );
                      })}
                      <div className="col-span-2 pt-2 border-t border-[#EDE9FE] flex items-center justify-between text-[11px] text-[#64748B] px-1">
                        <span>Integrated Life Sciences Talent Ecosystem</span>
                        <a href="#solutions" className="text-[#6D28D9] font-bold hover:underline inline-flex items-center gap-1">
                          View All 8 Modules <ArrowRight size={11} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 hover:text-[#3B1366] relative py-1 ${
                  isActive ? 'text-[#3B1366] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6D28D9] to-[#10B981] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Quick Consultation Trigger */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#3B1366] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#4C1D95] transition-all duration-300 shadow-[0_4px_16px_rgba(59,19,102,0.2)] hover:shadow-[0_8px_24px_rgba(59,19,102,0.3)] active:scale-[0.98] group"
          >
            <Sparkles size={13} className="text-[#10B981] transition-transform duration-300 group-hover:rotate-12" />
            <span>{navbar.cta.label}</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#3B1366] hover:bg-[#F8F6FD] transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-[#6D28D9]/15 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#475569]">
            {navbar.links.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#3B1366] font-semibold hover:text-[#6D28D9] transition-colors"
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="pl-4 mt-1 border-l-2 border-[#6D28D9]/20 grid gap-2">
                    {link.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-[#64748B] hover:text-[#3B1366] py-1 block"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#6D28D9]/10">
              <a
                href={navbar.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#3B1366] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#4C1D95] transition-colors shadow-md"
              >
                <Sparkles size={14} className="text-[#10B981]" />
                <span>{navbar.cta.label}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
