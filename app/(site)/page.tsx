import { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeatureCardWrapper from '@/components/FeatureCardWrapper'
import ImageCarousel from '@/components/ImageCarousel'
import Section from '@/components/Section'
import homeContent from '@/content/home.json'

export const metadata: Metadata = {
  title: 'COK Cerámica - Taller de Cerámica en Tucumán',
  description: 'Taller familiar de cerámica en Tucumán. Piezas artesanales, clases de cerámica y servicio de horneada. 9+ años de experiencia.',
  openGraph: {
    title: 'COK Cerámica - Taller de Cerámica en Tucumán',
    description: 'Taller familiar de cerámica en Tucumán. Piezas artesanales, clases de cerámica y servicio de horneada.',
    images: ['/images/hero/cuencos-apilados.jpg'],
  },
}

export default function HomePage() {
  const { hero, features, gallery, trust } = homeContent

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
      />

      {/* Features Section */}
      <Section id="servicios" className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro taller ofrece una experiencia completa en cerámica, desde la producción hasta la enseñanza
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {features.map((feature, index) => {
              let buttonProps = {}
              
              // Configurar botones específicos para cada card
              if (feature.title === 'Producción') {
                buttonProps = {
                  buttonText: 'Nuestro catálogo',
                  buttonAction: 'none' as const
                }
              } else if (feature.title === 'Clases anuales') {
                buttonProps = {
                  buttonText: 'Más info',
                  buttonAction: 'link' as const,
                  buttonHref: '/servicios#clases'
                }
              } else if (feature.title === 'Servicio de horneada') {
                buttonProps = {
                  buttonText: 'Más info',
                  buttonAction: 'link' as const,
                  buttonHref: '/servicios#horneada'
                }
              }
              
              return (
                <div key={index} className="group">
                  <FeatureCardWrapper
                    iconName={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    {...buttonProps}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestro trabajo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada pieza cuenta una historia, cada proceso es único
            </p>
          </div>

          <ImageCarousel images={gallery} />
        </div>
      </Section>

      {/* Trust Section */}
      <Section className="bg-cok-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
            {trust.title}
          </h2>
          <p className="text-lg opacity-90">
            Confianza, experiencia y dedicación en cada proceso
          </p>
        </div>
      </Section>
    </>
  )
}
