'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

import { DashboardPreview } from '@/components/dashboard/dashboard-preview'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-grid" />
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-copy"
        >
          <div className="announcement">
            <span className="announcement-dot" /> Built for Pharmacy Stores
          </div>
          <h1>
            <span className="hero-line">Run your medical store</span>
            <span className="hero-line hero-line-accent">smarter with AI.</span>
          </h1>
          <p>
            MSM gives your store one clear place for billing, stock, purchases, and reports. Ask a
            question in plain words and get a useful answer right away.
          </p>
          <div className="hero-actions">
            <a className="button primary large" href="#pricing">
              Start free <ArrowRight size={18} />
            </a>
            <a className="button ghost large" href="#analytics">
              Book a demo <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <span>RK</span>
              <span>AS</span>
              <span>MP</span>
              <span>+</span>
            </div>
            <p>
              Trusted by <strong>200+</strong> pharmacy owners
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="hero-dashboard"
        >
          <div className="dashboard-glow" />
          <DashboardPreview />
          <div className="float-card float-card-one">
            <div className="float-icon green">
              <Check size={15} />
            </div>
            <div>
              <strong>Inventory synced</strong>
              <span>Just now</span>
            </div>
          </div>
          <div className="float-card float-card-two">
            <Sparkles size={15} className="text-primary" />
            <span>AI insight ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
