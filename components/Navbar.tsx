'use client'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

/* ─── Rope Toggle ─────────────────────────────────────────── */
function RopeToggle() {
  const { theme, toggle } = useTheme()
  const [pulling, setPulling] = useState(false)
  const isDark = theme === 'dark'

  const handlePull = () => {
    if (pulling) return
    setPulling(true)
    // Theme flips at the peak pull-down moment (≈22% of 800ms = 176ms)
    setTimeout(toggle, 176)
    // Clear animation state after it fully settles
    setTimeout(() => setPulling(false), 850)
  }

  return (
    <button
      onClick={handlePull}
      disabled={pulling}
      className="relative flex flex-col items-center focus:outline-none select-none cursor-pointer group"
      style={{ overflow: 'visible', WebkitTapHighlightColor: 'transparent' }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* ── Ceiling mount / nail ── */}
      <div
        style={{
          width: 14,
          height: 3,
          borderRadius: 2,
          background: isDark ? '#2a3f55' : '#94a3b8',
          transition: 'background 0.4s ease',
          flexShrink: 0,
        }}
      />

      {/* ── Rope body + handle — the animated group ── */}
      <div
        className={pulling ? 'rope-pull' : 'rope-idle'}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* Rope body with woven texture */}
        <div
          style={{
            width: 2,
            height: 22,
            background: isDark
              ? 'repeating-linear-gradient(to bottom, #3a5570 0px, #3a5570 2.5px, #1a2d3d 2.5px, #1a2d3d 5px)'
              : 'repeating-linear-gradient(to bottom, #8099b3 0px, #8099b3 2.5px, #c5d4e5 2.5px, #c5d4e5 5px)',
            transition: 'background 0.4s ease',
          }}
        />

        {/* Knot above handle */}
        <div
          style={{
            width: 6,
            height: 3,
            borderRadius: 3,
            background: isDark ? '#4a6380' : '#94a3b8',
            marginBottom: 1,
            transition: 'background 0.4s ease',
          }}
        />

        {/* Pull handle / bead */}
        <div
          className="group-hover:scale-110 transition-transform duration-200"
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isDark ? '#0d1117' : '#ffffff',
            border: `1.5px solid ${isDark ? '#2a3f55' : '#c5d4e5'}`,
            boxShadow: isDark
              ? '0 0 0 2px rgba(0,229,255,0), inset 0 1px 2px rgba(0,0,0,0.4)'
              : '0 1px 4px rgba(0,80,160,0.1), inset 0 1px 2px rgba(255,255,255,0.9)',
            transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.3s ease',
          }}
        >
          {isDark ? (
            <Sun size={10} color="#ffb300" strokeWidth={2.2} />
          ) : (
            <Moon size={10} color="#5a7090" strokeWidth={2.2} />
          )}
        </div>
      </div>
    </button>
  )
}

/* ─── Navbar ──────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080c10]/90 backdrop-blur-md border-b border-[#1e2d3d]'
          : 'bg-transparent'
      }`}
    >
      {/* overflow: visible so the rope can sway/pull past the nav boundary */}
      <div
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        style={{ overflow: 'visible' }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-mono text-xs text-[#4a6380]">&gt;_</span>
          <span className="font-display font-bold text-sm tracking-widest uppercase text-[#c9d8e8] group-hover:text-[#00e5ff] transition-colors duration-300">
            GTRe5<span className="text-[#00e5ff]">.</span>Data
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`font-mono text-xs tracking-wider uppercase transition-all duration-300 relative group ${
                active === link.href
                  ? 'text-[#00e5ff]'
                  : 'text-[#4a6380] hover:text-[#c9d8e8]'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00e5ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right cluster: rope + CTA + hamburger */}
        <div className="flex items-center gap-3" style={{ overflow: 'visible' }}>
          {/* Rope toggle — always visible */}
          <RopeToggle />

          {/* Hire Me — desktop only */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#00e5ff]/40 text-[#00e5ff] font-mono text-xs tracking-wider uppercase hover:bg-[#00e5ff]/10 transition-all duration-300 rounded"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
            Hire Me
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-[#4a6380] hover:text-[#00e5ff] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1">
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#1e2d3d] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-wider uppercase text-[#4a6380] hover:text-[#00e5ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}