'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What financing options are available?',
    answer: 'We offer flexible Pag-IBIG financing with low down payments and competitive interest rates. We also accept bank financing and in-house payment plans.'
  },
  {
    question: 'How long does the construction take?',
    answer: 'Construction typically takes 12-18 months from reservation. You can reserve your unit now and move in upon completion.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees! All costs are transparent including transfer taxes, registration fees, and documentation charges.'
  },
  {
    question: 'What are the reservation requirements?',
    answer: 'Reservation fee starts at ₱20,000 for townhouses and ₱30,000 for single attached homes. Monthly equity payments are required during construction.'
  },
  {
    question: 'Is the area safe and secure?',
    answer: 'Yes! We provide 24/7 security, perimeter fencing, and controlled access to ensure resident safety.'
  },
  {
    question: 'Can I customize my home?',
    answer: 'Limited customization options are available for interior finishes. Contact our sales team for available upgrades.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Get answers to common questions about Pueblo de Oro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-pueblo-600 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-pueblo-600 text-white px-8 py-3 rounded-lg hover:bg-pueblo-700 transition-colors font-semibold">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  )
}
