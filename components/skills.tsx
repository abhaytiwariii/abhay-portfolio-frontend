"use client"

import { motion } from "framer-motion"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="// skills"
          title="Tech Stack"
          description="Technologies and tools I work with to build production-ready applications."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-6 font-mono text-sm font-medium text-primary">{cat.title}</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-5"
              >
                {cat.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
