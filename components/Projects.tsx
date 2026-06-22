'use client'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'HaGRID Hand Gesture Recognition',
    desc: 'Real-time hand gesture classifier trained on the HaGRID dataset (34 classes) using EfficientNet-B0 via timm. Includes EDA notebook, fine-tuning pipeline, and a live webcam demo with a styled HUD overlay.',
    tags: ['Python', 'PyTorch', 'EfficientNet-B0', 'HuggingFace', 'OpenCV'],
    impact: '34 gesture classes',
    type: 'Computer Vision / DL',
    color: '#00e5ff',
    link: 'https://github.com/GTRe5/Hagrid-Gesture-Recognition',
  },
  {
    id: '02',
    title: 'PixelNarrator - Image Captioning',
    desc: 'End-to-end image captioning system trained on MS COCO 2017. CNN encoder (ResNet-50) + LSTM decoder with Bahdanau attention, rendering per-word heat-maps that show where the model looks when generating each token. Interactive Gradio demo included.',
    tags: ['Python', 'PyTorch', 'ResNet-50', 'LSTM', 'Gradio', 'MS COCO'],
    impact: '4 ablation models',
    type: 'Computer Vision / NLP',
    color: '#a78bfa',
    link: 'https://github.com/GTRe5/Image-Captioning-COCO',
  },
  {
    id: '03',
    title: 'TrendScope - GitHub Trending Dashboard',
    desc: 'Real-time GitHub Trending dashboard with zero API keys - scrapes live data via BeautifulSoup4 and visualises daily star rankings with interactive Plotly bar charts. Deployed publicly via ngrok with a custom dark-orange themed Streamlit UI and KPI strip.',
    tags: ['Python', 'Streamlit', 'Plotly', 'BeautifulSoup4', 'ngrok'],
    impact: 'Live Data',
    type: 'Data / Dashboard',
    color: '#ff7a1a',
    link: 'https://github.com/GTRe5/TrendScope',
  },
  {
    id: '04',
    title: 'Snipline - Real-Time URL Shortener',
    desc: 'Real-time URL shortener built with Next.js 16 (App Router) and TypeScript. Server Components handle short-code generation and click-tracked redirects, backed by Upstash Redis (with an automatic in-memory fallback in dev) and client-side polling that syncs the link ledger live across tabs and devices. Custom aliases, per-IP rate limiting, and a flicker-free dark/light theme included.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Upstash Redis'],
    impact: 'Live Click Tracking',
    type: 'Full-Stack / Web',
    color: '#ffa500',
    link: 'https://github.com/GTRe5/Snipline',
  },
  {
    id: '05',
    title: 'Project Coming Soon',
    desc: 'This project is currently in progress. Stay tuned - details and source code will be published here once complete.',
    tags: ['In Progress'],
    impact: 'WIP',
    type: 'Coming Soon',
    color: '#f87171',
    link: '#',
    wip: true,
  },
  {
    id: '06',
    title: 'Project Coming Soon',
    desc: 'This project is currently in progress. Stay tuned - details and source code will be published here once complete.',
    tags: ['In Progress'],
    impact: 'WIP',
    type: 'Coming Soon',
    color: '#60a5fa',
    link: '#',
    wip: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[#00e5ff] text-sm">03.</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Projects</h2>
          <div className="flex-1 h-line" />
        </div>
        <p className="text-[#4a6380] font-mono text-sm mb-16">
          // A selection of data projects I've built or contributed to
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group border border-[#1e2d3d] bg-[#0d1117] rounded-xl p-6 card-hover flex flex-col relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-300 group-hover:opacity-100 opacity-0"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase mb-1 block"
                    style={{ color: project.color }}
                  >
                    {project.type}
                  </span>
                  <span className="font-mono text-[#2a3f55] text-xs">{project.id}</span>
                </div>
                <div
                  className="px-2 py-1 rounded text-[10px] font-mono border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}33`,
                    background: `${project.color}0d`,
                  }}
                >
                  {project.impact}
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-lg text-white mb-3 group-hover:transition-colors duration-300"
                style={{ color: undefined }}
              >
                {project.title}
              </h3>

              {/* Desc */}
              <p className="text-[#4a6380] text-sm leading-relaxed mb-6 flex-1">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#111820] border border-[#1e2d3d] font-mono text-[10px] text-[#4a6380] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 text-[#4a6380] group-hover:text-[#00e5ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/GTRe5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#4a6380] hover:text-[#00e5ff] transition-colors duration-300 border border-[#1e2d3d] px-6 py-3 rounded hover:border-[#00e5ff]/40"
          >
            <span>View all on GitHub</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}