import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { SolutionItem } from '../types/index.ts';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose, onOpenContact }) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
              SOLUTION ARCHITECTURE
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
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 bg-black">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
                {solution.title}
              </h2>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#dfbe70] uppercase mb-2">
              Strategic Focus
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {solution.summary}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-3">
              Included Deliverables &amp; Workflows
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded bg-[#131720] border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-[#dfbe70]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#dfbe70]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#121620] flex items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">Ready to execute with Debak?</span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider rounded transition-colors cursor-pointer"
          >
            <span>START WITH THIS SOLUTION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
