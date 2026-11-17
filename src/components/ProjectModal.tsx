import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectItem } from '../types/index.ts';
import { PROJECTS, EXTRA_GALLERY_IMAGES } from '../data/content.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

interface GallerySlide {
  src: string;
  title: string;
}

const ALL_GALLERY_SLIDES: GallerySlide[] = [
  ...PROJECTS.map((p) => ({ src: p.image, title: p.title })),
  ...EXTRA_GALLERY_IMAGES.map((p) => ({ src: p.image, title: p.title })),
];

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: GallerySlide[] = React.useMemo(() => {
    if (!project) return [];
    if (project.id === 'all-projects-gallery') {
      return ALL_GALLERY_SLIDES;
    }
    const projectImages =
      project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
    return projectImages.map((src) => ({ src, title: project.title }));
  }, [project]);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project || slides.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, slides.length, onClose]);

  useEffect(() => {
    if (!project || slides.length > 1) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [project, slides.length, onClose]);

  if (!project || slides.length === 0) return null;

  const currentSlide = slides[activeIndex] || slides[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Image Gallery Lightbox Dialog */}
      <div className="relative w-full max-w-5xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col my-auto">
        {/* Top Bar: Only Name + Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {currentSlide.title}
          </h2>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Gallery Image */}
        <div className="relative bg-black flex items-center justify-center">
          <div className="w-full aspect-[16/9] max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              className="w-full h-full object-contain bg-black"
            />
          </div>

          {/* Prev / Next Controls (only when this gallery has multiple images) */}
          {slides.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#c5a059] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#c5a059] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip (only when this gallery has multiple images) */}
        {slides.length > 1 && (
          <div className="p-4 bg-[#121620] border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 max-h-40 overflow-y-auto">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={`${slide.src}-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  title={slide.title}
                  className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-md overflow-hidden border transition-all cursor-pointer bg-black ${
                    isActive
                      ? 'border-[#dfbe70] ring-1 ring-[#dfbe70]/60 opacity-100 scale-105'
                      : 'border-white/10 opacity-55 hover:opacity-90'
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
