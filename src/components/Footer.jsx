import { Home, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = ['Inicio', 'Propiedades', 'Servicios', 'Agentes', 'Contacto']
const serviceLinks = ['Compra', 'Alquiler', 'Inversión', 'Valoración gratuita']
const sectionIds = ['inicio', 'propiedades', 'servicios', 'agentes', 'contacto']

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#091a30' }}>
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#inicio"
              className="flex items-center gap-2 mb-4 no-underline"
              style={{ textDecoration: 'none' }}
            >
              <Home size={22} style={{ color: '#C9A84C' }} />
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#C9A84C',
                }}
              >
                Elite Homes
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              La inmobiliaria de referencia en el mercado premium español. Más de 15 años
              conectando personas con su hogar ideal.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 no-underline"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C9A84C'
                    e.currentTarget.style.color = '#0F2544'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#fff'
                  }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: '#C9A84C', letterSpacing: '0.15em' }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.map((label, i) => (
                <li key={label}>
                  <a
                    href={`#${sectionIds[i]}`}
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.60)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: '#C9A84C', letterSpacing: '0.15em' }}
            >
              Servicios
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicios"
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.60)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ color: '#C9A84C', letterSpacing: '0.15em' }}
            >
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: 'Paseo de la Castellana 50, Madrid' },
                { icon: Phone, text: '+34 91 555 00 00' },
                { icon: Mail, text: 'info@elitehomes.es' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Icon size={14} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.25rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>
            © {new Date().getFullYear()} Elite Homes. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Aviso Legal', 'Política de Privacidad', 'Cookies'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs no-underline transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
