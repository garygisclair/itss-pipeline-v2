import { useState } from 'react'
import { Icon } from '../Icon/Icon'
import { IconButton } from '../IconButton/IconButton'
import { MenuOptions } from '../MenuOptions/MenuOptions'
import { SelectAllBar } from '../SelectAllBar/SelectAllBar'
import { ApplyOrClearSelectionBar } from '../ApplyOrClearSelectionBar/ApplyOrClearSelectionBar'
import type { MenuItemProps } from '../MenuItem/MenuItem'
import './Menu.css'

export interface MenuProps {
  items: MenuItemProps[]
  // Search
  searchBar?: boolean
  searchPlaceholder?: string
  onSearchChange?: (value: string) => void
  // Select all
  selectAllBar?: boolean
  selectAllChecked?: boolean
  selectAllIndeterminate?: boolean
  onSelectAllChange?: (checked: boolean) => void
  // Apply / clear bar
  applyOrClearBar?: boolean
  applyLabel?: string
  clearLabel?: string
  onApply?: () => void
  onClear?: () => void
  // Title navigation
  titleBar?: boolean
  title?: string
  backButton?: boolean
  onBack?: () => void
  // Layout
  maxHeight?: number
  className?: string
}

export function Menu({
  items,
  searchBar = false,
  searchPlaceholder = 'Search',
  onSearchChange,
  selectAllBar = false,
  selectAllChecked = false,
  selectAllIndeterminate = false,
  onSelectAllChange,
  applyOrClearBar = false,
  applyLabel = 'Apply',
  clearLabel = 'Clear all',
  onApply,
  onClear,
  titleBar = false,
  title = 'Title',
  backButton = true,
  onBack,
  maxHeight = 320,
  className,
}: MenuProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    onSearchChange?.(e.target.value)
  }

  return (
    <div className={['itss-menu', className].filter(Boolean).join(' ')}>

      {titleBar && (
        <div className="itss-menu__title-bar">
          {backButton && (
            <IconButton
              style="secondary"
              size="small"
              icon={<Icon name="chevron-left" size={16} />}
              aria-label="Back"
              onClick={onBack}
            />
          )}
          <div className="itss-menu__title-wrap">
            <span className="itss-menu__title">{title}</span>
          </div>
        </div>
      )}

      {searchBar && (
        <div className="itss-menu__search-wrap">
          <div className="itss-menu__search-inner">
            <Icon name="search" size={16} className="itss-menu__search-icon" />
            <input
              type="text"
              className="itss-menu__search-input"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      )}

      {selectAllBar && (
        <SelectAllBar
          checked={selectAllChecked}
          indeterminate={selectAllIndeterminate}
          onChange={onSelectAllChange}
        />
      )}

      <div className="itss-menu__scrollable" style={{ maxHeight }}>
        <MenuOptions items={items} />
      </div>

      {applyOrClearBar && (
        <ApplyOrClearSelectionBar
          applyLabel={applyLabel}
          clearLabel={clearLabel}
          onApply={onApply}
          onClear={onClear}
        />
      )}

    </div>
  )
}
