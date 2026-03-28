'use client'
import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    label: 'Data & Analytics',
    color: '#00e5ff',
    skills: [
      { name: 'SQL / PostgreSQL', level: 95 },
      { name: 'Python (pandas, numpy)', level: 88 },
      { name: 'Excel / Google Sheets', level: 90 },
      { name: 'Statistical Analysis', level: 82 },
    ],
  },
  {
    label: 'Visualization & BI',
    color: '#ffb300',
    skills: [
      { name: 'Power BI', level: 92 },
      { name: 'Tableau', level: 85 },
      { name: 'Looker / Looker Studio', level: 78 },
      { name: 'Matplotlib / Seaborn', level: 80 },
    ],
  },
  {
    label: 'Engineering & Cloud',
    color: '#a78bfa',
    skills: [
      { name: 'dbt (Data Build Tool)', level: 75 },
      { name: 'Airflow / ETL Pipelines', level: 70 },
      { name: 'Google BigQuery', level: 82 },
      { name: 'AWS / GCP Basics', level: 65 },
    ],
  },
]

const tools = [
  'Python', 'SQL', 'Power BI', 'Tableau', 'dbt', 'BigQuery',
  'Airflow', 'Git', 'Jupyter', 'Pandas', 'NumPy', 'Scikit-learn',
  'Excel', 'Looker', 'Redshift', 'Snowflake', 'Databricks', 'Spark',
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
              className="border border-[#1e2d3d] bg-[#111820] rounded-xl p-6 card-hover"
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
      </div>
    </section>
  )
}
