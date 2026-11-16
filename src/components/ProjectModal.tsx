import React from 'react';
import { X, ArrowRight, CheckCircle2, Calendar, Building, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types/index.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
              CASE STUDY
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs text-neutral-400">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Visual Banner */}
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Quick Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-3 px-4 rounded-lg bg-[#141822] border border-white/5 text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <Building className="w-4 h-4 text-[#dfbe70]" />
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Client</p>
                <p className="font-semibold text-white">{project.client}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-neutral-300">
              <Calendar className="w-4 h-4 text-[#dfbe70]" />
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Year</p>
                <p className="font-semibold text-white">{project.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-neutral-300 col-span-2 sm:col-span-1">
              <Sparkles className="w-4 h-4 text-[#dfbe70]" />
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Domain</p>
                <p className="font-semibold text-white">{project.category}</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfbe70] mb-2">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-lg bg-[#11151d] border border-white/5 space-y-2">
              <h4 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#11151d] border border-white/5 space-y-2">
              <h4 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                Strategic Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Measured Impact */}
          <div className="p-4 rounded-lg bg-[#151a24] border border-[#c5a059]/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#dfbe70] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfbe70]">
                Demonstrated Impact &amp; Results
              </h4>
              <p className="text-xs sm:text-sm text-white font-medium mt-1">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Execution Disciplines
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer with action */}
        <div className="p-6 border-t border-white/10 bg-[#121620] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Interested in deploying similar creative &amp; technology solutions?
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider rounded transition-colors cursor-pointer"
          >
            <span>DISCUSS SIMILAR PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
