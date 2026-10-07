import { SiteHeader } from '@/components/intro/site-header'
import { Hero } from '@/components/intro/hero'
import { AboutMe } from '@/components/intro/about-me'
import { FavoriteThings } from '@/components/intro/favorite-things'
import { NewFriends } from '@/components/intro/new-friends'
import { Icebreaker } from '@/components/intro/icebreaker'
import { SiteFooter } from '@/components/intro/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-5xl flex-col gap-24 px-5 pb-24 md:gap-28">
        <Hero />
        <AboutMe />
        <FavoriteThings />
        <Icebreaker />
        <NewFriends />
      </main>
      <SiteFooter />
    </>
  )
}
