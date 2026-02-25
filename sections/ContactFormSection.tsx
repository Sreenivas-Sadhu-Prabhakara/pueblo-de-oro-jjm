'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  interestedIn: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  interestedIn?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Interested in validation
    if (!formData.interestedIn) {
      newErrors.interestedIn = 'Please select a house model'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          interestedIn: '',
          message: ''
        })

        // Auto-dismiss success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 text-sm text-neutral-900 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
      hasError
        ? 'border-red-400 focus:ring-red-400/40 focus:border-red-500'
        : 'border-neutral-300 focus:ring-primary-500/40 focus:border-primary-500'
    }`

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="section-heading">
          <span className="section-eyebrow">Let's Talk</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Fill out the form and our team will contact you within 24 hours
          </p>
        </div>

        {/* Alerts */}
        {submitStatus === 'success' && (
          <div className="mb-6 flex gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl">
            <span className="text-green-500 flex-shrink-0">✓</span>
            <div>
              <p className="text-sm font-semibold text-green-900">Message received!</p>
              <p className="text-xs text-green-700 mt-0.5">We'll be in touch shortly.</p>
            </div>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 flex gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <span className="text-red-500 flex-shrink-0">✗</span>
            <div>
              <p className="text-sm font-semibold text-red-900">Something went wrong.</p>
              <p className="text-xs text-red-700 mt-0.5">Please try again or call us directly.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 space-y-5" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
              placeholder="Juan Dela Cruz" className={inputClass(!!errors.name)}
              aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <p id="name-error" className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="juan@example.com" className={inputClass(!!errors.email)}
              aria-required="true" aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}
              placeholder="+63 9XX XXX XXXX" className={inputClass(!!errors.phone)}
              aria-required="true" aria-describedby={errors.phone ? 'phone-error' : undefined} />
            {errors.phone && <p id="phone-error" className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Interested In */}
          <div>
            <label htmlFor="interestedIn" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Interested In <span className="text-red-500">*</span>
            </label>
            <select id="interestedIn" name="interestedIn" value={formData.interestedIn} onChange={handleChange}
              className={`${inputClass(!!errors.interestedIn)} bg-white`}
              aria-required="true" aria-describedby={errors.interestedIn ? 'interestedIn-error' : undefined}>
              <option value="">— Select a house model —</option>
              <option value="townhouse">Townhouse (₱2.4M)</option>
              <option value="single-attached">Single Attached (₱3.6M)</option>
              <option value="both">Interested in Both</option>
            </select>
            {errors.interestedIn && <p id="interestedIn-error" className="text-xs text-red-500 mt-1">{errors.interestedIn}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Message <span className="text-neutral-400 font-normal">(optional)</span>
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}
              placeholder="Tell us more about your needs…" rows={4}
              className={`${inputClass(false)} resize-none`} />
          </div>

          <p className="text-xs text-neutral-400">
            🔒 We respect your privacy and will only use this info to respond to your inquiry.
          </p>

          <button type="submit" disabled={isSubmitting}
            className={`w-full py-3.5 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 ${
              isSubmitting
                ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                : 'bg-primary-500 text-white hover:bg-primary-600 shadow-md shadow-primary-500/20'
            }`}>
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Direct contact */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="tel:+639123456789"
            className="flex items-center gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl hover:border-primary-300 hover:bg-primary-50/40 transition-colors">
            <span className="text-2xl leading-none">📞</span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">Call Us</p>
              <p className="text-xs text-neutral-500">+63 9XX XXX XXXX</p>
            </div>
          </a>
          <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl hover:border-primary-300 hover:bg-primary-50/40 transition-colors">
            <span className="text-2xl leading-none">💬</span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">WhatsApp</p>
              <p className="text-xs text-neutral-500">Chat with us now</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
