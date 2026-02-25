'use client'

const testimonials = [
	{
		id: '1',
		name: 'Maria Santos',
		location: 'Cavite',
		initials: 'MS',
		rating: 5,
		text: 'Pueblo de Oro exceeded our expectations! The quality of construction and community amenities are outstanding. Our new home feels like a dream come true.',
	},
	{
		id: '2',
		name: 'Juan dela Cruz',
		location: 'Manila',
		initials: 'JC',
		rating: 5,
		text: 'The Pag-IBIG financing made homeownership possible for us. The staff was incredibly helpful throughout the whole process. Highly recommend!',
	},
	{
		id: '3',
		name: 'Ana Reyes',
		location: 'Laguna',
		initials: 'AR',
		rating: 5,
		text: 'Beautiful homes with great attention to detail. The location is perfect — close to everything we need. Our whole family absolutely loves it here!',
	},
]

const avatarColors = [
	'bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400',
	'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400',
	'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400',
]

export function TestimonialsSection() {
	return (
		<section id="testimonials" className="section bg-white dark:bg-surface-dark">
			<div className="section-inner">
				<div className="section-heading">
					<span className="section-eyebrow">Social Proof</span>
					<h2 className="section-title">What Our Homeowners Say</h2>
					<p className="section-subtitle">
						Real stories from real families who chose Pueblo de Oro
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((t, i) => (
						<div
							key={t.id}
							className="card flex flex-col gap-4 relative overflow-hidden"
						>
							{/* Decorative quote mark */}
							<div className="absolute top-4 right-4 text-5xl font-serif text-primary-100 dark:text-primary-950/50 leading-none select-none">
								"
							</div>

							{/* Stars */}
							<div className="flex gap-0.5 relative z-10">
								{Array.from({ length: t.rating }).map((_, s) => (
									<svg
										key={s}
										className="w-4 h-4 text-amber-400 fill-current"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>

							{/* Quote */}
							<p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 italic relative z-10">
								&ldquo;{t.text}&rdquo;
							</p>

							{/* Author */}
							<div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${avatarColors[i]}`}
								>
									{t.initials}
								</div>
								<div>
									<p className="text-sm font-bold text-slate-900 dark:text-white">
										{t.name}
									</p>
									<p className="text-xs text-slate-400 dark:text-slate-500">
										{t.location}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
