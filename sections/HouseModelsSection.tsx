'use client'

import { ImageGallery } from '@/components/ImageGallery'
import { useState } from 'react'

interface HouseModel {
  id: string
  name: string
  price: number
  description: string
  sqm: number
  bedrooms: number
  bathrooms: number
  images: string[]
  floorPlan: string
  videoUrl: string
  features: string[]
}

const houseModels: HouseModel[] = [
  {
    id: 'townhouse',
    name: 'Townhouse',
    price: 2400000,
    description: 'Modern 3-story townhouse perfect for growing families',
    sqm: 65,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003d96d4f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003d96d4f?w=800&h=600&fit=crop'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1440404653985-ab127d49abc1?w=800&h=600&fit=crop',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpueblodeoro&show_text=false&width=500',
    features: ['Spacious living area', 'Modern kitchen', 'Full bath on each floor', 'Backyard space', 'Laundry area']
  },
  {
    id: 'single-attached',
    name: 'Single Attached',
    price: 3600000,
    description: 'Spacious single attached home with premium finishes',
    sqm: 85,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003d96d4f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1440404653985-ab127d49abc1?w=800&h=600&fit=crop',
    videoUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpueblodeoro&show_text=false&width=500',
    features: ['Master suite with walk-in closet', 'Island kitchen', 'Living and dining', 'Home office', 'Garage for 2 cars']
  }
]

export function HouseModelsSection() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null)

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            House Models
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Choose the perfect home that fits your lifestyle and budget
          </p>
        </div>

        {/* Model Tabs */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          {houseModels.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 min-h-[44px] ${
                selectedModel === model.id || (selectedModel === null && model.id === 'townhouse')
                  ? 'bg-pueblo-600 text-white shadow-lg'
                  : 'bg-white text-pueblo-600 border-2 border-pueblo-600 hover:bg-pueblo-50'
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Model Details */}
        {houseModels.map((model) => {
          const isSelected = selectedModel === model.id || (selectedModel === null && model.id === 'townhouse')
          if (!isSelected) return null

          return (
            <div key={model.id} className="space-y-12">
              {/* Model Header */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{model.name}</h3>
                    <p className="text-gray-600 text-lg mb-6">{model.description}</p>
                    
                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm font-semibold">Floor Area</p>
                        <p className="text-2xl font-bold text-pueblo-600">{model.sqm}m²</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm font-semibold">Bedrooms</p>
                        <p className="text-2xl font-bold text-pueblo-600">{model.bedrooms}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm font-semibold">Bathrooms</p>
                        <p className="text-2xl font-bold text-pueblo-600">{model.bathrooms}</p>
                      </div>
                      <div className="bg-pueblo-100 p-4 rounded-lg">
                        <p className="text-pueblo-700 text-sm font-semibold">Starting at</p>
                        <p className="text-2xl font-bold text-pueblo-600">₱{(model.price / 1000000).toFixed(1)}M</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {model.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-pueblo-600 font-bold mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-blue-900 font-semibold">💬 Talk to us for great deals on flexible payment terms!</p>
                    </div>
                  </div>

                  {/* Floor Plan */}
                  <div className="flex flex-col">
                    <h4 className="font-bold text-gray-900 mb-4">Floor Plan</h4>
                    <img
                      src={model.floorPlan}
                      alt={`${model.name} floor plan`}
                      className="w-full h-auto rounded-xl shadow-md object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Gallery Section */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h4>
                <ImageGallery images={model.images} alt={`${model.name} photos`} />
              </div>

              {/* Video Section */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Video Tour</h4>
                <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    title={`${model.name} video tour`}
                    src={model.videoUrl}
                    width="100%"
                    height="500"
                    className="border-0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
