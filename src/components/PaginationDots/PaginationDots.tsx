import React from 'react'
import { PaginationDot } from '../PaginationDot/PaginationDot'
import './PaginationDots.css'

export interface PaginationDotsProps {
  count: number
  selectedIndex?: number
  onSelect?: (index: number) => void
  className?: string
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  count,
  selectedIndex = 0,
  onSelect,
  className,
}) => {
  const classes = ['itss-pagination-dots', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {Array.from({ length: count }, (_, i) => (
        <PaginationDot
          key={i}
          selected={i === selectedIndex}
          onClick={onSelect ? () => onSelect(i) : undefined}
        />
      ))}
    </div>
  )
}
