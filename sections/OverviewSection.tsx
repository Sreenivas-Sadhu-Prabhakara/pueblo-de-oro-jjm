'use client'

const highlights = [
  {
    icon: 'verified_user',
    title: 'Safe & Secure',
    description: '24/7 security personnel, gated community, CCTV surveillance'
  },
  {
    icon: 'location_on',
    title: 'Prime Location',
    description: 'Close to schools, hospitals, shopping centers, and main highways'
  },
  {
    icon: 'business',
    title: 'Trusted Developer',
    description: 'Licensed developer with 20+ years of real estate experience'
  },
  {
    icon: 'payment',
    title: 'Flexible Payment',
    description: 'Pag-IBIG financing available, flexible payment terms up to 20 years'
  },
  {
    icon: 'apartments',
    title: 'Modern Community',
    description: 'Amenities include clubhouse, swimming pool, playground, and gardens'
  }
]

export function OverviewSection() {
  return (
    <section className="section bg-surface-light dark:bg-surface-dark border-t border-border dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="badge mb-4 justify-center">
            <span className="material-symbols-outlined text-sm">info</span>
            About This Community
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-text dark:text-white mb-6 leading-tight">
            La Aldea Fernandina II
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary dark:text-slate-300 max-w-2xl mx-auto">
            A premium residential community designed for families who deserve the best. Safe, accessible, and built with care.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="card group hover:border-primary dark:hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-[24px]">{highlight.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-text dark:text-white mb-2">{highlight.title}</h3>
              <p className="text-text-secondary dark:text-slate-400">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Developer Credibility Statement */}
        <div className="p-8 md:p-12 bg-primary/10 dark:bg-primary/5 rounded-2xl border-2 border-primary/30 dark:border-primary/20">
          <h3 className="text-2xl font-bold text-text dark:text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">star</span>
            Why Choose Us?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">✓</span>
              <span className="text-text-secondary dark:text-slate-300">Licensed Real Estate Developer with proven track record</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">✓</span>
              <span className="text-text-secondary dark:text-slate-300">Pre-selling status with flexible pre-selling payment terms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">✓</span>
              <span className="text-text-secondary dark:text-slate-300">Comprehensive after-sales service and warranty</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">✓</span>
              <span className="text-text-secondary dark:text-slate-300">Strategic location with easy access to commercial and educational institutions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
