import { Metadata } from 'next'
import Section from '@/components/Section'
import ServiceList from '@/components/ServiceList'
import WhatsAppButton from '@/components/WhatsAppButton'
import PageHero from '@/components/PageHero'
import { 
  Palette, 
  Utensils, 
  ShoppingCart, 
  Users, 
  Clock, 
  Thermometer,
  CheckCircle,
  Info
} from 'lucide-react'
import serviciosContent from '@/content/servicios.json'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Conoce todos nuestros servicios: producción de cerámica, clases, servicio de horneada y venta de insumos.',
  openGraph: {
    title: 'Servicios - COK Cerámica',
    description: 'Conoce todos nuestros servicios: producción de cerámica, clases, servicio de horneada y venta de insumos.',
  },
}

export default function ServiciosPage() {
  const { title, subtitle, sections } = serviciosContent
  
  const horneadaSection = sections.find(s => s.id === 'horneada')
  const clasesSection = sections.find(s => s.id === 'clases')

  const produccionServices = [
    {
      icon: Palette,
      title: "Producción de piezas en bizcocho cerámico",
      description: "Creamos piezas únicas en bizcocho con técnicas tradicionales y acabados personalizados.",
      features: [
        "Piezas únicas y personalizadas",
        "Técnicas tradicionales",
        "Acabados especiales",
        "Control de calidad"
      ]
    },
    {
      icon: Utensils,
      title: "Fabricación de vajilla artesanal en gres",
      description: "Vajilla funcional y estética en gres, ideal para uso diario con un toque artesanal.",
      features: [
        "Gres de alta calidad",
        "Diseños funcionales",
        "Resistente al uso diario",
        "Estética artesanal"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Venta de insumos y herramientas",
      description: "Todo lo necesario para tu práctica cerámica: arcillas, esmaltes, herramientas y más.",
      features: [
        "Arcillas de diferentes tipos",
        "Esmaltes y pigmentos",
        "Herramientas especializadas",
        "Asesoramiento técnico"
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Nuestros Servicios"
        subtitle="Producción, clases, horneada y más. Todo lo que necesitas para tu pasión por la cerámica"
        backgroundImage="/images/hero/teteras-jarras.jpg"
        backgroundAlt="Manos trabajando cerámica en el taller"
      />

      {/* Producción Section */}
      <Section id="produccion" className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Producción y Servicios
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros servicios de producción y venta de insumos
            </p>
          </div>
          
          <ServiceList services={produccionServices} />
        </div>
      </Section>

      {/* Clases Section */}
      <Section id="clases" className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Clases de Cerámica
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">
                    Información del curso
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="text-cok-cyan mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Modalidad</p>
                        <p className="text-gray-600">Libre, presencial y grupal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-cok-cyan mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Duración</p>
                        <p className="text-gray-600">4 clases de 2 horas cada una (1 por semana)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-cok-cyan mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Cupos</p>
                        <p className="text-gray-600">Hasta 8 alumnos por turno</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">
                    Materiales incluidos
                  </h3>
                  
                  <ul className="space-y-2">
                    {clasesSection?.details?.materiales?.map((material, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-cok-cyan mr-3" size={16} />
                        <span className="text-gray-600">{material}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <Info className="text-yellow-600 mr-3 mt-0.5" size={16} />
                      <div>
                        <p className="text-sm text-yellow-800">
                          <strong>Nota:</strong> Horneadas no incluidas (cada pieza requiere 2 cocciones)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-cok-cyan/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Instalaciones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-cok-cyan mr-3" size={16} />
                    <span className="text-gray-600">Aula con box individual</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-cok-cyan mr-3" size={16} />
                    <span className="text-gray-600">Aire acondicionado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-cok-cyan mr-3" size={16} />
                    <span className="text-gray-600">Terraza techada disponible</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-6">
                  <strong>Política de inasistencias:</strong> Avisar con 24h de anticipación, recuperación dentro de 15 días
                </p>
                <WhatsAppButton text="Consultar" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Horneada Section */}
      <Section id="horneada" className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Servicio de Horneada
            </h2>
            <p className="text-lg text-gray-600">
              Servicio completo de horneada para tus piezas cerámicas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {horneadaSection?.tipos?.map((tipo, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <Thermometer className={`mx-auto mb-4 ${index === 0 ? 'text-cok-cyan' : 'text-cok-orange'}`} size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">{tipo.nombre}</h3>
                  <p className="text-sm text-gray-600">{tipo.temperatura}</p>
                  <p className="text-sm text-gray-600">{tipo.descripcion}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">
                Información importante
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requisitos</h4>
                  <ul className="space-y-2">
                    {horneadaSection?.detalles?.requisitos?.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-cok-cyan mr-3 mt-0.5" size={16} />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recomendaciones</h4>
                  <ul className="space-y-2">
                    {horneadaSection?.detalles?.recomendaciones?.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-cok-cyan mr-3 mt-0.5" size={16} />
                        <span className="text-gray-600">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {horneadaSection?.detalles?.informacionImportante && (
                <div className="mt-6">
                  <ul className="space-y-2">
                    {horneadaSection.detalles.informacionImportante.map((info, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Info className="text-cok-orange mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <a
                  href="https://cokceramica.site.agendapro.com/ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-cok-cyan text-white font-semibold rounded-lg hover:bg-cok-cyan/90 transition-colors"
                >
                  Solicitar turno
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-cok-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            ¿Te interesa alguno de nuestros servicios?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Contáctanos para más información o para reservar tu lugar
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP?.replace(/[^\d]/g, '')}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_TEXT || '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-cok-cyan font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </Section>
    </>
  )
}
