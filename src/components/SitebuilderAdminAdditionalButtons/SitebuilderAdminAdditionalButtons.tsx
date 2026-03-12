import React from 'react'
import { SitebuilderAdminButtons } from '../SitebuilderAdminButtons/SitebuilderAdminButtons'
import { Icon } from '../Icon/Icon'
import './SitebuilderAdminAdditionalButtons.css'

export type SitebuilderAdminAdditionalButtonsVariant = 'default' | 'followers' | 'member' | 'memberAdmin'

export interface SitebuilderAdminAdditionalButtonsProps {
  variant?: SitebuilderAdminAdditionalButtonsVariant
  /** Label for the primary admin action (e.g. "Edit Page") */
  primaryLabel?: string
  /** Icon name for the primary action */
  primaryIcon?: string
  onPrimaryClick?: () => void
  /** Label for the secondary admin link (e.g. "Manage Site") */
  secondaryLabel?: string
  onSecondaryClick?: () => void
  /** Follower count shown in the followers pill (followers / member / memberAdmin variants) */
  followerCount?: number | string
  /** CTA button click — "Follow Site" or "Member" depending on variant */
  onCtaClick?: () => void
  /** Settings icon button click (memberAdmin variant only) */
  onSettingsClick?: () => void
  className?: string
}

export const SitebuilderAdminAdditionalButtons: React.FC<SitebuilderAdminAdditionalButtonsProps> = ({
  variant = 'default',
  primaryLabel = 'Edit Page',
  primaryIcon = 'edit',
  onPrimaryClick,
  secondaryLabel = 'Manage Site',
  onSecondaryClick,
  followerCount = 300,
  onCtaClick,
  onSettingsClick,
  className,
}) => {
  const classes = ['itss-sb-add-btns', className].filter(Boolean).join(' ')
  const showFollowers = variant !== 'default'
  const isMember = variant === 'member' || variant === 'memberAdmin'
  const showSettings = variant === 'memberAdmin'

  return (
    <div className={classes}>
      <SitebuilderAdminButtons
        primaryLabel={primaryLabel}
        primaryIcon={primaryIcon}
        onPrimaryClick={onPrimaryClick}
        secondaryLabel={secondaryLabel}
        onSecondaryClick={onSecondaryClick}
      />

      {showFollowers && (
        <div className="itss-sb-add-btns__followers">
          <Icon name="tick" size={16} />
          <span className="itss-sb-add-btns__followers-count">{followerCount}</span>
        </div>
      )}

      <button
        type="button"
        className={['itss-sb-add-btns__cta', isMember && 'itss-sb-add-btns__cta--member'].filter(Boolean).join(' ')}
        onClick={onCtaClick}
      >
        {isMember && <Icon name="profile" size={16} />}
        <span className="itss-sb-add-btns__cta-label">{isMember ? 'Member' : 'Follow Site'}</span>
      </button>

      {showSettings && (
        <button type="button" className="itss-sb-add-btns__settings" onClick={onSettingsClick} aria-label="Settings">
          <Icon name="settings" size={20} />
        </button>
      )}
    </div>
  )
}
