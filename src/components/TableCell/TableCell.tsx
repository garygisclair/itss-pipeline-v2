import './TableCell.css'
import { Avatar } from '../Avatar/Avatar'
import { Checkbox } from '../Checkbox/Checkbox'
import { Switch } from '../Switch/Switch'
import { Status } from '../Status/Status'
import { Icon } from '../Icon/Icon'
import { TableSortButton } from '../TableSortButton/TableSortButton'
import type { TableSortState } from '../TableSortButton/TableSortButton'

export type TableCellType =
  | 'header'
  | 'text'
  | 'avatar-text'
  | 'element-text'
  | 'dropdown'
  | 'checkbox'
  | 'toggle'
  | 'actions-icons'
  | 'actions-link-button'
  | 'image'
  | 'chips'
  | 'empty'

export type TableCellDensity = 'compact' | 'cozy' | 'relaxed'

export interface TableCellProps {
  type: TableCellType
  /** Row height — compact 52px (default), cozy 64px, relaxed 72px. Header always 52px. */
  density?: TableCellDensity
  /** Interactive state flags */
  selected?: boolean
  disabled?: boolean
  error?: boolean
  /** Primary text — header label, cell text, dropdown label, link button title */
  label?: string
  /** Secondary line below label (text + avatar-text types) */
  subtitle?: string
  /** Sort state for header type — omit to hide sort button */
  sortState?: TableSortState
  /** Click handler for the sort button (header type) */
  onSort?: () => void
  /** Avatar photo src (avatar-text type) */
  avatarSrc?: string
  /** Avatar initials fallback (avatar-text type) */
  avatarInitials?: string
  avatarAlt?: string
  /** Leading element slot (element-text type) — defaults to a pending Status dot */
  element?: React.ReactNode
  /** Icon buttons to render (actions-icons type) — defaults to edit + overflow */
  actions?: React.ReactNode[]
  /** Click handler for actions-link-button type */
  onClick?: () => void
  /** Image src (image type) */
  imageSrc?: string
  imageAlt?: string
  /** Chip labels (chips type) */
  chips?: string[]
  /** Checked state (checkbox + toggle types) */
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

export function TableCell({
  type,
  density = 'compact',
  selected = false,
  disabled = false,
  error = false,
  label = 'Text label',
  subtitle,
  sortState,
  onSort,
  avatarSrc,
  avatarInitials,
  avatarAlt,
  element,
  actions,
  onClick,
  imageSrc,
  imageAlt,
  chips = [],
  checked = false,
  onChange,
  className,
}: TableCellProps) {
  const classes = [
    'itss-table-cell',
    `itss-table-cell--${type}`,
    density !== 'compact' && `itss-table-cell--${density}`,
    selected && 'itss-table-cell--selected',
    disabled && 'itss-table-cell--disabled',
    error && 'itss-table-cell--error',
    className,
  ].filter(Boolean).join(' ')

  function renderContent() {
    switch (type) {
      case 'header':
        return (
          <div className="itss-table-cell__row">
            <span className="itss-table-cell__header-label">{label}</span>
            {sortState !== undefined && (
              <TableSortButton state={sortState} onClick={onSort} className="itss-table-cell__sort-icon" />
            )}
          </div>
        )

      case 'text':
        return (
          <div className="itss-table-cell__col">
            <span className="itss-table-cell__label">{label}</span>
            {subtitle && <span className="itss-table-cell__subtitle">{subtitle}</span>}
          </div>
        )

      case 'avatar-text': {
        const avatarType = avatarSrc ? 'photo' : avatarInitials ? 'initials' : 'no-photo'
        return (
          <div className="itss-table-cell__row itss-table-cell__row--avatar-gap">
            <Avatar type={avatarType} size="normal" src={avatarSrc} initials={avatarInitials} alt={avatarAlt} />
            <div className="itss-table-cell__col itss-table-cell__col--flex">
              <span className="itss-table-cell__label">{label}</span>
              {subtitle && <span className="itss-table-cell__subtitle">{subtitle}</span>}
            </div>
          </div>
        )
      }

      case 'element-text':
        return (
          <div className="itss-table-cell__row itss-table-cell__row--element-gap">
            {element ?? <Status status="pending" />}
            <span className="itss-table-cell__label itss-table-cell__label--nowrap">{label}</span>
          </div>
        )

      case 'dropdown':
        return (
          <button type="button" className="itss-table-cell__dropdown-trigger" disabled={disabled}>
            <span className="itss-table-cell__label itss-table-cell__label--nowrap">{label}</span>
            <Icon name="chevron-down" size={16} />
          </button>
        )

      case 'checkbox':
        return (
          <Checkbox
            size="small"
            selected={checked}
            disabled={disabled}
            onClick={() => onChange?.(!checked)}
          />
        )

      case 'toggle':
        return (
          <Switch
            selected={checked}
            disabled={disabled}
            onClick={() => onChange?.(!checked)}
          />
        )

      case 'actions-icons':
        return (
          <div className="itss-table-cell__row itss-table-cell__row--actions-gap">
            {actions ?? (
              <>
                <button type="button" className="itss-table-cell__icon-btn" aria-label="Edit">
                  <Icon name="edit" size={16} />
                </button>
                <button type="button" className="itss-table-cell__icon-btn" aria-label="More options">
                  <Icon name="overflow-vertical" size={16} />
                </button>
              </>
            )}
          </div>
        )

      case 'actions-link-button':
        return (
          <button
            type="button"
            className="itss-table-cell__link-btn"
            disabled={disabled}
            onClick={onClick}
          >
            {label}
          </button>
        )

      case 'image':
        return imageSrc
          ? <img src={imageSrc} alt={imageAlt ?? ''} className="itss-table-cell__image" />
          : <div className="itss-table-cell__image-placeholder"><Icon name="image" size={24} /></div>

      case 'chips':
        return (
          <div className="itss-table-cell__chips-row">
            {chips.map((chip, i) => (
              <span key={i} className="itss-table-cell__chip">{chip}</span>
            ))}
            <button type="button" className="itss-table-cell__icon-btn" aria-label="Show more">
              <Icon name="chevron-down" size={16} />
            </button>
          </div>
        )

      case 'empty':
      default:
        return <span className="itss-table-cell__empty">--</span>
    }
  }

  return (
    <div className={classes}>
      {renderContent()}
    </div>
  )
}
