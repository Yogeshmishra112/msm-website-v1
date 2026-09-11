type SectionHeaderProps = {
  eyebrow: string
  title: string
  text: string
  center?: boolean
}

export function SectionHeader({ eyebrow, title, text, center = false }: SectionHeaderProps) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      <span className="eyebrow accent">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
