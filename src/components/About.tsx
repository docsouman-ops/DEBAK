import React from 'react';
import { 
  ArrowRight, 
  Lightbulb, 
  ShieldCheck, 
  Puzzle, 
  Users2, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { IMAGES, PHILOSOPHY_PILLARS, CAPABILITIES } from '../data/content.ts';

interface AboutProps {
  onOpenStory: () => void;
  isStandalonePage?: boolean;
  onOpenContact?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenStory, isStandalonePage = false, onOpenContact }) => {
  const getPillarIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-[#dfbe70]";
    switch (name) {
      case 'Lightbulb':
        return <Lightbulb className={iconClass} />;
      case 'Shield':
      case 'Cpu':
        return <ShieldCheck className={iconClass} />;
      case 'Puzzle':
        return <Puzzle className={iconClass} />;
      case 'Users':
        return <Users2 className={iconClass} />;
      case 'Award':
        return <Award className={iconClass} />;
      default:
        return <Lightbulb className={iconClass} />;
    }
  };

  return (
    <section 
      id="about" 
      className={`${isStandalonePage ? 'pt-32 pb-24 min-h-[90vh]' : 'py-24'} bg-[#08090a] relative border-t border-white/5 overflow-hidden`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Debak's High-Resolution Portrait with Exact Signature Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0d0f12] shadow-2xl group">
              <img
                src={IMAGES.debakPortrait}
                alt="DEBAKS - Creative & Technology Consultant"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover max-h-[580px] group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Gradient scrim for signature clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              {/* Autograph Signature Overlay in bottom left matching screenshot */}
              <div className="absolute bottom-6 left-6 z-10 space-y-1">
                <span className="font-signature text-4xl sm:text-5xl text-[#faebc8] drop-shadow-md select-none tracking-wide block">
                  Debak Giri
                </span>
                <p className="text-[10px] tracking-[0.24em] font-semibold text-[#c5a059] uppercase">
                  CREATIVE &amp; TECHNOLOGY CONSULTANT
                </p>
              </div>

              {/* Corner accent border */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#c5a059]/40 pointer-events-none" />
            </div>

            {/* Back glow */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Narrative Prose exactly from screenshot */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase">
              ABOUT DEBAK
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Creative thinking.
              <br />
              Technical understanding.
              <br />
              End-to-end ownership.
            </h2>

            {/* Story Paragraphs exactly as written in screenshot */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              <p>
                I&apos;m Debak — a creative problem-solver who sits at the intersection of visual design, technology and human connection.
              </p>
              <p className="text-neutral-400">
                With 10+ years of experience across 3D visualization, immersive media, exhibitions, digital content and emerging AI workflows, I help brands imagine, design and deliver meaningful experiences.
              </p>
              <p className="text-neutral-400">
                My biggest asset is people. I connect fast, collaborate well, and adapt to whatever a project needs — no ego, just results.
              </p>
            </div>

            {/* Button: MY STORY -> */}
            <div className="pt-2">
              <button
                onClick={onOpenStory}
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider text-neutral-200 hover:text-white border border-neutral-700 hover:border-[#c5a059] rounded-sm transition-all duration-200 hover:bg-white/5 cursor-pointer"
              >
                <span>MY STORY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#dfbe70] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip: 5 Philosophy Pillars matching screenshot */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e1116]/80 border border-white/5 hover:border-[#c5a059]/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-md bg-[#131720] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#c5a059]/50 transition-colors">
                {getPillarIcon(pillar.iconName)}
              </div>
              <span className="text-[11px] font-bold tracking-wider text-neutral-300 group-hover:text-white uppercase transition-colors">
                {pillar.title}
              </span>
            </div>
          ))}
        </div>

        {/* Additional standalone biography details if on dedicated page */}
        {isStandalonePage && (
          <div className="mt-20 pt-12 border-t border-white/10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
                  COLLABORATIVE PHILOSOPHY
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Bridging the Gap Between Concept &amp; Code
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Too often, creative direction and technical execution live in separate silos. Agencies create beautiful renders that can&apos;t be engineered, or developers build robust systems that lack soul and visual craft.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  DEBAKS acts as the unifying bridge. By mastering both ends of the spectrum, every exhibition, 3D model, and digital product is built with aesthetic elegance and flawless structural integrity.
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
                  EXPERTISE SPECTRUM
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Core Technical &amp; Creative Stack
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded bg-[#0e1116] border border-white/5 space-y-1">
                    <p className="font-bold text-[#dfbe70]">3D &amp; Spatial</p>
                    <p className="text-neutral-400">Unreal Engine, Blender, 3ds Max, Substance, WebGL</p>
                  </div>
                  <div className="p-3 rounded bg-[#0e1116] border border-white/5 space-y-1">
                    <p className="font-bold text-[#dfbe70]">Digital Engineering</p>
                    <p className="text-neutral-400">React, TypeScript, Node.js, Next.js, Cloud APIs</p>
                  </div>
                  <div className="p-3 rounded bg-[#0e1116] border border-white/5 space-y-1">
                    <p className="font-bold text-[#dfbe70]">Emerging AI</p>
                    <p className="text-neutral-400">LLM Pipelines, Autonomous Agents, Vision Models</p>
                  </div>
                  <div className="p-3 rounded bg-[#0e1116] border border-white/5 space-y-1">
                    <p className="font-bold text-[#dfbe70]">Experiential AV</p>
                    <p className="text-neutral-400">LiDAR, Touchless Tracking, SMPTE Show Control</p>
                  </div>
                </div>
              </div>
            </div>

            {onOpenContact && (
              <div className="p-8 rounded-xl bg-gradient-to-r from-[#121620] via-[#0e1117] to-[#121620] border border-[#c5a059]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Have a high-stakes creative project?</h4>
                  <p className="text-xs text-neutral-400 mt-1">Directly consult with Debak on architecture, scope, and execution timelines.</p>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider uppercase rounded transition-colors whitespace-nowrap cursor-pointer"
                >
                  SCHEDULE DIRECT CONSULTATION
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
