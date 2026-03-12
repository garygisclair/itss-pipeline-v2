import './DatePickerRangeSelector.css'

export type DatePickerRangeSelectorProps = {
  width?: number | string
}

export function DatePickerRangeSelector({ width = 141 }: DatePickerRangeSelectorProps) {
  return (
    <div
      className="itss-dp-range-selector"
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      aria-hidden="true"
    >
      <div className="itss-dp-range-selector__half" />
      <div className="itss-dp-range-selector__half" />
    </div>
  )
}
