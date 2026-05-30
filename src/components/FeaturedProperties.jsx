import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { properties } from '../data/mockData'
import PropertyCard from './PropertyCard'

const filters = ['Todos', 'Venta', 'Alquiler']

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered =
    activeFilter === 'Todos'
      ? properties
      : properties.filter((p) => p.type === activeFilter)

  return (
    <section id="propiedades" style={{ background: '#F5F5F5', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          >
            Catálogo exclusivo
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0F2544',
            }}
          >
            Propiedades destacadas
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: '#6B7280' }}>
            Selección curada de las mejores propiedades en Madrid y Barcelona.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeFilter === f ? '#0F2544' : '#fff',
                color: activeFilter === f ? '#fff' : '#0F2544',
                border: '2px solid',
                borderColor: activeFilter === f ? '#0F2544' : '#E0E0E0',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 no-underline"
            style={{
              border: '2px solid #0F2544',
              color: '#0F2544',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0F2544'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#0F2544'
            }}
          >
            Ver todas las propiedades
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
