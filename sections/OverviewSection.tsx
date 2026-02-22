'use client'


const highlights = [
  {
    icon: '🛡️',
    title: 'Safe & Secure',
    description: '24/7 security personnel, gated community, CCTV surveillance'
  },
  {
    icon: '📍',
    title: 'Prime Location',
    description: 'Close to schools, hospitals, shopping centers, and main highways'
  },
  {
    icon: '👨‍💼',
    title: 'Trusted Developer',
    description: 'Licensed developer with 20+ years of real estate experience'
  },
  {
    icon: '💰',
    title: 'Flexible Payment',
    description: 'Pag-IBIG financing available, flexible payment terms up to 20 years'
  },
  {
    icon: '🏘️',
    title: 'Modern Community',
    description: 'Amenities include clubhouse, swimming pool, playground, and gardens'
  }
]

export function OverviewSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            La Aldea Fernandina II
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A premium residential community designed for families who deserve the best. Safe, accessible, and built with care.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl md:text-5xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Developer Credibility Statement */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-pueblo-50 to-pueblo-100 rounded-2xl border-2 border-pueblo-200">
          <h3 className="text-2xl font-bold text-pueblo-900 mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-pueblo-800">
            <li className="flex items-start">
              <span className="text-pueblo-600 font-bold mr-3">✓</span>
              <span>Licensed Real Estate Developer with proven track record</span>
            </li>
            <li className="flex items-start">
              <span className="text-pueblo-600 font-bold mr-3">✓</span>
              <span>Pre-selling status with flexible pre-selling payment terms</span>
            </li>
            <li className="flex items-start">
              <span className="text-pueblo-600 font-bold mr-3">✓</span>
              <span>Comprehensive after-sales service and warranty</span>
            </li>
            <li className="flex items-start">
              <span className="text-pueblo-600 font-bold mr-3">✓</span>
              <span>Strategic location with easy access to commercial and educational institutions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
