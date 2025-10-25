import { Metadata } from 'next'
import Section from '@/components/Section'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import { MessageCircle, Ruler, Palette } from 'lucide-react'
import catalogoContent from '@/content/catalogo.json'

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Conoce nuestras piezas y productos: vajilla artesanal, piezas en bizcocho, insumos y herramientas.',
  openGraph: {
    title: 'Catálogo - COK Cerámica',
    description: 'Conoce nuestras piezas y productos: vajilla artesanal, piezas en bizcocho, insumos y herramientas.',
  },
}

export default function CatalogoPage() {
  const { title, subtitle, categories } = catalogoContent

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Nuestro Catálogo"
        subtitle="Descubre nuestras piezas únicas: vajilla artesanal, cerámica en bizcocho, insumos y herramientas"
        backgroundImage="/images/hero/bizcocho-bowls.jpg"
        backgroundAlt="Bowls de bizcocho cerámico artesanal"
      />

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <Section 
          key={categoryIndex} 
          id={category.id}
          className={categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                {category.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Ruler className="mr-2" size={16} />
                        <span>{item.medidas}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Palette className="mr-2" size={16} />
                        <span>{item.tecnica}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-cok-cyan">
                        {item.precio}
                      </span>
                      <a
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP?.replace(/[^\d]/g, '')}?text=${encodeURIComponent(`Hola! Me interesa ${item.name}. ¿Podrían darme más información?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="mr-2" size={16} />
                        Consultar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section className="bg-cok-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            ¿Te interesa alguna pieza?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Contáctanos por WhatsApp para más información, precios y disponibilidad
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP?.replace(/[^\d]/g, '')}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_TEXT || '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-cok-cyan font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="mr-2" size={20} />
            Escribinos por WhatsApp
          </a>
        </div>
      </Section>
    </>
  )
}
