import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  title?: string
}

interface GalleryMasonryProps {
  images: GalleryImage[]
  className?: string
}

export default function GalleryMasonry({ images, className = '' }: GalleryMasonryProps) {
  return (
    <div className={`masonry ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="masonry-item">
          <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-center px-4">
                  {image.title}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
