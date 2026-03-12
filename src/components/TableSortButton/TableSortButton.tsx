import './TableSortButton.css'
import { Icon } from '../Icon/Icon'

export type TableSortState = 'default' | 'up' | 'down'

export interface TableSortButtonProps {
  state?: TableSortState
  onClick?: () => void
  className?: string
}

const ICON_MAP: Record<TableSortState, string> = {
  default: 'sort',
  up:      'sort-up',
  down:    'sort-down',
}

export function TableSortButton({ state = 'default', onClick, className }: TableSortButtonProps) {
  return (
    <button
      type="button"
      className={['itss-table-sort-btn', className].filter(Boolean).join(' ')}
      onClick={onClick}
      aria-label={state === 'default' ? 'Sort' : state === 'up' ? 'Sorted ascending' : 'Sorted descending'}
    >
      <Icon name={ICON_MAP[state]} size={12} />
    </button>
  )
}
