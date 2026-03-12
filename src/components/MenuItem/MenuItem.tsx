import { Avatar } from '../Avatar/Avatar'
import { Divider } from '../Divider/Divider'
import { Icon } from '../Icon/Icon'
import { Signal } from '../Signal/Signal'
import './MenuItem.css'

export type MenuItemType =
  | 'default'
  | 'single-select'
  | 'multi-select'
  | 'person'
  | 'clearable'
  | 'category'
  | 'section-title'

export interface MenuItemProps {
  type?: MenuItemType
  // Label-based content (all types except person)
  label?: string
  subtitle?: string
  leadingIcon?: React.ReactNode
  // default: optional signal pill
  signal?: string
  // single-select / multi-select: selection state
  checked?: boolean
  // person: avatar + identity
  avatarSrc?: string
  avatarInitials?: string
  name?: string
  jobTitle?: string
  // section-title: optional divider above item
  divider?: boolean
  // interaction
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

// ── Sub-pieces ────────────────────────────────────────────────────

function LabelFrame({ label, subtitle, bold }: { label: string; subtitle?: string; bold?: boolean }) {
  return (
    <span className="itss-menu-item__label-frame">
      <span className={['itss-menu-item__label', bold && 'itss-menu-item__label--bold'].filter(Boolean).join(' ')}>
        {label}
      </span>
      {subtitle && <span className="itss-menu-item__subtitle">{subtitle}</span>}
    </span>
  )
}

function LeadingIconFrame({ icon }: { icon: React.ReactNode }) {
  return <span className="itss-menu-item__icon-frame">{icon}</span>
}

// ── Component ─────────────────────────────────────────────────────

export function MenuItem({
  type = 'default',
  label = 'Option',
  subtitle,
  leadingIcon,
  signal,
  checked = false,
  avatarSrc,
  avatarInitials,
  name = 'Name Name',
  jobTitle,
  divider = false,
  onClick,
  className,
}: MenuItemProps) {
  // ── section-title (non-interactive) ─────────────────────────────
  if (type === 'section-title') {
    return (
      <div className={['itss-menu-item', 'itss-menu-item--section-title', className].filter(Boolean).join(' ')}>
        {divider && (
          <div className="itss-menu-item__divider-wrap">
            <Divider />
          </div>
        )}
        <span className="itss-menu-item__section-label">{label}</span>
      </div>
    )
  }

  const baseClass = [
    'itss-menu-item',
    `itss-menu-item--${type}`,
    checked && 'itss-menu-item--checked',
    className,
  ].filter(Boolean).join(' ')

  // ── person ───────────────────────────────────────────────────────
  if (type === 'person') {
    return (
      <button type="button" className={baseClass} onClick={onClick}>
        <Avatar
          type={avatarSrc ? 'photo' : avatarInitials ? 'initials' : 'no-photo'}
          size="normal"
          src={avatarSrc}
          initials={avatarInitials}
          alt={name}
        />
        <span className="itss-menu-item__label-frame">
          <span className="itss-menu-item__label itss-menu-item__label--bold">{name}</span>
          {jobTitle && <span className="itss-menu-item__subtitle">{jobTitle}</span>}
        </span>
      </button>
    )
  }

  // ── multi-select ─────────────────────────────────────────────────
  if (type === 'multi-select') {
    return (
      <button type="button" className={baseClass} onClick={onClick}>
        <span className={['itss-menu-item__checkbox', checked && 'itss-menu-item__checkbox--checked'].filter(Boolean).join(' ')}>
          {checked && <Icon name="tick" size={16} />}
        </span>
        {leadingIcon && <LeadingIconFrame icon={leadingIcon} />}
        <LabelFrame label={label} subtitle={subtitle} />
      </button>
    )
  }

  // ── single-select ────────────────────────────────────────────────
  if (type === 'single-select') {
    return (
      <button type="button" className={baseClass} onClick={onClick}>
        {leadingIcon && <LeadingIconFrame icon={leadingIcon} />}
        <LabelFrame label={label} subtitle={subtitle} bold={checked} />
        {checked && <Icon name="tick" size={16} className="itss-menu-item__tick" />}
      </button>
    )
  }

  // ── category ─────────────────────────────────────────────────────
  if (type === 'category') {
    return (
      <button type="button" className={baseClass} onClick={onClick}>
        {leadingIcon && <LeadingIconFrame icon={leadingIcon} />}
        <LabelFrame label={label} subtitle={subtitle} />
        <Icon name="chevron-right" size={16} className="itss-menu-item__chevron" />
      </button>
    )
  }

  // ── clearable ─────────────────────────────────────────────────────
  if (type === 'clearable') {
    return (
      <button type="button" className={baseClass} onClick={onClick}>
        {leadingIcon && <LeadingIconFrame icon={leadingIcon} />}
        <LabelFrame label={label} subtitle={subtitle} />
      </button>
    )
  }

  // ── default (and fallback) ────────────────────────────────────────
  return (
    <button type="button" className={baseClass} onClick={onClick}>
      {leadingIcon && <LeadingIconFrame icon={leadingIcon} />}
      <LabelFrame label={label} subtitle={subtitle} />
      {signal && <Signal label={signal} />}
    </button>
  )
}
