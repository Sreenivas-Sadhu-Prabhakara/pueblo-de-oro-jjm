import { NextRequest, NextResponse } from 'next/server';

// Rate limiting: store IP -> request count + timestamp
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Simple rate limiter: max 5 requests per hour per IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit) {
    // First request
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 })
    return true
  }

  if (now > limit.resetTime) {
    // Reset after 1 hour
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 })
    return true
  }

  if (limit.count >= 5) {
    // Exceeded limit
    return false
  }

  // Increment count
  limit.count++
  return true
}

// Simple CSRF token validation (in production, use proper session management)
function validateCSRFToken(token: string | null): boolean {
  // In production, validate against session
  // For now, just check if token exists
  return !!token
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, phone, interestedIn, message, csrfToken } = body

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Invalid name. Must be at least 2 characters.' },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number.' },
        { status: 400 }
      )
    }

    if (!interestedIn || !['townhouse', 'single-attached', 'both'].includes(interestedIn)) {
      return NextResponse.json(
        { error: 'Please select a valid house model.' },
        { status: 400 }
      )
    }

    // CSRF validation
    if (!validateCSRFToken(csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid request.' },
        { status: 403 }
      )
    }

    // TODO: In production, integrate with email service (Mailgun/SendGrid)
    // For now, just log the submission
    console.log('Form submitted:', {
      name,
      email,
      phone,
      interestedIn,
      message,
      timestamp: new Date().toISOString(),
      ip
    })

    // TODO: Send email notification to admin
    // TODO: Store in database for lead tracking

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
