import './DatePickerYearMonthButton.css'

export type DatePickerYearMonthButtonProps = {
  label?: string
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function DatePickerYearMonthButton({
  label = '2025',
  selected = false,
  disabled = false,
  onClick,
}: DatePickerYearMonthButtonProps) {
  const classes = [
    'itss-dp-ym-btn',
    selected  && 'itss-dp-ym-btn--selected',
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
