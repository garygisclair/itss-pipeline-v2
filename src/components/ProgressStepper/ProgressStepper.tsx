import React from 'react'
import { ProgressStep } from '../ProgressStep/ProgressStep'
import type { ProgressStepState } from '../ProgressStep/ProgressStep'
import './ProgressStepper.css'

export interface ProgressStepperStep {
  title: string
  subtitle?: string
  state: ProgressStepState
}

export interface ProgressStepperProps {
  steps: ProgressStepperStep[]
  summaryTitle?: string
  vertical?: boolean
  className?: string
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
  steps,
  summaryTitle,
  vertical = false,
  className,
}) => {
  const classes = [
    'itss-progress-stepper',
    vertical && 'itss-progress-stepper--vertical',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {summaryTitle && (
        <span className="itss-progress-stepper__title">{summaryTitle}</span>
      )}
      <div className="itss-progress-stepper__steps">
        {steps.map((step, i) => {
          const layout = i === 0 ? 'start' : i === steps.length - 1 ? 'end' : 'center'
          return (
            <ProgressStep
              key={i}
              state={step.state}
              layout={layout}
              vertical={vertical}
              title={step.title}
              subtitle={step.subtitle}
            />
          )
        })}
      </div>
    </div>
  )
}
