'use client'

const highlights = [
  { icon: 'verified_user', title: 'Safe & Secure',      desc: '24/7 security, gated community with CCTV surveillance' },
  { icon: 'location_on',   title: 'Prime Location',      desc: 'Near schools, hospitals, shopping centers & highways' },
  { icon: 'business',      title: 'Trusted Developer',   desc: 'Licensed developer with 20+ years of real estate experience' },
  { icon: 'payment',       title: 'Flexible Payment',    desc: 'Pag-IBIG financing up to 20 years at competitive rates' },
  { icon: 'apartment',     title: 'Modern Community',    desc: 'Clubhouse, swimming pool, playground & landscaped gardens' },
  { icon: 'trending_up',   title: 'Appreciating Asset',  desc: 'Rapidly developing area with strong property value growth' },
]

const whyUs = [
  'Licensed Real Estate Developer with proven track record',
  'Pre-selling with flexible equity payment terms',
  'Comprehensive after-sales service & structural warranty',
  'Strategic location with easy access to commercial areas',
]

export function OverviewSection() {
  return (
    <section id="overview" className="section bg-background-light dark:bg-background-dark">
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">About This Community</span>
          <h2 className="section-title">La Aldea Fernandina II</h2>
          <p className="section-subtitle">
            A premium residential community designed for families who deserve the best —
            safe, accessible, and built with care.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {highlights.map((h) => (
            <div key={h.title} className="card group cursor-default">
              <div className="w-11 h-11 rounded-xl bg-primary-100 dark:bg-primary-950/50 flex items-center justify-center mb-4
                              group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 group-hover:scale-105 transition-all duration-300">
                <span className="material-symbols-outlined text-primary-600 dark:text-primary-400" style={{ fontSize: '22px' }}>
                  {h.icon}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{h.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="relative bg-white dark:bg-surface-dark rounded-2xl p-8 sm:p-10 shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-t-2xl" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-500" style={{ fontSize: '22px' }}>star</span>
            Why Choose Pueblo de Oro?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary-500/30">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '13px' }}>check</span>
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
