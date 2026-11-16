import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BlogPostItem } from '../types/index.ts';

interface BlogModalProps {
  post: BlogPostItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenContact }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold tracking-widest text-[#dfbe70] uppercase">
              JOURNAL
            </span>
            <span className="text-neutral-500" aria-hidden="true">·</span>
            <span className="text-neutral-300">{post.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{post.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-balance">
              {post.title}
            </h2>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 bg-black">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {post.content.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          <div className="p-5 rounded-lg bg-[#141822] border border-white/10 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#dfbe70] uppercase">
              Key Takeaways
            </h3>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#121620] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Want to apply these workflows to your next brand or spatial launch?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider rounded transition-colors cursor-pointer"
          >
            <span>DISCUSS WITH DEBAK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
