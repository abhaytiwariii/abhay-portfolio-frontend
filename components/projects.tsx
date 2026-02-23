"use client"

import { ExternalLink, Github, Youtube } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const projects = [
  {
    title: "Therapist Maya",
    description:
      "A mental health platform with localized routing and calming UI components, focused on high user retention. Features fluid animations and SEO optimizations with high Lighthouse scores.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Framer Motion"],
    link: "https://therapist-maya.vercel.app/",
    github: "https://github.com/abhaytiwariii/Therapist-Maya",
    featured: true,
  },
  {
    title: "NCC Cadet Attendance Tracker",
    description:
      "Deployed and currently in real-world use at my college to track cadet attendance daily. Automated the attendance calculation process, reducing manual paperwork and entry errors.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    link: "https://vmv-ncc-attendance-tracker.netlify.app/",
    github: "https://github.com/abhaytiwariii/ncc-attendance-tracker",
    featured: true,
  },
  {
    title: "Mahindra Lifespaces",
    description:
      "Successfully executed a pixel-perfect conversion of a complex corporate Figma design into a fully functional and responsive web application.",
    tech: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "Figma"],
    link: "https://mahindra-lifespaces.netlify.app/",
    github: "https://github.com/abhaytiwariii/mahindra-lifespaces",
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
  link: "https://www.youtube.com/@dineshsirshorts",
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="projects"
          title="Featured Projects"
          description="A collection of projects that showcase my expertise in full-stack development."
        />

        {/* Featured projects */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between border border-border bg-background p-8 transition-all hover:shadow-lg"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      Featured Project
                    </span>
                    <div className="flex items-center gap-4">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <Github className="h-5 w-5" />
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
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-8 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
        </div>

        {/* Other projects & Channel */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <article
                key={project.title}
                className="flex flex-col justify-between border border-border bg-background p-6 transition-all hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Project
                    </span>
                    <div className="flex items-center gap-4">
                      {project.github && project.github !== "#" && (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`${project.title} GitHub repository`}
                        >
                            <Github className="h-5 w-5" />
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

                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] font-medium rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}

          {/* YouTube Channel Card */}
          <article className="flex flex-col justify-between border border-border bg-background p-6 transition-all hover:shadow-md">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Content Creation
                </span>
                <Youtube className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {youtubeChannel.title}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                {youtubeChannel.description}
              </p>
            </div>
            <a
              href={youtubeChannel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all cursor-pointer"
            >
              Watch Videos
              <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

