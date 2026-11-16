import React from 'react';
import { ArrowUp } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/content.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-neutral-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand lockup */}
          <div className="flex items-center">
            <div className="h-10 sm:h-12 flex items-center">
              <img
                src={IMAGES.logoTopExact}
                alt="DEBAKS - One Vision. Multiple Possibilities."
                referrerPolicy="no-referrer"
                className="h-full w-auto max-w-[180px] object-contain rounded filter drop-shadow-md"
              />
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium tracking-wider">
            <a href="#home" className="hover:text-[#dfbe70] transition-colors">HOME</a>
            <a href="#solutions" className="hover:text-[#dfbe70] transition-colors">SOLUTIONS</a>
            <a href="#capabilities" className="hover:text-[#dfbe70] transition-colors">CAPABILITIES</a>
            <a href="#work" className="hover:text-[#dfbe70] transition-colors">WORK</a>
            <a href="#about" className="hover:text-[#dfbe70] transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-[#dfbe70] transition-colors">CONTACT</a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-[#dfbe70]" />
            </div>
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} DEBAKS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>{CONTACT_INFO.location}</span>
            <span>·</span>
            <span>{CONTACT_INFO.email}</span>
            <span>·</span>
            <span>{CONTACT_INFO.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
