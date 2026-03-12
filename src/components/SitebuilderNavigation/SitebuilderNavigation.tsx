import React from 'react'
import { SitebuilderNavigationLink } from '../SitebuilderNavigationLink/SitebuilderNavigationLink'
import { Icon } from '../Icon/Icon'
import './SitebuilderNavigation.css'

export interface SitebuilderNavigationLinkItem {
  label: string
  active?: boolean
  showChevron?: boolean
}

export interface SitebuilderNavigationProps {
  siteName?: string
  links?: SitebuilderNavigationLinkItem[]
  onLinkClick?: (index: number) => void
  onAiClick?: () => void
  onBookmarkClick?: () => void
  className?: string
}

export const SitebuilderNavigation: React.FC<SitebuilderNavigationProps> = ({
  siteName = 'Sitename',
  links = [],
  onLinkClick,
  onAiClick,
  onBookmarkClick,
  className,
}) => {
  const classes = ['itss-sb-nav', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {/* Left: site name + nav links */}
      <div className="itss-sb-nav__left">
        <span className="itss-sb-nav__site-name">{siteName}</span>
        {links.length > 0 && (
          <div className="itss-sb-nav__links">
            {links.map((link, i) => (
              <SitebuilderNavigationLink
                key={i}
                label={link.label}
                active={link.active}
                showChevron={link.showChevron}
                onClick={onLinkClick ? () => onLinkClick(i) : undefined}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: icon buttons */}
      <div className="itss-sb-nav__actions">
        <button type="button" className="itss-sb-nav__icon-btn" onClick={onAiClick} aria-label="AI">
          <Icon name="ai" size={20} />
        </button>
        <button type="button" className="itss-sb-nav__icon-btn" onClick={onBookmarkClick} aria-label="Bookmark">
          <Icon name="bookmark" size={20} />
        </button>
      </div>
    </div>
  )
}
