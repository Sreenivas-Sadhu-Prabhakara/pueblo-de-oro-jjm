'use client'

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="overview">
          <OverviewSection />
        </div>
        <div id="models">
          <HouseModelsSection />
        </div>
        <LocationSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <LoanCalculator />
        <FAQSection />
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
