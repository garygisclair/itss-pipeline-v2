import './SectionLabel.css'

export interface SectionLabelProps {
  label?: string
  className?: string
}

export function SectionLabel({ label = 'Section Title', className }: SectionLabelProps) {
  return (
    <div className={['itss-section-label', className].filter(Boolean).join(' ')}>
      <span className="itss-section-label__text">{label}</span>
    </div>
  )
}
