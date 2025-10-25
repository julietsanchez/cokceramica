interface MapEmbedProps {
  mapsUrl?: string
  className?: string
}

export default function MapEmbed({ mapsUrl, className = '' }: MapEmbedProps) {
  if (!mapsUrl) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-500">
          Mapa no disponible. Contactanos para más información sobre nuestra ubicación.
        </p>
      </div>
    )
  }

  // Extract Google Maps embed URL from the provided URL
  const getEmbedUrl = (url: string) => {
    // If it's already an embed URL, return as is
    if (url.includes('/embed')) {
      return url
    }
    
    // Convert regular Google Maps URL to embed URL
    const placeIdMatch = url.match(/place\/([^\/]+)/)
    if (placeIdMatch) {
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:${placeIdMatch[1]}`
    }
    
    // Fallback: try to extract coordinates or place name
    return url
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-sm ${className}`}>
      <iframe
        src={getEmbedUrl(mapsUrl)}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de COK Cerámica"
        className="w-full h-64 sm:h-80"
      />
    </div>
  )
}
