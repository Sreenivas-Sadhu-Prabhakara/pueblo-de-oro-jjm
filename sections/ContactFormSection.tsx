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

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Fill out the form below and our team will contact you within 24 hours
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg animate-fade-in">
            <p className="text-green-900 font-semibold">✓ Thank you!</p>
            <p className="text-green-800 text-sm mt-1">
              Your message has been received. We'll be in touch soon!
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg animate-fade-in">
            <p className="text-red-900 font-semibold">✗ Error</p>
            <p className="text-red-800 text-sm mt-1">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200" noValidate>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Dela Cruz"
              className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-pueblo-600'
              }`}
              aria-label="Full Name"
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="juan@example.com"
              className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-pueblo-600'
              }`}
              aria-label="Email Address"
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-900 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+63 9XX XXX XXXX"
              className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                errors.phone ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-pueblo-600'
              }`}
              aria-label="Phone Number"
              aria-required="true"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-2">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Interested In Field */}
          <div className="mb-6">
            <label htmlFor="interestedIn" className="block text-lg font-semibold text-gray-900 mb-2">
              Interested In <span className="text-red-500">*</span>
            </label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-white ${
                errors.interestedIn ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-pueblo-600'
              }`}
              aria-label="Interested In"
              aria-required="true"
              aria-describedby={errors.interestedIn ? 'interestedIn-error' : undefined}
            >
              <option value="">-- Select a house model --</option>
              <option value="townhouse">Townhouse (₱2.4M)</option>
              <option value="single-attached">Single Attached (₱3.6M)</option>
              <option value="both">Interested in Both</option>
            </select>
            {errors.interestedIn && (
              <p id="interestedIn-error" className="text-red-600 text-sm mt-2">
                {errors.interestedIn}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your needs..."
              rows={5}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-pueblo-600 focus:outline-none transition-colors duration-200 resize-none"
              aria-label="Message"
            />
          </div>

          {/* Privacy Notice */}
          <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-sm text-blue-900">
              We respect your privacy and will only use this information to contact you about your inquiry.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-4 text-lg font-semibold rounded-lg transition-all duration-200 min-h-[48px] flex items-center justify-center ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed text-gray-100'
                : 'bg-pueblo-600 text-white hover:bg-pueblo-700 active:bg-pueblo-800'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Or reach us directly:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+639123456789"
              className="flex items-center gap-4 p-4 hover:bg-white rounded-lg transition-colors duration-200"
            >
              <span className="text-3xl">📞</span>
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-gray-600">+63 9XX XXX XXXX</p>
              </div>
            </a>
            <a
              href="https://wa.me/639123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 hover:bg-white rounded-lg transition-colors duration-200"
            >
              <span className="text-3xl">💬</span>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-gray-600">Chat with us now</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
