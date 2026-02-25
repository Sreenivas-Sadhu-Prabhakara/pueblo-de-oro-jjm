'use client'

import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b transition-colors duration-300 bg-white/95 border-slate-200 dark:bg-[rgba(26,46,34,0.95)] dark:border-[rgba(19,236,91,0.12)] backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">home_work</span>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">Pueblo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection('overview')}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('models')}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8"
            >
              Models
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/8 border border-slate-200 dark:border-white/10 hover:border-primary dark:hover:border-primary/60 hover:text-primary dark:hover:text-primary"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg bg-primary text-background-dark shadow-md shadow-primary/20 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">phone</span>
              <span className="hidden sm:inline">Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-1 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/8 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('overview')}
                className="text-left px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8 rounded-lg transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('models')}
                className="text-left px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8 rounded-lg transition-colors"
              >
                Models
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8 rounded-lg transition-colors"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8 rounded-lg transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
