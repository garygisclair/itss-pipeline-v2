import React from 'react'
import './Popover.css'
import { Icon } from '../Icon/Icon'

export interface PopoverProps {
  /** Body content */
  children: React.ReactNode
  /** Optional title — when provided renders the "with title" layout */
  title?: string
  /** Show the dismiss (×) button. Defaults to true. */
  dismissable?: boolean
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void
  className?: string
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  title,
  dismissable = true,
  onDismiss,
  className,
}) => {
  const closeButton = dismissable ? (
    <button
      type="button"
      className="itss-popover__close"
      onClick={onDismiss}
      aria-label="Dismiss"
    >
      <Icon name="close" size={16} />
    </button>
  ) : null

  return (
    <div className={['itss-popover', className].filter(Boolean).join(' ')}>
      {title ? (
        <>
          <div className="itss-popover__header">
            <span className="itss-popover__title">{title}</span>
            {closeButton}
          </div>
          <div className="itss-popover__content">
            {children}
          </div>
        </>
      ) : (
        <div className="itss-popover__content itss-popover__content--no-title">
          <span className="itss-popover__body">{children}</span>
          {closeButton}
        </div>
      )}
    </div>
  )
}
