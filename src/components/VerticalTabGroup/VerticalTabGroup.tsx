import React from 'react'
import './VerticalTabGroup.css'
import { VerticalTab } from '../VerticalTab/VerticalTab'

export interface VerticalTabItem {
  label: string
  disabled?: boolean
}

export interface VerticalTabGroupProps {
  tabs: VerticalTabItem[]
  selectedIndex?: number
  /** Show a 1px divider line along the left side of the tab strip */
  divider?: boolean
  onTabChange?: (index: number) => void
  className?: string
}

export const VerticalTabGroup: React.FC<VerticalTabGroupProps> = ({
  tabs,
  selectedIndex = 0,
  divider = false,
  onTabChange,
  className,
}) => {
  return (
    <div className={['itss-vtab-group', className].filter(Boolean).join(' ')}>
      {divider && <span className="itss-vtab-group__divider" aria-hidden="true" />}
      {tabs.map((tab, i) => (
        <VerticalTab
          key={i}
          label={tab.label}
          selected={i === selectedIndex}
          disabled={tab.disabled}
          onClick={tab.disabled ? undefined : () => onTabChange?.(i)}
        />
      ))}
    </div>
  )
}
