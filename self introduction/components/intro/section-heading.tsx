type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  korean?: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, korean, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2 text-center">
      <p className="rounded-full bg-blush px-3.5 py-1 text-sm font-bold text-accent-foreground">{eyebrow}</p>
      <h2 id={id} className="text-4xl text-balance md:text-5xl">
        {title}
      </h2>
      {korean ? <p className="text-base font-semibold text-primary md:text-lg">{korean}</p> : null}
      {description ? <p className="max-w-lg text-muted-foreground text-pretty">{description}</p> : null}
    </div>
  )
}
