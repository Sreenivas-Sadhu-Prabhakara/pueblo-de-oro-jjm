'use client'

import { IconDirections, IconMap } from '@/components/Icons'

const PhilippinesMap = () => {
  return (
    <svg
      viewBox="0 0 500 700"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="500" height="700" fill="currentColor" className="text-slate-100 dark:text-slate-800/30" />

      {/* Water */}
      <defs>
        <pattern id="waterPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="currentColor" className="text-blue-100 dark:text-blue-900/40" />
          <circle cx="10" cy="10" r="2" fill="currentColor" className="text-blue-200 dark:text-blue-800/30" opacity="0.3" />
        </pattern>
      </defs>

      {/* Simplified Philippines outline */}
      <g className="text-emerald-600 dark:text-emerald-700">
        {/* Luzon */}
        <path
          d="M 180 80 Q 200 75 210 85 L 215 90 Q 220 95 215 110 Q 210 120 200 125 Q 190 130 180 128 Q 175 120 180 80"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-emerald-600 dark:text-emerald-700"
        />

        {/* Visayas */}
        <circle cx="280" cy="280" r="35" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />

        {/* Mindanao */}
        <path
          d="M 260 380 Q 280 375 295 385 Q 300 395 295 420 Q 280 435 260 430 Q 250 420 260 380"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>

      {/* San Fernando, Pampanga pointer */}
      {/* Location: approximately upper-left Luzon */}
      <g>
        {/* Pin marker */}
        <circle cx="195" cy="105" r="8" fill="currentColor" className="text-red-500 drop-shadow-lg" />
        <circle cx="195" cy="105" r="6" fill="white" />
        <circle cx="195" cy="105" r="3" fill="currentColor" className="text-red-500" />

        {/* Label */}
        <rect x="210" y="90" width="120" height="35" rx="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 dark:text-slate-700 drop-shadow-md" />
        <text x="220" y="105" fontSize="11" fontWeight="600" fill="currentColor" className="text-slate-900 dark:text-white">
          San Fernando
        </text>
        <text x="220" y="118" fontSize="9" fill="currentColor" className="text-slate-600 dark:text-slate-400">
          Pampanga
        </text>

        {/* Line from pin to label */}
        <line x1="203" y1="107" x2="210" y2="107" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-600" />
      </g>

      {/* Scale reference */}
      <g className="text-slate-400 dark:text-slate-600">
        <text x="20" y="680" fontSize="10" fill="currentColor">
          Pueblo de Oro
        </text>
        <text x="20" y="695" fontSize="8" fill="currentColor" opacity="0.7">
          La Aldea Fernandina II, Cavite
        </text>
      </g>
    </svg>
  )
}

export function LocationSection() {
  return (
    <section id="location" className="section bg-slate-100 dark:bg-emerald-950/30">
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">Where We Are</span>
          <h2 className="section-title">Prime Location</h2>
          <p className="section-subtitle">
            Strategically situated in La Aldea Fernandina II, Cavite — accessible yet peaceful
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Points */}
          <div className="space-y-4">
            {[
              { icon: '🚗', title: 'Easy Access',          body: 'Just 30 minutes from Manila via major highways — SLEX and CALAX' },
              { icon: '🏥', title: 'Nearby Amenities',     body: 'Hospitals, schools, malls, and commercial centers all within reach' },
              { icon: '🌳', title: 'Peaceful Environment', body: 'Serene community with green spaces, fresh air, and low traffic' },
              { icon: '📈', title: 'Growing Area',         body: 'Rapidly developing zone with strong and consistent property value growth' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-300 dark:border-emerald-800 bg-slate-200 dark:bg-emerald-900/30 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-slate-300 dark:hover:bg-emerald-900/50 transition-all duration-300 group">
                <span className="text-3xl leading-none mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
                  <p className="text-sm text-slate-600 dark:text-emerald-200/80 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl border border-slate-300 dark:border-emerald-800 bg-white dark:bg-emerald-900/20 shadow-card overflow-hidden">
            <div className="aspect-video bg-slate-50 dark:bg-emerald-950/40 flex items-center justify-center text-slate-400 dark:text-emerald-300/60 p-4">
              <PhilippinesMap />
            </div>
            <div className="p-5 flex items-center justify-between border-t border-slate-300 dark:border-emerald-800 bg-white dark:bg-emerald-900/10">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">San Fernando, Pampanga</p>
                <p className="text-xs text-slate-500 dark:text-emerald-300/70">La Aldea Fernandina II, Cavite</p>
              </div>
              <a
                href="https://maps.google.com/?q=La+Aldea+Fernandina+II+Cavite+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary-500 text-white
                           text-sm font-semibold rounded-xl hover:bg-primary-600 transition-all duration-200
                           shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/25"
              >
                <IconDirections size={16} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
