import React from 'react'
import './PaginationPageTab.css'

export interface PaginationPageTabProps {
  page: number | string
  active?: boolean
  onClick?: () => void
  className?: string
}

export const PaginationPageTab: React.FC<PaginationPageTabProps> = ({
  page,
  active = false,
  onClick,
  className,
}) => {
  const classes = [
    'itss-pagination-page-tab',
    active && 'itss-pagination-page-tab--active',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      <span className="itss-pagination-page-tab__label">{page}</span>
      <span className="itss-pagination-page-tab__indicator" aria-hidden="true" />
    </button>
  )
}
