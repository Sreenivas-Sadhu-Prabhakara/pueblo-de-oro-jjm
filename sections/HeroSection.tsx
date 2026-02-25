'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pueblo-de-oro-exterior-1.jpg"
          alt="Pueblo de Oro luxury residential community"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center max-w-4xl">
        {/* Badge */}
        <div className="badge mb-6">
          <span className="material-symbols-outlined text-sm">star</span>
          Premium Residential Community
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.05] drop-shadow-lg">
          Your Dream Home <br className="hidden sm:block" />
          <span className="text-primary">Awaits</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Premium residential properties with flexible Pag-IBIG financing from <span className="font-bold text-primary">₱2.4M</span>
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
          La Aldea Fernandina II - A safe, secure, and vibrant community designed for modern living
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary bg-primary text-background-dark hover:brightness-110 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
            Get Started Today
          </button>
          <button className="btn-secondary border-white text-white hover:bg-white/10">
            <span className="material-symbols-outlined text-lg">play_circle</span>
            Watch Tour
          </button>
        </div>

        {/* Trust Signals */}
        <div className="pt-8 border-t border-white/30 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div className="text-white">
              <p className="text-2xl sm:text-3xl font-black text-primary">500+</p>
              <p className="text-xs sm:text-sm text-slate-200">Units Sold</p>
            </div>
            <div className="text-white">
              <p className="text-2xl sm:text-3xl font-black text-primary">99.8%</p>
              <p className="text-xs sm:text-sm text-slate-200">Satisfaction</p>
            </div>
            <div className="text-white">
              <p className="text-2xl sm:text-3xl font-black text-primary">12+</p>
              <p className="text-xs sm:text-sm text-slate-200">Years Track Record</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <span className="material-symbols-outlined text-white text-3xl opacity-70">expand_more</span>
      </div>
    </section>
  )
}
