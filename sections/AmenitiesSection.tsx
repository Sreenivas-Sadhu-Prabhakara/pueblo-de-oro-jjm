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
    <section id="amenities" className="section bg-neutral-50">
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">Community Life</span>
          <h2 className="section-title">Community Amenities</h2>
          <p className="section-subtitle">
            Everything you need for a comfortable, active, and connected lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {amenities.map((a) => (
            <div key={a.title} className="card text-center group">
              <div className="text-4xl mb-4 leading-none">{a.icon}</div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">{a.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="flex items-center gap-4 p-6 bg-primary-50 border border-primary-200 rounded-2xl">
          <span className="text-3xl leading-none flex-shrink-0">🏛️</span>
          <p className="text-sm font-semibold text-primary-800">
            Exclusive clubhouse and function rooms available for special events and celebrations!
          </p>
        </div>
      </div>
    </section>
  )
}
