import { Metadata } from 'next'
import Section from '@/components/Section'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Próximamente',
  description: 'Estamos trabajando en nuevas funcionalidades. Vuelve pronto.',
  openGraph: {
    title: 'Próximamente - COK Cerámica',
    description: 'Estamos trabajando en nuevas funcionalidades. Vuelve pronto.',
  },
}

export default function ProximamentePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Próximamente"
        subtitle="Estamos trabajando en algo especial para ti"
        backgroundImage="/images/hero/cuencos-apilados.jpg"
        backgroundAlt="Cerámica artesanal"
      />

      {/* Content Section */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-cok-cyan/10 rounded-full">
                  <svg className="w-12 h-12 text-cok-cyan animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                  Estamos preparando algo increíble
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Trabajamos incansablemente para traerte el mejor contenido y servicios. 
                  Vuelve pronto para descubrir todas las novedades.
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-cok-cyan text-white font-semibold rounded-lg hover:bg-cok-cyan/90 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

