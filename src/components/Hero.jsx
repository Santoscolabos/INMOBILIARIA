import { useState } from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85'

const priceOptions = {
  Comprar: [
    { value: '', label: 'Precio mínimo' },
    { value: '100000', label: '100.000 €' },
    { value: '250000', label: '250.000 €' },
    { value: '500000', label: '500.000 €' },
    { value: '1000000', label: '1.000.000 €' },
    { value: '2000000', label: '2.000.000 €' },
  ],
  Alquilar: [
    { value: '', label: 'Precio mínimo' },
    { value: '500', label: '500 €/mes' },
    { value: '1000', label: '1.000 €/mes' },
    { value: '2000', label: '2.000 €/mes' },
    { value: '3500', label: '3.500 €/mes' },
    { value: '5000', label: '5.000 €/mes' },
  ],
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Comprar')
  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const section = document.getElementById('propiedades')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(15,37,68,0.70)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Overline */}
        <p
          className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4"
          style={{ letterSpacing: '0.2em' }}
        >
          Inmobiliaria de lujo en España
        </p>

        {/* Headline */}
        <h1
          className="text-white font-bold leading-tight mb-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
            lineHeight: '1.1',
          }}
        >
          Encuentra la propiedad{' '}
          <span style={{ color: '#C9A84C' }}>de tus sueños</span>
        </h1>

        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Más de 500 propiedades exclusivas en las mejores ubicaciones de España.
          Tu hogar ideal te espera.
        </p>

        {/* Search card */}
        <div
          className="rounded-2xl p-5 sm:p-6 text-left"
          style={{
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {/* Tabs */}
          <div className="flex gap-1 mb-5 w-fit rounded-full p-1" style={{ background: 'rgba(0,0,0,0.25)' }}>
            {['Comprar', 'Alquilar'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeTab === tab ? '#C9A84C' : 'transparent',
                  color: activeTab === tab ? '#0F2544' : 'rgba(255,255,255,0.7)',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Inputs row */}
          <form onSubmit={handleSearch}>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Location */}
              <div className="flex-1 relative">
                <MapPin
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                  style={{ color: '#6B7280' }}
                />
                <input
                  type="text"
                  placeholder="Ciudad, barrio o dirección"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl text-sm outline-none"
                  style={{
                    background: '#fff',
                    color: '#0F2544',
                    border: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Price */}
              <div className="relative sm:w-48">
                <select
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full pl-4 pr-8 py-3.5 rounded-xl text-sm outline-none appearance-none"
                  style={{
                    background: '#fff',
                    color: minPrice ? '#0F2544' : '#6B7280',
                    border: 'none',
                    fontFamily: 'inherit',
                  }}
                >
                  {priceOptions[activeTab].map((o) => (
                    <option key={o.value} value={o.value} style={{ color: '#0F2544' }}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: '#6B7280' }}
                />
              </div>

              {/* Search button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap"
                style={{ background: '#C9A84C', color: '#0F2544' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#a8863a')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#C9A84C')}
              >
                <Search size={16} />
                Buscar
              </button>
            </div>
          </form>
        </div>

        {/* Scroll CTA */}
        <a
          href="#propiedades"
          className="inline-flex items-center gap-2 mt-8 text-white/70 hover:text-gold transition-colors text-sm font-medium no-underline"
          style={{ textDecoration: 'none' }}
        >
          Ver propiedades destacadas
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  )
}
