export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#1e2d3d] bg-[#0d1117] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#2a3f55]">
          <span className="text-[#4a6380]">Pham Quoc Hung (GTRe5)</span> ·{' '}
          <span>Data Enthusiast</span>
        </div>
        <div className="font-mono text-xs text-[#2a3f55]">
          © {year} · Built with <span className="text-[#00e5ff]">Next.js</span> &amp; passion for data
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          <span className="font-mono text-[10px] text-[#4a6380] tracking-widest uppercase">
            Open to work
          </span>
        </div>
      </div>
    </footer>
  )
}
