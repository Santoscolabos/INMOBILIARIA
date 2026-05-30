import { Phone, Mail, Star } from 'lucide-react'
import { agents } from '../data/mockData'

export default function Agents() {
  return (
    <section id="agentes" style={{ background: '#F5F5F5', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          >
            Nuestro equipo
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0F2544',
            }}
          >
            Agentes especializados
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: '#6B7280' }}>
            Profesionales con años de experiencia en el mercado inmobiliario de lujo español.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white text-center transition-all duration-300"
              style={{ borderRadius: '12px', padding: '2.5rem 2rem', boxShadow: '0 2px 12px rgba(15,37,68,0.08)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,37,68,0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,37,68,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto"
                  style={{ border: '4px solid rgba(201,168,76,0.35)' }}
                />
              </div>

              {/* Info */}
              <h3
                className="font-bold text-xl mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#0F2544' }}
              >
                {agent.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
                {agent.role}
              </p>
              <p className="text-sm mb-1" style={{ color: '#6B7280' }}>
                {agent.speciality}
              </p>

              {/* Deals badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-5 mt-2" style={{ background: 'rgba(201,168,76,0.12)', color: '#a8863a' }}>
                <Star size={11} />
                {agent.deals} operaciones
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid #E0E0E0', marginBottom: '1.25rem' }} />

              {/* Contacts */}
              <div className="flex flex-col gap-2 mb-5">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center justify-center gap-2 text-sm no-underline transition-colors"
                  style={{ color: '#0F2544', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0F2544')}
                >
                  <Phone size={14} />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center justify-center gap-2 text-sm no-underline transition-colors"
                  style={{ color: '#0F2544', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0F2544')}
                >
                  <Mail size={14} />
                  {agent.email}
                </a>
              </div>

              {/* CTA */}
              <button
                className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
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
                Contactar agente
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
