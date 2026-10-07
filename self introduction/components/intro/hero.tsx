import Image from 'next/image'
import { ChevronDown, Heart, Sparkles, Star } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center gap-8 py-10 text-center"
    >
      <div className="relative w-full max-w-xl">
        <Sparkles
          aria-hidden="true"
          className="absolute -left-2 -top-4 size-7 animate-wiggle text-primary md:-left-8"
        />
        <Star
          aria-hidden="true"
          className="absolute -right-1 top-6 size-6 animate-float fill-butter text-[oklch(0.75_0.13_85)] md:-right-6"
        />
        <Heart
          aria-hidden="true"
          className="absolute -bottom-3 right-10 size-6 animate-float fill-blush text-primary [animation-delay:1.2s]"
        />
        <div className="overflow-hidden rounded-[2.5rem] border-4 border-card bg-blush shadow-[0_12px_40px_-12px_oklch(0.6_0.17_5/0.35)]">
          <Image
            src="/images/hyunseo-girl.png"
            alt="Cute illustration of Hyunseo, a girl with long dark hair, smiling and waving hello"
            width={1408}
            height={768}
            priority
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-secondary-foreground">
          Namaskara! 나마스카라
        </p>
        <h1 id="hero-title" className="text-5xl leading-tight md:text-7xl">
          Hi, I&apos;m <span className="text-primary">Hyunseo</span>!
        </h1>
        <p className="text-lg font-semibold text-muted-foreground md:text-xl">안녕하세요, 현서예요!</p>
      </div>

      <a
        href="#about"
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-lg font-bold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.6_0.17_5/0.6)] transition-transform hover:-translate-y-0.5"
      >
        See more
        <span className="text-sm font-semibold opacity-80">자세히 보기</span>
        <ChevronDown className="size-5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
      </a>
    </section>
  )
}
