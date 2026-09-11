import { Pill } from 'lucide-react'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#top" className={`logo ${className}`.trim()} aria-label="MSM home">
      <span className="logo-mark">
        <Pill size={20} strokeWidth={2.5} />
      </span>
      <span className="logo-text">
        MSM<span className="text-primary">.</span>
      </span>
    </a>
  )
}
