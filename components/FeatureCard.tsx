'use client'

import { LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  buttonAction?: 'whatsapp' | 'link' | 'none'
  className?: string
  backgroundImage?: string
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  buttonText,
  buttonHref,
  buttonAction = 'none',
  className = '',
  backgroundImage
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

    const buttonStyles = backgroundImage
      ? "px-6 py-2 border-2 border-white text-white hover:bg-white/10 hover:border-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
      : "px-6 py-2 border-2 border-cok-orange hover:bg-cok-orange text-cok-orange hover:text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"

    if (buttonAction === 'whatsapp') {
      return (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleWhatsapp}
            className={buttonStyles}
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
            className={buttonStyles}
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
            className={`${buttonStyles} ${backgroundImage ? '' : 'cursor-not-allowed'}`}
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
    <div className={`relative rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group h-full flex flex-col min-h-[300px] ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Overlay negro para mejor legibilidad del texto */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
        </div>
      )}
      
      {/* Content */}
      <div className={`relative z-10 p-10 flex flex-col h-full ${backgroundImage ? 'text-white' : 'bg-white'}`}>
        <div className={`flex items-center justify-center w-16 h-16 mb-6 mx-auto ${backgroundImage ? '' : 'bg-cok-orange/10'}`}>
          <Icon className='text-cok-orange' size={32} />
        </div>
        <h3 className={`font-playfair text-xl font-bold mb-4 text-center tracking-wide ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-base leading-relaxed text-center flex-grow ${backgroundImage ? 'text-white/85' : 'text-gray-600'}`}>
          {description}
        </p>
        {renderButton()}
      </div>
    </div>
  )
}
