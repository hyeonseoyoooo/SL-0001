import { BookOpen, Handshake, Smile, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'

const hopes = [
  { icon: Smile, title: 'Become friends', korean: '친해지기', className: 'bg-peach' },
  { icon: BookOpen, title: 'Learn together', korean: '함께 배우기', className: 'bg-sky' },
  { icon: Handshake, title: 'Great teamwork', korean: '최고의 팀워크', className: 'bg-mint' },
]

export function NewFriends() {
  return (
    <section id="friends" aria-labelledby="friends-title" className="scroll-mt-24">
      <SectionHeading
        id="friends-title"
        eyebrow="New friends"
        title="So excited to meet new friends!"
        korean="새로운 친구들을 만나서 너무 기대돼요!"
        description="I'm starting a brand-new project with my teammates from India. Let's learn a lot, laugh a lot, and make great memories together!"
      />

      <ul className="grid gap-4 md:grid-cols-3">
        {hopes.map(({ icon: Icon, title, korean, className }) => (
          <li key={title} className={`flex flex-col items-center gap-2 rounded-3xl p-7 text-center ${className}`}>
            <span className="mb-1 flex size-14 items-center justify-center rounded-full bg-card shadow-sm">
              <Icon className="size-6 text-primary" aria-hidden="true" />
            </span>
            <h3 className="text-2xl md:text-3xl">{title}</h3>
            <p className="text-sm font-semibold text-muted-foreground">{korean}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border-2 border-dashed border-primary/40 bg-card px-5 py-2.5 text-center font-bold text-accent-foreground">
        <Sparkles className="size-4 shrink-0 text-primary" aria-hidden="true" />
        Korea + India = the best team!
      </p>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-2 rounded-[2.5rem] bg-blush px-6 py-10 text-center">
        <p className="font-display text-4xl text-balance md:text-5xl">Thank you! Let&apos;s do our best!</p>
        <p className="font-semibold text-primary">감사합니다! 앞으로 잘 부탁드려요!</p>
      </div>
    </section>
  )
}
