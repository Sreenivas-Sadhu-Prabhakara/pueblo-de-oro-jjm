'use client'

import Image from 'next/image'

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pueblo-de-oro-exterior-1.jpg"
          alt="Pueblo de Oro community exterior"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* gradient overlay — darker at bottom so text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest
                          bg-primary-500/20 text-primary-300 border border-primary-400/40
                          rounded-full px-3 py-1 mb-6">
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>star</span>
          Premium Residential Community
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05] drop-shadow">
          Your Dream Home<br />
          <span className="text-primary-400">Awaits</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg sm:text-xl text-white/85 mb-3 max-w-2xl mx-auto">
          Premium residential properties with flexible Pag-IBIG financing from{' '}
          <span className="font-bold text-primary-300">₱2.4M</span>
        </p>
        <p className="text-base text-white/65 mb-10 max-w-xl mx-auto">
          La Aldea Fernandina II — a safe, secure, and vibrant community for modern Filipino families
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white
                       font-bold rounded-xl text-base hover:bg-primary-600 transition-colors
                       shadow-lg shadow-primary-500/30 w-full sm:w-auto justify-center"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            Get Started Today
          </button>
          <button
            onClick={() => scrollTo('models')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white
                       font-bold rounded-xl text-base border border-white/30
                       hover:bg-white/20 transition-colors w-full sm:w-auto justify-center"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>play_circle</span>
            View House Models
          </button>
        </div>

        {/* Trust Stats */}
        <div className="inline-grid grid-cols-3 gap-px bg-white/20 rounded-2xl overflow-hidden border border-white/20">
          {[
            { value: '500+', label: 'Units Sold' },
            { value: '99.8%', label: 'Satisfaction' },
            { value: '12+ Yrs', label: 'Track Record' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-black/25 backdrop-blur-sm px-6 py-4 text-center">
              <p className="text-2xl font-black text-primary-400 leading-none mb-1">{value}</p>
              <p className="text-xs text-white/70 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <span className="material-symbols-outlined text-white/60" style={{ fontSize: '32px' }}>expand_more</span>
      </div>
    </section>
  )
}
