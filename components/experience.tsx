"use client"

import { motion } from "framer-motion"
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
    tech: ["Next.js", "FastAPI", "PostgreSQL", "React", "TypeScript"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="// experience"
          title="Where I've Worked"
          description="Building production-grade applications in fast-paced startup environments."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-0 hidden h-full w-px bg-border md:left-6 md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute top-2 left-0 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" style={{ marginLeft: "1.125rem" }} />

              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                      <span className="flex items-center gap-1.5 text-primary">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      {exp.link && exp.link !== "#" && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="mb-6 flex flex-col gap-3">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
