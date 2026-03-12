import { Icon } from '../Icon/Icon'
import { DatePickerDropdownButton } from '../DatePickerDropdownButton/DatePickerDropdownButton'
import './DatePickerHeader.css'

export type DatePickerHeaderProps = {
  label?: string
  open?: boolean
  onDropdownClick?: () => void
  onPrevClick?: () => void
  onNextClick?: () => void
  prevDisabled?: boolean
  nextDisabled?: boolean
}

export function DatePickerHeader({
  label = 'September 2025',
  open = false,
  onDropdownClick,
  onPrevClick,
  onNextClick,
  prevDisabled = false,
  nextDisabled = false,
}: DatePickerHeaderProps) {
  return (
    <div className="itss-dp-header">
      <button
        type="button"
        className="itss-dp-header__nav-btn"
        onClick={onPrevClick}
        disabled={prevDisabled}
        aria-label="Previous month"
      >
        <Icon name="chevron-left" size={16} />
      </button>

      <DatePickerDropdownButton
        label={label}
        open={open}
        onClick={onDropdownClick}
      />

      <button
        type="button"
        className="itss-dp-header__nav-btn"
        onClick={onNextClick}
        disabled={nextDisabled}
        aria-label="Next month"
      >
        <Icon name="chevron-right" size={16} />
      </button>
    </div>
  )
}
