import './Status.css'

export type StatusVariant = 'pending' | 'canceled' | 'draft' | 'rejected' | 'submitted'

export interface StatusProps {
  status: StatusVariant
  className?: string
}

export function Status({ status, className }: StatusProps) {
  return (
    <span
      className={['itss-status', `itss-status--${status}`, className].filter(Boolean).join(' ')}
      aria-label={status}
      role="img"
    />
  )
}
