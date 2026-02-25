'use client'

import { useState } from 'react'

const faqs = [
	{
		question: 'What financing options are available?',
		answer: 'We offer flexible Pag-IBIG financing with low down payments and competitive interest rates. We also accept bank financing and in-house payment plans.',
	},
	{
		question: 'How long does construction take?',
		answer: 'Construction typically takes 12–18 months from reservation. Reserve your unit now and move in upon completion.',
	},
	{
		question: 'Are there any hidden fees?',
		answer:
			'No hidden fees. All costs are transparent — including transfer taxes, registration fees, and documentation charges.',
	},
	{
		question: 'What are the reservation requirements?',
		answer:
			'Reservation fee starts at ₱20,000 for townhouses and ₱30,000 for single attached homes. Monthly equity payments are required during construction.',
	},
	{
		question: 'Is the area safe and secure?',
		answer:
			'Yes! We provide 24/7 security, perimeter fencing, CCTV, and controlled access to ensure resident safety.',
	},
	{
		question: 'Can I customize my home?',
		answer:
			'Limited customization options are available for interior finishes. Contact our sales team for available upgrades and add-ons.',
	},
]

export function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<section id="faq" className="section bg-neutral-50">
			<div className="max-w-3xl mx-auto px-4">
				<div className="section-heading">
					<span className="section-eyebrow">Got Questions?</span>
					<h2 className="section-title">Frequently Asked Questions</h2>
					<p className="section-subtitle">
						Get answers to the most common questions about Pueblo de Oro
					</p>
				</div>

				<div className="space-y-3">
					{faqs.map((faq, i) => (
						<div
							key={i}
							className="bg-white rounded-2xl border border-neutral-200 shadow-card overflow-hidden"
						>
							<button
								onClick={() =>
									setOpenIndex(openIndex === i ? null : i)
								}
								className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
							>
								<span className="text-sm font-semibold text-neutral-900">
									{faq.question}
								</span>
								<span
									className={`flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center transition-transform duration-200 ${
										openIndex === i ? 'rotate-180' : ''
									}`}
								>
									<span
										className="material-symbols-outlined text-primary-600"
										style={{ fontSize: '16px' }}
									>
										expand_more
									</span>
								</span>
							</button>
							{openIndex === i && (
								<div className="px-6 pb-5 border-t border-neutral-100">
									<p className="text-sm text-neutral-600 leading-relaxed pt-4">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>

				<div className="mt-10 text-center">
					<p className="text-sm text-neutral-500 mb-4">
						Still have questions?
					</p>
					<a
						href="#contact"
						onClick={(e) => {
							e.preventDefault()
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}}
						className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold text-sm rounded-xl hover:bg-primary-600 transition-colors"
					>
						<span
							className="material-symbols-outlined"
							style={{ fontSize: '18px' }}
						>
							chat
						</span>
						Contact Our Sales Team
					</a>
				</div>
			</div>
		</section>
	)
}
