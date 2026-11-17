import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/content.ts';

interface HeroProps {
  onOpenContact: () => void;
  onExploreSolutions?: () => void;
}

const HERO_SLIDES = [
  {
    src: IMAGES.heroExperience,
    alt: 'Futuristic Trade Show Pavilion',
  },
  {
    src: IMAGES.heroNeuralOrb,
    alt: 'Golden AI Neural Orb Network',
  },
  {
    src: IMAGES.heroFilmStudio,
    alt: 'Futuristic Golden Film Editing Studio',
  },
  {
    src: IMAGES.heroGrowthEcosystem,
    alt: 'Luxury Data Growth Ecosystem',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreSolutions }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  const handleExplore = (e: React.MouseEvent) => {
    if (onExploreSolutions) {
      e.preventDefault();
      onExploreSolutions();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#08090a]"
    >
      {/* Background Continuous Crossfade Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              referrerPolicy="no-referrer"
              decoding="async"
              fetchPriority={idx === 0 ? 'high' : 'low'}
              className={`absolute inset-0 w-full h-full object-cover object-right md:object-center brightness-95 contrast-105 transition-all duration-1000 ease-out motion-reduce:transition-none ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          );
        })}
        {/* Measured dark gradient scrims ensuring high contrast for text while showcasing visuals */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/85 to-[#08090a]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-[#08090a]/70" />
      </div>

      {/* Subtle ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl flex flex-col justify-center space-y-8 z-10">
          {/* Kicker badge / line */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold tracking-[0.22em] text-neutral-300 uppercase">
                Debaks
              </span>
              <div className="h-[1px] w-24 bg-gradient-to-r from-neutral-500 to-transparent" />
            </div>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#c5a059] uppercase">
              CREATIVE &amp; TECHNOLOGY CONSULTANCY
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            <span>ONE VISION.</span>
            <br />
            <span className="text-gold-gradient">MULTIPLE</span>
            <br />
            <span>POSSIBILITIES.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300/90 max-w-2xl font-normal leading-relaxed">
            We bring strategy, creativity, technology and experience together to help brands turn ideas into meaningful outcomes.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#solutions"
              onClick={handleExplore}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-black bg-gradient-to-r from-[#faebc8] via-[#dfbe70] to-[#c5a059] hover:from-white hover:to-[#dfbe70] rounded-sm transition-all duration-200 shadow-lg shadow-[#c5a059]/20 hover:shadow-[#c5a059]/35 hover:-translate-y-0.5"
            >
              <span>EXPLORE SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-neutral-200 hover:text-white border border-neutral-700 hover:border-[#c5a059] rounded-sm transition-all duration-200 hover:bg-white/5 cursor-pointer"
            >
              <span>START A CONVERSATION</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800/80 max-w-xl">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight tabular-nums">
                {CONTACT_INFO.experienceYears}
              </p>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-400 uppercase mt-1">
                YEARS EXPERIENCE
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight tabular-nums">
                {CONTACT_INFO.projectsCount}
              </p>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-400 uppercase mt-1">
                PROJECTS DELIVERED
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {CONTACT_INFO.clientsScale}
              </p>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-400 uppercase mt-1">
                CLIENTS &amp; COLLABORATIONS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
