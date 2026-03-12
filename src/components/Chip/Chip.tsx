import React from 'react'
import './Chip.css'
import { Avatar } from '../Avatar/Avatar'
import { Icon } from '../Icon/Icon'

export type ChipType = 'avatar' | 'default'

interface ChipProps {
  /** 'avatar' shows a user photo + label; 'default' shows optional icon + label */
  type?: ChipType
  label?: string
  /** Show the remove (×) button */
  removable?: boolean
  /** Default type only — show a leading icon */
  showIcon?: boolean
  /** Default type only — custom leading icon node; falls back to a placeholder if omitted */
  icon?: React.ReactNode
  /** Avatar type — photo src */
  avatarSrc?: string
  /** Avatar type — photo alt text */
  avatarAlt?: string
  /** Avatar type — initials to display (triggers initials avatar when no src) */
  avatarInitials?: string
  /** Called when the remove button is clicked */
  onRemove?: () => void
}

export const Chip: React.FC<ChipProps> = ({
  type = 'avatar',
  label = 'Text Label',
  removable = true,
  showIcon = false,
  icon,
  avatarSrc,
  avatarAlt = '',
  avatarInitials,
  onRemove,
}) => {
  return (
    <div className={`itss-chip itss-chip--${type}`}>
      <div className="itss-chip__content">
        {type === 'avatar' && (
          <Avatar
            type={avatarSrc ? 'photo' : avatarInitials ? 'initials' : 'no-photo'}
            size="small"
            src={avatarSrc}
            alt={avatarAlt}
            initials={avatarInitials}
          />
        )}
        {type === 'default' && showIcon && (
          <span className="itss-chip__icon">
            {icon ?? <Icon name="coffee" size={16} />}
          </span>
        )}
        <span className="itss-chip__label">{label}</span>
      </div>

      {removable && (
        <button
          className="itss-chip__remove"
          onClick={onRemove}
          aria-label="Remove"
          type="button"
        >
          <Icon name="close" size={12} />
        </button>
      )}
    </div>
  )
}
