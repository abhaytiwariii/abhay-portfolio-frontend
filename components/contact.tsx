"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-muted/30">
      <div className="mx-auto max-w-4xl text-center">
        <div>
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            contact
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {"Let's Work Together"}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {"I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
          </p>

          <a
            href="mailto:abhaytiwari3415@gmail.com"
            className="group inline-flex items-center gap-3 rounded-md bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Send an Email
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="text-sm font-bold text-foreground">
            Abhay Tiwari
          </p>
          <p className="text-sm text-muted-foreground">
            abhaytiwari3415@gmail.com
            <br/>
            &copy; {currentYear} &bull; Nagpur, India
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          {[
            { icon: Github, href: "https://github.com/abhaytiwariii", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/abhay-tiwarii", label: "LinkedIn" },
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

        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  )
}

