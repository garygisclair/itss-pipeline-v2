import React from 'react'
import './VerticalTab.css'

export interface VerticalTabProps {
  label: string
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export const VerticalTab: React.FC<VerticalTabProps> = ({
  label,
  selected = false,
  disabled = false,
  onClick,
  className,
}) => {
  const classes = [
    'itss-vtab',
    selected && 'itss-vtab--selected',
    disabled && 'itss-vtab--disabled',
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
      <span className="itss-vtab__indicator" aria-hidden="true" />
      <span className="itss-vtab__label">{label}</span>
    </button>
  )
}
