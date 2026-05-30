import { stats } from '../data/mockData'

export default function StatsBar() {
  return (
    <section style={{ background: '#0F2544', padding: '4rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#C9A84C',
                  lineHeight: '1',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs uppercase tracking-widest font-medium"
                style={{ color: 'rgba(255,255,255,0.70)', letterSpacing: '0.15em' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
