'use client'

const highlights = [
  { icon: 'verified_user',  title: 'Safe & Secure',      description: '24/7 security personnel, gated community with CCTV surveillance' },
  { icon: 'location_on',    title: 'Prime Location',      description: 'Close to schools, hospitals, shopping centers, and main highways' },
  { icon: 'business',       title: 'Trusted Developer',   description: 'Licensed developer with 20+ years of real estate experience' },
  { icon: 'payment',        title: 'Flexible Payment',    description: 'Pag-IBIG financing with terms up to 20 years and low interest rates' },
  { icon: 'apartment',      title: 'Modern Community',    description: 'Clubhouse, swimming pool, playground, and landscaped gardens' },
  { icon: 'trending_up',    title: 'Appreciating Asset',  description: 'Located in a rapidly developing area with strong property value growth' },
]

const whyUs = [
  'Licensed Real Estate Developer with proven track record',
  'Pre-selling status with flexible equity payment terms',
  'Comprehensive after-sales service and structural warranty',
  'Strategic location with easy access to commercial and schools',
]

export function OverviewSection() {
  return (
    <section id="overview" className="section bg-white">
      <div className="section-inner">
        {/* Heading */}
        <div className="section-heading">
          <span className="section-eyebrow">About This Community</span>
          <h2 className="section-title">La Aldea Fernandina II</h2>
          <p className="section-subtitle">
            A premium residential community designed for families who deserve the best —
            safe, accessible, and built with care.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {highlights.map((h) => (
            <div key={h.title} className="card group">
              <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-4
                              group-hover:bg-primary-200 transition-colors">
                <span className="material-symbols-outlined text-primary-600" style={{ fontSize: '22px' }}>
                  {h.icon}
                </span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-1.5">{h.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-500" style={{ fontSize: '24px' }}>star</span>
            Why Choose Pueblo de Oro?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '13px' }}>check</span>
                </span>
                <span className="text-sm text-neutral-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
