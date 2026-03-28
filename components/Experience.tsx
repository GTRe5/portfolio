'use client'

const experiences = [
  {
    role: 'Senior Data Analyst',
    company: 'TechCorp Vietnam',
    period: '2022 — Present',
    location: 'Ho Chi Minh City',
    description: 'Lead analytics for the e-commerce division. Own the data stack from ingestion (Airflow + BigQuery) to visualization (Looker). Mentor 2 junior analysts.',
    highlights: [
      'Rebuilt reporting infrastructure — cut dashboard load time by 70%',
      'Built churn prediction model saving $1.2M annually',
      'Automated 40+ manual Excel reports into live dashboards',
    ],
    stack: ['BigQuery', 'Looker', 'dbt', 'Python', 'Airflow'],
  },
  {
    role: 'Data Analyst',
    company: 'Saigon Fintech',
    period: '2020 — 2022',
    location: 'Ho Chi Minh City',
    description: 'Supported financial analytics across lending and payments. Built risk scoring models and regulatory reporting pipelines for the compliance team.',
    highlights: [
      'Developed credit risk scorecard with 87% predictive accuracy',
      'Reduced regulatory report generation from 3 days to 4 hours',
      'Created self-serve Power BI workspace used by 50+ stakeholders',
    ],
    stack: ['SQL', 'Power BI', 'Python', 'SAS', 'Excel'],
  },
  {
    role: 'Business Intelligence Intern',
    company: 'Digital Agency Co.',
    period: '2019 — 2020',
    location: 'Ho Chi Minh City',
    description: 'First exposure to real-world data work. Supported marketing analytics for 20+ client campaigns, built Tableau dashboards, and learned SQL from scratch.',
    highlights: [
      'Built first Tableau dashboard tracking campaign ROI across 5 channels',
      'Cleaned and standardized customer database of 200K records',
      'Presented weekly insights to non-technical marketing teams',
    ],
    stack: ['Tableau', 'SQL', 'Excel', 'Google Analytics'],
  },
]

const education = [
  {
    degree: 'B.Sc. Information Systems',
    school: 'University of Economics HCMC',
    period: '2015 — 2019',
    note: 'GPA: 3.6 / 4.0 — Dean\'s List',
  },
  {
    degree: 'Google Data Analytics Certificate',
    school: 'Coursera / Google',
    period: '2021',
    note: 'Specialization in R & Tableau',
  },
  {
    degree: 'AWS Cloud Practitioner',
    school: 'Amazon Web Services',
    period: '2022',
    note: 'CLF-C01 Certified',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0d1117] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[#00e5ff] text-sm">04.</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Experience</h2>
          <div className="flex-1 h-line" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/40 via-[#1e2d3d] to-transparent" />

            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative pl-10 mb-12 last:mb-0 group">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-[#00e5ff]/40 bg-[#080c10] flex items-center justify-center group-hover:border-[#00e5ff] transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#00e5ff]/60 group-hover:bg-[#00e5ff] transition-colors" />
                </div>

                {/* Card */}
                <div className="border border-[#1e2d3d] bg-[#111820] rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                    <span className="font-mono text-xs text-[#4a6380] border border-[#1e2d3d] px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#00e5ff] font-mono text-sm">{exp.company}</span>
                    <span className="text-[#2a3f55] font-mono text-xs">· {exp.location}</span>
                  </div>

                  <p className="text-[#4a6380] text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-[#c9d8e8]">
                        <span className="text-[#00e5ff] mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-[#0d1117] border border-[#1e2d3d] font-mono text-[10px] text-[#4a6380] rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education sidebar */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center gap-2">
              <span className="text-[#ffb300]">◆</span> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="border border-[#1e2d3d] bg-[#111820] rounded-lg p-4 card-hover"
                >
                  <div className="font-mono text-[10px] text-[#ffb300] tracking-widest mb-2">{edu.period}</div>
                  <div className="font-display font-semibold text-sm text-white mb-1">{edu.degree}</div>
                  <div className="font-mono text-xs text-[#4a6380] mb-2">{edu.school}</div>
                  <div className="font-mono text-[10px] text-[#2a3f55]">{edu.note}</div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <span className="text-[#00e5ff]">◆</span> Languages
              </h3>
              <div className="space-y-3">
                {[
                  { lang: 'Vietnamese', level: 'Native', pct: 100 },
                  { lang: 'English', level: 'Professional', pct: 88 },
                  { lang: 'Japanese', level: 'Basic (JLPT N4)', pct: 30 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-[#c9d8e8]">{l.lang}</span>
                      <span className="font-mono text-[10px] text-[#4a6380]">{l.level}</span>
                    </div>
                    <div className="h-1 bg-[#1e2d3d] rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-[#00e5ff]/60 to-[#00e5ff] rounded-full"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
