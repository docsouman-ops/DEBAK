import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send 
} from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/content.ts';

interface ContactSectionProps {
  onOpenModal: () => void;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal, isStandalonePage = false }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuickMessage('');
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className={`relative ${isStandalonePage ? 'pt-32 pb-28 min-h-[90vh]' : 'py-28'} bg-[#07080a] overflow-hidden border-t border-white/10`}
    >
      {/* Background Exact Golden Globe Network Wallpaper */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.contactGlobeBg}
          alt="Golden Network Constellation Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-45 filter brightness-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = IMAGES.networkGlobe;
          }}
        />
        {/* Gradients to blend smoothly into black canvas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-[#08090a]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-[#08090a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline, Subtitle and Action Button (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase">
              LET&apos;S TALK
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              LET&apos;S BUILD
              <br />
              <span className="text-gold-gradient">WHAT&apos;S NEXT.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              Have a project, idea or collaboration in mind?
              <br className="hidden sm:inline" />
              Let&apos;s start a conversation.
            </p>

            {/* Main Action Button matching screenshot */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-black bg-gradient-to-r from-[#faebc8] via-[#dfbe70] to-[#c5a059] hover:from-white hover:to-[#dfbe70] rounded-sm transition-all duration-200 shadow-xl shadow-[#c5a059]/25 hover:shadow-[#c5a059]/45 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 hover:text-white border border-neutral-700 hover:border-[#c5a059] rounded-sm bg-black/40 backdrop-blur-md transition-all hover:bg-white/5"
              >
                <span>WHATSAPP DIRECT</span>
              </a>
            </div>

            {/* Quick Direct Message */}
            <form onSubmit={handleQuickSubmit} className="pt-6 max-w-lg">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  placeholder="Drop a quick note or your email..."
                  className="w-full bg-[#12151b]/85 border border-white/15 focus:border-[#dfbe70] rounded-md px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md pr-24 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-3.5 py-2 bg-[#c5a059] hover:bg-[#dfbe70] text-black text-xs font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Send</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-[#dfbe70] flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Message sent! Debak will reply directly to your note.</span>
                </p>
              )}
            </form>
          </div>

          {/* Right Side: Direct Contact Details matching screenshot */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-8">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0e1117]/85 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xs font-bold tracking-[0.24em] text-[#dfbe70] uppercase">
                  DIRECT CHANNELS
                </h3>
                <p className="text-xs text-neutral-400">Reach Debak directly for consultation inquiries.</p>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between group py-2 border-b border-white/5">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3.5 text-sm sm:text-base font-medium text-neutral-200 group-hover:text-[#dfbe70] transition-colors truncate"
                >
                  <div className="w-9 h-9 rounded-md bg-[#161a22] border border-white/10 flex items-center justify-center text-[#dfbe70] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">{CONTACT_INFO.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                  className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between group py-2 border-b border-white/5">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 text-sm sm:text-base font-medium text-neutral-200 group-hover:text-[#dfbe70] transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-[#161a22] border border-white/10 flex items-center justify-center text-[#dfbe70] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.phone, 'phone')}
                  className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 py-2 text-sm sm:text-base font-medium text-neutral-300">
                <div className="w-9 h-9 rounded-md bg-[#161a22] border border-white/10 flex items-center justify-center text-[#dfbe70] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
