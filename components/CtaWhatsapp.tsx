'use client'

import { MessageCircle } from 'lucide-react'

export default function CtaWhatsapp() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || ''
  const whatsappText = process.env.NEXT_PUBLIC_WHATSAPP_TEXT || ''

  if (!whatsapp) return null

  const handleClick = () => {
    const cleanNumber = whatsapp.replace(/[^\d]/g, '')
    const encodedText = encodeURIComponent(whatsappText)
    const url = `https://wa.me/${cleanNumber}?text=${encodedText}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escribinos por WhatsApp!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  )
}
