import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import './global.css'

const DESCRIPTION =
  'WinterTC is an Ecma International Technical Committee aiming to provide a space for JS runtimes to collaborate on API interoperability.'

export const metadata: Metadata = {
  title: {
    default: 'WinterTC',
    template: '%s | WinterTC',
  },
  description: DESCRIPTION,
  openGraph: {
    title: 'WinterTC',
    description: DESCRIPTION,
    url: 'https://wintertc.org',
    type: 'website',
    images: [{ url: 'https://wintertc.org/static/cover.png' }],
  },
  icons: {
    icon: '/static/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto px-4 py-8 max-w-screen-md">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
