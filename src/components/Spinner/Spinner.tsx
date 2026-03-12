import './Spinner.css'

export type SpinnerSize = 16 | 20 | 24

export type SpinnerProps = {
  size?: SpinnerSize
  className?: string
}

export function Spinner({ size = 20, className }: SpinnerProps) {
  return (
    <span
      className={['itss-spinner', `itss-spinner--${size}`, className].filter(Boolean).join(' ')}
      role="status"
      aria-label="Loading"
    />
  )
}
