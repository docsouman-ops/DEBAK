import React, { useState } from 'react';
import {
  ArrowRight,
  Target,
  PenTool,
  Box,
  Brain,
  Monitor,
  Glasses,
  Landmark,
  BarChart3,
  Settings,
  Users,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { CAPABILITIES } from '../data/content.ts';
import { CapabilityItem } from '../types/index.ts';

interface CapabilitiesProps {
  onOpenContact: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenContact }) => {
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);
  const [showAllDetails, setShowAllDetails] = useState(false);

  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#dfbe70]";
    switch (iconName) {
      case 'Target':
        return <Target className={iconClass} />;
      case 'PenTool':
        return <PenTool className={iconClass} />;
      case 'Box':
        return <Box className={iconClass} />;
      case 'Brain':
        return <Brain className={iconClass} />;
      case 'Monitor':
        return <Monitor className={iconClass} />;
      case 'Glasses':
        return <Glasses className={iconClass} />;
      case 'Landmark':
        return <Landmark className={iconClass} />;
      case 'BarChart3':
        return <BarChart3 className={iconClass} />;
      case 'Settings':
        return <Settings className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <Target className={iconClass} />;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-[#08090a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row with VIEW ALL button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#dfbe70] uppercase mb-2">
              CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              ONE PARTNER. MULTIPLE CAPABILITIES.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl">
              Creative thinking, technology solutions and seamless execution — all under one roof.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setShowAllDetails(!showAllDetails)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#c5a059] rounded-md transition-all duration-200 bg-[#0d0f12] hover:bg-[#12161d]"
            >
              <span>{showAllDetails ? 'COLLAPSE MATRIX' : 'VIEW ALL'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#dfbe70] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 2x5 Grid of Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CAPABILITIES.map((cap) => {
            const isSelected = selectedCapability?.id === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(isSelected ? null : cap)}
                className={`group cursor-pointer rounded-lg p-5 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#151a22] border-[#c5a059] shadow-lg shadow-[#c5a059]/15'
                    : 'bg-[#0d0f12] border-white/10 hover:border-[#c5a059]/40 hover:bg-[#12151b]'
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#141820] border border-white/10 group-hover:border-[#c5a059]/40 flex items-center justify-center mb-4 transition-colors">
                    {renderIcon(cap.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white tracking-wide group-hover:text-[#dfbe70] transition-colors leading-snug">
                    {cap.title}
                  </h3>

                  {/* Expanded description or preview */}
                  {(showAllDetails || isSelected) && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2 animate-in fade-in duration-200">
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {cap.description}
                      </p>
                      <div className="pt-2">
                        <p className="text-[10px] uppercase tracking-wider text-[#dfbe70] font-bold mb-1">
                          Deliverables:
                        </p>
                        <ul className="space-y-1">
                          {cap.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="text-[11px] text-neutral-300 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-[#c5a059] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle indicator */}
                <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-neutral-500 group-hover:text-neutral-400">
                  <span>Scope details</span>
                  <ChevronRight className="w-3 h-3 text-[#dfbe70] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Capability Floating Insight Box if one is clicked */}
        {selectedCapability && !showAllDetails && (
          <div className="mt-8 p-6 rounded-lg bg-[#0e1217] border border-[#c5a059]/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-in slide-in-from-bottom-2 duration-300">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
                  ACTIVE FOCUS
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-sm font-semibold text-white">
                  {selectedCapability.title}
                </span>
              </div>
              <p className="text-sm text-neutral-300">
                {selectedCapability.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCapability.deliverables.map((d, i) => (
                  <span key={i} className="text-xs text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="shrink-0 px-5 py-2.5 text-xs font-bold tracking-wider text-black bg-[#dfbe70] hover:bg-[#faebc8] rounded transition-colors whitespace-nowrap cursor-pointer"
            >
              INQUIRE ABOUT THIS
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
