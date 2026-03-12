import React from 'react'
import { Icon } from '../Icon/Icon'
import './SitebuilderNavigationLink.css'

export interface SitebuilderNavigationLinkProps {
  label: string
  active?: boolean
  showChevron?: boolean
  onClick?: () => void
  className?: string
}

export const SitebuilderNavigationLink: React.FC<SitebuilderNavigationLinkProps> = ({
  label,
  active = false,
  showChevron = false,
  onClick,
  className,
}) => {
  const classes = [
    'itss-sb-nav-link',
    active && 'itss-sb-nav-link--active',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="itss-sb-nav-link__label">{label}</span>
      {showChevron && <Icon name="chevron-down" size={12} />}
    </button>
  )
}
