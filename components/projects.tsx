"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Youtube } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const projects = [
  {
    title: "Therapist Maya",
    description:
      "A mental health platform with localized routing and calming UI components, focused on high user retention. Features fluid animations and SEO optimizations with high Lighthouse scores.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "NCC Cadet Attendance Tracker",
    description:
      "Deployed and currently in real-world use at my college to track cadet attendance daily. Automated the attendance calculation process, reducing manual paperwork and entry errors.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Mahindra Lifespaces",
    description:
      "Successfully executed a pixel-perfect conversion of a complex corporate Figma design into a fully functional and responsive web application.",
    tech: ["Next.js", "TypeScript", "React.js", "Tailwind CSS"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Ark Customizations",
    description:
      "Managed the full deployment lifecycle including custom domain mapping and hosting for a live commercial client at arkcustomizations.in.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://arkcustomizations.in",
    github: "#",
    featured: false,
  },
]

const youtubeChannel = {
  title: "Dinesh Sir Shorts",
  description:
    "A YouTube channel featuring educational short-form content. Built the brand presence and content strategy to engage a growing audience.",
  link: "#",
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="// projects"
          title="Things I've Built"
          description="A collection of projects that showcase my expertise in full-stack development."
        />

        {/* Featured projects */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80 sm:p-8"
              >
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-primary/5 blur-[80px] transition-all group-hover:bg-primary/10" />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-primary">Featured Project</span>
                    <div className="flex items-center gap-3">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
        </div>

        {/* Other projects */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Project</span>
                  <div className="flex items-center gap-3">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}

          {/* YouTube Channel Card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">YouTube Channel</span>
              <Youtube className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {youtubeChannel.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {youtubeChannel.description}
            </p>
            <a
              href={youtubeChannel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
            >
              Watch Videos
              <ExternalLink className="h-3 w-3" />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
