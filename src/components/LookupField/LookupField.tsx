import { useState, useRef, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import './LookupField.css'
import { InputTitle } from '../InputTitle/InputTitle'
import { InputHelpText } from '../InputHelpText/InputHelpText'
import { Icon } from '../Icon/Icon'
import { Avatar } from '../Avatar/Avatar'
import { Menu } from '../Menu/Menu'
import type { MenuItemProps } from '../MenuItem/MenuItem'

export type LookupFieldSize = 'large' | 'default'
export type LookupFieldState = 'inactive' | 'error' | 'disabled' | 'readonly'

export type LookupFieldChip = {
  id: string
  label: string
  avatarSrc?: string
  avatarInitials?: string
}

export type LookupFieldProps = {
  // Title
  title?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
  showTitle?: boolean
  // Input
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  size?: LookupFieldSize
  state?: LookupFieldState
  // Chips (selected items)
  chips?: LookupFieldChip[]
  onRemoveChip?: (id: string) => void
  // Suggestions menu
  suggestions?: MenuItemProps[]
  // Help text
  helpText?: string
  showHelpText?: boolean
}

export function LookupField({
  title = 'Title',
  required = false,
  optional = false,
  tooltip = false,
  showTitle = true,
  placeholder = 'Text',
  value,
  defaultValue = '',
  onChange,
  size = 'large',
  state = 'inactive',
  chips,
  onRemoveChip,
  suggestions,
  helpText,
  showHelpText = false,
}: LookupFieldProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [focused, setFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentValue = isControlled ? value : internalValue
  const isDisabled = state === 'disabled'
  const isReadonly = state === 'readonly'
  const isError = state === 'error'
  const hasChips = !!chips?.length
  const showMenu = focused && !!suggestions?.length

  useEffect(() => {
    if (!showMenu) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showMenu])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e.target.value)
  }

  const wrapperClasses = [
    'itss-lookup-field__wrapper',
    `itss-lookup-field__wrapper--${size}`,
    hasChips   ? 'itss-lookup-field__wrapper--chips'    : '',
    isError    ? 'itss-lookup-field__wrapper--error'    : '',
    isDisabled ? 'itss-lookup-field__wrapper--disabled' : '',
    isReadonly ? 'itss-lookup-field__wrapper--readonly' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="itss-lookup-field" ref={containerRef}>
      {showTitle && (
        <div className="itss-lookup-field__label-area">
          <InputTitle title={title} required={required} optional={optional} tooltip={tooltip} />
        </div>
      )}
      <div className="itss-lookup-field__wrap">
        <div className={wrapperClasses}>
          <Icon name="search" size={16} className="itss-lookup-field__search-icon" />
          <div className="itss-lookup-field__container">
            {chips?.map(chip => (
              <div
                key={chip.id}
                className={[
                  'itss-lookup-field__chip',
                  isReadonly ? 'itss-lookup-field__chip--readonly' : '',
                ].filter(Boolean).join(' ')}
              >
                <div className="itss-lookup-field__chip-content">
                  <Avatar
                    type={chip.avatarSrc ? 'photo' : chip.avatarInitials ? 'initials' : 'no-photo'}
                    size="small"
                    src={chip.avatarSrc}
                    initials={chip.avatarInitials}
                  />
                  <span className="itss-lookup-field__chip-text">{chip.label}</span>
                </div>
                {!isReadonly && !isDisabled && (
                  <button
                    type="button"
                    className="itss-lookup-field__chip-close"
                    onClick={() => onRemoveChip?.(chip.id)}
                    aria-label={`Remove ${chip.label}`}
                    tabIndex={-1}
                  >
                    <Icon name="close" size={12} />
                  </button>
                )}
              </div>
            ))}
            {!isReadonly && (
              <input
                className="itss-lookup-field__input"
                type="text"
                placeholder={hasChips ? '' : placeholder}
                value={currentValue}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                disabled={isDisabled}
                aria-invalid={isError}
              />
            )}
          </div>
        </div>
        {showMenu && (
          <div className="itss-lookup-field__menu">
            <Menu items={suggestions!} maxHeight={240} />
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
