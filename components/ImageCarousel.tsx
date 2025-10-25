'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: Array<{
    src: string
    alt: string
    title: string
  }>
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-play infinito en mobile
  useEffect(() => {
    if (isMobile) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // Cambia cada 3 segundos
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isMobile, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch handlers para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) {
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isMobile) {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    if (isMobile && touchStart && touchEnd) {
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > 50
      const isRightSwipe = distance < -50

      if (isLeftSwipe) {
        goToNext()
      } else if (isRightSwipe) {
        goToPrevious()
      }
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Mobile: Carrusel infinito con deslizamiento */}
      {isMobile ? (
        <div 
          className="relative h-96 rounded-lg overflow-hidden shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-transform duration-500"
            sizes="100vw"
            priority
          />
          
          {/* Indicadores de posición en mobile */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: Carrusel original con controles */
        <>
          {/* Main Image Display */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1200px) 80vw, 70vw"
            />
            
            {/* Overlay with title */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-3xl font-playfair font-bold text-center px-4">
                {images[currentIndex].title}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentIndex === index 
                    ? 'ring-2 ring-cok-orange scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Ver ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-cok-orange' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
