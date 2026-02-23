"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="mb-3 inline-block font-mono text-sm text-primary">{label}</span>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
