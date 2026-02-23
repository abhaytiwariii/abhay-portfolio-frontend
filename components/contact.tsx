"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block font-mono text-sm text-primary">
            // contact
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {"Let's Work Together"}
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-muted-foreground leading-relaxed">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
          </p>

          <a
            href="mailto:abhaytiwari3415@gmail.com"
            className="group mb-12 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail className="h-4 w-4" />
            abhaytiwari3415@gmail.com
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"Designed & Built by "}
          <span className="text-foreground">Abhay Tiwari</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abhaytiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/abhaytiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:abhaytiwari3415@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
