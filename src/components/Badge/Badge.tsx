import React from 'react'
import './Badge.css'

export type BadgeSize = 'single' | 'double' | 'max'

interface BadgeProps {
  /** Displayed count value. Use a string like "99+" for max. */
  count?: number | string
  /** Controls width: single=24px (1 digit), double=34px (2 digits), max=40px (99+) */
  size?: BadgeSize
}

export const Badge: React.FC<BadgeProps> = ({ count = 9, size = 'single' }) => {
  return (
    <div className={`itss-badge itss-badge--${size}`}>
      <span className="itss-badge__label">{count}</span>
    </div>
  )
}
