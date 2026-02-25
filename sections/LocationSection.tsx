'use client'

import { IconDirections, IconMap } from '@/components/Icons'

export function LocationSection() {
  return (
    <section id="location" className="section bg-white dark:bg-surface-dark">
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
              <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all duration-300 group">
                <span className="text-3xl leading-none mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-card overflow-hidden">
            <div className="aspect-video bg-slate-100 dark:bg-slate-800/50 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 gap-3">
              <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <IconMap size={32} className="text-slate-400 dark:text-slate-500" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Interactive Map Coming Soon</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">La Aldea Fernandina II, Cavite</p>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">La Aldea Fernandina II</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Cavite, Philippines</p>
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
