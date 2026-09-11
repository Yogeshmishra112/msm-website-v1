'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

import { SectionHeader } from '@/components/shared/section-header'
import { pricingPlans } from '@/lib/data/pricing'

export function PricingSection() {
  return (
    <section id="pricing" className="section-pad pricing-section">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Pricing that grows with you"
          title="Start simple. Scale with confidence."
          text="Try MSM free. Upgrade when your pharmacy is ready for more power."
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className={`price-card ${plan.popular ? 'popular' : ''}`}
              key={plan.name}
            >
              {plan.popular && <span className="popular-tag">Most popular</span>}
              <p className="price-kicker">{plan.name}</p>
              <h3>{plan.description}</h3>
              <div className="price">
                <strong>{plan.price}</strong>
                {plan.price !== 'Custom' && <span>/ month</span>}
              </div>
              <a
                className={`button ${plan.popular ? 'primary' : 'outline'} full`}
                href="#top"
              >
                {plan.price === 'Custom' ? 'Talk to us' : 'Start free'} <ArrowRight size={16} />
              </a>
              <div className="perks">
                {plan.perks.map((perk) => (
                  <span key={perk}>
                    <Check size={15} /> {perk}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
