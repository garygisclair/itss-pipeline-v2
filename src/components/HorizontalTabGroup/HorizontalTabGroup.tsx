import React from 'react'
import './HorizontalTabGroup.css'
import { Tab, TabSize } from '../Tab/Tab'

export interface HorizontalTabItem {
  label: string
  disabled?: boolean
}

export interface HorizontalTabGroupProps {
  tabs: HorizontalTabItem[]
  selectedIndex?: number
  size?: TabSize
  /** Show a 1px divider line across the bottom of the tab strip */
  divider?: boolean
  onTabChange?: (index: number) => void
  className?: string
}

export const HorizontalTabGroup: React.FC<HorizontalTabGroupProps> = ({
  tabs,
  selectedIndex = 0,
  size = 'medium',
  divider = false,
  onTabChange,
  className,
}) => {
  return (
    <div className={['itss-htab-group', className].filter(Boolean).join(' ')}>
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          label={tab.label}
          selected={i === selectedIndex}
          size={size}
          disabled={tab.disabled}
          onClick={tab.disabled ? undefined : () => onTabChange?.(i)}
        />
      ))}
      {divider && <span className="itss-htab-group__divider" aria-hidden="true" />}
    </div>
  )
}
