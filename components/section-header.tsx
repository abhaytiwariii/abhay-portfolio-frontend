"use client"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="mb-3 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
        {label.replace("// ", "")}
      </span>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

