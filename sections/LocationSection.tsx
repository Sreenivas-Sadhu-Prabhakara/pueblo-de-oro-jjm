'use client'

export function LocationSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Prime Location
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Strategically located in La Aldea Fernandina II, Cavite
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Location?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-pueblo-600 font-bold text-xl mr-3">🚗</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Access</h4>
                  <p className="text-gray-600">Just 30 minutes from Manila via major highways</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pueblo-600 font-bold text-xl mr-3">🏥</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Nearby Amenities</h4>
                  <p className="text-gray-600">Hospitals, schools, malls, and commercial centers nearby</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pueblo-600 font-bold text-xl mr-3">🌳</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Peaceful Environment</h4>
                  <p className="text-gray-600">Serene community with green spaces and fresh air</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pueblo-600 font-bold text-xl mr-3">📈</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Growing Area</h4>
                  <p className="text-gray-600">Rapidly developing with increasing property values</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive Map Placeholder</p>
              {/* Replace with actual map embed */}
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-2">La Aldea Fernandina II, Cavite</p>
              <button className="bg-pueblo-600 text-white px-6 py-3 rounded-lg hover:bg-pueblo-700 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
