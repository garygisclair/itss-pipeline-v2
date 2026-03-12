import React from 'react'
import './Tab.css'

export type TabSize = 'medium' | 'large'

export interface TabProps {
  label: string
  selected?: boolean
  size?: TabSize
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export const Tab: React.FC<TabProps> = ({
  label,
  selected = false,
  size = 'medium',
  disabled = false,
  onClick,
  className,
}) => {
  const classes = [
    'itss-tab',
    `itss-tab--${size}`,
    selected && 'itss-tab--selected',
    disabled && 'itss-tab--disabled',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-selected={selected}
    >
      <span className="itss-tab__content">
        <span className="itss-tab__label">{label}</span>
        <span className="itss-tab__indicator" aria-hidden="true" />
      </span>
    </button>
  )
}
