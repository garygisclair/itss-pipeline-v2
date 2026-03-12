import { Icon } from '../Icon/Icon'
import './SelectAllBar.css'

export interface SelectAllBarProps {
  /** All items are selected */
  checked?: boolean
  /** Some (but not all) items are selected */
  indeterminate?: boolean
  label?: string
  onChange?: (checked: boolean) => void
  className?: string
}

export function SelectAllBar({
  checked = false,
  indeterminate = false,
  label = 'All options',
  onChange,
  className,
}: SelectAllBarProps) {
  const filled = checked || indeterminate

  const handleClick = () => {
    // If indeterminate or unchecked → check all; if checked → uncheck all
    onChange?.(indeterminate ? true : !checked)
  }

  return (
    <div className={['itss-select-all-bar', className].filter(Boolean).join(' ')}>
      <div className="itss-select-all-bar__section">
        <button
          type="button"
          className="itss-select-all-bar__row"
          onClick={handleClick}
          aria-checked={indeterminate ? 'mixed' : checked}
          role="checkbox"
        >
          <span
            className={[
              'itss-select-all-bar__checkbox',
              filled && 'itss-select-all-bar__checkbox--filled',
              indeterminate && 'itss-select-all-bar__checkbox--indeterminate',
            ].filter(Boolean).join(' ')}
          >
            {checked && !indeterminate && <Icon name="tick" size={16} />}
          </span>
          <span className="itss-select-all-bar__label">{label}</span>
        </button>
      </div>
    </div>
  )
}
