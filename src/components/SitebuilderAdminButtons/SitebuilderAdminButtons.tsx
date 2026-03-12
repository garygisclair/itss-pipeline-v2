import React from 'react'
import { Icon } from '../Icon/Icon'
import './SitebuilderAdminButtons.css'

export interface SitebuilderAdminButtonsProps {
  primaryLabel: string
  primaryIcon?: string
  onPrimaryClick?: () => void
  secondaryLabel?: string
  onSecondaryClick?: () => void
  className?: string
}

export const SitebuilderAdminButtons: React.FC<SitebuilderAdminButtonsProps> = ({
  primaryLabel,
  primaryIcon = 'edit',
  onPrimaryClick,
  secondaryLabel = 'Manage Site',
  onSecondaryClick,
  className,
}) => {
  const classes = ['itss-sb-admin-btns', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <button type="button" className="itss-sb-admin-btns__btn" onClick={onPrimaryClick}>
        <Icon name={primaryIcon} size={16} />
        <span className="itss-sb-admin-btns__label">{primaryLabel}</span>
      </button>

      <span className="itss-sb-admin-btns__divider" aria-hidden="true" />

      <button type="button" className="itss-sb-admin-btns__btn" onClick={onSecondaryClick}>
        <span className="itss-sb-admin-btns__label">{secondaryLabel}</span>
      </button>
    </div>
  )
}
