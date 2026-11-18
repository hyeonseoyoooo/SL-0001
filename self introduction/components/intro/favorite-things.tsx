import { CakeSlice, Heart, MessageCircleQuestion, UtensilsCrossed } from 'lucide-react'

const koreanDesserts = [
  { emoji: '🍡', en: 'Fruit Mochi', ko: '과일 모찌' },
  { emoji: '🍪', en: 'Dubai Chewy Cookie', ko: '두바이 쫀득 쿠키' },
]

const indianDesserts = [
  { emoji: '🍮', en: 'Gulab Jamun', ko: '굴랍 자문' },
  { emoji: '🍬', en: 'Jalebi', ko: '잘레비' },
  { emoji: '🍚', en: 'Kheer', ko: '키르' },
  { emoji: '🧁', en: 'Rasgulla', ko: '라스굴라' },
]

export function FavoriteThings() {
  return (
    <section id="likes" aria-labelledby="likes-title" className="scroll-mt-24">
      <div className="relative mx-auto flex max-w-3xl flex-col gap-8 rounded-[2.5rem] bg-butter px-6 py-10 md:px-10">
        <Heart
          aria-hidden="true"
          className="absolute right-6 top-5 size-5 animate-float fill-blush text-primary"
        />
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
          <div className="flex shrink-0 items-center gap-2">
            <span className="flex size-16 animate-wiggle items-center justify-center rounded-3xl bg-card shadow-sm">
              <UtensilsCrossed className="size-7 text-primary" aria-hidden="true" />
            </span>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-blush">
              <CakeSlice className="size-5 text-primary" aria-hidden="true" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">I love</p>
            <h2 id="likes-title" className="text-4xl text-balance md:text-5xl">
              I love eating yummy food!
            </h2>
            <p className="font-semibold text-primary">맛있는 거 먹는 걸 정말 좋아해요!</p>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              A sweet dessert on a little break is my favorite way to recharge.
            </p>
          </div>
        </div>

        {/* Korean desserts */}
        <div className="rounded-3xl bg-blush px-6 py-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            🇰🇷 Korean desserts I love · 제가 좋아하는 한국 디저트
          </p>
          <ul className="flex flex-wrap gap-3">
            {koreanDesserts.map(({ emoji, en, ko }) => (
              <li
                key={en}
                className="flex items-center gap-2 rounded-2xl bg-card px-4 py-2 shadow-sm"
              >
                <span aria-hidden="true">{emoji}</span>
                <span className="font-semibold">{en}</span>
                <span className="text-sm text-muted-foreground">· {ko}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Question bubble + Indian desserts */}
        <div className="relative rounded-3xl bg-card p-6 shadow-sm md:p-7">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-8 size-6 rotate-45 rounded-sm bg-card"
          />
          <div className="relative flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageCircleQuestion className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-3">
              <p className="font-display text-2xl leading-snug text-pretty md:text-3xl">
                Could you recommend any traditional Indian desserts — or any yummy desserts — that I should try?
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                제가 먹어볼 수 있는 인도 전통 디저트나 맛있는 디저트 추천해 주실 수 있나요?
              </p>

              {/* Indian dessert examples */}
              <div className="mt-1 rounded-2xl bg-peach px-4 py-3">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  🇮🇳 Indian desserts I&apos;m curious about · 궁금한 인도 디저트
                </p>
                <ul className="flex flex-wrap gap-2">
                  {indianDesserts.map(({ emoji, en, ko }) => (
                    <li
                      key={en}
                      className="flex items-center gap-1.5 rounded-xl bg-card px-3 py-1.5 text-sm shadow-sm"
                    >
                      <span aria-hidden="true">{emoji}</span>
                      <span className="font-semibold">{en}</span>
                      <span className="text-muted-foreground">· {ko}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
