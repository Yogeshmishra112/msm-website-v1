import { SectionHeader } from '@/components/shared/section-header'
import { steps } from '@/lib/data/content'

export function StepsSection() {
  return (
    <section className="section-pad steps-section">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Simple from day one"
          title="From setup to smarter decisions."
          text="No complicated rollout. Just a clear path to a better-run pharmacy."
        />
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step" key={step.title}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
