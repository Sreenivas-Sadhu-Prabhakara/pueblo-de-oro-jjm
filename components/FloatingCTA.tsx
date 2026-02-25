'use client'

import { useEffect, useState } from 'react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {expanded && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <a
            href="https://m.me/pueblodeoro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all text-sm font-semibold whitespace-nowrap"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.544 3.695 7.227V22l3.405-1.869c.91.252 1.875.387 2.9.387 5.523 0 10-4.145 10-9.244C22 6.145 17.523 2 12 2zm1.044 12.45l-2.548-2.719-4.97 2.72 5.468-5.805 2.612 2.719 4.905-2.72-5.467 5.806z" />
            </svg>
            Messenger
          </a>
          <a
            href="https://wa.me/639123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all text-sm font-semibold whitespace-nowrap"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+639123456789"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all text-sm font-semibold whitespace-nowrap"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>phone</span>
            Call Now
          </a>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          expanded
            ? 'bg-slate-800 dark:bg-slate-200 rotate-45'
            : 'bg-primary-500 hover:bg-primary-600 shadow-glow hover:scale-105'
        }`}
        aria-label="Contact us"
      >
        <span
          className={`material-symbols-outlined transition-colors ${
            expanded ? 'text-white dark:text-slate-900' : 'text-white'
          }`}
          style={{ fontSize: '26px' }}
        >
          {expanded ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  )
}
