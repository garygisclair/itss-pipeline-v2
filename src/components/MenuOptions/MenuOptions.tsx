import { MenuItem } from '../MenuItem/MenuItem'
import type { MenuItemProps } from '../MenuItem/MenuItem'
import './MenuOptions.css'

export interface MenuOptionsProps {
  items: MenuItemProps[]
  className?: string
}

export function MenuOptions({ items, className }: MenuOptionsProps) {
  return (
    <div className={['itss-menu-options', className].filter(Boolean).join(' ')}>
      {items.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </div>
  )
}
