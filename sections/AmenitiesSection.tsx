'use client'

const amenities = [
  { icon: '🏊', title: 'Swimming Pool', description: 'Relaxing pool area for residents and their families' },
  { icon: '🏋️', title: 'Fitness Center', description: 'Fully equipped gym for health and wellness' },
  { icon: '🏀', title: 'Sports Facilities', description: 'Basketball court and playground for active lifestyles' },
  { icon: '🌿', title: 'Landscaped Gardens', description: 'Beautiful green spaces and curated walking paths' },
  { icon: '🛡️', title: '24/7 Security', description: 'Round-the-clock security and CCTV for peace of mind' },
  { icon: '🅿️', title: 'Parking Spaces', description: 'Ample dedicated parking for residents and visitors' },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="section bg-slate-50 dark:bg-background-dark">
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">Community Life</span>
          <h2 className="section-title">Community Amenities</h2>
          <p className="section-subtitle">
            Everything you need for a comfortable, active, and connected lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {amenities.map((a) => (
            <div key={a.title} className="card text-center group cursor-default">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 dark:bg-primary-950/40 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-all duration-300">
                <span className="text-3xl leading-none">{a.icon}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{a.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="flex items-center gap-4 p-6 bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-2xl">
          <span className="text-3xl leading-none flex-shrink-0">🏛️</span>
          <p className="text-sm font-semibold text-primary-800 dark:text-primary-300">
            Exclusive clubhouse and function rooms available for special events and celebrations!
          </p>
        </div>
      </div>
    </section>
  )
}
