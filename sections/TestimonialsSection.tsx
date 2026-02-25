'use client'

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Santos',
    location: 'Cavite',
    rating: 5,
    text: 'Pueblo de Oro exceeded our expectations! The quality of construction and the community amenities are outstanding. Our new home feels like a dream come true.',
    image: '/assets/pueblo-de-oro-exterior-1.jpg'
  },
  {
    id: '2',
    name: 'Juan dela Cruz',
    location: 'Manila',
    rating: 5,
    text: 'The Pag-IBIG financing made homeownership possible for us. The staff was incredibly helpful throughout the process. Highly recommend!',
    image: '/assets/pueblo-de-oro-living-room.jpg'
  },
  {
    id: '3',
    name: 'Ana Reyes',
    location: 'Laguna',
    rating: 5,
    text: 'Beautiful homes with great attention to detail. The location is perfect - close to everything we need. Our family loves it here!',
    image: '/assets/pueblo-de-oro-garden.jpg'
  }
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Homeowners Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Real stories from real families who chose Pueblo de Oro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
