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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>home_work</span>
            </div>
            <span className="font-black text-lg tracking-tight text-neutral-900">Pueblo <span className="text-primary-500">de Oro</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Overview',  id: 'overview' },
              { label: 'Models',    id: 'models' },
              { label: 'Location',  id: 'location' },
              { label: 'Contact',   id: 'contact' },
            ].map(({ label, id }) => (
              <button key={id} onClick={() => scrollToSection(id)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200">
                {label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl
                         bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>phone</span>
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-1 p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu">
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-neutral-200">
            <nav className="flex flex-col gap-1">
              {[
                { label: 'Overview', id: 'overview' },
                { label: 'Models',   id: 'models' },
                { label: 'Location', id: 'location' },
                { label: 'Contact',  id: 'contact' },
              ].map(({ label, id }) => (
                <button key={id} onClick={() => scrollToSection(id)}
                  className="text-left px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
