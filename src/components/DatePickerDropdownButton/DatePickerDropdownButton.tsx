import { Icon } from '../Icon/Icon'
import './DatePickerDropdownButton.css'

export type DatePickerDropdownButtonProps = {
  label?: string
  open?: boolean
  onClick?: () => void
}

export function DatePickerDropdownButton({
  label = 'September 2025',
  open = false,
  onClick,
}: DatePickerDropdownButtonProps) {
  const classes = [
    'itss-dp-dropdown-btn',
    open && 'itss-dp-dropdown-btn--open',
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-expanded={open}
    >
      <span>{label}</span>
      <Icon name="chevron-down" size={16} className="itss-dp-dropdown-btn__chevron" />
    </button>
  )
}
