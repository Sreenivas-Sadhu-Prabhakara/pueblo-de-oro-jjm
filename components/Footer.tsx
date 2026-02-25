"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-slate-900 dark:bg-background-dark border-t border-slate-800 dark:border-slate-800 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to Find Your Dream Home?</h3>
          <p className="text-primary-100 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Schedule a free site visit and let our team help you choose the perfect home for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-700 font-bold text-sm rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-lg"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_today</span>
              Book a Visit
            </button>
            <a
              href="tel:+639123456789"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 text-white font-bold text-sm rounded-xl hover:bg-white/25 transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>phone</span>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-md shadow-primary-500/30">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>home_work</span>
              </div>
              <span className="font-bold text-lg text-white leading-tight tracking-tight">
                Pueblo <span className="text-primary-400">de Oro</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              Premium residential properties with flexible Pag-IBIG financing. Your dream home is just a step away.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.757 0 12c0 3.243.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.757 24 12 24c3.243 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.705.073-4.948 0-3.243-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.243 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'overview' },
                { label: 'House Models', id: 'models' },
                { label: 'Location', id: 'location' },
                { label: 'Calculator', id: 'calculator' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Properties</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo('models')} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  Townhouse (₱2.4M)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('models')} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  Single Attached (₱3.6M)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('amenities')} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+639123456789" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-primary-500/20 flex items-center justify-center transition-colors">
                    <span className="text-base">📞</span>
                  </div>
                  +63 9XX XXX XXXX
                </a>
              </li>
              <li>
                <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-primary-500/20 flex items-center justify-center transition-colors">
                    <span className="text-base">💬</span>
                  </div>
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-base">📍</span>
                  </div>
                  <span className="text-slate-400">La Aldea Fernandina II<br />Cavite, Philippines</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} Pueblo de Oro. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
