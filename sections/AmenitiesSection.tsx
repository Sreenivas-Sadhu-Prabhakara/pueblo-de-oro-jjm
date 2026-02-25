'use client'

interface Amenity {
  icon: string
  title: string
  description: string
}

const amenities: Amenity[] = [
  {
    icon: '🏊',
    title: 'Swimming Pool',
    description: 'Relaxing pool area for residents and their families'
  },
  {
    icon: '🏃',
    title: 'Fitness Center',
    description: 'Fully equipped gym for health and wellness'
  },
  {
    icon: '🎾',
    title: 'Sports Facilities',
    description: 'Basketball court and playground for active lifestyles'
  },
  {
    icon: '🌳',
    title: 'Landscaped Gardens',
    description: 'Beautiful green spaces and walking paths'
  },
  {
    icon: '🛡️',
    title: '24/7 Security',
    description: 'Round-the-clock security for peace of mind'
  },
  {
    icon: '🅿️',
    title: 'Parking Spaces',
    description: 'Ample parking for residents and visitors'
  }
]

export function AmenitiesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Community Amenities
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Enjoy a lifestyle of comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-pueblo-50 border-l-4 border-pueblo-600 p-6 rounded-r-lg">
            <p className="text-pueblo-900 font-semibold text-lg">
              🌟 Exclusive clubhouse and function rooms available for special events!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
