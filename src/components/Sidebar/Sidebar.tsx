import React from 'react'
import './Sidebar.css'
import { Icon } from '../Icon/Icon'
import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem'
import { Divider } from '../Divider/Divider'
import { ToolLogo } from '../ToolLogo/ToolLogo'

export type SidebarLayout = 'expanded' | 'collapsed' | 'interactive'

export type SidebarProps = {
  layout?: SidebarLayout
}

const SITE_ITEMS = [
  { name: 'Company',              icon: <Icon name="arrow-right"   size={20} />, showChevron: true  },
  { name: 'Organization Sites',  icon: <Icon name="hub-org-sites"  size={20} />, showChevron: true  },
  { name: 'People Central',      icon: <Icon name="profile"        size={20} />                     },
  { name: 'Third Party Engagement', icon: <Icon name="hub-handshake" size={20} />                   },
  { name: 'Travel & Expenses',   icon: <Icon name="hub-briefcase"  size={20} />                     },
  { name: 'PO & Invoices',       icon: <Icon name="file"           size={20} />                     },
  { name: 'IT Services',         icon: <Icon name="phone"          size={20} />                     },
  { name: 'Legal',               icon: <Icon name="hub-legal"      size={20} />                     },
  { name: 'Security & Workplace', icon: <Icon name="hub-workplace" size={20} />                     },
]

const TOOL_ITEMS = [
  { name: 'Bookmarks',           icon: <Icon name="bookmark"       size={20} />, showChevron: true  },
  { name: 'Book a Meeting Room', icon: <Icon name="hub-bookspace"  size={20} />                     },
  { name: 'YJMMD',               icon: <Icon name="hub-yjmmd"      size={20} />                     },
  { name: 'HubGPT',              icon: <Icon name="robot"          size={20} />                     },
  { name: 'Glean',               icon: <ToolLogo name="glean" size={20} />,
                                  trailingIcon: <Icon name="external-link" size={16} className="itss-sidebar-menu-item__chevron" /> },
  { name: 'All Tools',           icon: <Icon name="categories"     size={20} />                     },
]

export function Sidebar({ layout = 'expanded' }: SidebarProps) {
  const menuLayout = layout === 'collapsed' ? 'collapsed' : 'expanded'

  return (
    <div className={`itss-sidebar itss-sidebar--${layout}`}>
      <div className="itss-sidebar__section">
        {SITE_ITEMS.map(({ name, icon, showChevron }) => (
          <SidebarMenuItem
            key={name}
            layout={menuLayout}
            type="site"
            name={name}
            icon={icon}
            showChevron={!!showChevron}
          />
        ))}
      </div>

      <Divider />

      <div className="itss-sidebar__section">
        {TOOL_ITEMS.map(({ name, icon, showChevron, trailingIcon }) => (
          <SidebarMenuItem
            key={name}
            layout={menuLayout}
            type="site"
            name={name}
            icon={icon}
            showChevron={!!showChevron}
            trailingIcon={trailingIcon}
          />
        ))}
      </div>
    </div>
  )
}
