"use client";
import { useState } from "react";
import {
  Mail,
  ArrowRight,
  ChevronDown,
  Check,
  CircleAlert,
  Clock,
  LoaderCircle,
} from "lucide-react";

// lucide-react v1 dropped all brand/logo icons (Github, Linkedin, etc).
// These are inlined as plain SVGs using the official brand marks so we
// don't need to pull in a separate icon-pack dependency for just three icons.
type BrandIconProps = { size?: number; className?: string };

function GithubIcon({ size = 18, className }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

function KaggleIcon({ size = 18, className }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 320 512"
      fill="currentColor"
      className={className}
    >
      <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Email",
    value: "hungpro123b@email.com",
    href: "mailto:hungpro123b@email.com",
    icon: Mail,
    color: "#00e5ff",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pqh2005",
    href: "https://linkedin.com/in/pqh2005",
    icon: LinkedinIcon,
    color: "#60a5fa",
  },
  {
    label: "GitHub",
    value: "github.com/GTRe5",
    href: "https://github.com/GTRe5",
    icon: GithubIcon,
    color: "#a78bfa",
  },
  {
    label: "Kaggle",
    value: "kaggle.com/hwng2005",
    href: "https://www.kaggle.com/hwng2005",
    icon: KaggleIcon,
    color: "#34d399",
  },
];

const subjects = [
  "Data / Analytics Project",
  "Dashboard Development",
  "ML / AI Collaboration",
  "Freelance / Consulting",
  "Full-time Opportunity",
  "Just Saying Hi 👋",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[#00e5ff] text-sm">05.</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Get In Touch
          </h2>
          <div className="flex-1 h-line" />
        </div>
        <p className="text-[#4a6380] font-mono text-sm mb-16 max-w-xl">
          // Whether it's a data challenge, a collaboration idea, or just a chat
          about dashboards - I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Contact Form ── */}
          <div className="relative border border-[#1e2d3d] bg-[#0d1117] rounded-xl p-8 overflow-hidden">
            {/* Top cyan accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent" />
            {/* Corner brackets */}
            <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#00e5ff]/50" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#00e5ff]/50" />
            <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#00e5ff]/50" />
            <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#00e5ff]/50" />

            {sent ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 flex items-center justify-center text-[#00e5ff] mb-5">
                  <Check size={28} />
                </div>
                <div className="font-display font-bold text-2xl text-white mb-2">
                  Message Sent!
                </div>
                <p className="text-[#4a6380] font-mono text-xs max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-8 font-mono text-xs text-[#4a6380] hover:text-[#00e5ff] border border-[#1e2d3d] hover:border-[#00e5ff]/30 px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                >
                  Send another <ArrowRight size={13} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] placeholder-[#2a3f55] focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0d1820] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] placeholder-[#2a3f55] focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0d1820] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase block mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0d1820] transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a topic…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s} className="bg-[#111820]">{s}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4a6380] pointer-events-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase block mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell me about the project, timeline, or anything on your mind…"
                    className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] placeholder-[#2a3f55] focus:outline-none focus:border-[#00e5ff]/60 focus:bg-[#0d1820] transition-all duration-200 resize-none leading-relaxed"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="font-mono text-xs text-[#f87171] border border-[#f87171]/20 bg-[#f87171]/5 rounded-lg px-4 py-3 flex items-center gap-2">
                    <CircleAlert size={14} className="flex-shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#00e5ff] text-[#080c10] font-mono font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#00b8cc] active:scale-[.98] transition-all duration-200 glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <LoaderCircle size={14} className="animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      Send Message <ArrowRight size={16} />
                    </span>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-display font-semibold text-xl text-white mb-8">
                Prefer to reach out directly?{" "}
                <span className="text-[#4a6380]">Here's where to find me.</span>
              </p>

              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 border border-[#1e2d3d] bg-[#0d1117] rounded-lg card-hover group"
                    >
                      <span
                        className="w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0"
                        style={{
                          color: link.color,
                          borderColor: `${link.color}33`,
                          background: `${link.color}0d`,
                        }}
                      >
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase mb-0.5">
                          {link.label}
                        </div>
                        <div
                          className="font-mono text-sm truncate transition-colors duration-300"
                          style={{ color: link.color }}
                        >
                          {link.value}
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="ml-auto text-[#4a6380] group-hover:text-[#00e5ff] group-hover:translate-x-0.5 transition-all flex-shrink-0"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability + response time */}
            <div className="mt-8 space-y-3">
              <div className="border border-[#00e5ff]/20 bg-[#00e5ff]/5 rounded-lg p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse flex-shrink-0" />
                <div>
                  <div className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase mb-0.5">
                    Currently Available
                  </div>
                  <div className="font-mono text-xs text-[#4a6380]">
                    Open to full-time, freelance & consulting roles
                  </div>
                </div>
              </div>
              <div className="border border-[#1e2d3d] bg-[#0d1117] rounded-lg p-4 flex items-center gap-3">
                <Clock size={16} className="text-[#ffb300] flex-shrink-0" />
                <div className="font-mono text-xs text-[#4a6380]">
                  Typical reply time:{" "}
                  <span className="text-[#c9d8e8]">&lt; 24 hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}