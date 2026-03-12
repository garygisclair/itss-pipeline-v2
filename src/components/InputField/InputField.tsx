import { useState } from 'react'
import type { ReactNode, ChangeEvent } from 'react'
import './InputField.css'
import { InputTitle } from '../InputTitle/InputTitle'
import { InputHelpText } from '../InputHelpText/InputHelpText'

export type InputFieldSize = 'large' | 'small'
export type InputFieldState = 'inactive' | 'error' | 'disabled' | 'readonly'

export type InputFieldProps = {
  // Label
  title?: string
  subtitle?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
  showTitle?: boolean
  // Field adornments
  leadingIcon?: ReactNode
  prefix?: string
  suffix?: string
  trailingIcon?: ReactNode
  // Input
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  size?: InputFieldSize
  state?: InputFieldState
  type?: string
  // Help / count
  helpText?: string
  showHelpText?: boolean
  maxLength?: number
  showCount?: boolean
}

export function InputField({
  title = 'Title',
  subtitle,
  required = false,
  optional = false,
  tooltip = false,
  showTitle = true,
  leadingIcon,
  prefix,
  suffix,
  trailingIcon,
  placeholder = 'Text',
  value,
  defaultValue,
  onChange,
  size = 'large',
  state = 'inactive',
  type = 'text',
  helpText,
  showHelpText = false,
  maxLength,
  showCount = false,
}: InputFieldProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
  }

  const characterCount = maxLength
    ? `${currentValue.length}/${maxLength}`
    : undefined

  const isDisabled = state === 'disabled'
  const isReadonly = state === 'readonly'
  const isError = state === 'error'

  const fieldClasses = [
    'itss-input-field__field',
    `itss-input-field__field--${size}`,
    isError    ? 'itss-input-field__field--error'    : '',
    isDisabled ? 'itss-input-field__field--disabled' : '',
    isReadonly ? 'itss-input-field__field--readonly' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="itss-input-field">
      {showTitle && (
        <div className="itss-input-field__label-area">
          <InputTitle title={title} required={required} optional={optional} tooltip={tooltip} />
          {subtitle && <span className="itss-input-field__subtitle">{subtitle}</span>}
        </div>
      )}

      <div className={fieldClasses}>
        {leadingIcon && (
          <div className="itss-input-field__icon">
            {leadingIcon}
          </div>
        )}
        {prefix && (
          <span className="itss-input-field__prefix">{prefix}</span>
        )}
        <input
          className="itss-input-field__input"
          type={type}
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadonly}
          maxLength={maxLength}
          aria-invalid={isError}
        />
        {suffix && (
          <span className="itss-input-field__suffix">{suffix}</span>
        )}
        {trailingIcon && (
          <div className="itss-input-field__icon">
            {trailingIcon}
          </div>
        )}
      </div>

      {(showHelpText || showCount) && (
        <InputHelpText
          helpText={helpText}
          showHelpText={showHelpText}
          characterCount={characterCount ?? `0/${maxLength ?? 100}`}
          showCount={showCount}
          error={isError}
        />
      )}
    </div>
  )
}
