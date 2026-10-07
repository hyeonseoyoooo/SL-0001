import { MessageCircleHeart, TrendingUp } from 'lucide-react'
import { SectionHeading } from './section-heading'

export function Icebreaker() {
  return (
    <section id="say-hi" aria-labelledby="icebreaker-title" className="scroll-mt-24">
      <SectionHeading
        id="icebreaker-title"
        eyebrow="Let's talk"
        title="One more question!"
        korean="하나 더 궁금한 게 있어요!"
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-3xl bg-lilac p-7 md:p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-card">
          <TrendingUp className="size-5 text-primary" aria-hidden="true" />
        </span>
        <p className="font-display text-2xl leading-snug text-pretty md:text-3xl">
          {'What’s trending among college students in India these days?'}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          요즘 인도 대학생들 사이에서 유행하는 건 뭐가 있나요?
        </p>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-muted-foreground">
        <MessageCircleHeart className="size-5 shrink-0 text-primary" aria-hidden="true" />
        Tell me anytime in our team chat — I&apos;d love to hear from you!
      </p>
    </section>
  )
}
