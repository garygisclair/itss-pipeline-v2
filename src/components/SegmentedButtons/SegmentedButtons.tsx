import React from 'react'
import './SegmentedButtons.css'
import { SegmentedButton } from '../SegmentedButton/SegmentedButton'

export type SegmentedButtonsSize = 'large' | 'small'

export interface SegmentedButtonsItem {
  label?: string
  /** 16px icon node */
  icon?: React.ReactNode
  disabled?: boolean
}

export interface SegmentedButtonsProps {
  items: SegmentedButtonsItem[]
  selectedIndex?: number
  size?: SegmentedButtonsSize
  onSelect?: (index: number) => void
  className?: string
}

export const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({
  items,
  selectedIndex = 0,
  size = 'large',
  onSelect,
  className,
}) => {
  return (
    <div
      className={[
        'itss-seg-btns',
        `itss-seg-btns--${size}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {items.map((item, i) => (
        <SegmentedButton
          key={i}
          label={item.label}
          icon={item.icon}
          selected={i === selectedIndex}
          disabled={item.disabled}
          onClick={item.disabled ? undefined : () => onSelect?.(i)}
        />
      ))}
    </div>
  )
}
