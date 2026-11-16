import React from 'react';
import { 
  Sparkles, 
  Compass, 
  Globe, 
  Cpu, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';
import { SOLUTIONS } from '../data/content.ts';
import { SolutionItem } from '../types/index.ts';

interface SolutionsProps {
  onSelectSolution: (solution: SolutionItem) => void;
  isStandalonePage?: boolean;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, isStandalonePage = false }) => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-[#dfbe70]";
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Globe':
        return <Globe className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section 
      id="solutions" 
      className={`${isStandalonePage ? 'pt-32 pb-24 min-h-[90vh]' : 'py-24'} bg-[#0a0c0f] relative overflow-hidden`}
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase mb-2">
            SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            WHAT CAN WE SOLVE FOR YOU?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            From ideas to implementation — one partner for all your creative, digital and technology needs.
          </p>
        </div>

        {/* 5 Vertical Solutions Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {SOLUTIONS.map((solution, idx) => (
            <div
              key={solution.id}
              onClick={() => onSelectSolution(solution)}
              className="group cursor-pointer rounded-lg bg-[#0e1116] border border-white/10 hover:border-[#c5a059]/70 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#c5a059]/10 hover:-translate-y-1.5"
            >
              {/* Card Image using exact screenshot cropped assets */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116] via-transparent to-transparent opacity-75" />
                
                {/* Floating Icon Emblem from screenshot */}
                <div className="absolute bottom-2.5 left-3 w-8 h-8 rounded-md bg-[#131720]/90 backdrop-blur-md border border-[#c5a059]/60 flex items-center justify-center shadow-md">
                  {getIcon(solution.iconName)}
                </div>

                {/* Subtle Hover Action Arrow */}
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md text-neutral-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dfbe70]" />
                </div>
              </div>

              {/* Card Content exactly matching screenshot */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase group-hover:text-[#dfbe70] transition-colors leading-snug">
                    {solution.title}
                  </h3>
                  
                  {/* Bullet list */}
                  <ul className="mt-3.5 space-y-1.5 text-xs text-neutral-400">
                    {solution.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 group-hover:text-neutral-200 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-[#c5a059] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clean unboxed indicator */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-semibold tracking-wider text-neutral-400 group-hover:text-[#dfbe70] transition-colors">
                  <span>DETAILS</span>
                  <span className="text-neutral-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional standalone details when viewed on dedicated page */}
        {isStandalonePage && (
          <div className="mt-16 pt-12 border-t border-white/10 space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
                INTEGRATED DELIVERY METHODOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Debak Delivers Exceptional Results
              </h3>
              <p className="text-sm text-neutral-400">
                A seamless four-phase consulting model ensuring that creative ambition aligns with bulletproof technical execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10 space-y-2">
                <span className="text-2xl font-black text-[#dfbe70] font-mono">01</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Discovery &amp; Strategy</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Deep audit of brand objectives, architectural constraints, audience personas, and technical requirements.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10 space-y-2">
                <span className="text-2xl font-black text-[#dfbe70] font-mono">02</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Concept &amp; 3D Design</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  High-craft visual identity systems, spatial renders, interactive WebGL prototypes, and architectural plans.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10 space-y-2">
                <span className="text-2xl font-black text-[#dfbe70] font-mono">03</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Technical Engineering</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Full stack coding, generative AI pipeline integration, AV/lighting synchronization, and hardware specs.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#0e1116] border border-white/10 space-y-2">
                <span className="text-2xl font-black text-[#dfbe70] font-mono">04</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Launch &amp; Scale</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  On-site event supervision, web deployment, performance optimization, and measurable brand growth.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
