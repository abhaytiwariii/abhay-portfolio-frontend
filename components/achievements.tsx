"use client"

import { motion } from "framer-motion"
import { Award, Zap, Shield, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const achievements = [
  {
    icon: Zap,
    title: "Engineering Impact",
    description:
      "Contributed significant value to production-grade applications, completing all assigned technical tasks ahead of schedule with high code quality.",
  },
  {
    icon: Award,
    title: "Hackathon Competitor",
    description:
      "Attended and competed in two major hackathons focusing on Web3 development and integrated AI/ML web solutions.",
  },
  {
    icon: Shield,
    title: "NCC Leadership (CQMS)",
    description:
      "Demonstrated exceptional discipline and time management while managing cadet programs and functions both within and outside the college.",
  },
  {
    icon: Users,
    title: "Event Management",
    description:
      "Responsible for coordinating large-scale student teams for institutional programs, ensuring seamless execution and teamwork.",
  },
]

export function Achievements() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="// achievements"
          title="Beyond Code"
          description="Leadership, competitions, and contributions outside the IDE."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex gap-4 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
