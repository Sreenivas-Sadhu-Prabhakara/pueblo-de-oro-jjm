'use client'

import { ImageGallery } from '@/components/ImageGallery'
import Image from 'next/image'
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
    description: 'Modern 3-storey townhouse perfect for growing families',
    sqm: 65,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      '/pueblo-de-oro-living-room.jpg',
      '/pueblo-de-oro-kitchen.jpg',
      '/pueblo-de-oro-bedroom.jpg',
    ],
    floorPlan: '/pueblo-de-oro-facade.jpg',
    videoUrl: '/pueblo-de-oro-video-tour.mp4',
    features: ['Spacious living area', 'Modern kitchen', 'Full bath on each floor', 'Backyard space', 'Laundry area'],
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
      '/pueblo-de-oro-bathroom.jpg',
      '/pueblo-de-oro-garden.jpg',
      '/pueblo-de-oro-exterior-1.jpg',
    ],
    floorPlan: '/pueblo-de-oro-entrance.jpg',
    videoUrl: '/pueblo-de-oro-property-video.mp4',
    features: ['Master suite with walk-in closet', 'Island kitchen', 'Open living & dining', 'Home office', 'Garage for 2 cars'],
  },
]

export function HouseModelsSection() {
  const [selectedId, setSelectedId] = useState('townhouse')
  const model = houseModels.find((m) => m.id === selectedId)!

  return (
    <section id="models" className="section bg-neutral-50">
      <div className="section-inner">
        {/* Heading */}
        <div className="section-heading">
          <span className="section-eyebrow">Our Properties</span>
          <h2 className="section-title">House Models</h2>
          <p className="section-subtitle">
            Choose the perfect home that fits your lifestyle and budget
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {houseModels.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedId(m.id)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                selectedId === m.id
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                  : 'bg-white text-neutral-700 border border-neutral-300 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Model Detail */}
        <div className="space-y-6">
          {/* Info + Floor Plan */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col">
                <h3 className="text-3xl font-black text-neutral-900 mb-1">{model.name}</h3>
                <p className="text-neutral-500 mb-6">{model.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Floor Area', value: `${model.sqm} m²` },
                    { label: 'Bedrooms',   value: `${model.bedrooms} BR` },
                    { label: 'Bathrooms',  value: `${model.bathrooms} Bath` },
                    { label: 'Starting at', value: `₱${(model.price / 1000000).toFixed(1)}M`, highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className={`rounded-xl p-4 ${highlight ? 'bg-primary-50 border border-primary-200' : 'bg-neutral-50 border border-neutral-200'}`}>
                      <p className={`text-xs font-semibold mb-1 ${highlight ? 'text-primary-600' : 'text-neutral-500'}`}>{label}</p>
                      <p className={`text-xl font-black ${highlight ? 'text-primary-600' : 'text-neutral-900'}`}>{value}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                        <span className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-primary-600" style={{ fontSize: '11px' }}>check</span>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto p-4 bg-primary-50 border border-primary-200 rounded-xl">
                  <p className="text-sm text-primary-800 font-medium">
                    💬 Talk to us for great deals on flexible Pag-IBIG payment terms!
                  </p>
                </div>
              </div>

              {/* Floor Plan Image */}
              <div className="relative min-h-[280px] lg:min-h-0 bg-neutral-100">
                <Image
                  src={model.floorPlan}
                  alt={`${model.name} floor plan`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                  Floor Plan
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-8 md:p-10">
            <h4 className="text-lg font-bold text-neutral-900 mb-6">Photo Gallery</h4>
            <ImageGallery images={model.images} alt={`${model.name} photos`} />
          </div>

          {/* Video Tour */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-8 md:p-10">
            <h4 className="text-lg font-bold text-neutral-900 mb-6">Video Tour</h4>
            <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100">
              <video
                src={model.videoUrl}
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
