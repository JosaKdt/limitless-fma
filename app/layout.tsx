import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Syne, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LIMITLESS_FMA | No Limit. Full Structure.',
    template: '%s | LIMITLESS_FMA',
  },
  description:
    'Coaching business pour entrepreneurs francophones. Structurez vos offres, generez des leads, scalez votre business.',
  keywords: [
    'coaching business',
    'entrepreneur',
    'Afrique francophone',
    'scaling',
    'offres',
    'leads',
    'business models',
    
  ],
  openGraph: {
    title: 'LIMITLESS_FMA | No Limit. Full Structure.',
    description:
      'Coaching business pour entrepreneurs francophones. Structurez vos offres, generez des leads, scalez votre business.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
