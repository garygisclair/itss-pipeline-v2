import React, { useState } from 'react'
import { HubLogo, HubLogoStacked } from '../Logo/Logo'
import { Icon } from '../Icon/Icon'
import { NavBarAvatar } from '../NavBarAvatar/NavBarAvatar'
import './HubHeader.css'

export interface HubHeaderProps {
  avatarSrc?: string
  avatarProgress?: number
  onAvatarClick?: () => void
  notificationCount?: number
  onNotificationClick?: () => void
  /** Search icon click handler (<1200px) */
  onSearchClick?: () => void
  onCategoriesClick?: () => void
  searchPlaceholder?: string
  onSearchChange?: (value: string) => void
  aiToolsLabel?: string
  onAiToolsClick?: () => void
  onHubGptClick?: () => void
  onChatGptClick?: () => void
  onLocationClick?: () => void
  onMenuClick?: () => void
  onLogoClick?: () => void
  className?: string
}

export const HubHeader: React.FC<HubHeaderProps> = ({
  avatarSrc,
  avatarProgress,
  onAvatarClick,
  notificationCount = 0,
  onNotificationClick,
  onSearchClick,
  onCategoriesClick,
  searchPlaceholder = 'Search eBay or ask a question',
  onSearchChange,
  aiToolsLabel = 'AI Tools',
  onAiToolsClick,
  onHubGptClick,
  onChatGptClick,
  onLocationClick,
  onMenuClick,
  onLogoClick,
  className,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const classes = ['itss-hub-header', className].filter(Boolean).join(' ')

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    onSearchChange?.(e.target.value)
  }

  const handleSearchClear = () => {
    setSearchValue('')
    onSearchChange?.('')
  }

  return (
    <div className="itss-hub-header__container">
    <header className={classes}>

      {/* ── Left side ─────────────────────────────────────────── */}
      <div className="itss-hub-header__left">

        {/* Mobile only: hamburger */}
        <button type="button" className="itss-hub-header__icon-btn itss-hub-header__menu-btn" onClick={onMenuClick} aria-label="Menu">
          <Icon name="menu" size={24} />
        </button>

        {/* Mobile only: stacked logo */}
        <button type="button" className="itss-hub-header__logo-stacked-btn" onClick={onLogoClick} aria-label="Home">
          <HubLogoStacked width={48} height={48} />
        </button>

        {/* ≥768: horizontal logo */}
        <button type="button" className="itss-hub-header__logo-btn" onClick={onLogoClick} aria-label="Home">
          <HubLogo width={121} height={28} />
        </button>

        {/* ≥768: location + AI tools pill */}
        <div className="itss-hub-header__tools">
          <button type="button" className="itss-hub-header__icon-btn itss-hub-header__icon-btn--secondary" onClick={onLocationClick} aria-label="Global Locations">
            <Icon name="building" size={16} />
          </button>

          <div className="itss-hub-header__ai-pill">
            {/* 768–1199 only: label + chevron */}
            <button type="button" className="itss-hub-header__ai-label-btn" onClick={onAiToolsClick}>
              <span className="itss-hub-header__ai-label-text">{aiToolsLabel}</span>
              <Icon name="chevron-right" size={16} />
            </button>
            {/* AI icon buttons — always visible inside pill */}
            <div className="itss-hub-header__ai-icons">
              <button type="button" className="itss-hub-header__icon-btn itss-hub-header__icon-btn--sm" onClick={onHubGptClick} aria-label="HubGPT">
                <Icon name="robot" size={24} />
              </button>
              <button type="button" className="itss-hub-header__icon-btn itss-hub-header__icon-btn--sm" onClick={onChatGptClick} aria-label="ChatGPT">
                <Icon name="chatgpt" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ≥1200: inline search bar */}
        <div className="itss-hub-header__search-bar">
          <span className="itss-hub-header__search-icon-wrap">
            <Icon name="search" size={20} />
          </span>
          <input
            type="text"
            className="itss-hub-header__search-input"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={handleSearchInput}
            aria-label="Search"
          />
          {searchValue && (
            <button type="button" className="itss-hub-header__search-clear" onClick={handleSearchClear} aria-label="Clear search">
              <Icon name="clear" size={20} />
            </button>
          )}
        </div>
      </div>

      {/* ── Right side ────────────────────────────────────────── */}
      <div className="itss-hub-header__right">
        <div className="itss-hub-header__btn-group">

          {/* <1200: search icon */}
          <button type="button" className="itss-hub-header__icon-btn itss-hub-header__search-icon-btn" onClick={onSearchClick} aria-label="Search">
            <Icon name="search" size={24} />
          </button>

          {/* Notification + badge */}
          <div className="itss-hub-header__notification">
            <button type="button" className="itss-hub-header__icon-btn" onClick={onNotificationClick} aria-label="Notifications">
              <Icon name="notification" size={24} />
            </button>
            {notificationCount > 0 && (
              <div className="itss-hub-header__badge" aria-label={`${notificationCount} notifications`}>
                <span className="itss-hub-header__badge-count">
                  {notificationCount > 99 ? '99+' : notificationCount}
                </span>
              </div>
            )}
          </div>

          {/* Categories */}
          <button type="button" className="itss-hub-header__icon-btn" onClick={onCategoriesClick} aria-label="All Tools">
            <Icon name="categories" size={24} />
          </button>

        </div>

        <button type="button" className="itss-hub-header__avatar-btn" onClick={onAvatarClick} aria-label="My profile">
          <NavBarAvatar src={avatarSrc} progress={avatarProgress} />
        </button>
      </div>

    </header>
    </div>
  )
}
