import { Brain, Cake, GraduationCap, MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'

const facts = [
  {
    icon: Cake,
    label: 'Age',
    value: '20 years old',
    korean: '스무 살',
    className: 'bg-peach',
  },
  {
    icon: GraduationCap,
    label: 'School',
    value: 'Freshman',
    korean: '대학교 1학년',
    className: 'bg-sky',
  },
  {
    icon: Brain,
    label: 'MBTI',
    value: 'INTP',
    korean: 'Curious & thoughtful · 호기심 많은 탐구러',
    className: 'bg-lilac',
  },
  {
    icon: MapPin,
    label: 'Home',
    value: 'Seoul, Korea',
    korean: 'Jongam-dong, Seongbuk-gu · 성북구 종암동',
    className: 'bg-mint',
  },
]

export function AboutMe() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24">
      <SectionHeading
        id="about-title"
        eyebrow="About me"
        title="A little bit about me"
        korean="저는 이런 사람이에요"
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(({ icon: Icon, label, value, korean, className }) => (
          <li
            key={label}
            className={`flex flex-col gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1 ${className}`}
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-card shadow-sm">
              <Icon className="size-5 text-primary" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</h3>
              <p className="font-display text-3xl">{value}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{korean}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
