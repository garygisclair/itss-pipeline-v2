import { useState } from 'react'
import type { ChangeEvent } from 'react'
import './TextAreaField.css'
import { InputTitle } from '../InputTitle/InputTitle'
import { InputHelpText } from '../InputHelpText/InputHelpText'
import { InputDraggable } from '../InputDraggable/InputDraggable'

export type TextAreaFieldSize = 'large' | 'small'
export type TextAreaFieldState = 'inactive' | 'error' | 'disabled' | 'readonly'

export type TextAreaFieldProps = {
  // Title
  title?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
  showTitle?: boolean
  // Textarea
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  size?: TextAreaFieldSize
  state?: TextAreaFieldState
  resizable?: boolean
  // Help / count
  helpText?: string
  showHelpText?: boolean
  maxLength?: number
  showCount?: boolean
}

export function TextAreaField({
  title = 'Title',
  required = false,
  optional = false,
  tooltip = false,
  showTitle = true,
  placeholder = 'Text',
  value,
  defaultValue,
  onChange,
  size = 'large',
  state = 'inactive',
  resizable = true,
  helpText,
  showHelpText = false,
  maxLength,
  showCount = false,
}: TextAreaFieldProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
  }

  const characterCount = maxLength
    ? `${currentValue.length}/${maxLength}`
    : undefined

  const isDisabled = state === 'disabled'
  const isReadonly = state === 'readonly'
  const isError = state === 'error'

  const wrapperClasses = [
    'itss-textarea-field__wrapper',
    `itss-textarea-field__wrapper--${size}`,
    isError    ? 'itss-textarea-field__wrapper--error'    : '',
    isDisabled ? 'itss-textarea-field__wrapper--disabled' : '',
    isReadonly ? 'itss-textarea-field__wrapper--readonly' : '',
  ].filter(Boolean).join(' ')

  const textareaClasses = [
    'itss-textarea-field__textarea',
    isDisabled ? 'itss-textarea-field__textarea--disabled' : '',
    isReadonly ? 'itss-textarea-field__textarea--readonly' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="itss-textarea-field">
      {showTitle && (
        <div className="itss-textarea-field__label-area">
          <InputTitle title={title} required={required} optional={optional} tooltip={tooltip} />
        </div>
      )}
      <div className={wrapperClasses}>
        <textarea
          className={textareaClasses}
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadonly}
          maxLength={maxLength}
          aria-invalid={isError}
        />
        {resizable && <InputDraggable className="itss-textarea-field__draggable" />}
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
