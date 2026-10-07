import { Heart } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-blush">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-10 text-center">
        <p className="font-display text-3xl">Nice to meet you! Namaskara!</p>
        <p className="font-semibold text-primary">잘 부탁드려요!</p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Made with <Heart className="size-3.5 fill-primary text-primary" aria-label="love" /> by Hyunseo · Jongam-dong,
          Seoul
        </p>
      </div>
    </footer>
  )
}
