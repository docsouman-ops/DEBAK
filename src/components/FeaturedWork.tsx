import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/content.ts';
import { ProjectItem } from '../types/index.ts';

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
  isStandalonePage?: boolean;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject, isStandalonePage = false }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: '3d', label: '3D & CGI' },
    { id: 'experience', label: 'Experiential & Events' },
    { id: 'digital', label: 'Digital & AI' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === '3d') return p.category.includes('3D') || p.category.includes('Product');
    if (filter === 'experience') return p.category.includes('Experience') || p.category.includes('Event');
    if (filter === 'digital') return p.category.includes('Digital') || p.category.includes('AI');
    return true;
  });

  return (
    <section 
      id="work" 
      className={`${isStandalonePage ? 'pt-32 pb-24 min-h-[90vh]' : 'py-24'} bg-[#0a0c0f] relative border-t border-white/5`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase mb-2">
              FEATURED WORK
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              SELECTED SOLUTIONS
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              A selection of projects that demonstrate how we help brands turn ideas into real experiences.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onSelectProject(PROJECTS[0])}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-neutral-200 hover:text-white border border-neutral-800 hover:border-[#c5a059] rounded-md transition-all duration-200 bg-[#0d0f12] hover:bg-[#12161d] cursor-pointer"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#dfbe70] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Filter Bar (Zero-pill compliant segmented controls) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0e1116] border border-white/10 rounded-lg w-fit mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#1b212c] text-[#dfbe70] border border-[#c5a059]/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 5 Project Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-[#0e1116] border border-white/10 hover:border-[#c5a059]/70 transition-all duration-300 flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#c5a059]/10"
            >
              {/* Project Image using exact cropped assets */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116] via-transparent to-transparent opacity-85" />
                
                {/* Hover Quick Open Tag */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dfbe70]" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#dfbe70] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  {/* Category exactly as shown in screenshot */}
                  <p className="text-xs text-neutral-400 mt-1 font-medium">
                    {project.category}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{project.client}</span>
                  <span className="text-[#c5a059] group-hover:translate-x-0.5 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed case study preview if on standalone page */}
        {isStandalonePage && (
          <div className="mt-16 pt-12 border-t border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Project Highlights &amp; Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10">
                <p className="text-3xl font-extrabold text-[#dfbe70] font-mono">82%</p>
                <p className="text-xs uppercase tracking-wider text-neutral-300 font-bold mt-1">Residential Pre-Sales</p>
                <p className="text-xs text-neutral-400 mt-2">Achieved within 45 days of visual launch for Aurora Residences using photorealistic CGI.</p>
              </div>

              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10">
                <p className="text-3xl font-extrabold text-[#dfbe70] font-mono">1,400+</p>
                <p className="text-xs uppercase tracking-wider text-neutral-300 font-bold mt-1">Qualified Expo Leads</p>
                <p className="text-xs text-neutral-400 mt-2">Generated at SAIMO&apos;s award-winning biometric exhibition pavilion.</p>
              </div>

              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10">
                <p className="text-3xl font-extrabold text-[#dfbe70] font-mono">25,000+</p>
                <p className="text-xs uppercase tracking-wider text-neutral-300 font-bold mt-1">Interactive Visitors</p>
                <p className="text-xs text-neutral-400 mt-2">Drawn into the Synapse 360-degree interactive digital sensory installation.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
