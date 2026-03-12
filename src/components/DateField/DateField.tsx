import { useState, useRef, useEffect } from 'react'
import './DateField.css'
import { InputTitle } from '../InputTitle/InputTitle'
import { InputHelpText } from '../InputHelpText/InputHelpText'
import { Icon } from '../Icon/Icon'
import { SingleDatePicker } from '../SingleDatePicker/SingleDatePicker'

export type DateFieldSize  = 'large' | 'small'
export type DateFieldState = 'inactive' | 'error' | 'disabled' | 'readonly'

export type DateFieldProps = {
  // Title
  title?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
  showTitle?: boolean
  // Input
  placeholder?: string
  value?: Date | null
  defaultValue?: Date | null
  onChange?: (date: Date | null) => void
  size?: DateFieldSize
  state?: DateFieldState
  // Help text
  helpText?: string
  showHelpText?: boolean
}

function formatDate(date: Date): string {
  const mm   = String(date.getMonth() + 1).padStart(2, '0')
  const dd   = String(date.getDate()).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${mm}/${dd}/${yyyy}`
}

export function DateField({
  title       = 'Title',
  required    = false,
  optional    = false,
  tooltip     = false,
  showTitle   = true,
  placeholder = 'MM/DD/YYYY',
  value,
  defaultValue = null,
  onChange,
  size  = 'large',
  state = 'inactive',
  helpText,
  showHelpText = false,
}: DateFieldProps) {
  const isControlled = value !== undefined
  const [internalDate, setInternalDate] = useState<Date | null>(defaultValue)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedDate = isControlled ? (value ?? null) : internalDate
  const hasValue     = selectedDate != null
  const isDisabled   = state === 'disabled'
  const isReadonly   = state === 'readonly'

  // Close picker on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleTriggerClick = () => {
    if (isDisabled || isReadonly) return
    setOpen(o => !o)
  }

  const handleDateSelect = (date: Date) => {
    if (!isControlled) setInternalDate(date)
    onChange?.(date)
    setOpen(false)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isControlled) setInternalDate(null)
    onChange?.(null)
  }

  // Trigger classes
  const triggerClasses = [
    'itss-date-field__trigger',
    `itss-date-field__trigger--${size}`,
    open          ? 'itss-date-field__trigger--open'     : '',
    state === 'error'   ? 'itss-date-field__trigger--error'    : '',
    isDisabled          ? 'itss-date-field__trigger--disabled'  : '',
    isReadonly          ? 'itss-date-field__trigger--readonly'  : '',
  ].filter(Boolean).join(' ')

  // Text classes
  const textClasses = [
    'itss-date-field__text',
    hasValue ? 'itss-date-field__text--value' : 'itss-date-field__text--placeholder',
  ].join(' ')

  // Right-side element: chevron (open) > clear (has value) > nothing
  const showChevron = open
  const showClear   = !open && hasValue && !isDisabled && !isReadonly

  return (
    <div className="itss-date-field" ref={containerRef}>
      {showTitle && (
        <InputTitle
          title={title}
          required={required}
          optional={optional}
          tooltip={tooltip}
        />
      )}

      <div className="itss-date-field__wrap">
        <button
          type="button"
          className={triggerClasses}
          onClick={handleTriggerClick}
          disabled={isDisabled}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <Icon name="calendar" size={20} className="itss-date-field__icon" />

          <span className={textClasses}>
            {hasValue ? formatDate(selectedDate!) : placeholder}
          </span>

          {showClear && (
            <button
              type="button"
              className="itss-date-field__clear"
              onClick={handleClear}
              aria-label="Clear date"
              tabIndex={-1}
            >
              <Icon name="clear" size={20} />
            </button>
          )}

          {showChevron && (
            <Icon
              name="chevron-up"
              size={16}
              className="itss-date-field__chevron itss-date-field__chevron--open"
            />
          )}
        </button>

        {open && (
          <div className="itss-date-field__picker">
            <SingleDatePicker
              value={selectedDate}
              onChange={handleDateSelect}
            />
          </div>
        )}
      </div>

      {showHelpText && (
        <InputHelpText
          helpText={helpText}
          showHelpText
          showCount={false}
          error={state === 'error'}
        />
      )}
    </div>
  )
}
