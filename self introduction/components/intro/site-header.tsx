import { Heart } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#likes', label: 'Likes' },
  { href: '#say-hi', label: 'Questions' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-blush text-primary"
          >
            <Heart className="size-4 fill-current" />
          </span>
          <span className="font-display text-xl">Hyunseo</span>
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-1 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-blush hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#friends"
                className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-85"
              >
                Say hi
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
