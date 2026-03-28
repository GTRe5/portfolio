'use client'

const projects = [
  {
    id: '01',
    title: 'Sales Intelligence Dashboard',
    desc: 'End-to-end Power BI dashboard tracking $50M+ in revenue across 12 regions. Features real-time alerts, YoY comparisons, and drill-through analysis.',
    tags: ['Power BI', 'SQL', 'DAX', 'Azure'],
    impact: '+23% faster reporting',
    type: 'Business Intelligence',
    color: '#00e5ff',
    link: '#',
  },
  {
    id: '02',
    title: 'Customer Churn Prediction',
    desc: 'ML pipeline predicting customer churn with 91% accuracy using XGBoost. Integrated into CRM to trigger proactive retention campaigns.',
    tags: ['Python', 'Scikit-learn', 'BigQuery', 'Airflow'],
    impact: '-18% churn rate',
    type: 'Machine Learning',
    color: '#a78bfa',
    link: '#',
  },
  {
    id: '03',
    title: 'E-commerce ETL Pipeline',
    desc: 'Automated data pipeline processing 3M+ daily transactions from 5 sources into a unified warehouse. Built with dbt for transformation and Great Expectations for quality.',
    tags: ['dbt', 'Snowflake', 'Airflow', 'Python'],
    impact: '99.8% uptime',
    type: 'Data Engineering',
    color: '#ffb300',
    link: '#',
  },
  {
    id: '04',
    title: 'Marketing Attribution Model',
    desc: 'Multi-touch attribution model analyzing 8 marketing channels. Enabled reallocation of $2M budget resulting in 35% improvement in ROAS.',
    tags: ['Python', 'SQL', 'Tableau', 'Statistics'],
    impact: '+35% ROAS',
    type: 'Analytics',
    color: '#34d399',
    link: '#',
  },
  {
    id: '05',
    title: 'Real-time Operations Monitor',
    desc: 'Tableau dashboard with live Kafka feeds showing warehouse KPIs. Sub-second refresh rate with anomaly detection alerts via Slack.',
    tags: ['Tableau', 'Kafka', 'Python', 'SQL'],
    impact: '-40% incident response time',
    type: 'Real-time Analytics',
    color: '#f87171',
    link: '#',
  },
  {
    id: '06',
    title: 'NLP Review Analyzer',
    desc: 'Sentiment analysis on 500K+ customer reviews using BERT. Topic modeling revealed hidden product issues, directly informing product roadmap.',
    tags: ['Python', 'HuggingFace', 'NLP', 'Pandas'],
    impact: 'Analysed 500K reviews',
    type: 'NLP / AI',
    color: '#60a5fa',
    link: '#',
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
              <div className="absolute bottom-6 right-6 text-[#4a6380] group-hover:text-[#00e5ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sm">
                ↗
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
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
