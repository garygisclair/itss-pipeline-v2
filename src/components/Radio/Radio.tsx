import './Radio.css'

export type RadioSize = 'small' | 'large'

export interface RadioProps {
  size?: RadioSize
  selected?: boolean
  pressed?: boolean
  focused?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function Radio({
  size = 'small',
  selected = false,
  pressed = false,
  focused = false,
  disabled = false,
  onClick,
  className,
}: RadioProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={onClick}
      className={[
        'itss-radio',
        `itss-radio--${size}`,
        selected && 'itss-radio--selected',
        pressed && !disabled && 'itss-radio--pressed',
        focused && !disabled && 'itss-radio--focused',
        disabled && 'itss-radio--disabled',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="itss-radio__control" />
    </button>
  )
}
