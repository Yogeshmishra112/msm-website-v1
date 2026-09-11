'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { SectionHeader } from '@/components/shared/section-header'
import { features } from '@/lib/data/features'

export function FeaturesSection() {
  return (
    <section id="features" className="section-pad features-section">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Everything in one place"
          title="The tools to keep your store moving."
          text="MSM replaces disconnected systems with one calm, capable workspace for your entire pharmacy."
        />
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="feature-card"
              key={title}
            >
              <div className="feature-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="feature-arrow">
                <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
