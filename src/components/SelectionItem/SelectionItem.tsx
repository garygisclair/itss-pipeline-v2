import { Radio } from '../Radio/Radio'
import { Checkbox } from '../Checkbox/Checkbox'
import { Switch } from '../Switch/Switch'
import './SelectionItem.css'

export type SelectionControlType = 'radio' | 'checkbox' | 'switch'
export type SelectionItemSize = 'small' | 'large'

export interface SelectionItemProps {
  type?: SelectionControlType
  size?: SelectionItemSize
  label?: string
  selected?: boolean
  indeterminate?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function SelectionItem({
  type = 'radio',
  size = 'small',
  label = 'Label',
  selected = false,
  indeterminate = false,
  disabled = false,
  onClick,
  className,
}: SelectionItemProps) {
  return (
    <div
      className={[
        'itss-selection-item',
        `itss-selection-item--${type}`,
        disabled && 'itss-selection-item--disabled',
        className,
      ].filter(Boolean).join(' ')}
    >
      {type === 'radio' && (
        <Radio size={size} selected={selected} disabled={disabled} onClick={onClick} />
      )}
      {type === 'checkbox' && (
        <Checkbox
          size={size}
          selected={selected}
          indeterminate={indeterminate}
          disabled={disabled}
          onClick={onClick}
        />
      )}
      {type === 'switch' && (
        <Switch selected={selected} disabled={disabled} onClick={onClick} />
      )}
      <span className="itss-selection-item__label">{label}</span>
    </div>
  )
}
