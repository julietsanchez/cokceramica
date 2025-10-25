import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Mail, Phone, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const address = process.env.NEXT_PUBLIC_ADDRESS || ''
  const hours = process.env.NEXT_PUBLIC_HOURS || ''
  const email = process.env.NEXT_PUBLIC_EMAIL || ''
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || ''
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || ''
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK || ''

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="COK Cerámica"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-playfair text-xl font-semibold">
                COK Cerámica
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Taller familiar de cerámica en Tucumán. Piezas artesanales, 
              clases y servicio de horneada con 9+ años de experiencia.
            </p>
          </div>


          {/* Quick links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 text-sm hover:text-cok-cyan transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 text-sm hover:text-cok-cyan transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 text-sm hover:text-cok-cyan transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">¡Seguinos!</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cokceramica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cok-cyan transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/cokceramicatucumanoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cok-cyan transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} COK Cerámica. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desarrollado por <a href="https://www.excalicode.com.ar" target="_blank" rel="noopener noreferrer" className="text-cok-cyan hover:text-cok-cyan/80 transition-colors">www.excalicode.com.ar</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
