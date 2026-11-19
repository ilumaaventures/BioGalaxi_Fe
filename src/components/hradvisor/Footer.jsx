import React from 'react';
import { Home, Mail, Smartphone } from 'lucide-react';
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import logoWhite from '../../assets/logo_biogalaxi_white.png';

export default function Footer() {
  return (
    <footer id="contacts" className="w-full bg-gradient-to-r from-[#035A95] via-[#0077A9] to-[#0498BD] text-white pt-16 sm:pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* 4-Column Main Layout matching template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          
          {/* Column 1: Logo & Contact Info */}
          <div>
            <div className="mb-7">
              <a href="#home" className="inline-block group" aria-label="Bio Galaxi Home">
                <img
                  src={logoWhite}
                  alt="Bio Galaxi - Integrated Talent Partner"
                  className="h-10 sm:h-11 w-auto max-h-[48px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </a>
            </div>

            <ul className="space-y-3.5 text-xs text-white/85">
              <li className="flex items-start gap-3">
                <Home size={15} className="text-[#B9D057] flex-shrink-0 mt-0.5" />
                <span>Life Sciences Innovation Corridor,<br />Tech Park, Suite 400</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#B9D057] flex-shrink-0" />
                <a href="mailto:info@biogalaxi.com" className="hover:text-[#B9D057] transition-colors">
                  info@biogalaxi.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone size={15} className="text-[#B9D057] flex-shrink-0" />
                <a href="tel:+910000000000" className="hover:text-[#B9D057] transition-colors">
                  +91 00000 00000
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h5 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white mb-6">
              SOLUTIONS
            </h5>
            <ul className="space-y-3 text-xs text-white/85">
              <li>
                <a href="#services" className="hover:text-[#B9D057] transition-colors">
                  Talent Management System (TMS)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B9D057] transition-colors">
                  Fractional CHRO Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B9D057] transition-colors">
                  Staffing & Workforce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B9D057] transition-colors">
                  Employee Welfare & Gifting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigate */}
          <div>
            <h5 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white mb-6">
              NAVIGATE
            </h5>
            <ul className="space-y-3 text-xs text-white/85">
              <li>
                <a href="#home" className="hover:text-[#B9D057] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B9D057] transition-colors">
                  About Bio Galaxi
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#B9D057] transition-colors">
                  Company Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#B9D057] transition-colors">
                  Impact & Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Subscribe */}
          <div>
            <h5 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white mb-6">
              CONNECT
            </h5>
            <ul className="space-y-3 text-xs text-white/85">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#B9D057] transition-colors">
                  <FaLinkedinIn size={12} className="text-[#B9D057]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#B9D057] transition-colors">
                  <FaXTwitter size={12} className="text-[#B9D057]" />
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#B9D057] transition-colors">
                  <FaYoutube size={13} className="text-[#B9D057]" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#B9D057] transition-colors">
                  <FaInstagram size={13} className="text-[#B9D057]" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/75">
          <div>
            Bio Galaxi &copy; 2026. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}