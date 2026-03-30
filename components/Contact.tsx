"use client";
import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "hungpro123b@email.com",
    href: "mailto:hungpro123b@email.com",
    icon: "✉",
    color: "#00e5ff",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pqh2005",
    href: "https://linkedin.com/in/pqh2005",
    icon: "↗",
    color: "#60a5fa",
  },
  {
    label: "GitHub",
    value: "github.com/GTRe5",
    href: "https://github.com/GTRe5",
    icon: "↗",
    color: "#a78bfa",
  },
  {
    label: "Kaggle",
    value: "kaggle.com/hwng2005",
    href: "https://www.kaggle.com/hwng2005",
    icon: "↗",
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

    const payload = {
      // Emoji-prefixed keys → cleaner email layout in inbox
      "👤 Name":    form.name,
      "📧 Email":   form.email,
      "📌 Subject": form.subject || "No subject",
      "💬 Message": form.message,
      // Formspree magic fields
      _subject: `[Portfolio] ${form.subject || "New message"} from ${form.name}`,
      _replyto: form.email,
    };

    try {
      const res = await fetch("https://formspree.io/f/xdapgeae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
          about dashboards — I'd love to hear from you.
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
                <div className="w-16 h-16 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 flex items-center justify-center text-2xl text-[#00e5ff] mb-5">
                  ✓
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
                  className="mt-8 font-mono text-xs text-[#4a6380] hover:text-[#00e5ff] border border-[#1e2d3d] hover:border-[#00e5ff]/30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Send another →
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
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4a6380] pointer-events-none text-xs">▾</span>
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
                  <p className="font-mono text-xs text-[#f87171] border border-[#f87171]/20 bg-[#f87171]/5 rounded-lg px-4 py-3">
                    ✕ Something went wrong. Please try again or email me directly.
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
                      <span className="w-3 h-3 border-2 border-[#080c10] border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
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
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-[#1e2d3d] bg-[#0d1117] rounded-lg card-hover group"
                  >
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-base border flex-shrink-0"
                      style={{
                        color: link.color,
                        borderColor: `${link.color}33`,
                        background: `${link.color}0d`,
                      }}
                    >
                      {link.icon}
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
                    <span className="ml-auto text-[#4a6380] group-hover:text-[#00e5ff] group-hover:translate-x-0.5 transition-all flex-shrink-0">
                      →
                    </span>
                  </a>
                ))}
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
                <span className="font-mono text-sm text-[#ffb300]">⏱</span>
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