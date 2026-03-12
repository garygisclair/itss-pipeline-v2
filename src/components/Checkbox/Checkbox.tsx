import './Checkbox.css'

export type CheckboxSize = 'small' | 'large'

export interface CheckboxProps {
  size?: CheckboxSize
  selected?: boolean
  indeterminate?: boolean
  pressed?: boolean
  focused?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function Checkbox({
  size = 'small',
  selected = false,
  indeterminate = false,
  pressed = false,
  focused = false,
  disabled = false,
  onClick,
  className,
}: CheckboxProps) {
  const checkedState = indeterminate ? 'mixed' : selected

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checkedState}
      disabled={disabled}
      onClick={onClick}
      className={[
        'itss-checkbox',
        `itss-checkbox--${size}`,
        indeterminate
          ? 'itss-checkbox--indeterminate'
          : selected && 'itss-checkbox--selected',
        pressed && !disabled && 'itss-checkbox--pressed',
        focused && !disabled && 'itss-checkbox--focused',
        disabled && 'itss-checkbox--disabled',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="itss-checkbox__control" />
    </button>
  )
}
