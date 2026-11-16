/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Solutions } from './components/Solutions.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { FeaturedWork } from './components/FeaturedWork.tsx';
import { About } from './components/About.tsx';
import { WorkShowcase } from './components/WorkShowcase.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { SolutionModal } from './components/SolutionModal.tsx';
import { StoryModal } from './components/StoryModal.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { BlogModal } from './components/BlogModal.tsx';
import { ProjectItem, SolutionItem, BlogPostItem } from './types/index.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [viewMode, setViewMode] = useState<'continuous' | 'paginated'>('continuous');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPostItem | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'solutions', 'work', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;

    if (viewMode === 'continuous') {
      const el = document.getElementById(page === 'home' ? 'home' : page);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'continuous' ? 'paginated' : 'continuous'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-100 font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Navigation Top Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {viewMode === 'continuous' ? (
          /* Continuous Scroll: The exact full-page layout matching the shared screenshot */
          <>
            <Hero
              onOpenContact={() => setIsContactOpen(true)}
              onExploreSolutions={() => handleNavigate('solutions')}
            />
            <Solutions onSelectSolution={setSelectedSolution} />
            <Capabilities onOpenContact={() => setIsContactOpen(true)} />
            <FeaturedWork onSelectProject={setSelectedProject} />
            <About onOpenStory={() => setIsStoryOpen(true)} />
            <BlogSection onSelectPost={setSelectedBlogPost} />
            <WorkShowcase onOpenContact={() => setIsContactOpen(true)} />
            <Testimonials />
            <ContactSection onOpenModal={() => setIsContactOpen(true)} />
          </>
        ) : (
          /* Page by Page Dedicated View */
          <>
            {currentPage === 'home' && (
              <div className="animate-in fade-in duration-300">
                <Hero
                  onOpenContact={() => setIsContactOpen(true)}
                  onExploreSolutions={() => handleNavigate('solutions')}
                />
                <Solutions onSelectSolution={setSelectedSolution} />
                <FeaturedWork onSelectProject={setSelectedProject} />
                <About onOpenStory={() => setIsStoryOpen(true)} />
                <BlogSection onSelectPost={setSelectedBlogPost} />
                <WorkShowcase onOpenContact={() => setIsContactOpen(true)} />
                <Testimonials />
                <ContactSection onOpenModal={() => setIsContactOpen(true)} />
              </div>
            )}

            {currentPage === 'solutions' && (
              <div className="animate-in fade-in duration-300">
                <Solutions
                  onSelectSolution={setSelectedSolution}
                  isStandalonePage={true}
                />
                <Capabilities onOpenContact={() => setIsContactOpen(true)} />
                <div className="py-16 text-center border-t border-white/5 bg-[#08090a]">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="px-8 py-3.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-widest uppercase rounded shadow-xl shadow-[#c5a059]/20 transition-all cursor-pointer"
                  >
                    DISCUSS A BESPOKE SOLUTION
                  </button>
                </div>
              </div>
            )}

            {currentPage === 'work' && (
              <div className="animate-in fade-in duration-300">
                <FeaturedWork
                  onSelectProject={setSelectedProject}
                  isStandalonePage={true}
                />
                <WorkShowcase onOpenContact={() => setIsContactOpen(true)} />
              </div>
            )}

            {currentPage === 'about' && (
              <div className="animate-in fade-in duration-300">
                <About
                  onOpenStory={() => setIsStoryOpen(true)}
                  isStandalonePage={true}
                  onOpenContact={() => setIsContactOpen(true)}
                />
                <BlogSection onSelectPost={setSelectedBlogPost} />
                <Testimonials />
              </div>
            )}

            {currentPage === 'contact' && (
              <div className="animate-in fade-in duration-300">
                <ContactSection
                  onOpenModal={() => setIsContactOpen(true)}
                  isStandalonePage={true}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Solution Architecture Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Debak's Story Modal */}
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
