import './DestructiveButton.css'
import { Spinner } from '../Spinner/Spinner'

export type DestructiveButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'borderless'
export type DestructiveButtonSize = 'large' | 'medium' | 'small'

export type DestructiveButtonProps = {
  variant?: DestructiveButtonVariant
  size?: DestructiveButtonSize
  label?: string
  disabled?: boolean
  loading?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function DestructiveButton({
  variant = 'primary',
  size = 'large',
  label = 'Button title',
  disabled,
  loading,
  leadingIcon,
  trailingIcon,
  onClick,
  type = 'button',
  className,
}: DestructiveButtonProps) {
  const spinnerSize = size === 'large' ? 24 : size === 'medium' ? 20 : 16

  const classes = [
    'itss-destructive-btn',
    `itss-destructive-btn--${variant}`,
    `itss-destructive-btn--${size}`,
    loading && 'itss-destructive-btn--loading',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span className="itss-destructive-btn__content">
        {leadingIcon && <span className="itss-destructive-btn__icon">{leadingIcon}</span>}
        <span className="itss-destructive-btn__label">{label}</span>
        {trailingIcon && <span className="itss-destructive-btn__icon">{trailingIcon}</span>}
      </span>
      {loading && (
        <span className="itss-destructive-btn__loading">
          <Spinner size={spinnerSize} className="itss-destructive-btn__spinner" />
        </span>
      )}
    </button>
  )
}
