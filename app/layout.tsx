import type { Metadata, Viewport } from 'next'
import { Rajdhani, Creepster, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

const creepster = Creepster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-creepster',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Once Human – Free Post-Apocalyptic Survival Game | Play on Steam Now',
  description:
    'Survive the contaminated world in Once Human — a free-to-play multiplayer open-world survival game. Explore, loot, craft weapons, build bases, and fight mutated creatures. Play now on Steam for Windows.',
  keywords: [
    'Once Human',
    'survival game',
    'free to play',
    'Steam game',
    'post-apocalyptic',
    'multiplayer',
    'open world',
    'horror game',
    'PC game',
  ],
  openGraph: {
    title: 'Once Human – Free Post-Apocalyptic Survival Game',
    description:
      'Survive the contaminated world. Loot, build, fight — play free on Steam now.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${rajdhani.variable} ${creepster.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
