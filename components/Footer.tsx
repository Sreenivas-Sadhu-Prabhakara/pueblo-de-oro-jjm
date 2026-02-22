'use client'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Pueblo de Oro</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium residential properties with flexible Pag-IBIG financing. Your dream home is just a step away.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 3.656.278.28 2.579.07 5.95A25.954 25.954 0 000 12c0 2.688.12 5.35.07 6.948C.28 22.419 2.659 24.722 6.05 24.93 7.331 24.988 7.756 25 12 25c4.244 0 4.669-.012 5.948-.07 3.396-.208 5.768-2.511 5.978-5.982.05-1.598.07-4.26.07-6.948 0-4.244-.012-4.669-.07-5.948C23.722 2.659 21.341.278 17.95.07A25.954 25.954 0 0012 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#models" className="text-gray-400 hover:text-white transition-colors duration-200">
                  House Models
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Properties</h4>
            <ul className="space-y-3">
              <li>
                <a href="#townhouse" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Townhouse (₱2.4M)
                </a>
              </li>
              <li>
                <a href="#single-attached" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Single Attached (₱3.6M)
                </a>
              </li>
              <li>
                <a href="#floor-plans" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Amenities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+639123456789" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-start gap-2">
                  <span className="text-lg mt-1">📞</span>
                  <span>+63 9XX XXX XXXX</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-start gap-2">
                  <span className="text-lg mt-1">💬</span>
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <p className="text-gray-400 flex items-start gap-2">
                  <span className="text-lg mt-1">📍</span>
                  <span>La Aldea Fernandina II<br />Cavite, Philippines</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Pueblo de Oro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
