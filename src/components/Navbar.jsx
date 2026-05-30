import { useState, useEffect } from 'react'
import { Menu, X, Home } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Agentes', href: '#agentes' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 text-gold no-underline"
            onClick={closeMenu}
          >
            <Home size={24} className="text-gold" />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#C9A84C',
                letterSpacing: '-0.02em',
              }}
            >
              Elite Homes
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide no-underline"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA desktop */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 no-underline"
            style={{
              background: '#C9A84C',
              color: '#0F2544',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#a8863a'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C9A84C'
            }}
          >
            Contáctenos
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-navy border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-white/80 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200 text-base font-medium no-underline"
              style={{ textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-2 text-center py-3 px-4 rounded-full text-sm font-semibold no-underline"
            style={{
              background: '#C9A84C',
              color: '#0F2544',
              textDecoration: 'none',
            }}
          >
            Contáctenos
          </a>
        </div>
      </div>
    </nav>
  )
}
