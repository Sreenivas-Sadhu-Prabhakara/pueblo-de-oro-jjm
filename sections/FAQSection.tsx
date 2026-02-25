'use client'

import { useState } from 'react'
import { IconExpandMore, IconChat } from '@/components/Icons'

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
		<section id="faq" className="section bg-slate-50 dark:bg-background-dark">
			<div className="max-w-3xl mx-auto px-4">
				<div className="section-heading">
					<span className="section-eyebrow">Got Questions?</span>
					<h2 className="section-title">Frequently Asked Questions</h2>
					<p className="section-subtitle">
						Get answers to the most common questions about Pueblo de Oro
					</p>
				</div>

				<div className="space-y-3">
					{faqs.map((faq, i) => {
						const isOpen = openIndex === i
						return (
							<div
								key={i}
								className={`bg-white dark:bg-surface-dark rounded-2xl border transition-all duration-300 overflow-hidden ${
									isOpen
										? 'border-primary-300 dark:border-primary-800 shadow-md shadow-primary-500/5'
										: 'border-slate-200 dark:border-slate-800 shadow-card'
								}`}
							>
								<button
									onClick={() => setOpenIndex(isOpen ? null : i)}
									className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
								>
									<span className="text-sm font-semibold text-slate-900 dark:text-white">
										{faq.question}
									</span>								<span
									className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
										isOpen
											? 'bg-primary-500 rotate-180'
											: 'bg-primary-100 dark:bg-primary-950/50'
									}`}
								>
									<IconExpandMore
										size={16}
										className={`transition-colors ${
											isOpen
												? 'text-white'
												: 'text-primary-600 dark:text-primary-400'
										}`}
									/>
								</span>
								</button>
								<div
									className={`overflow-hidden transition-all duration-300 ${
										isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
									}`}
								>
									<div className="px-6 pb-5 border-t border-slate-100 dark:border-slate-800">
										<p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-4">
											{faq.answer}
										</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				<div className="mt-12 text-center">
					<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
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
						className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold text-sm rounded-xl
                       hover:bg-primary-600 transition-all duration-200 shadow-md shadow-primary-500/20
                       hover:shadow-lg hover:shadow-primary-500/25"
					>
						<IconChat size={18} className="text-white" />
						Contact Our Sales Team
					</a>
				</div>
			</div>
		</section>
	)
}
