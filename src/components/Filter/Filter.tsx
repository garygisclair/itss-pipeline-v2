import { Icon } from '../Icon/Icon'
import './Filter.css'

export type FilterType = 'single-select' | 'multi-select' | 'button'
export type FilterSize = 'small' | 'medium'

export interface FilterProps {
  type?: FilterType
  size?: FilterSize
  label?: string
  applied?: boolean
  count?: number
  open?: boolean
  pressed?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function Filter({
  type = 'single-select',
  size = 'small',
  label = 'Filter',
  applied = false,
  count,
  open = false,
  pressed = false,
  disabled = false,
  onClick,
  className,
}: FilterProps) {
  const showCount = applied && count !== undefined && (type === 'multi-select' || type === 'button')

  return (
    <button
      type="button"
      className={[
        'itss-filter',
        `itss-filter--${type}`,
        `itss-filter--${size}`,
        applied ? 'itss-filter--applied' : 'itss-filter--not-applied',
        pressed && 'itss-filter--pressed',
        disabled && 'itss-filter--disabled',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {type === 'button' && (
        <span className="itss-filter__icon">
          <Icon name="filter" size={16} />
        </span>
      )}

      {showCount ? (
        <span className="itss-filter__label-wrap">
          <span className="itss-filter__label">{label}</span>
          <span className="itss-filter__count">({count})</span>
        </span>
      ) : (
        <span className="itss-filter__label">{label}</span>
      )}

      {type === 'multi-select' && (
        <span className="itss-filter__chevron">
          <Icon name={open ? 'chevron-up' : 'chevron-down'} size={12} />
        </span>
      )}
    </button>
  )
}
