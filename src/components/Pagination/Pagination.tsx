import React from 'react'
import { PaginationPageTab } from '../PaginationPageTab/PaginationPageTab'
import { PaginationPageOverflow } from '../PaginationPageOverflow/PaginationPageOverflow'
import { Icon } from '../Icon/Icon'
import './Pagination.css'

export interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  className?: string
}

type PageItem = number | 'overflow'

function getPageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  const left = currentPage - 1
  const right = currentPage + 1
  const showLeftDots  = left > 2
  const showRightDots = right < totalPages - 1

  if (!showLeftDots && showRightDots) {
    return [1, 2, 3, 4, 5, 'overflow', totalPages]
  }
  if (showLeftDots && !showRightDots) {
    return [1, 'overflow', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }
  return [1, 'overflow', left, currentPage, right, 'overflow', totalPages]
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
}) => {
  const classes = ['itss-pagination', className].filter(Boolean).join(' ')
  const items = getPageItems(currentPage, totalPages)
  let overflowKey = 0

  return (
    <div className={classes}>
      <button
        type="button"
        className="itss-pagination__arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <Icon name="arrow-left" size={16} />
      </button>

      <div className="itss-pagination__pages">
        {items.map(item =>
          item === 'overflow'
            ? <PaginationPageOverflow key={`overflow-${overflowKey++}`} />
            : <PaginationPageTab
                key={item}
                page={item}
                active={item === currentPage}
                onClick={() => onPageChange(item)}
              />
        )}
      </div>

      <button
        type="button"
        className="itss-pagination__arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <Icon name="arrow-right" size={16} />
      </button>
    </div>
  )
}
