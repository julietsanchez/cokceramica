'use client'

import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  buttonAction?: 'whatsapp' | 'link' | 'none'
  className?: string
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  buttonText,
  buttonHref,
  buttonAction = 'none',
  className = '' 
}: FeatureCardProps) {
  const handleWhatsapp = () => {
    if (typeof window !== 'undefined') {
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '+5493814427727'
      const whatsappText = process.env.NEXT_PUBLIC_WHATSAPP_TEXT || 'Hola COK Cerámica, quiero más info 🙌'
      const url = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(whatsappText)}`
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

        const renderButton = () => {
          if (!buttonText) return null

          if (buttonAction === 'whatsapp') {
            return (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleWhatsapp}
                  className="px-6 py-2 border-2 border-cok-orange hover:bg-cok-orange text-cok-orange hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {buttonText}
                </button>
              </div>
            )
          }

          if (buttonAction === 'link' && buttonHref) {
            return (
              <div className="flex justify-center mt-4">
                <a
                  href={buttonHref}
                  className="inline-block px-6 py-2 border-2 border-cok-orange hover:bg-cok-orange text-cok-orange hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {buttonText}
                </a>
              </div>
            )
          }

          if (buttonAction === 'none') {
            return (
              <div className="flex justify-center mt-4">
                <button
                  className="px-6 py-2 border-2 border-cok-orange hover:bg-cok-orange text-cok-orange hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 cursor-not-allowed"
                  disabled
                >
                  {buttonText}
                </button>
              </div>
            )
          }

          return null
        }

  return (
    <div className={`bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group h-full flex flex-col ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-cok-orange/10 rounded-lg mb-6 mx-auto">
        <Icon className="text-cok-orange" size={32} />
      </div>
      <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center flex-grow">
        {description}
      </p>
      {renderButton()}
    </div>
  )
}
