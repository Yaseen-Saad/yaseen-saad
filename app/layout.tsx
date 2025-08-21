import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ClientLoader from '@/components/ClientLoader'

const inter = Inter({ subsets: ['latin'] })
const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'Yasoo - Quantum Dreamer & Universe Decoder',
    template: '%s | Yasoo - Quantum Dreamer'
  },
  description: 'High-schooler by day, philosopher by thought, coder by passion, and physicist by curiosity! Welcome to my corner of the internet.',
  keywords: ['Yaseen Saad-Eldin', 'Physics', 'Computer Science', 'STEM', 'Student Portfolio', 'Philosophy', 'Egypt', 'Universe Decoder'],
  authors: [{ name: 'Yaseen Saad-Eldin Mohamed-Sabry Mohamed-Abdelal' }],
  creator: 'Yaseen Saad-Eldin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yasoo.me',
    title: 'Yasoo - Quantum Dreamer & Universe Decoder',
    description: 'High-schooler by day, philosopher by thought, coder by passion, and physicist by curiosity!',
    siteName: 'Yasoo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yasoo - Quantum Dreamer & Universe Decoder',
    description: 'High-schooler by day, philosopher by thought, coder by passion, and physicist by curiosity!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} ${spaceMono.variable} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Providers>
            <ClientLoader />
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
