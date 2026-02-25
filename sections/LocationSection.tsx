'use client'

export function LocationSection() {
  return (
    <section id="location" className="section bg-white">
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">Where We Are</span>
          <h2 className="section-title">Prime Location</h2>
          <p className="section-subtitle">
            Strategically situated in La Aldea Fernandina II, Cavite — accessible yet peaceful
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Points */}
          <div className="space-y-5">
            {[
              { icon: '🚗', title: 'Easy Access',          body: 'Just 30 minutes from Manila via major highways — SLEX and CALAX' },
              { icon: '🏥', title: 'Nearby Amenities',     body: 'Hospitals, schools, malls, and commercial centers all within reach' },
              { icon: '🌳', title: 'Peaceful Environment', body: 'Serene community with green spaces, fresh air, and low traffic' },
              { icon: '📈', title: 'Growing Area',         body: 'Rapidly developing zone with strong and consistent property value growth' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-primary-300 hover:bg-primary-50/40 transition-colors">
                <span className="text-3xl leading-none mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">{title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-card overflow-hidden">
            <div className="aspect-video bg-neutral-100 flex flex-col items-center justify-center text-neutral-400 gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>map</span>
              <p className="text-sm font-medium">Interactive Map Coming Soon</p>
              <p className="text-xs">La Aldea Fernandina II, Cavite</p>
            </div>
            <div className="p-5 flex items-center justify-between border-t border-neutral-200">
              <div>
                <p className="text-sm font-semibold text-neutral-800">La Aldea Fernandina II</p>
                <p className="text-xs text-neutral-500">Cavite, Philippines</p>
              </div>
              <a
                href="https://maps.google.com/?q=La+Aldea+Fernandina+II+Cavite+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-500 text-white
                           text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>directions</span>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
