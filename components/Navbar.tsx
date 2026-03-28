'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

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
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-mono text-xs text-[#4a6380]">&gt;_</span>
          <span
            className="font-display font-bold text-sm tracking-widest uppercase text-[#c9d8e8] group-hover:text-[#00e5ff] transition-colors duration-300"
          >
            GTRe5<span className="text-[#00e5ff]">.</span>Data
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`font-mono text-xs tracking-wider uppercase transition-all duration-300 relative group ${
                active === link.href ? 'text-[#00e5ff]' : 'text-[#4a6380] hover:text-[#c9d8e8]'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00e5ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#00e5ff]/40 text-[#00e5ff] font-mono text-xs tracking-wider uppercase hover:bg-[#00e5ff]/10 transition-all duration-300 rounded"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
          Hire Me
        </a>

        {/* Mobile toggle */}
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

      {/* Mobile menu */}
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
