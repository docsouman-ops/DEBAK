import React, { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/content.ts';
import { BlogPostItem } from '../types/index.ts';

interface BlogSectionProps {
  onSelectPost: (post: BlogPostItem) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'AI Workflows', label: 'AI Workflows' },
    { id: 'Experiential', label: 'Experiential' },
    { id: 'Brand Strategy', label: 'Brand Strategy' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) =>
    activeCategory === 'all' ? true : post.category === activeCategory
  );

  const leadPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1);

  return (
    <section id="blog" className="py-24 bg-[#0a0c0f] relative border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header + Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase mb-2">
              BLOG &amp; INSIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-balance">
              PERSPECTIVES ON DESIGN &amp; TECH
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              Field notes from the studio on spatial architecture, real-time 3D pipelines, generative AI workflows, and brand craft.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#0e1116] border border-white/10 rounded-lg w-fit overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1b212c] text-[#dfbe70] border border-[#c5a059]/40 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lead Featured Article */}
        {leadPost && (
          <article
            onClick={() => onSelectPost(leadPost)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-[#0e1116] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-xl mb-6"
          >
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] overflow-hidden bg-[#0b0e14]">
              <img
                src={leadPost.image}
                alt={leadPost.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-[#0d1016] text-neutral-500">
                <BookOpen className="w-8 h-8 text-[#c5a059]/50" />
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                  <span className="text-[#dfbe70] font-semibold">{leadPost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadPost.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{leadPost.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#dfbe70] transition-colors leading-snug text-balance">
                  {leadPost.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {leadPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400">By {leadPost.author}</span>
                <span className="inline-flex items-center gap-1.5 font-bold tracking-wider text-[#dfbe70] group-hover:translate-x-1 transition-transform">
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Supporting Articles Grid */}
        {secondaryPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-[#0e1116] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b0e14]">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116] via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                      <span className="text-[#dfbe70] font-semibold">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#dfbe70] transition-colors leading-snug text-balance">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">By {post.author}</span>
                    <span className="inline-flex items-center gap-1.5 font-bold tracking-wider text-[#dfbe70] group-hover:translate-x-1 transition-transform">
                      <span>READ ARTICLE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
