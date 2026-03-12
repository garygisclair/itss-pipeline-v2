import React from 'react'
import './PaginationDot.css'

export interface PaginationDotProps {
  selected?: boolean
  onClick?: () => void
  className?: string
}

export const PaginationDot: React.FC<PaginationDotProps> = ({
  selected = false,
  onClick,
  className,
}) => {
  const classes = [
    'itss-pagination-dot',
    selected && 'itss-pagination-dot--selected',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-current={selected ? 'page' : undefined}
      aria-label={selected ? 'Current page' : 'Go to page'}
    />
  )
}
