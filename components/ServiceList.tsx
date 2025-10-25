import { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
}

interface ServiceListProps {
  services: ServiceItem[]
  className?: string
}

export default function ServiceList({ services, className = '' }: ServiceListProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-cok-cyan/10 rounded-lg mr-4">
                <Icon className="text-cok-cyan" size={24} />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>
            
            {service.features && service.features.length > 0 && (
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-cok-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
