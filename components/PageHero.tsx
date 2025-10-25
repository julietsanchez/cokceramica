import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  backgroundAlt: string
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt
}: PageHeroProps) {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
