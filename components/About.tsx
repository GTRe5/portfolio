'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const traits = [
  { icon: '📊', label: 'Data-Driven', desc: 'Every decision backed by evidence' },
  { icon: '🔍', label: 'Detail-Oriented', desc: 'Finding patterns others miss' },
  { icon: '🚀', label: 'Impact-Focused', desc: 'Building things that matter' },
  { icon: '🤝', label: 'Collaborative', desc: 'Cross-functional team player' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 section-reveal">
          <span className="font-mono text-[#00e5ff] text-sm">01.</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">About Me</h2>
          <div className="flex-1 h-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-6 section-reveal">
            <p className="text-[#c9d8e8] leading-relaxed text-lg">
              Hi, I'm{' '}
              <span className="text-[#00e5ff] font-semibold">GTRe5</span> — a Data Enthusiast
              based in{' '}
              <span className="text-[#ffb300]">Ho Chi Minh City, Vietnam</span>. I specialize in
              turning messy, raw data into clean insights that help teams make smarter decisions.
            </p>
            <p className="text-[#4a6380] leading-relaxed">
              My journey started with a curiosity about <em>why</em> things happen — not just
              <em>what</em>. That curiosity led me deep into SQL, Python, and BI tools. Today, I
              build end-to-end data solutions: from ingestion pipelines to executive dashboards.
            </p>
            <p className="text-[#4a6380] leading-relaxed">
              When I'm not wrangling data, I enjoy reading about behavioral economics, contributing
              to open-source projects, and obsessing over data visualization aesthetics.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Ho Chi Minh City', 'Open to Remote', 'Full-time / Freelance'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#1e2d3d] bg-[#0d1117] font-mono text-xs text-[#4a6380] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — avatar + traits */}
          <div className="section-reveal">
            {/* Avatar placeholder */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative w-52 h-52">
                <div className="absolute inset-0 rounded-2xl border border-[#00e5ff]/20 rotate-6 bg-[#00e5ff]/5" />
                <div className="absolute inset-0 rounded-2xl border border-[#1e2d3d] bg-[#0d1117] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Pham Quoc Hung"
                    fill
                    sizes="208px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#00e5ff]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#00e5ff]" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#00e5ff]" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#00e5ff]" />
              </div>
            </div>

            {/* Traits grid */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="border border-[#1e2d3d] bg-[#0d1117]/60 rounded-lg p-4 card-hover"
                >
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <div className="font-display font-semibold text-sm text-[#c9d8e8] mb-1">{t.label}</div>
                  <div className="font-mono text-[11px] text-[#4a6380]">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
