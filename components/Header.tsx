'use client'

import { useEffect, useState } from 'react'

interface HeaderProps {
  isDark: boolean
  onToggleDark: () => void
}

export function Header({ isDark, onToggleDark }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section for nav highlight
  useEffect(() => {
    const sectionIds = ['hero', 'overview', 'models', 'location', 'amenities', 'calculator', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = [
    { label: 'Overview',   id: 'overview' },
    { label: 'Models',     id: 'models' },
    { label: 'Location',   id: 'location' },
    { label: 'Amenities',  id: 'amenities' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Contact',    id: 'contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl shadow-md border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            onClick={(e) => { e.preventDefault(); scrollTo('hero') }}
          >
            <div className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-md shadow-primary-500/30 group-hover:shadow-lg group-hover:shadow-primary-500/40 transition-all duration-300">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>home_work</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white leading-tight tracking-tight">
              Pueblo <span className="text-primary-600 dark:text-primary-400">de Oro</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === id
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-500 text-white font-bold text-sm
                         hover:bg-primary-600 transition-all duration-200 shadow-md shadow-primary-500/25
                         hover:shadow-lg hover:shadow-primary-500/30"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
              Get a Quote
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-slate-200 dark:border-slate-800 pt-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    activeSection === id
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 w-full py-3 rounded-xl bg-primary-500 text-white font-bold text-sm hover:bg-primary-600 transition-all shadow-md shadow-primary-500/25"
              >
                Get a Free Quote
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
