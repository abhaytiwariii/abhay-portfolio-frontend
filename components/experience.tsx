"use client"

import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Label Lift",
    location: "Remote",
    period: "Oct 2025 - Feb 2026",
    duration: "4 Months",
    link: "#",
    highlights: [
      "Engineered production-ready features across the full stack using Next.js and FastAPI, ensuring high-performance data flow between the UI and PostgreSQL database.",
      "Architected reusable React components and hooks to streamline frontend development and maintain design consistency across the platform.",
      "Optimized RESTful API endpoints for faster response times and improved the reliability of role-based access control (RBAC) logic.",
      "Collaborated with senior engineers to manage database schema migrations and ensure zero-downtime feature deployments.",
      "Consistently met rigorous sprint deadlines, delivering well-documented and tested code in a professional startup environment.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "React", "TypeScript", "Python"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="experience"
          title="Professional Experience"
          description="Building production-grade applications in fast-paced startup environments."
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-background border border-border p-8 md:p-10 transition-shadow hover:shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1.5 text-primary">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </span>
                    {exp.link && exp.link !== "#" && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground self-start md:self-auto">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {exp.highlights.map((item, j) => (
                  <li key={j} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

