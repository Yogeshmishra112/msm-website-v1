import { BarChart3, Sparkles, Zap } from 'lucide-react'

import { AiChat } from '@/components/dashboard/ai-chat'
import { SectionHeader } from '@/components/shared/section-header'

const benefits = [
  {
    icon: Sparkles,
    title: 'Understand trends',
    text: 'See what changed and why it matters.',
  },
  {
    icon: Zap,
    title: 'Act with confidence',
    text: 'Get recommendations grounded in your data.',
  },
  {
    icon: BarChart3,
    title: 'Make every day better',
    text: 'Build a smarter store, one insight at a time.',
  },
]

export function AssistantSection() {
  return (
    <section id="assistant" className="section-pad assistant-section">
      <div className="container assistant-layout">
        <div>
          <SectionHeader
            eyebrow="Plain-language help"
            title="Ask it like you would ask a person."
            text="No reports to decode. Ask MSM Assistant a simple question and get the list, number, or next step you need."
          />
          <div className="benefit-list">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <span>
                  <Icon size={17} />
                </span>
                <p>
                  <strong>{title}</strong>
                  <br />
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <AiChat />
      </div>
    </section>
  )
}
