import { Spinner, SpinnerSize } from '../Spinner/Spinner'
import './IconButton.css'

export type IconButtonStyle = 'primary' | 'secondary' | 'tertiary' | 'borderless'
export type IconButtonSize  = 'large' | 'medium' | 'small'

const SPINNER_SIZE: Record<IconButtonSize, SpinnerSize> = {
  large:  20,
  medium: 16,
  small:  16,
}

interface IconButtonProps {
  /** Icon element to render — consumer provides icon + size, e.g. <Icon name="edit" size={16} /> */
  icon: React.ReactNode
  /** Accessible label required for icon-only buttons */
  'aria-label': string
  style?: IconButtonStyle
  size?: IconButtonSize
  disabled?: boolean
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

export function IconButton({
  icon,
  'aria-label': ariaLabel,
  style = 'borderless',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className,
}: IconButtonProps) {
  const classes = [
    'itss-icon-btn',
    `itss-icon-btn--${style}`,
    `itss-icon-btn--${size}`,
    loading && 'itss-icon-btn--loading',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <span className="itss-icon-btn__icon">{icon}</span>
      {loading && (
        <span className="itss-icon-btn__loading">
          <Spinner size={SPINNER_SIZE[size]} />
        </span>
      )}
    </button>
  )
}
