import { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const WEBHOOK_URL = 'https://jorgesantosia.app.n8n.cloud/webhook/4b7488f8-1638-475d-b8c5-e82025'

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1rem',
  borderRadius: '8px',
  border: '1.5px solid #E0E0E0',
  fontSize: '0.875rem',
  color: '#0F2544',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

function Input({ label, ...props }) {
  return (
    <div>
      <label
        style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#0F2544', marginBottom: '0.4rem' }}
      >
        {label}
      </label>
      <input
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
        onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        {...props}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          telefono: form.phone,
          mensaje: form.message,
          fecha: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
          origen: 'Elite Homes – Formulario web',
        }),
      })
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: '#C9A84C', letterSpacing: '0.2em' }}
          >
            Estamos aquí para ayudarte
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0F2544',
            }}
          >
            Contáctanos
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: '#6B7280' }}>
            Cuéntanos lo que buscas y nuestros expertos se pondrán en contacto contigo.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 rounded-2xl"
                style={{ background: '#F5F5F5' }}
              >
                <CheckCircle size={52} style={{ color: '#22c55e', marginBottom: '1rem' }} />
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#0F2544' }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: '#6B7280' }}>
                  Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>
            ) : status === 'error' ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 rounded-2xl"
                style={{ background: '#fff5f5' }}
              >
                <AlertCircle size={52} style={{ color: '#ef4444', marginBottom: '1rem' }} />
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#0F2544' }}
                >
                  Error al enviar
                </h3>
                <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>
                  No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold"
                  style={{ background: '#0F2544', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Volver al formulario
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Input
                  label="Nombre completo *"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#0F2544', marginBottom: '0.4rem' }}
                  >
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Cuéntanos qué tipo de propiedad buscas, presupuesto, zona preferida..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '130px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                    onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    background: status === 'submitting' ? '#a8863a' : '#C9A84C',
                    color: '#0F2544',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    border: 'none',
                    fontFamily: 'inherit',
                  }}
                >
                  <Send size={16} />
                  {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Office info card */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{ background: '#F5F5F5' }}
            >
              <h3
                className="font-bold text-lg"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#0F2544' }}
              >
                Nuestra oficina
              </h3>
              {[
                { icon: MapPin, text: 'Paseo de la Castellana 50\n28046 Madrid, España' },
                { icon: Phone, text: '+34 91 555 00 00' },
                { icon: Clock, text: 'Lun – Vie: 9:00 – 18:00\nSáb: 10:00 – 14:00' },
                { icon: Mail, text: 'info@elitehomes.es' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(201,168,76,0.15)' }}
                  >
                    <Icon size={16} style={{ color: '#C9A84C' }} />
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#4B5563' }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ height: '180px', background: '#E0E0E0' }}
            >
              <iframe
                title="Ubicación Elite Homes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9878516428897!2d-3.6920!3d40.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzA1LjgiTiAzwrA0MSczMS4yIlc!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
