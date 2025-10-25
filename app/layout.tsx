import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaWhatsapp from '@/components/CtaWhatsapp'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'COK Cerámica - Taller de Cerámica en Tucumán',
    template: '%s | COK Cerámica'
  },
  description: 'Taller familiar de cerámica en Tucumán. Piezas artesanales, clases de cerámica y servicio de horneada. 9+ años de experiencia.',
  keywords: ['cerámica', 'tucumán', 'taller', 'clases', 'horneada', 'artesanal', 'bizcocho'],
  authors: [{ name: 'COK Cerámica' }],
  creator: 'COK Cerámica',
  publisher: 'COK Cerámica',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cokceramica.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://cokceramica.com',
    siteName: 'COK Cerámica',
    title: 'COK Cerámica - Taller de Cerámica en Tucumán',
    description: 'Taller familiar de cerámica en Tucumán. Piezas artesanales, clases de cerámica y servicio de horneada.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'COK Cerámica - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COK Cerámica - Taller de Cerámica en Tucumán',
    description: 'Taller familiar de cerámica en Tucumán. Piezas artesanales, clases de cerámica y servicio de horneada.',
    images: ['/images/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#15bfbd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CtaWhatsapp />
        
        {/* JSON-LD for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "COK Cerámica",
              "description": "Taller familiar de cerámica en Tucumán. Piezas artesanales, clases de cerámica y servicio de horneada.",
              "url": "https://cokceramica.com",
              "telephone": "+5493814427727",
              "email": "cokceramica@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Don Bosco 1648",
                "addressLocality": "San Miguel de Tucumán",
                "addressRegion": "Tucumán",
                "addressCountry": "AR"
              },
              "openingHours": [
                "Mo-Fr 10:00-13:00",
                "Mo-Fr 16:30-19:00",
                "Sa 10:00-14:00"
              ],
              "sameAs": [
                process.env.NEXT_PUBLIC_INSTAGRAM,
                process.env.NEXT_PUBLIC_FACEBOOK
              ].filter(Boolean)
            })
          }}
        />
      </body>
    </html>
  )
}
