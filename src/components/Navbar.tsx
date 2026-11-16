import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, LayoutTemplate, Layers } from 'lucide-react';
import { IMAGES } from '../data/content.ts';

export type PageId = 'home' | 'solutions' | 'work' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  viewMode: 'continuous' | 'paginated';
  onToggleViewMode: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  viewMode,
  onToggleViewMode,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: PageId }[] = [
    { label: 'HOME', id: 'home' },
    { label: 'SOLUTIONS', id: 'solutions' },
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090a]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#08090a]/90 via-[#08090a]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          
          {/* Brand Zone: Merged unified lockup where logo sticks directly to DEBAKS */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 sm:gap-2.5 group whitespace-nowrap shrink-0 text-left cursor-pointer"
            aria-label="DEBAKS Home"
          >
            <div className="h-9 sm:h-10 flex items-center shrink-0">
              <img
                src={IMAGES.goldMonogram}
                alt="DK Monogram"
                referrerPolicy="no-referrer"
                style={{ height: '34px', marginLeft: '2px' }}
                className="w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-all"
              />
            </div>
            
            {/* Brand text lockup seamlessly merged */}
            <div className="flex flex-col justify-center">
              <span className="font-cinzel tracking-[0.22em] text-base sm:text-lg font-bold text-[#e8c97e] group-hover:text-white transition-colors leading-tight">
                DEBAKS
              </span>
              <span className="text-[7px] sm:text-[7.5px] tracking-[0.2em] text-[#c5a059] font-semibold uppercase -mt-0.5">
                ONE VISION. MULTIPLE POSSIBILITIES.
              </span>
            </div>
          </button>

          {/* Nav Links: Exact 5 links (HOME, SOLUTIONS, WORK, ABOUT, CONTACT) */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-semibold tracking-[0.18em]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#dfbe70]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#dfbe70] to-transparent rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone: View Mode Switcher + LET'S TALK Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* View Mode Toggle: Page by Page vs Full Continuous Page */}
            <button
              onClick={onToggleViewMode}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium tracking-wider text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors cursor-pointer"
              title={viewMode === 'paginated' ? 'Switch to Full Continuous Scroll' : 'Switch to Dedicated Page View'}
            >
              {viewMode === 'paginated' ? (
                <>
                  <Layers className="w-3.5 h-3.5 text-[#dfbe70]" />
                  <span>PAGE VIEW</span>
                </>
              ) : (
                <>
                  <LayoutTemplate className="w-3.5 h-3.5 text-[#dfbe70]" />
                  <span>FULL PAGE</span>
                </>
              )}
            </button>

            {/* Exact LET'S TALK button with rounded border and arrow */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider text-[#dfbe70] border border-[#c5a059]/60 rounded-full hover:border-[#dfbe70] hover:bg-[#c5a059]/15 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer active:scale-95 shadow-sm shadow-[#c5a059]/10"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f12] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`py-2 text-left text-sm tracking-widest font-semibold cursor-pointer ${
                  currentPage === link.id ? 'text-[#dfbe70]' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onToggleViewMode}
              className="text-xs text-neutral-300 flex items-center gap-2 py-1"
            >
              {viewMode === 'paginated' ? <Layers className="w-4 h-4 text-[#dfbe70]" /> : <LayoutTemplate className="w-4 h-4 text-[#dfbe70]" />}
              <span>Mode: {viewMode === 'paginated' ? 'Page by Page' : 'Continuous Scroll'}</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-black bg-[#c5a059] rounded-full hover:bg-[#dfbe70] transition-colors"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
