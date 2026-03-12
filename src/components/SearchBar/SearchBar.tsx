import { useState, useRef } from 'react'
import './SearchBar.css'
import { Icon } from '../Icon/Icon'

export type SearchBarSize = 'large' | 'small'

export type SearchBarProps = {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  onClear?: () => void
  size?: SearchBarSize
  /** Expands to fill its container instead of the default 315px */
  fullWidth?: boolean
  autoFocus?: boolean
}

export function SearchBar({
  placeholder = 'Search',
  value,
  defaultValue = '',
  onChange,
  onSearch,
  onClear,
  size = 'large',
  fullWidth = false,
  autoFocus = false,
}: SearchBarProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const inputRef = useRef<HTMLInputElement>(null)

  const currentValue = isControlled ? value : internalValue
  const hasValue = currentValue.length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(currentValue)
    }
  }

  const handleClear = () => {
    if (!isControlled) setInternalValue('')
    onChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  const containerClasses = [
    'itss-search-bar',
    `itss-search-bar--${size}`,
    fullWidth && 'itss-search-bar--full',
  ].filter(Boolean).join(' ')

  return (
    <div className={containerClasses}>
      <Icon name="search" size={20} className="itss-search-bar__search-icon" />

      <input
        ref={inputRef}
        className="itss-search-bar__input"
        type="text"
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
        aria-label={placeholder}
      />

      {hasValue && (
        <button
          type="button"
          className="itss-search-bar__clear"
          onClick={handleClear}
          aria-label="Clear search"
          tabIndex={-1}
        >
          <Icon name="clear" size={20} />
        </button>
      )}
    </div>
  )
}
