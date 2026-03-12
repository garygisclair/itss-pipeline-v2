import React from 'react'
import './SegmentedButton.css'

export interface SegmentedButtonProps {
  label?: string
  /** 16px icon node — e.g. <Icon name="check" size={16} /> */
  icon?: React.ReactNode
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  label,
  icon,
  selected = false,
  disabled = false,
  onClick,
  className,
}) => {
  const classes = [
    'itss-seg-btn',
    selected && 'itss-seg-btn--selected',
    disabled && 'itss-seg-btn--disabled',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      {icon && <span className="itss-seg-btn__icon">{icon}</span>}
      {label && <span className="itss-seg-btn__label">{label}</span>}
    </button>
  )
}
