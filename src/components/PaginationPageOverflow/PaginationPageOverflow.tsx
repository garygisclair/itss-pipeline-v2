import React from 'react'
import { Icon } from '../Icon/Icon'
import './PaginationPageOverflow.css'

export interface PaginationPageOverflowProps {
  onClick?: () => void
  className?: string
}

export const PaginationPageOverflow: React.FC<PaginationPageOverflowProps> = ({
  onClick,
  className,
}) => {
  const classes = ['itss-pagination-page-overflow', className].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} onClick={onClick} aria-label="More pages">
      <Icon name="overflow-horizontal" size={16} />
    </button>
  )
}
