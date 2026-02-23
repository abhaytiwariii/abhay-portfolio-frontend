"use client"

import { ArrowDown, Mail, MapPin, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[90vh] items-center justify-center px-6 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>Nagpur, India</span>
          <span className="mx-1 text-border">|</span>
          <span className="text-primary">Open to opportunities</span>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Building seamless
          <br />
          <span className="text-primary">user experiences</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {"I'm "}
          <span className="font-semibold text-foreground">Abhay Tiwari</span>
          {", a Full-Stack Developer building production-ready web applications using "}
          <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">React</span>
          {", "}
          <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">Next.js</span>
          {", and "}
          <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">FastAPI</span>
          {". Currently pursuing my BCA at RTMNU, Nagpur."}
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="mailto:abhaytiwari3415@gmail.com"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/abhaytiwariii", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhay-tiwarii/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:abhaytiwari3415@gmail.com", label: "Email" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
      </div>
    </section>
  )
}

