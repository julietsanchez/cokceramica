import { Metadata } from 'next'
import Section from '@/components/Section'
import PageHero from '@/components/PageHero'
import MapEmbed from '@/components/MapEmbed'
import { MapPin, Clock, Mail, Phone } from 'lucide-react'
import contactoContent from '@/content/contacto.json'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con COK Cerámica. Estamos en Don Bosco 1648, San Miguel de Tucumán.',
  openGraph: {
    title: 'Contacto - COK Cerámica',
    description: 'Contacta con COK Cerámica. Estamos en Don Bosco 1648, San Miguel de Tucumán.',
  },
}

export default function ContactoPage() {
  const { title, subtitle, info, cta } = contactoContent

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Contacto"
        subtitle="Estamos aquí para ayudarte"
        backgroundImage="/images/hero/cuencos-apilados.jpg"
        backgroundAlt="Cuencos de cerámica apilados en el taller"
      />

      {/* Contact Info Section */}
      <Section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Información de contacto
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros datos y ubicación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cok-cyan/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="text-cok-cyan" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
              <p className="text-gray-600 text-sm">{info.direccion}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cok-cyan/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="text-cok-cyan" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Horarios</h3>
              <p className="text-gray-600 text-sm">{info.horarios}</p>
              <p className="text-xs text-gray-500 mt-1">{info.nota}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cok-cyan/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-cok-cyan" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href={`mailto:${info.email}`}
                className="text-cok-cyan hover:text-cok-orange transition-colors text-sm"
              >
                {info.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cok-cyan/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-cok-cyan" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <a 
                href={`https://wa.me/${info.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cok-cyan hover:text-cok-orange transition-colors text-sm"
              >
                {info.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Nuestra ubicación
            </h2>
            <p className="text-lg text-gray-600">
              Encontranos en Don Bosco 1648, San Miguel de Tucumán
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d-65.22122!3d-26.8231306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1234567890%3A0x1234567890abcdef!2sDon%20Bosco%201648%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de COK Cerámica - Don Bosco 1648, San Miguel de Tucumán"
              className="w-full rounded-lg shadow-sm"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
