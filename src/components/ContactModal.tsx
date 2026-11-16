import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, SOLUTIONS } from '../data/content.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Build a Brand');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-[#0e1117] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121620]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#dfbe70] uppercase">
              START A CONVERSATION
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
        <div className="overflow-y-auto p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#dfbe70]/20 border border-[#dfbe70] text-[#dfbe70] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#dfbe70] font-semibold">{name}</span>. Debak has received your project briefing and will get back to you shortly at <span className="text-white">{email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#dfbe70] hover:bg-[#faebc8] text-black text-xs font-bold tracking-wider rounded transition-colors cursor-pointer"
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Let&apos;s Discuss Your Vision
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Fill in your project requirements or reach out directly via phone or email.
                </p>
              </div>

              {/* Direct Quick Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-lg bg-[#141822] border border-white/5 text-xs text-neutral-300">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-[#dfbe70] transition-colors truncate">
                  <Mail className="w-3.5 h-3.5 text-[#dfbe70] shrink-0" />
                  <span className="truncate">{CONTACT_INFO.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-[#dfbe70] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#dfbe70] shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-[#dfbe70] shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-[#141822] border border-white/10 focus:border-[#dfbe70] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-[#141822] border border-white/10 focus:border-[#dfbe70] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#141822] border border-white/10 focus:border-[#dfbe70] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Primary Need
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#141822] border border-white/10 focus:border-[#dfbe70] rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      {SOLUTIONS.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#141822] text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Consulting & Strategy" className="bg-[#141822] text-white">
                        Consulting &amp; Strategy
                      </option>
                      <option value="Other Project" className="bg-[#141822] text-white">
                        Other Project
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Project Overview / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the project goals, timeline, and any specific deliverables you envision..."
                    className="w-full bg-[#141822] border border-white/10 focus:border-[#dfbe70] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#dfbe70] hover:bg-[#faebc8] disabled:opacity-50 text-black text-xs font-bold tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a059]/20"
                  >
                    <span>{isSubmitting ? 'SENDING INQUIRY...' : 'SUBMIT PROJECT BRIEF'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
