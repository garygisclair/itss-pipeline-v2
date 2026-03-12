import './Switch.css'

export interface SwitchProps {
  selected?: boolean
  pressed?: boolean
  focused?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function Switch({
  selected = false,
  pressed = false,
  focused = false,
  disabled = false,
  onClick,
  className,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={selected}
      disabled={disabled}
      onClick={onClick}
      className={[
        'itss-switch',
        selected && 'itss-switch--selected',
        pressed && !disabled && 'itss-switch--pressed',
        focused && !disabled && 'itss-switch--focused',
        disabled && 'itss-switch--disabled',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="itss-switch__track">
        <span className="itss-switch__handle" />
      </span>
    </button>
  )
}
