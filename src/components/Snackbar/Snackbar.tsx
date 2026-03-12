import React from 'react'
import './Snackbar.css'

export interface SnackbarProps {
  description: string
  /** Optional bold prefix label */
  title?: string
  /** Optional underlined action label */
  action?: string
  onAction?: () => void
  className?: string
}

export const Snackbar: React.FC<SnackbarProps> = ({
  description,
  title,
  action,
  onAction,
  className,
}) => {
  return (
    <div
      className={['itss-snackbar', className].filter(Boolean).join(' ')}
    >
      {title && <span className="itss-snackbar__title">{title}</span>}

      <span className="itss-snackbar__description">{description}</span>

      {action && (
        <button
          type="button"
          className="itss-snackbar__action"
          onClick={onAction}
        >
          {action}
        </button>
      )}
    </div>
  )
}
