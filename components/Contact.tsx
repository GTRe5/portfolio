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

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
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
          {/* Contact form */}
          <div className="border border-[#1e2d3d] bg-[#0d1117] rounded-xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-4xl mb-4">✓</div>
                <div className="font-display font-bold text-xl text-[#00e5ff] mb-2">
                  Message sent!
                </div>
                <p className="text-[#4a6380] font-mono text-sm">
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-[#4a6380] tracking-widest uppercase block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] placeholder-[#2a3f55] focus:outline-none focus:border-[#00e5ff]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#4a6380] tracking-widest uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    placeholder="john@company.com"
                    className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] placeholder-[#2a3f55] focus:outline-none focus:border-[#00e5ff]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#4a6380] tracking-widest uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder="Tell me about the project..."
                    className="w-full bg-[#111820] border border-[#1e2d3d] rounded-lg px-4 py-3 font-mono text-sm text-[#c9d8e8] placeholder-[#2a3f55] focus:outline-none focus:border-[#00e5ff]/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#00e5ff] text-[#080c10] font-mono font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#00b8cc] transition-all duration-300 glow-cyan disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 border border-[#080c10] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-display font-semibold text-xl text-white mb-8">
                Prefer to reach out directly? Here's where to find me.
              </p>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-[#1e2d3d] bg-[#0d1117] rounded-lg card-hover group"
                  >
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg border"
                      style={{
                        color: link.color,
                        borderColor: `${link.color}33`,
                        background: `${link.color}0d`,
                      }}
                    >
                      {link.icon}
                    </span>
                    <div>
                      <div className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase mb-0.5">
                        {link.label}
                      </div>
                      <div
                        className="font-mono text-sm transition-colors duration-300"
                        style={{ color: link.color }}
                      >
                        {link.value}
                      </div>
                    </div>
                    <span className="ml-auto text-[#4a6380] group-hover:text-[#00e5ff] transition-colors">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="mt-8 border border-[#00e5ff]/20 bg-[#00e5ff]/5 rounded-lg p-4 flex items-center gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
