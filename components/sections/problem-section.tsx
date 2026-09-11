import { ArrowRight, X } from 'lucide-react'

import { SectionHeader } from '@/components/shared/section-header'
import { problemItems } from '@/lib/data/content'

export function ProblemSection() {
  return (
    <section className="problem-section section-pad">
      <div className="container">
        <div className="split-heading">
          <SectionHeader
            eyebrow="The old way of working"
            title="Your pharmacy deserves more than a pile of spreadsheets."
            text="When every task lives in a different notebook or app, the small gaps become expensive problems."
          />
          <div className="problem-list">
            {problemItems.map((item, i) => (
              <div className="problem-item" key={item}>
                <span>0{i + 1}</span>
                {item}
                <X size={16} />
              </div>
            ))}
          </div>
        </div>
        <div className="solution-banner">
          <div>
            <span className="eyebrow accent">One clear system</span>
            <h3>Meet the operating system for your medical store.</h3>
          </div>
          <p>
            MSM brings billing, inventory, purchases, customers, reports, and intelligence together
            — so you can spend less time managing the store and more time growing it.
          </p>
          <a className="button light" href="#features">
            See how it works <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
