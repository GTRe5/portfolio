'use client'

const experiences = [
  {
    role: '[Job Title]',
    company: '[Company Name]',
    period: '[Month] - [Month] [Year]',
    location: '[City, Country]',
    description: '[Describe the team, product, and your core responsibility in 1-2 sentences.]',
    highlights: [
      '[Action verb] [what you did], resulting in [quantifiable outcome - e.g. a %, time saved, or cost metric].',
      '[Action verb] [what you built / designed / implemented], improving [metric] by [X%] within [timeframe].',
      '[Action verb] [what you built / analyzed], enabling [outcome] across [scope - e.g. teams / users].',
    ],
    stack: ['[Tech 1]', '[Tech 2]', '[Tech 3]', '[Tech 4]'],
  },
]

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'Ton Duc Thang University (TDTU)',
    period: 'Aug 2023 - Dec 2026 (Expected)',
    location: 'Ho Chi Minh City, Vietnam',
    gpa: 'X.XX / 10',
    coursework: [
      'Massive Data Processing - 8.8',
      'Data Analysis & Visualization - 7.9',
      'Deep Learning - 7.1',
    ],
  },
]

const awards = [
  {
    title: '[Award / Scholarship Name]',
    issuer: '[Issuing Organization / University]',
    date: '[Month Year]',
    description: '[Brief description of what this award recognizes or what you achieved.]',
  },
  {
    title: '[Competition Placement / Recognition]',
    issuer: '[Competition / Organizer Name]',
    date: '[Month Year]',
    description: '[What you placed or accomplished — e.g. Top 10%, 1st place, finalist.]',
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
              <div key={i} className="relative pl-10 mb-12 last:mb-0 group">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-[#00e5ff]/20 bg-[#080c10] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#00e5ff]/30" />
                </div>

                {/* Placeholder card */}
                <div className="border border-dashed border-[#1e2d3d] bg-[#111820]/60 rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-[#2a3f55]">{exp.role}</h3>
                    <span className="font-mono text-[10px] text-[#ffb300]/60 border border-[#ffb300]/20 bg-[#ffb300]/5 px-2 py-0.5 rounded">
                      fill in when ready
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#00e5ff]/40 font-mono text-sm">{exp.company}</span>
                    <span className="text-[#1e2d3d] font-mono text-xs">· {exp.location}</span>
                  </div>

                  <p className="text-[#2a3f55] text-sm leading-relaxed mb-4 italic">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[#2a3f55] italic">
                        <span className="text-[#00e5ff]/30 mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-[#0d1117] border border-dashed border-[#1e2d3d] font-mono text-[10px] text-[#2a3f55] rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            {/* Education */}
            <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center gap-2">
              <span className="text-[#ffb300]">◆</span> Education
            </h3>
            <div className="space-y-4 mb-8">
              {education.map((edu) => (
                <div key={edu.degree} className="border border-[#1e2d3d] bg-[#111820] rounded-lg p-4 card-hover">
                  <div className="font-mono text-[10px] text-[#ffb300] tracking-widest mb-2">{edu.period}</div>
                  <div className="font-display font-semibold text-sm text-white mb-0.5">{edu.degree}</div>
                  <div className="font-mono text-xs text-[#00e5ff] mb-1">{edu.school}</div>
                  <div className="font-mono text-[10px] text-[#4a6380] mb-3">GPA: {edu.gpa}</div>
                  <div className="font-mono text-[10px] text-[#2a3f55] tracking-widest uppercase mb-2">Relevant Coursework</div>
                  <ul className="space-y-1">
                    {edu.coursework.map((c) => (
                      <li key={c} className="flex gap-1.5 font-mono text-[10px] text-[#4a6380]">
                        <span className="text-[#ffb300]/50 flex-shrink-0">▸</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Honors & Awards */}
            <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
              <span className="text-[#a78bfa]">◆</span> Honors & Awards
            </h3>
            <div className="space-y-3 mb-8">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="border border-dashed border-[#1e2d3d] bg-[#111820]/60 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-display text-sm font-semibold text-[#2a3f55] italic leading-snug">
                      {award.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#ffb300]/60 border border-[#ffb300]/20 bg-[#ffb300]/5 px-2 py-0.5 rounded flex-shrink-0">
                      fill in
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-[#2a3f55] mb-2 italic">
                    {award.issuer} · {award.date}
                  </div>
                  <p className="text-[#2a3f55] text-[11px] italic leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
              <span className="text-[#00e5ff]">◆</span> Languages
            </h3>
            <div className="space-y-3">
              {[
                { lang: 'Vietnamese', level: 'Native',       pct: 100 },
                { lang: 'English',    level: 'Professional', pct: 85  },
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
    </section>
  )
}