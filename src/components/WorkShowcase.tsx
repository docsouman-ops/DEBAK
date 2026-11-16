import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { WORK_SHOWCASE } from '../data/content.ts';

interface WorkShowcaseProps {
  onOpenContact: () => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | '3d' | 'spatial' | 'brand'>('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const filterTabs: { id: 'all' | '3d' | 'spatial' | 'brand'; label: string }[] = [
    { id: 'all', label: 'All Showcase' },
    { id: '3d', label: '3D & CGI' },
    { id: 'spatial', label: 'Spatial & Expo' },
    { id: 'brand', label: 'Brand Craft' },
  ];

  const filteredItems = WORK_SHOWCASE.filter((item) =>
    activeFilter === 'all' ? true : item.filterKey === activeFilter
  );

  const safeIndex = activeIndex >= filteredItems.length ? 0 : activeIndex;
  const activeItem = filteredItems[safeIndex] || WORK_SHOWCASE[0];

  const handleFilterChange = (filterId: 'all' | '3d' | 'spatial' | 'brand') => {
    setActiveFilter(filterId);
    setActiveIndex(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="showcase" className="py-24 bg-[#08090a] relative border-t border-white/5 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#c5a059]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase mb-2">
              WORK SHOWCASE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-balance">
              CRAFT IN EXECUTION
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              An interactive look at flagship productions across automotive CGI, architectural visualization, and experiential brand environments.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#0e1116] border border-white/10 rounded-lg w-fit overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#1b212c] text-[#dfbe70] border border-[#c5a059]/40 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Spotlight Stage (Asymmetric 12-col split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch rounded-xl bg-[#0e1116] border border-white/10 overflow-hidden shadow-2xl">
          {/* Left Widescreen Media Frame */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] bg-[#0a0c10] overflow-hidden group">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/20 to-transparent opacity-80" />

            {/* Fallback icon container behind image if load fails */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-[#0d1016] text-neutral-500 gap-2">
              <Layers className="w-8 h-8 text-[#c5a059]/60" />
              <span className="text-xs">{activeItem.title}</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
                  <span className="font-mono tabular-nums text-[#dfbe70] font-semibold">
                    {activeItem.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeItem.discipline}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeItem.title}
                </h3>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-md bg-black/70 hover:bg-[#1b212c] border border-white/15 hover:border-[#c5a059] text-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous showcase item"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-md bg-black/70 hover:bg-[#1b212c] border border-white/15 hover:border-[#c5a059] text-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next showcase item"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Narrative & Deliverables Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                <span className="text-neutral-200 font-medium">{activeItem.client}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{activeItem.year}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#dfbe70]">{activeItem.discipline}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug text-balance">
                {activeItem.headline}
              </h4>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeItem.summary}
              </p>

              {/* Deliverables List */}
              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  Key Deliverables
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Outcome Metric + CTA */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-extrabold text-[#dfbe70] font-mono tabular-nums">
                  {activeItem.metricValue}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">{activeItem.metricLabel}</p>
              </div>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>REQUEST SIMILAR SCOPE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {filteredItems.map((item, idx) => {
            const isActive = idx === safeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group text-left rounded-lg overflow-hidden border transition-all duration-200 p-2.5 flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-[#141922] border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                    : 'bg-[#0e1116] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="w-14 h-11 rounded overflow-hidden bg-black shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono tabular-nums text-[#dfbe70] font-semibold">
                    {item.index}
                  </p>
                  <p className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                    {item.title}
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
