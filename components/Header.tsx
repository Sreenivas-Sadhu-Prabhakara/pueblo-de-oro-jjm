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
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-pueblo-600">Pueblo de Oro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('overview')}
              className="text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('models')}
              className="text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
            >
              Models
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-pueblo-600 text-white px-6 py-2 rounded-lg hover:bg-pueblo-700 transition-colors font-semibold"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('overview')}
                className="text-left text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('models')}
                className="text-left text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
              >
                Models
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-pueblo-600 transition-colors font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-pueblo-600 text-white px-6 py-2 rounded-lg hover:bg-pueblo-700 transition-colors font-semibold w-fit"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
