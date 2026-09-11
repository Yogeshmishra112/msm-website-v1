'use client'

import { useEffect, useState } from 'react'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { AnalyticsSection } from '@/components/sections/analytics-section'
import { AssistantSection } from '@/components/sections/assistant-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { FinalCta } from '@/components/sections/final-cta'
import { HeroSection } from '@/components/sections/hero-section'
import { InventorySection } from '@/components/sections/inventory-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { ReportsSection } from '@/components/sections/reports-section'
import { StepsSection } from '@/components/sections/steps-section'

export function HomePage() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <main id="top">
      <Navbar
        dark={dark}
        menuOpen={menuOpen}
        onToggleDark={() => setDark((value) => !value)}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AssistantSection />
      <AnalyticsSection />
      <InventorySection />
      <ReportsSection />
      <StepsSection />
      <PricingSection />
      <FinalCta />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
