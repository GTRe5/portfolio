'use client'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const categories = [
  {
    label: 'AI & Machine Learning',
    color: '#00e5ff',
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'XGBoost / LightGBM / CatBoost', level: 80 },
      { name: 'TensorFlow', level: 74 },
    ],
  },
  {
    label: 'Computer Vision & Deep Learning',
    color: '#f97316',
    skills: [
      { name: 'EfficientNet-B0 / ResNet-50 (timm)', level: 87 },
      { name: 'YOLOv8 / Object Detection', level: 85 },
      { name: 'OpenCV / EasyOCR', level: 83 },
      { name: 'CNN / LSTM / Attention', level: 80 },
    ],
  },
  {
    label: 'Data Engineering & MLOps',
    color: '#a78bfa',
    skills: [
      { name: 'Python / Pandas / NumPy', level: 92 },
      { name: 'Streamlit / Gradio / Docker', level: 82 },
      { name: 'Flask / FastAPI / MLflow', level: 80 },
      { name: 'SQL / R / Power BI', level: 75 },
    ],
  },
]

const tools = [
  // Languages
  'Python', 'SQL', 'R',
  // AI / ML
  'PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost',
  // CV & DL architectures
  'YOLOv8', 'EfficientNet-B0', 'ResNet-50', 'OpenCV', 'EasyOCR', 'HuggingFace', 'timm',
  // Sequence / NLP
  'CNN', 'LSTM', 'NLP', 'Attention Mechanisms',
  // Data & Viz
  'Pandas', 'NumPy', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'BeautifulSoup4',
  // MLOps & Deployment
  'Flask', 'FastAPI', 'MLflow', 'Docker', 'Streamlit', 'Gradio', 'ngrok',
  // Dev Tools
  'Git', 'Jupyter', 'VSCode', 'Linux', 'Excel',
  // Web
  'Next.js', 'TypeScript', 'Tailwind CSS',
]

const softSkills = [
  'Analytical Thinking',
  'Problem Solving',
  'Team Collaboration',
  'Result-oriented Leadership',
  'Time Management',
]

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-[#c9d8e8]">{name}</span>
        <span className="font-mono text-xs text-[#4a6380]">{level}%</span>
      </div>
      <div className="h-1 bg-[#1e2d3d] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}44`,
            transitionDelay: '0.2s',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 bg-[#0d1117] relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#00e5ff] text-sm">02.</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Tech Stack</h2>
          <div className="flex-1 h-line" />
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="border border-[#1e2d3d] bg-[#111820] rounded-xl p-6 card-hover transition-colors duration-300 hover:border-[var(--accent)]"
              style={{ '--accent': cat.color } as CSSProperties}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span
                  className="font-display font-semibold text-sm tracking-wide"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  animate={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tools cloud */}
        <div className="border border-[#1e2d3d] bg-[#111820] rounded-xl p-8">
          <p className="font-mono text-xs text-[#4a6380] tracking-widest uppercase mb-6">
            All Tools & Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className="px-3 py-1.5 border border-[#1e2d3d] bg-[#0d1117] font-mono text-xs text-[#c9d8e8] rounded hover:border-[#00e5ff]/40 hover:text-[#00e5ff] transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-6 border border-[#1e2d3d] bg-[#111820] rounded-xl p-8">
          <p className="font-mono text-xs text-[#4a6380] tracking-widest uppercase mb-6">
            Soft Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 border border-[#a78bfa]/20 bg-[#a78bfa]/5 font-mono text-xs text-[#a78bfa]/80 rounded hover:border-[#a78bfa]/50 hover:text-[#a78bfa] transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}