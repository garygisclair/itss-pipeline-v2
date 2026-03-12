import './TableCellProgressDonut.css'
import { ProgressDonut } from '../ProgressDonut/ProgressDonut'

export interface TableCellProgressDonutProps {
  /** 0–100 */
  progress: number
  label: string
  selected?: boolean
  disabled?: boolean
  className?: string
}

export function TableCellProgressDonut({
  progress,
  label,
  selected = false,
  disabled = false,
  className,
}: TableCellProgressDonutProps) {
  const classes = [
    'itss-table-cell-progress-donut',
    selected && 'itss-table-cell-progress-donut--selected',
    disabled && 'itss-table-cell-progress-donut--disabled',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="itss-table-cell-progress-donut__content">
        <ProgressDonut
          progress={progress}
          className="itss-table-cell-progress-donut__donut"
        />
        <span className="itss-table-cell-progress-donut__label">{label}</span>
      </div>
    </div>
  )
}
