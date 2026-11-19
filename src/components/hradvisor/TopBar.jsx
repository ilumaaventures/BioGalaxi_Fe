import React from 'react';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function TopBar() {
  return (
    <div className="bg-[#035A95] text-white text-[12px] font-sans border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex items-center justify-between">
        
        {/* Left Side: Contact & Office Hours */}
        <div className="flex items-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-[#B9D057]" />
            <a href="tel:+910000000000" className="hover:text-white transition-colors">
              +91 00000 00000
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={13} className="text-[#B9D057]" />
            <a href="mailto:info@biogalaxi.com" className="hover:text-white transition-colors">
              info@biogalaxi.com
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Clock size={13} className="text-[#B9D057]" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Right Side: Social Media & Status */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-xs text-white/80 pr-3 border-r border-white/20">
            <ShieldCheck size={13} className="text-[#B9D057]" />
            <span>GxP & Life Sciences Certified</span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
              { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
              { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/80 hover:text-[#B9D057] transition-colors"
                >
                  <Icon size={12} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
