import React from 'react'
import './ProgressStep.css'

export type ProgressStepState = 'incomplete' | 'latest' | 'complete' | 'blocked'
export type ProgressStepLayout = 'start' | 'center' | 'end'

export interface ProgressStepProps {
  state?: ProgressStepState
  layout?: ProgressStepLayout
  vertical?: boolean
  title?: string
  subtitle?: string
  className?: string
}

function IncompleteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#c7c7c7" strokeWidth="2" fill="white" />
    </svg>
  )
}

function CompleteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0968f6" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BlockedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#D50B0B" />
      <path d="M12 7v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1.25" fill="white" />
    </svg>
  )
}

const ICONS: Record<ProgressStepState, React.ReactElement> = {
  incomplete: <IncompleteIcon />,
  latest:     <CompleteIcon />,
  complete:   <CompleteIcon />,
  blocked:    <BlockedIcon />,
}

export const ProgressStep: React.FC<ProgressStepProps> = ({
  state = 'incomplete',
  layout = 'center',
  vertical = false,
  title = 'Step title',
  subtitle,
  className,
}) => {
  // Always render both lines; CSS hides the phantom ones for start/end
  // so the icon stays centered in every step regardless of layout
  const showTrail = true
  const showLead  = true

  const classes = [
    'itss-progress-step',
    `itss-progress-step--${state}`,
    `itss-progress-step--${layout}`,
    vertical && 'itss-progress-step--vertical',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="itss-progress-step__indicator">
        {showTrail && <span className="itss-progress-step__line itss-progress-step__line--trail" />}
        <span className="itss-progress-step__icon">{ICONS[state]}</span>
        {showLead && <span className="itss-progress-step__line itss-progress-step__line--lead" />}
      </div>
      <div className="itss-progress-step__labels">
        <span className="itss-progress-step__title">{title}</span>
        {subtitle && <span className="itss-progress-step__subtitle">{subtitle}</span>}
      </div>
    </div>
  )
}
