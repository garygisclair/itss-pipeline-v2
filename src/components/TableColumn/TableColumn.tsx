import './TableColumn.css'
import { TableCell } from '../TableCell/TableCell'
import type { TableCellType, TableCellProps, TableCellDensity } from '../TableCell/TableCell'
import type { TableSortState } from '../TableSortButton/TableSortButton'

export type { TableCellDensity as TableColumnDensity }

/** Per-row content — all TableCell props except type and density (inherited from the column) */
export type TableColumnRow = Omit<TableCellProps, 'type' | 'density'>

export interface TableColumnProps {
  /** Content type shared across all data rows */
  type: TableCellType
  /** Row height for data rows — compact 52px, cozy 64px, relaxed 72px (default: compact) */
  density?: TableCellDensity
  /** Header label */
  header: string
  /** Sort state on the header */
  sortState?: TableSortState
  onSort?: () => void
  /** Data rows */
  rows: TableColumnRow[]
  className?: string
}

export function TableColumn({
  type,
  density = 'compact',
  header,
  sortState,
  onSort,
  rows,
  className,
}: TableColumnProps) {
  return (
    <div className={['itss-table-column', className].filter(Boolean).join(' ')}>
      <TableCell
        type="header"
        label={header}
        sortState={sortState}
        onSort={onSort}
      />
      {rows.map((row, i) => (
        <TableCell
          key={i}
          {...row}
          type={type}
          density={density}
        />
      ))}
    </div>
  )
}
