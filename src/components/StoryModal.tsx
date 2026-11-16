import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/content.ts';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose} 
      />

      <div className="relative w-full max-w-3xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
              FOUNDER &amp; CONSULTANT STORY
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg bg-[#141822] border border-white/5">
            <img
              src={IMAGES.debakPortrait}
              alt="Debaks Su"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#dfbe70]"
            />
            <div className="text-center sm:text-left space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Debaks Su
              </h2>
              <p className="text-xs font-semibold tracking-widest text-[#dfbe70] uppercase">
                {CONTACT_INFO.title}
              </p>
              <p className="text-xs text-neutral-400">
                Based in Kolkata, India · Collaborating with Global Brands &amp; Studios
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <p>
              Over the last decade, I have operated at the crossroads where visual storytelling meets robust engineering. My mission through DEBAKS is simple: eliminate the friction between grand creative visions and their technical execution.
            </p>
            <p className="text-neutral-400">
              Whether designing an architectural pavilion for a high-stakes trade exhibition, producing commercial 3D assets that drive online commerce, or deploying generative AI pipelines for enterprise clients, I ensure an unwavering commitment to craft.
            </p>
            <p className="text-neutral-400">
              &quot;One Vision. Multiple Possibilities.&quot; isn&apos;t just a tagline — it reflects how multidisciplinary teams can unlock exponential value when design, technology, and empathy work in harmony.
            </p>
          </div>

          {/* Timeline / Highlights */}
          <div className="pt-2 border-t border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfbe70] mb-4">
              Core Milestones
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-white">10+ Years of Craft Mastery:</span>{' '}
                  <span className="text-neutral-400">Pioneered 3D visualization, immersive media, spatial technology, and digital brand development.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-white">50+ Global Project Deliveries:</span>{' '}
                  <span className="text-neutral-400">Turnkey pavilions, interactive virtual architectures, and scalable web solutions executed without friction.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-white">Emerging Tech &amp; AI Integration:</span>{' '}
                  <span className="text-neutral-400">Harnessing generative AI, real-time shaders, and sensory installations for forward-looking client engagements.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#121620] flex items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">Let&apos;s build something meaningful together.</span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider rounded transition-colors cursor-pointer"
          >
            <span>GET IN TOUCH WITH DEBAK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
