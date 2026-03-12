import './CtaButton.css'
import { Spinner } from '../Spinner/Spinner'

export type CtaButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'borderless'
export type CtaButtonSize = 'large' | 'medium' | 'small'

export type CtaButtonProps = {
  variant?: CtaButtonVariant
  size?: CtaButtonSize
  label?: string
  disabled?: boolean
  loading?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function CtaButton({
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
}: CtaButtonProps) {
  const spinnerSize = size === 'large' ? 24 : size === 'medium' ? 20 : 16

  const classes = [
    'itss-cta-btn',
    `itss-cta-btn--${variant}`,
    `itss-cta-btn--${size}`,
    loading && 'itss-cta-btn--loading',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {/* Content hidden when loading but still rendered to preserve button width */}
      <span className="itss-cta-btn__content">
        {leadingIcon && <span className="itss-cta-btn__icon">{leadingIcon}</span>}
        <span className="itss-cta-btn__label">{label}</span>
        {trailingIcon && <span className="itss-cta-btn__icon">{trailingIcon}</span>}
      </span>
      {loading && (
        <span className="itss-cta-btn__loading">
          <Spinner size={spinnerSize} className="itss-cta-btn__spinner" />
        </span>
      )}
    </button>
  )
}
