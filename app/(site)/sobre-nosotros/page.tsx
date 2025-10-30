import { Metadata } from 'next'
import Section from '@/components/Section'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import { CheckCircle, Users, Heart, Award, Flower2, Hammer, ClipboardList, Palette } from 'lucide-react'
import sobreContent from '@/content/sobre.json'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce la historia de COK Cerámica, un taller familiar con 9 años de experiencia en Tucumán.',
  openGraph: {
    title: 'Sobre Nosotros - COK Cerámica',
    description: 'Conoce la historia de COK Cerámica, un taller familiar con 9 años de experiencia en Tucumán.',
  },
}

export default function SobreNosotrosPage() {
  const { title, subtitle, content, team } = sobreContent
  
  // Mapear iconos a cada miembro del equipo
  const teamIcons = [
    Palette, // Carla - Fundadora, profesora y ceramista
    Hammer,  // Carlos - Ceramista y profesor
    ClipboardList // Agustina - Encargada
  ]

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Sobre Nosotros"
        subtitle="Un taller familiar con 9 años de experiencia, dedicado a la cerámica artesanal en Tucumán"
        backgroundImage="/images/hero/teteras-jarras.jpg"
        backgroundAlt="Teteras y jarras de cerámica artesanal"
      />

      {/* Intro Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
                  Nuestra historia
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {content.intro}
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {content.history}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content.mission}
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/hero/cuencos-apilados.jpg"
                  alt="Taller de COK Cerámica"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Nuestro equipo
            </h2>
            <p className="text-lg text-gray-600">
              La familia que hace posible COK Cerámica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const IconComponent = teamIcons[index]
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-cok-cyan/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="text-cok-orange" size={32} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cok-cyan font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Nuestros valores
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que guían nuestro trabajo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <CheckCircle className="text-cok-cyan mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que ofrecemos en nuestro taller
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-cok-cyan rounded-full mr-3"></div>
                  <span className="text-gray-900 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-cok-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Visita nuestro taller o contáctanos para más información
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP?.replace(/[^\d]/g, '')}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_TEXT || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-cok-cyan font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Heart className="mr-2" size={20} />
              Escribinos por WhatsApp
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cok-cyan transition-colors"
            >
              <Award className="mr-2" size={20} />
              Ver contacto
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
