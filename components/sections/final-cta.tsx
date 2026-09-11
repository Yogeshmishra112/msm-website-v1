import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="final-cta section-pad">
      <div className="container final-box">
        <div>
          <span className="eyebrow light-eyebrow">The smarter way forward</span>
          <h2>
            Your pharmacy. Your data.
            <br />
            <span>Your AI assistant.</span>
          </h2>
        </div>
        <div>
          <p>
            Every great pharmacy runs on trust, speed, and good decisions. MSM brings all three
            together.
          </p>
          <a className="button light large" href="#pricing">
            Start using MSM <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
