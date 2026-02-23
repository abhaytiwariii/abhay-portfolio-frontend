"use client"

import { SectionHeader } from "@/components/section-header"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 78 },
      { name: "PostgreSQL", level: 72 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Figma", level: 75 },
      { name: "Browser DevTools", level: 85 },
      { name: "C / C++", level: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="skills"
          title="Technical Proficiency"
          description="Technologies and tools I work with to build production-ready applications."
        />

        <div className="grid gap-10 md:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col"
            >
              <h3 className="mb-6 font-bold text-lg text-foreground uppercase tracking-widest border-b border-border pb-2">
                {cat.title}
              </h3>

              <div className="flex flex-col gap-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 w-full overflow-hidden bg-muted">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

