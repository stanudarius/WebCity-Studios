import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Pasteis de Nata | Patiserie',
  description: 'Pasteis de Nata.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfbf7' },
    { media: '(prefers-color-scheme: dark)', color: '#242229' },
  ],
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${inter.variable} ${fraunces.variable} bg-background min-h-full`}>
      <div className="antialiased font-sans flex flex-col min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </div>
    </div>
  )
}
