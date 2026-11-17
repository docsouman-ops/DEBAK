import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ProjectItem } from '../types/index.ts';
import { PROJECTS, FEATURED_VIDEOS, EXTRA_GALLERY_IMAGES } from '../data/content.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

const GALLERY_ITEMS: ProjectItem[] = [...PROJECTS, ...EXTRA_GALLERY_IMAGES, ...FEATURED_VIDEOS];

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (project) {
      const idx = GALLERY_ITEMS.findIndex((p) => p.id === project.id);
      setActiveIndex(idx >= 0 ? idx : 0);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  const currentItem = GALLERY_ITEMS[activeIndex] || project;

  useEffect(() => {
    const el = modalVideoRef.current;
    if (!el || !currentItem?.video) return;

    el.defaultMuted = true;
    el.muted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.play().catch(() => {});
  }, [currentItem?.video, activeIndex]);

  if (!project || !currentItem) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Image & Video Gallery Lightbox Dialog */}
      <div className="relative w-full max-w-5xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col my-auto">
        {/* Top Bar: Only Name + Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {currentItem.title}
          </h2>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Gallery Media (Image or Looping Video) */}
        <div className="relative bg-black flex items-center justify-center">
          <div className="w-full aspect-[16/9] max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
            {currentItem.video ? (
              <video
                ref={modalVideoRef}
                key={currentItem.video}
                src={currentItem.video}
                poster={currentItem.image}
                autoPlay
                loop
                muted
                playsInline
                controls
                onLoadedData={(e) => {
                  const el = e.currentTarget;
                  el.muted = true;
                  el.play().catch(() => {});
                }}
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-contain bg-black"
              />
            )}
          </div>

          {/* Prev / Next Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous item"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#c5a059] text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next item"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#c5a059] text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="p-4 bg-[#121620] border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 max-h-40 overflow-y-auto">
          {GALLERY_ITEMS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                title={item.title}
                className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-md overflow-hidden border transition-all cursor-pointer bg-black ${
                  isActive
                    ? 'border-[#dfbe70] ring-1 ring-[#dfbe70]/60 opacity-100 scale-105'
                    : 'border-white/10 opacity-55 hover:opacity-90'
                }`}
              >
                {item.video ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/45">
                      <Play className="w-4 h-4 text-[#dfbe70] fill-[#dfbe70]" />
                    </span>
                  </>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
