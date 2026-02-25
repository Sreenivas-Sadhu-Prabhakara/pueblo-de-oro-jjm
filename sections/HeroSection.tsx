'use client'

import { IconPhone, IconPlayCircle } from '@/components/Icons'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative bg-white dark:bg-surface-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row min-h-[90vh]">

          {/* ── Left: content ── */}
          <div className="flex-1 flex flex-col justify-center gap-8 py-16 lg:py-24 lg:pr-16">

            {/* Eyebrow badge */}
            <div
              className={`transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Now Selling
              </span>
            </div>

            {/* Headline */}
            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-[1.08] tracking-tight">
                Your Dream{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary-600 dark:text-primary-400">Home</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary-200/60 dark:bg-primary-800/40 -z-0 rounded" />
                </span>
                <br />
                <span className="text-slate-400 dark:text-slate-500">Awaits in La Aldea</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl leading-relaxed max-w-lg">
                Experience modern living in a safe, secure community.
                Pag-IBIG financing available from{' '}
                <span className="font-bold text-primary-600 dark:text-primary-400">₱2.4M</span>.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-500 text-white font-bold text-sm
                           hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25
                           hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                <IconPhone size={18} className="transition-transform group-hover:scale-110" />
                Get a Free Quote
              </button>
              <button
                onClick={() => scrollTo('models')}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl
                           border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200
                           hover:border-primary-400 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400
                           font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <IconPlayCircle size={18} />
                View Tour
              </button>
            </div>

            {/* Trust bar */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4 transition-all duration-700 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex -space-x-2">
                {['MS', 'JC', 'AR', 'LD'].map((init) => (
                  <div
                    key={init}
                    className="w-9 h-9 rounded-full bg-primary-100 dark:bg-primary-900/60 border-2 border-white dark:border-surface-dark flex items-center justify-center text-xs font-bold text-primary-700 dark:text-primary-400"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-white">500+</span> happy families
                <span className="mx-2 text-slate-300 dark:text-slate-700">|</span>
                <span className="text-amber-500">★★★★★</span>{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-300">4.9/5</span>
              </div>
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="lg:w-[52%] relative min-h-[360px] lg:min-h-0">
            <div className="absolute inset-0 overflow-hidden lg:rounded-bl-[3rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pueblo-de-oro-exterior-1.jpg"
                alt="Pueblo de Oro community exterior"
                className={`w-full h-full object-cover object-center transition-all duration-1000 ${
                  loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-white/80 dark:lg:to-surface-dark/90" />
            </div>

            {/* Floating stats card */}
            <div
              className={`absolute bottom-6 left-6 right-6 lg:left-auto lg:right-8 lg:bottom-8 lg:w-64 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-2xl transition-all duration-700 delay-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { val: '500+',  lbl: 'Homes Sold' },
                  { val: '99%',   lbl: 'Satisfaction' },
                  { val: '12yr',  lbl: 'Track Record' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p className="text-lg font-black text-primary-600 dark:text-primary-400 leading-none">{val}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-500 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
