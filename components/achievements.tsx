"use client"

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
          label="achievements"
          title="Beyond Code"
          description="Leadership, competitions, and contributions outside the IDE."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex gap-6 border-l-2 border-border bg-background p-6 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-muted text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

