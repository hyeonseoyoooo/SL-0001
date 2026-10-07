import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Jua, Noto_Sans_KR, Nunito } from 'next/font/google'
import './globals.css'

const jua = Jua({ subsets: ['latin'], weight: '400', variable: '--font-jua', preload: false })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-kr',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Hi, I’m Hyunseo! | 안녕하세요, 현서예요',
  description:
    'Hi, I’m Hyunseo (유현서) — a 20-year-old college freshman and INTP from Jongam-dong, Seongbuk-gu, Seoul. I love good food and I’m so excited to meet my new teammates from India!',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fdf5f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${jua.variable} ${nunito.variable} ${notoSansKr.variable} bg-background`}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
