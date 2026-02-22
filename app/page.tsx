'use client'

import Footer from '@/components/Footer'
import { ContactForm } from '@/sections/ContactFormSection'
import { HeroSection } from '@/sections/HeroSection'
import { HouseModelsSection } from '@/sections/HouseModelsSection'
import { LoanCalculator } from '@/sections/LoanCalculatorSection'
import { OverviewSection } from '@/sections/OverviewSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <OverviewSection />
      <HouseModelsSection />
      <LoanCalculator />
      <ContactForm />
      <Footer />
    </main>
  )
}
