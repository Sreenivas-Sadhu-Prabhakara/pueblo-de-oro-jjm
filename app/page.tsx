'use client'

import { FloatingCTA } from '@/components/FloatingCTA'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { AmenitiesSection } from '@/sections/AmenitiesSection'
import { ContactForm } from '@/sections/ContactFormSection'
import { FAQSection } from '@/sections/FAQSection'
import { HeroSection } from '@/sections/HeroSection'
import { HouseModelsSection } from '@/sections/HouseModelsSection'
import { LoanCalculator } from '@/sections/LoanCalculatorSection'
import { LocationSection } from '@/sections/LocationSection'
import { OverviewSection } from '@/sections/OverviewSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { useEffect, useRef, useState } from 'react'

function useSectionReveal() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    refs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el
  }
}

export default function Home() {
  const [dark, setDark] = useState(false)
  const setRef = useSectionReveal()

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-200 min-h-screen">
      <Header onToggleDark={toggleDark} isDark={dark} />

      <main>
        <HeroSection />

        <div ref={setRef(0)} className="section-animate">
          <OverviewSection />
        </div>
        <div ref={setRef(1)} className="section-animate">
          <HouseModelsSection />
        </div>
        <div ref={setRef(2)} className="section-animate">
          <LocationSection />
        </div>
        <div ref={setRef(3)} className="section-animate">
          <AmenitiesSection />
        </div>
        <div ref={setRef(4)} className="section-animate">
          <TestimonialsSection />
        </div>
        <div ref={setRef(5)} className="section-animate">
          <LoanCalculator />
        </div>
        <div ref={setRef(6)} className="section-animate">
          <FAQSection />
        </div>
        <div ref={setRef(7)} className="section-animate">
          <ContactForm />
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  )
}
