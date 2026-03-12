import { useState, useRef, useEffect } from 'react'
import './DropdownField.css'
import { InputTitle } from '../InputTitle/InputTitle'
import { InputHelpText } from '../InputHelpText/InputHelpText'
import { Icon } from '../Icon/Icon'
import { Menu } from '../Menu/Menu'

export type DropdownFieldSize = 'large' | 'small'
export type DropdownFieldState = 'inactive' | 'error' | 'disabled' | 'readonly'

export type DropdownOption = {
  value: string
  label: string
}

export type DropdownFieldProps = {
  // Title
  title?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
  showTitle?: boolean
  // Dropdown options
  placeholder?: string
  options?: DropdownOption[]
  // Single-select
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  // Multi-select
  multiSelect?: boolean
  values?: string[]
  defaultValues?: string[]
  onChangeMulti?: (values: string[]) => void
  // Adornments
  colorDot?: boolean
  size?: DropdownFieldSize
  state?: DropdownFieldState
  // Help text
  helpText?: string
  showHelpText?: boolean
}

export function DropdownField({
  title = 'Title',
  required = false,
  optional = false,
  tooltip = false,
  showTitle = true,
  placeholder = 'Select an option',
  options = [],
  value,
  defaultValue = '',
  onChange,
  multiSelect = false,
  values,
  defaultValues,
  onChangeMulti,
  colorDot = false,
  size = 'large',
  state = 'inactive',
  helpText,
  showHelpText = false,
}: DropdownFieldProps) {
  // Single-select state
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const selectedValue = isControlled ? value : internalValue
  const selectedLabel = options.find(o => o.value === selectedValue)?.label

  // Multi-select state
  const isControlledMulti = values !== undefined
  const [internalValues, setInternalValues] = useState<string[]>(defaultValues ?? [])
  const selectedValues = isControlledMulti ? values! : internalValues

  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const isDisabled = state === 'disabled'
  const isReadonly = state === 'readonly'
  const isError = state === 'error'
  const isInteractive = !isDisabled && !isReadonly

  // Close on outside click
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

  const handleSelect = (optionValue: string) => {
    if (!isControlled) setInternalValue(optionValue)
    onChange?.(optionValue)
    setOpen(false)
  }

  const handleToggle = (optionValue: string) => {
    const next = selectedValues.includes(optionValue)
      ? selectedValues.filter(v => v !== optionValue)
      : [...selectedValues, optionValue]
    if (!isControlledMulti) setInternalValues(next)
    onChangeMulti?.(next)
    // Keep menu open for multi-select
  }

  const handleRemoveChip = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const next = selectedValues.filter(v => v !== optionValue)
    if (!isControlledMulti) setInternalValues(next)
    onChangeMulti?.(next)
  }

  const handleFieldClick = () => {
    if (isInteractive) setOpen(o => !o)
  }

  const handleFieldKeyDown = (e: React.KeyboardEvent) => {
    if (!isInteractive) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(o => !o)
    }
    if (e.key === 'Escape') setOpen(false)
  }

  const hasChips = multiSelect && selectedValues.length > 0
  const showPlaceholder = multiSelect ? selectedValues.length === 0 : !selectedLabel

  const fieldClasses = [
    'itss-dropdown-field__field',
    `itss-dropdown-field__field--${size}`,
    hasChips                                   ? 'itss-dropdown-field__field--chip' : '',
    open                                       ? 'itss-dropdown-field__field--open' : '',
    isError                                    ? 'itss-dropdown-field__field--error' : '',
    isDisabled                                 ? 'itss-dropdown-field__field--disabled' : '',
    isReadonly                                 ? 'itss-dropdown-field__field--readonly' : '',
  ].filter(Boolean).join(' ')

  const menuItems = multiSelect
    ? options.map(opt => ({
        type: 'multi-select' as const,
        label: opt.label,
        checked: selectedValues.includes(opt.value),
        onClick: () => handleToggle(opt.value),
      }))
    : options.map(opt => ({
        type: 'single-select' as const,
        label: opt.label,
        checked: opt.value === selectedValue,
        onClick: () => handleSelect(opt.value),
      }))

  return (
    <div className="itss-dropdown-field" ref={containerRef}>
      {showTitle && (
        <div className="itss-dropdown-field__label-area">
          <InputTitle title={title} required={required} optional={optional} tooltip={tooltip} />
        </div>
      )}

      <div className="itss-dropdown-field__wrap">
        <div
          className={fieldClasses}
          onClick={handleFieldClick}
          onKeyDown={handleFieldKeyDown}
          tabIndex={isInteractive ? 0 : -1}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          {colorDot && (
            <div className="itss-dropdown-field__dot" />
          )}

          <div className="itss-dropdown-field__container">
            {hasChips && selectedValues.map(v => {
              const label = options.find(o => o.value === v)?.label ?? v
              return (
                <div key={v} className="itss-dropdown-field__chip">
                  <span className="itss-dropdown-field__chip-text">{label}</span>
                  <button
                    type="button"
                    className="itss-dropdown-field__chip-close"
                    onClick={(e) => handleRemoveChip(v, e)}
                    aria-label={`Remove ${label}`}
                    tabIndex={-1}
                  >
                    <Icon name="close" size={12} />
                  </button>
                </div>
              )
            })}
            {showPlaceholder && (
              <span className="itss-dropdown-field__placeholder">{placeholder}</span>
            )}
            {!multiSelect && selectedLabel && (
              <span className="itss-dropdown-field__value">{selectedLabel}</span>
            )}
          </div>

          {!isReadonly && (
            <Icon
              name="chevron-down"
              size={16}
              className={`itss-dropdown-field__chevron${open ? ' itss-dropdown-field__chevron--open' : ''}`}
            />
          )}
        </div>

        {open && (
          <div className="itss-dropdown-field__menu">
            <Menu items={menuItems} maxHeight={240} />
          </div>
        )}
      </div>

      {showHelpText && (
        <InputHelpText
          helpText={helpText}
          showHelpText
          showCount={false}
          error={isError}
        />
      )}
    </div>
  )
}
