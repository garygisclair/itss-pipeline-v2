import React from 'react'
import './Toast.css'
import { Icon } from '../Icon/Icon'

export type ToastVariant = 'success' | 'warning' | 'error' | 'update'

export interface ToastProps {
  variant: ToastVariant
  title: string
  content: string
  /** Optional underlined action label */
  action?: string
  onAction?: () => void
  /** Show dismiss (×) button */
  dismissable?: boolean
  onDismiss?: () => void
  className?: string
}

function SuccessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#288034" />
      <path d="M6.5 12.5l3.5 3.5 7-7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L22.5 21H1.5L12 2z" fill="#FFA800" />
      <path d="M12 9v5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1.25" fill="white" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#D50B0B" />
      <path d="M12 7v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1.25" fill="white" />
    </svg>
  )
}

const ICONS: Partial<Record<ToastVariant, React.ReactElement>> = {
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error:   <ErrorIcon />,
}

export const Toast: React.FC<ToastProps> = ({
  variant,
  title,
  content,
  action,
  onAction,
  dismissable = false,
  onDismiss,
  className,
}) => {
  const icon = ICONS[variant]

  return (
    <div
      className={[
        'itss-toast',
        `itss-toast--${variant}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {icon && <span className="itss-toast__icon">{icon}</span>}

      <div className="itss-toast__body">
        <div className="itss-toast__text">
          <span className="itss-toast__title">{title}</span>
          <span className="itss-toast__content">{content}</span>
        </div>

        {action && (
          <button type="button" className="itss-toast__action" onClick={onAction}>
            {action}
          </button>
        )}
      </div>

      {dismissable && (
        <button
          type="button"
          className="itss-toast__close"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  )
}
