'use client'

import { CTAButtons } from '@/components/CTAButtons'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-pueblo-900 via-pueblo-800 to-pueblo-700 overflow-hidden">
      {/* Background Image/Video Fallback */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/assets/pueblo-de-oro-exterior-1.jpg"
          alt="Pueblo de Oro luxury residential community"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-4xl">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Your Dream Home Awaits
        </h1>

        {/* Subheading - Affordability */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Premium residential properties with flexible Pag-IBIG financing from <span className="font-bold text-gold-300">₱2.4M</span>
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 mb-12 max-w-xl mx-auto">
          La Aldea Fernandina II - A safe, secure, and vibrant community designed for modern living
        </p>

        {/* CTA Buttons */}
        <div className="mb-8">
          <CTAButtons />
        </div>

        {/* Trust Signal */}
        <div className="pt-8 border-t border-white border-opacity-30">
          <p className="text-sm md:text-base text-gray-200">
            ✓ Licensed Developer • ✓ Pre-selling Status • ✓ Flexible Payment Terms
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
