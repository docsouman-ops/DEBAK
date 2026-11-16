import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content.ts';

export const Testimonials: React.FC = () => {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const featured = TESTIMONIALS[featuredIdx];

  const handlePrev = () => {
    setFeaturedIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFeaturedIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a0c0f] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase mb-2">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-balance">
              TRUSTED BY LEADERS WHO SHIP
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              Verified outcomes and perspectives from founders, creative directors, and innovation teams across global collaborations.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-md bg-[#0e1116] hover:bg-[#161b24] border border-white/10 hover:border-[#c5a059] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-md bg-[#0e1116] hover:bg-[#161b24] border border-white/10 hover:border-[#c5a059] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Spotlight Testimonial */}
        <div className="rounded-xl bg-[#0e1116] border border-[#c5a059]/30 p-7 sm:p-10 mb-6 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <Quote className="w-8 h-8 text-[#c5a059]/70" />
              <blockquote className="text-lg sm:text-2xl font-medium text-white leading-relaxed">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/10 space-y-4">
              <div>
                <p className="text-base font-bold text-white">{featured.author}</p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {featured.role} · {featured.company}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-1">
                <p className="text-xs text-neutral-400">{featured.projectType}</p>
                <p className="text-sm font-bold text-[#dfbe70] tabular-nums">{featured.outcome}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Attributable Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((item, idx) => {
            const isSelected = idx === featuredIdx;
            return (
              <button
                key={item.id}
                onClick={() => setFeaturedIdx(idx)}
                className={`text-left rounded-lg p-5 border transition-all duration-200 flex flex-col justify-between gap-4 cursor-pointer ${
                  isSelected
                    ? 'bg-[#141922] border-[#c5a059]'
                    : 'bg-[#0e1116] border-white/10 hover:border-[#c5a059]/40'
                }`}
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#dfbe70] tabular-nums">
                    {item.outcome}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="text-xs font-bold text-white">{item.author}</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {item.role} · {item.company}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
