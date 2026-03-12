import './DatePickerDateButton.css'

export type DatePickerDateType = 'default' | 'today' | 'selected' | 'pre-next' | 'null'
export type DatePickerRangePosition = 'none' | 'start' | 'end' | 'middle'
export type DatePickerDateState = 'enabled' | 'disabled'

export type DatePickerDateButtonProps = {
  day?: number | null
  type?: DatePickerDateType
  rangePosition?: DatePickerRangePosition
  state?: DatePickerDateState
  onClick?: () => void
}

export function DatePickerDateButton({
  day,
  type = 'default',
  rangePosition = 'none',
  state = 'enabled',
  onClick,
}: DatePickerDateButtonProps) {
  const isNull   = type === 'null' || day == null
  const isMiddle = rangePosition === 'middle'
  const isStart  = rangePosition === 'start'
  const isEnd    = rangePosition === 'end'

  // Effective visual type — middle range overrides selected appearance
  const effectiveType = isMiddle ? 'middle' : type

  const cellClasses = [
    'itss-dp-date-btn',
    `itss-dp-date-btn--${effectiveType}`,
    state === 'disabled' && 'itss-dp-date-btn--disabled',
    isNull               && 'itss-dp-date-btn--null',
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={cellClasses}
      onClick={!isNull && state !== 'disabled' ? onClick : undefined}
      disabled={state === 'disabled'}
      aria-label={day != null ? String(day) : undefined}
    >
      {/* Range bar halves — shown when date is part of a range */}
      {(isStart) && (
        <span className="itss-dp-date-btn__range itss-dp-date-btn__range--right" />
      )}
      {(isEnd) && (
        <span className="itss-dp-date-btn__range itss-dp-date-btn__range--left" />
      )}
      {(isMiddle) && (
        <span className="itss-dp-date-btn__range itss-dp-date-btn__range--full" />
      )}

      {/* Inner circle with day number */}
      {!isNull && (
        <span className="itss-dp-date-btn__circle">
          <span>{day}</span>
          {type === 'today' && (
            <span className="itss-dp-date-btn__today-dot" aria-hidden="true" />
          )}
        </span>
      )}
    </button>
  )
}
