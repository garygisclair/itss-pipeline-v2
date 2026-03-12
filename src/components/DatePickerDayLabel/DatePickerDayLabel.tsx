import './DatePickerDayLabel.css'

export type DatePickerDayLabelProps = {
  label?: string
}

export function DatePickerDayLabel({ label = 'Day' }: DatePickerDayLabelProps) {
  return (
    <span className="itss-dp-day-label">{label}</span>
  )
}
