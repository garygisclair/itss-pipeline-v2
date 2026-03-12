import { Icon } from '../Icon/Icon'
import './DropdownButton.css'

export type DropdownButtonSize = 'large' | 'small'

export interface DropdownButtonProps {
  size?: DropdownButtonSize
  border?: boolean
  label?: string
  value?: string
  secondaryText?: string
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function DropdownButton({
  size = 'large',
  border = true,
  label = 'Label',
  value,
  secondaryText,
  disabled = false,
  onClick,
  className,
}: DropdownButtonProps) {
  return (
    <button
      type="button"
      className={[
        'itss-dropdown-btn',
        `itss-dropdown-btn--${size}`,
        border ? 'itss-dropdown-btn--bordered' : 'itss-dropdown-btn--borderless',
        disabled && 'itss-dropdown-btn--disabled',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="itss-dropdown-btn__content">
        <span className="itss-dropdown-btn__label">{label}</span>
        {value && (
          <span className="itss-dropdown-btn__value-wrap">
            <span className="itss-dropdown-btn__value">{value}</span>
            {secondaryText && (
              <span className="itss-dropdown-btn__secondary">({secondaryText})</span>
            )}
          </span>
        )}
      </span>
      <span className="itss-dropdown-btn__chevron">
        <Icon name="chevron-down" size={16} />
      </span>
    </button>
  )
}
