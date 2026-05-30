import * as Icons from 'lucide-react'
import { services } from '../data/mockData'

export default function Services() {
  return (
    <section id="servicios" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          >
            Lo que nos diferencia
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0F2544',
            }}
          >
            Nuestros servicios
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: '#6B7280' }}>
            Un equipo de profesionales dedicados a hacer de tu operación inmobiliaria
            una experiencia perfecta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = Icons[service.icon]
            return (
              <div
                key={service.title}
                className="p-7 rounded-xl transition-all duration-300 group"
                style={{
                  border: '2px solid #E0E0E0',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A84C'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.25)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E0E0E0'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl mb-5"
                  style={{ background: 'rgba(201,168,76,0.12)' }}
                >
                  {IconComponent && (
                    <IconComponent size={22} style={{ color: '#C9A84C' }} />
                  )}
                </div>

                <h3
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: '#0F2544',
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
