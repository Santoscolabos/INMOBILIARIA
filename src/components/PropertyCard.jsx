import { BedDouble, Bath, Maximize2, MapPin, Eye } from 'lucide-react'

const badgeColors = {
  Destacado: { bg: '#C9A84C', text: '#0F2544' },
  Nuevo:     { bg: '#22c55e', text: '#fff' },
  Exclusivo: { bg: '#7c3aed', text: '#fff' },
  Oportunidad: { bg: '#ef4444', text: '#fff' },
}

export default function PropertyCard({ property }) {
  const { title, type, price, location, image, beds, baths, sqm, badge } = property
  const badgeStyle = badge ? badgeColors[badge] ?? { bg: '#6B7280', text: '#fff' } : null

  return (
    <article
      className="bg-white overflow-hidden group transition-all duration-300"
      style={{
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(15,37,68,0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,37,68,0.18)'
        e.currentTarget.style.transform = 'translateY(-6px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,37,68,0.08)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ display: 'block' }}
        />
        {/* Type badge */}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: '#0F2544', color: '#C9A84C' }}
        >
          {type}
        </span>
        {/* Optional badge */}
        {badge && badgeStyle && (
          <span
            className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: badgeStyle.bg, color: badgeStyle.text }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p
          className="font-bold text-xl mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#C9A84C',
          }}
        >
          {price}
        </p>
        <h3
          className="font-semibold text-base leading-snug mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#0F2544',
          }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: '#6B7280' }}>
          <MapPin size={12} />
          <span>{location}</span>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #E0E0E0', marginBottom: '1rem' }} />

        {/* Features */}
        <div className="flex items-center gap-4 text-xs mb-4" style={{ color: '#6B7280' }}>
          <span className="flex items-center gap-1">
            <BedDouble size={14} />
            {beds} hab.
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} />
            {baths} baños
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 size={14} />
            {sqm} m²
          </span>
        </div>

        {/* Button */}
        <button
          className="w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
          style={{ background: '#0F2544', color: '#fff' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C9A84C'
            e.currentTarget.style.color = '#0F2544'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0F2544'
            e.currentTarget.style.color = '#fff'
          }}
        >
          <Eye size={15} />
          Ver detalles
        </button>
      </div>
    </article>
  )
}
