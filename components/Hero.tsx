'use client'
import { useEffect, useState } from 'react'

const roles = [
  'Data Analyst',
  'BI Developer',
  'SQL Engineer',
  'Data Storyteller',
  'Insight Hunter',
]

const stats = [
  { value: 50, suffix: '+', label: 'Dashboards Built' },
  { value: 3, suffix: 'M+', label: 'Rows Analyzed' },
  { value: 98, suffix: '%', label: 'Accuracy Rate' },
  { value: 5, suffix: '+', label: 'Years Experience' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00e5ff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Data decorations */}
      <div className="absolute top-20 left-8 font-mono text-[10px] text-[#1e2d3d] leading-relaxed hidden lg:block">
        {['SELECT *', 'FROM insights', 'WHERE value > 0', 'ORDER BY impact DESC', 'LIMIT 100;'].map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-[#2a3f55]">{String(i + 1).padStart(2, '0')}</span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 right-8 font-mono text-[10px] text-[#1e2d3d] leading-relaxed hidden lg:block text-right">
        {['import pandas as pd', 'import numpy as np', 'df = pd.read_csv("data.csv")', 'df.describe()', 'plt.show()'].map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#00e5ff]/20 bg-[#00e5ff]/5 rounded-full mb-8 animate-in"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="font-mono text-[#00e5ff] text-xs tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-4 animate-in delay-1"
          style={{ opacity: 0 }}
        >
          Pham Quoc Hung
        </h1>
        <p
          className="font-display font-semibold text-2xl md:text-3xl text-[#4a6380] mb-2 animate-in delay-2"
          style={{ opacity: 0 }}
        >
          aka{' '}
          <span className="text-[#00e5ff] glow-text">GTRe5</span>
        </p>

        {/* Typewriter */}
        <div
          className="flex items-center justify-center gap-2 mb-10 animate-in delay-3"
          style={{ opacity: 0 }}
        >
          <span className="font-mono text-[#4a6380] text-sm">&gt;_</span>
          <span className="font-mono text-lg md:text-xl text-[#c9d8e8]">
            {displayed}
            <span className="cursor" />
          </span>
        </div>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-[#4a6380] text-base md:text-lg leading-relaxed mb-12 animate-in delay-4"
          style={{ opacity: 0 }}
        >
          I transform chaotic data into clear, compelling stories. Passionate about building
          dashboards, pipelines, and models that drive real business decisions.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-20 animate-in delay-5"
          style={{ opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00e5ff] text-[#080c10] font-mono font-bold text-sm tracking-wider uppercase rounded hover:bg-[#00b8cc] transition-all duration-300 glow-cyan"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e2d3d] text-[#c9d8e8] font-mono text-sm tracking-wider uppercase rounded hover:border-[#00e5ff]/40 hover:text-[#00e5ff] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-in delay-6"
          style={{ opacity: 0 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#1e2d3d] bg-[#0d1117]/60 rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="font-display font-extrabold text-2xl md:text-3xl text-[#00e5ff] glow-text">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in delay-7" style={{ opacity: 0 }}>
          <span className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#4a6380] to-transparent" />
        </div>
      </div>
    </section>
  )
}
