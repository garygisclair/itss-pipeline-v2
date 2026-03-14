import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Welcome } from './welcome'
import { Playground } from './playground'
import { Docs } from './docs'
import './tokens.css'
import './preview.css'
import { Signal } from './components/Signal/Signal'
import { Status } from './components/Status/Status'
import { ProgressDonut } from './components/ProgressDonut/ProgressDonut'
import { TableCellProgressDonut } from './components/TableCellProgressDonut/TableCellProgressDonut'
import { TableCell } from './components/TableCell/TableCell'
import { TableSortButton } from './components/TableSortButton/TableSortButton'
import type { TableSortState } from './components/TableSortButton/TableSortButton'
import { TableColumn } from './components/TableColumn/TableColumn'
import type { TableColumnDensity } from './components/TableColumn/TableColumn'
import type { StatusVariant } from './components/Status/Status'
import { ToolLogo, getToolLogoNames } from './components/ToolLogo/ToolLogo'
import { SourceTypeLogo, getSourceTypeLogoNames } from './components/SourceTypeLogo/SourceTypeLogo'
import { FileIcon, getFileIconNames } from './components/FileIcon/FileIcon'
import { Illustration } from './components/Illustration/Illustration'
import { EmptyState } from './components/EmptyState/EmptyState'
import { Avatar } from './components/Avatar/Avatar'
import { Badge } from './components/Badge/Badge'
import { Chip } from './components/Chip/Chip'
import { Divider } from './components/Divider/Divider'
import { MenuItem } from './components/MenuItem/MenuItem'
import { ApplyOrClearSelectionBar } from './components/ApplyOrClearSelectionBar/ApplyOrClearSelectionBar'
import { SelectAllBar } from './components/SelectAllBar/SelectAllBar'
import { SectionLabel } from './components/SectionLabel/SectionLabel'
import { MenuOptions } from './components/MenuOptions/MenuOptions'
import { Menu } from './components/Menu/Menu'
import { SectionNotice } from './components/SectionNotice/SectionNotice'
import { PageNotice } from './components/PageNotice/PageNotice'
import { AlertDialog } from './components/AlertDialog/AlertDialog'
import { DropdownButton } from './components/DropdownButton/DropdownButton'
import { Filter } from './components/Filter/Filter'
import { Radio } from './components/Radio/Radio'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Switch } from './components/Switch/Switch'
import { SelectionItem } from './components/SelectionItem/SelectionItem'
import { Dialog } from './components/Dialog/Dialog'
import { IconButton } from './components/IconButton/IconButton'
import { LinkButton } from './components/LinkButton/LinkButton'
import { Tooltip } from './components/Tooltip/Tooltip'
import { ContactButton } from './components/ContactButton/ContactButton'
import { Accordion } from './components/Accordion/Accordion'
import { Popover } from './components/Popover/Popover'
import { Toast } from './components/Toast/Toast'
import { Snackbar } from './components/Snackbar/Snackbar'
import { Tab } from './components/Tab/Tab'
import { VerticalTab } from './components/VerticalTab/VerticalTab'
import { HorizontalTabGroup } from './components/HorizontalTabGroup/HorizontalTabGroup'
import { VerticalTabGroup } from './components/VerticalTabGroup/VerticalTabGroup'
import { SegmentedButton } from './components/SegmentedButton/SegmentedButton'
import { SegmentedButtons } from './components/SegmentedButtons/SegmentedButtons'
import { ProgressStep } from './components/ProgressStep/ProgressStep'
import { ProgressStepper } from './components/ProgressStepper/ProgressStepper'
import { PaginationPageTab } from './components/PaginationPageTab/PaginationPageTab'
import { PaginationPageOverflow } from './components/PaginationPageOverflow/PaginationPageOverflow'
import { PaginationDot } from './components/PaginationDot/PaginationDot'
import { PaginationDots } from './components/PaginationDots/PaginationDots'
import { Pagination } from './components/Pagination/Pagination'
import { NavBarAvatar } from './components/NavBarAvatar/NavBarAvatar'
import { HubHeader } from './components/HubHeader/HubHeader'
import { SitebuilderAdminButtons } from './components/SitebuilderAdminButtons/SitebuilderAdminButtons'
import { SidebarMenuItem } from './components/SidebarMenuItem/SidebarMenuItem'
import { Sidebar } from './components/Sidebar/Sidebar'
import { InputTitle } from './components/InputTitle/InputTitle'
import { InputHelpText } from './components/InputHelpText/InputHelpText'
import { InputValueField } from './components/InputValueField/InputValueField'
import { InputField } from './components/InputField/InputField'
import { TextAreaField } from './components/TextAreaField/TextAreaField'
import { DropdownField } from './components/DropdownField/DropdownField'
import { LookupField } from './components/LookupField/LookupField'
import { InputDraggable } from './components/InputDraggable/InputDraggable'
import { DatePickerDateButton } from './components/DatePickerDateButton/DatePickerDateButton'
import { DatePickerDayLabel } from './components/DatePickerDayLabel/DatePickerDayLabel'
import { DatePickerYearMonthButton } from './components/DatePickerYearMonthButton/DatePickerYearMonthButton'
import { DatePickerDropdownButton } from './components/DatePickerDropdownButton/DatePickerDropdownButton'
import { DatePickerHeader } from './components/DatePickerHeader/DatePickerHeader'
import { DatePickerFooter } from './components/DatePickerFooter/DatePickerFooter'
import { DatePickerRangeSelector } from './components/DatePickerRangeSelector/DatePickerRangeSelector'
import { SingleDatePicker } from './components/SingleDatePicker/SingleDatePicker'
import { DateField } from './components/DateField/DateField'
import { SearchBar } from './components/SearchBar/SearchBar'
import { SitebuilderAdminAdditionalButtons } from './components/SitebuilderAdminAdditionalButtons/SitebuilderAdminAdditionalButtons'
import { SitebuilderNavigationLink } from './components/SitebuilderNavigationLink/SitebuilderNavigationLink'
import { SitebuilderNavigation } from './components/SitebuilderNavigation/SitebuilderNavigation'
import { CtaButton } from './components/Button/CtaButton'
import { DestructiveButton } from './components/DestructiveButton/DestructiveButton'
import { Spinner } from './components/Spinner/Spinner'
import { Icon, getAvailableSizes, ScalableIcon, getScalableIconNames } from './components/Icon/Icon'
import { StateLayer } from './components/StateLayer/StateLayer'
import type { StateLayerState, StateLayerType } from './components/StateLayer/StateLayer'
import {
  EbayLogo, EbayMonoLogo,
  HubLogo, HubLogoDark, HubLogoStacked, HubFavicon,
  HubGPTLogo, HubGPTFavicon,
  PeopleXLogo,
} from './components/Logo/Logo'

// ── Icon categories ───────────────────────────────────────────
type IconCategory = { title: string; icons: string[] }

const ICON_CATEGORIES: IconCategory[] = [
  {
    title: 'Navigation',
    icons: [
      'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
      'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
      'categories', 'close', 'external-link', 'home',
      'menu', 'notification', 'overflow-vertical', 'overflow-horizontal',
      'search', 'settings',
    ],
  },
  {
    title: 'Actions',
    icons: [
      'add', 'attach', 'bookmark', 'bookmark-fill',
      'clear', 'compose', 'copy', 'delete', 'duplicate',
      'drag-drop', 'download', 'edit', 'filter',
      'hide', 'like', 'like-filled', 'link',
      'lock', 'lock-fill', 'mail', 'maximize', 'minimize',
      'mute', 'pause', 'pin', 'pin-fill', 'play',
      'remove', 'refresh', 'return', 'send', 'share',
      'show', 'show-fill', 'sort', 'sort-down', 'sort-up',
      'star', 'star-filled', 'sync',
      'thumb-up', 'thumb-up-fill', 'thumb-down', 'thumb-down-fill',
      'tick', 'responsive', 'unlock', 'upload',
    ],
  },
  {
    title: 'Objects',
    icons: [
      'ai', 'ai-fill', 'book', 'book-closed', 'box',
      'building', 'briefcase', 'calendar', 'chat',
      'chat-bubble', 'clipboard', 'clock', 'code',
      'code-block', 'codepen', 'code-sandbox', 'comment',
      'coffee', 'dashboard', 'database', 'dollar',
      'feather', 'file', 'flag', 'folder', 'graph',
      'gift', 'globe', 'hand-heart', 'handshake-heart',
      'hash', 'headphones', 'image', 'list-view',
      'location', 'masonry-view', 'mic', 'page',
      'phone', 'qr-code', 'org-chart', 'prompt',
      'profile', 'smile-face', 'video', 'rocket',
      'world', 'web-search',
    ],
  },
  {
    title: 'Status',
    icons: [
      'attention', 'attention-filled', 'attention-fill',
      'confirmation', 'confirmation-fill',
      'help', 'information', 'information-fill',
      'negative', 'negative-fill',
      'progress-current', 'progress-upcoming',
      'warning', 'warning-fill',
    ],
  },
  {
    title: 'Social',
    icons: ['facebook', 'twitter', 'linkedin', 'instagram', 'slack'],
  },
  {
    title: 'Specific',
    icons: ['robot', 'robot-fill', 'profile-code', 'chatgpt'],
  },
  {
    title: 'Hub',
    icons: [
      'hub-truck',
      'hub-arrow-right-circle',
      'hub-org-sites',
      'hub-handshake',
      'hub-briefcase',
      'hub-legal',
      'hub-workplace',
      'hub-bookspace',
      'hub-yjmmd',
    ],
  },
]

// ── State layer ───────────────────────────────────────────────
const STATE_LAYER_STATES: StateLayerState[] = ['enabled', 'hover', 'pressed', 'selected', 'focused']
const STATE_LAYER_TYPES: StateLayerType[] = ['default', 'heavy', 'on-fill']

// ── Link button ───────────────────────────────────────────────
const LEVELS = ['strong', 'subtle-primary', 'subtle-secondary', 'disabled'] as const
const INVERSE_LEVELS = ['inverse', 'subtle-inverse'] as const
const SIZES = ['large', 'medium', 'small'] as const

// ── Story components ──────────────────────────────────────────

function StoryFoundationsHubGPTColors() {
  const tokens = [
    { name: 'primary-accent',     light: '#00996C', dark: '#60D2B0' },
    { name: 'secondary-accent',   light: '#C7F5E7', dark: '#174539' },
    { name: 'active-highlight',   light: 'rgba(199,245,231,0.75)', dark: 'rgba(23,69,57,0.75)', lightLabel: '#C7F5E7, 75% opacity', darkLabel: '#174539, 75% opacity' },
    { name: 'primary-link',       light: '#0F805E', dark: '#60D2B0' },
    { name: 'primary-link-hover', light: '#0E7656', dark: '#73D7B9' },
  ]

  const swatchStyle: React.CSSProperties = {
    width: 96, height: 56, borderRadius: 8, flexShrink: 0,
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)',
  }
  const modeLabel: React.CSSProperties = {
    fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: 12, display: 'block',
  }

  const Section = ({ isDark }: { isDark: boolean }) => (
    <div>
      <span style={{ ...modeLabel, color: isDark ? '#8f8f8f' : 'var(--fg-secondary)' }}>
        {isDark ? 'Dark' : 'Light'}
      </span>
      <div style={{
        background: isDark ? '#191919' : undefined,
        borderRadius: isDark ? 12 : undefined,
        padding: isDark ? '20px 20px 16px' : undefined,
        display: 'flex', flexWrap: 'wrap', gap: 16,
      }}>
        {tokens.map(t => {
          const color = isDark ? t.dark : t.light
          const label = isDark ? (t.darkLabel ?? t.dark) : (t.lightLabel ?? t.light)
          return (
            <div key={t.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ ...swatchStyle, background: color }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: isDark ? '#f7f7f7' : 'var(--fg-primary)', fontFamily: 'monospace', lineHeight: 1.4 }}>
                  {t.name}
                </span>
                <span style={{ fontSize: 10, color: isDark ? '#8f8f8f' : 'var(--fg-secondary)', lineHeight: 1.4 }}>
                  {label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="preview-section">
      <p className="preview-section__title">HubGPT Brand Colors</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Section isDark={false} />
        <Section isDark={true} />
      </div>
    </div>
  )
}

function StoryFoundationsGridLayout() {
  const breakpoints = [
    { label: 'Mobile',  range: '< 768px',   columns: 4,  gutter: '24px', padding: '24px' },
    { label: 'Tablet',  range: '768–1023px', columns: 8,  gutter: '24px', padding: '24px' },
    { label: 'Desktop', range: '≥ 1024px',   columns: 12, gutter: '24px', padding: '24px' },
  ]

  const colColor = 'var(--bg-accent-subtle)'
  const colBorder = '1px solid var(--bg-accent)'

  return (
    <>
      <div className="preview-section">
        <p className="preview-section__title">12-Column Grid</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left' }}>
              {['Breakpoint', 'Viewport', 'Columns', 'Gutter', 'Padding'].map(h => (
                <th key={h} style={{ padding: '8px 12px', color: 'var(--fg-secondary)', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {breakpoints.map(({ label, range, columns, gutter, padding }) => (
              <tr key={label} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--fg-primary)' }}>{label}</td>
                <td style={{ padding: '10px 12px', color: 'var(--fg-secondary)', fontFamily: 'monospace' }}>{range}</td>
                <td style={{ padding: '10px 12px', color: 'var(--fg-primary)' }}>{columns}</td>
                <td style={{ padding: '10px 12px', color: 'var(--fg-primary)' }}>{gutter}</td>
                <td style={{ padding: '10px 12px', color: 'var(--fg-primary)' }}>{padding}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {breakpoints.map(({ label, columns }) => (
          <div key={label} style={{ marginBottom: 24 }}>
            <p className="preview-label" style={{ marginBottom: 8 }}>{label} — {columns} columns</p>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 8 }}>
              {Array.from({ length: columns }).map((_, i) => (
                <div key={i} style={{
                  background: colColor,
                  border: colBorder,
                  borderRadius: 4,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  color: 'var(--fg-accent)',
                  fontWeight: 600,
                }}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="preview-section">
        <p className="preview-section__title">CSS Class</p>
        <pre style={{ fontSize: 12, background: 'var(--bg-secondary)', padding: 16, borderRadius: 8, overflowX: 'auto', color: 'var(--fg-primary)', lineHeight: 1.6 }}>{`.hub-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* mobile */
  gap: 24px;
  padding: 24px;
}

@media (min-width: 768px)  { .hub-grid { grid-template-columns: repeat(8, 1fr);  } }
@media (min-width: 1024px) { .hub-grid { grid-template-columns: repeat(12, 1fr); } }`}</pre>
      </div>
    </>
  )
}

function StoryFoundationsElevation() {
  type ElevationLevel = {
    token: string
    label: string
    shadow: string
    border?: string
    usage: string
  }

  const levels: ElevationLevel[] = [
    {
      token: '--shadow-subtle',
      label: 'subtle',
      shadow: 'var(--shadow-subtle)',
      border: '1px solid var(--border-subtle)',
      usage: 'Cards, panels, low-prominence floating elements',
    },
    {
      token: '--shadow-strong',
      label: 'strong',
      shadow: 'var(--shadow-strong)',
      usage: 'Menus, popovers, modals, high-prominence surfaces',
    },
  ]

  const surfaces: { bg: string; label: string; dark?: boolean }[] = [
    { bg: 'var(--bg-primary)',   label: '--bg-primary' },
    { bg: 'var(--bg-secondary)', label: '--bg-secondary' },
    { bg: '#191919',             label: '--bg-primary (dark)',   dark: true },
    { bg: '#000000',             label: '--bg-secondary (dark)', dark: true },
  ]

  return (
    <>
      {surfaces.map(surface => (
        <div key={surface.label} className="preview-section">
          <p className="preview-section__title">On <code>{surface.label}</code></p>
          <div
            data-dark={surface.dark ? 'true' : undefined}
            style={{
              background: surface.bg,
              borderRadius: 12,
              padding: 32,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 32,
            }}
          >
            {levels.map(level => (
              <div key={level.token} style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: '1 1 240px' }}>
                {/* Sample card */}
                <div style={{
                  background: 'var(--bg-elevated)',
                  borderRadius: 16,
                  boxShadow: level.shadow,
                  border: level.border ?? 'none',
                  height: 100,
                }} />
                {/* Labels */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg-primary)', lineHeight: 1.4 }}>
                    {level.label}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--fg-primary)', fontFamily: 'monospace', lineHeight: 1.4 }}>
                    {level.token}
                  </span>
                  {level.border && (
                    <span style={{ fontSize: 10, color: 'var(--fg-secondary)', fontFamily: 'monospace', lineHeight: 1.4 }}>
                      + 1px solid --border-subtle on primary bg
                    </span>
                  )}
                  <span style={{ fontSize: 10, color: 'var(--fg-secondary)', lineHeight: 1.5, marginTop: 2 }}>
                    {level.usage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function StoryFoundationsBrandColors() {
  const BRAND_COLORS: { name: string; shades: { step: string; hex: string }[] }[] = [
    { name: 'pink',     shades: [{ step: '100', hex: '#FEF6FA' }, { step: '200', hex: '#FCDCEC' }, { step: '300', hex: '#F79CC8' }, { step: '400', hex: '#F155A0' }, { step: '500', hex: '#DE458E' }, { step: '600', hex: '#A51359' }, { step: '700', hex: '#4B112D' }, { step: '800', hex: '#360606' }] },
    { name: 'red',      shades: [{ step: '100', hex: '#FFF5F5' }, { step: '200', hex: '#FFDEDE' }, { step: '300', hex: '#FFA0A0' }, { step: '400', hex: '#FF5C5C' }, { step: '500', hex: '#F02D2D' }, { step: '600', hex: '#D50B0B' }, { step: '700', hex: '#570303' }, { step: '800', hex: '#2A0303' }] },
    { name: 'coral',    shades: [{ step: '100', hex: '#FFF7F5' }, { step: '200', hex: '#FFE1D7' }, { step: '300', hex: '#FFA78A' }, { step: '400', hex: '#FF6A38' }, { step: '500', hex: '#F3511B' }, { step: '600', hex: '#D03706' }, { step: '700', hex: '#5E1D08' }, { step: '800', hex: '#2F0E04' }] },
    { name: 'orange',   shades: [{ step: '100', hex: '#FFFAF5' }, { step: '200', hex: '#FFEAD3' }, { step: '300', hex: '#FFC382' }, { step: '400', hex: '#FF8806' }, { step: '500', hex: '#EC7303' }, { step: '600', hex: '#C15100' }, { step: '700', hex: '#562501' }, { step: '800', hex: '#2F1604' }] },
    { name: 'marigold', shades: [{ step: '100', hex: '#FFFBF5' }, { step: '200', hex: '#FFF0D3' }, { step: '300', hex: '#FFD480' }, { step: '400', hex: '#FFA800' }, { step: '500', hex: '#E99A02' }, { step: '600', hex: '#A36302' }, { step: '700', hex: '#562F01' }, { step: '800', hex: '#2F1B04' }] },
    { name: 'yellow',   shades: [{ step: '100', hex: '#FFFCF5' }, { step: '200', hex: '#FFF8D5' }, { step: '300', hex: '#FFE58A' }, { step: '400', hex: '#FFBD14' }, { step: '500', hex: '#EEBB04' }, { step: '600', hex: '#A36302' }, { step: '700', hex: '#553B06' }, { step: '800', hex: '#312102' }] },
    { name: 'dijon',    shades: [{ step: '100', hex: '#FFFDF5' }, { step: '200', hex: '#FCF9DE' }, { step: '300', hex: '#FAEF8A' }, { step: '400', hex: '#F6E016' }, { step: '500', hex: '#E8D20C' }, { step: '600', hex: '#766F28' }, { step: '700', hex: '#524500' }, { step: '800', hex: '#2E2400' }] },
    { name: 'avocado',  shades: [{ step: '100', hex: '#FDFEF6' }, { step: '200', hex: '#F8FCDE' }, { step: '300', hex: '#E9F5A0' }, { step: '400', hex: '#E3F13C' }, { step: '500', hex: '#C1D737' }, { step: '600', hex: '#68770D' }, { step: '700', hex: '#4E4E0C' }, { step: '800', hex: '#282306' }] },
    { name: 'green',    shades: [{ step: '100', hex: '#FBFEF6' }, { step: '200', hex: '#F0FCE1' }, { step: '300', hex: '#D5F6AA' }, { step: '400', hex: '#AAED56' }, { step: '500', hex: '#92C821' }, { step: '600', hex: '#507D17' }, { step: '700', hex: '#345110' }, { step: '800', hex: '#1C2D06' }] },
    { name: 'kiwi',     shades: [{ step: '100', hex: '#F6FEF6' }, { step: '200', hex: '#E0FAE0' }, { step: '300', hex: '#A6F0A5' }, { step: '400', hex: '#4CE160' }, { step: '500', hex: '#3CC14E' }, { step: '600', hex: '#288034' }, { step: '700', hex: '#1B561A' }, { step: '800', hex: '#0C310D' }] },
    { name: 'jade',     shades: [{ step: '100', hex: '#F7FDFB' }, { step: '200', hex: '#D8F8EE' }, { step: '300', hex: '#8FEACE' }, { step: '400', hex: '#1ED49E' }, { step: '500', hex: '#17C28F' }, { step: '600', hex: '#0F805E' }, { step: '700', hex: '#055743' }, { step: '800', hex: '#002B20' }] },
    { name: 'teal',     shades: [{ step: '100', hex: '#F7FDFD' }, { step: '200', hex: '#D7F4F6' }, { step: '300', hex: '#8EDFE5' }, { step: '400', hex: '#44CCD5' }, { step: '500', hex: '#1BBFCA' }, { step: '600', hex: '#006F93' }, { step: '700', hex: '#07465A' }, { step: '800', hex: '#04252F' }] },
    { name: 'indigo',   shades: [{ step: '100', hex: '#F5FBFF' }, { step: '200', hex: '#D3EFFE' }, { step: '300', hex: '#80D0FD' }, { step: '400', hex: '#0AA7FF' }, { step: '500', hex: '#0099F0' }, { step: '600', hex: '#0364AB' }, { step: '700', hex: '#003C66' }, { step: '800', hex: '#01193D' }] },
    { name: 'blue',     shades: [{ step: '100', hex: '#F5F9FF' }, { step: '200', hex: '#D4E5FE' }, { step: '300', hex: '#84B4FB' }, { step: '400', hex: '#4D93FC' }, { step: '500', hex: '#0968F6' }, { step: '600', hex: '#0049B8' }, { step: '700', hex: '#002A69' }, { step: '800', hex: '#19133A' }] },
    { name: 'violet',   shades: [{ step: '100', hex: '#F6F5FE' }, { step: '200', hex: '#E2DDFD' }, { step: '300', hex: '#AD9EFA' }, { step: '400', hex: '#836BFF' }, { step: '500', hex: '#583AEE' }, { step: '600', hex: '#3B1FC6' }, { step: '700', hex: '#271A68' }, { step: '800', hex: '#20092B' }] },
    { name: 'lilac',    shades: [{ step: '100', hex: '#FAF5FE' }, { step: '200', hex: '#EFDDFD' }, { step: '300', hex: '#CC9EF0' }, { step: '400', hex: '#B56BF0' }, { step: '500', hex: '#8935CB' }, { step: '600', hex: '#631F99' }, { step: '700', hex: '#3E135F' }, { step: '800', hex: '#2F041E' }] },
    { name: 'neutral',  shades: [{ step: '100', hex: '#FFFFFF' }, { step: '200', hex: '#F7F7F7' }, { step: '300', hex: '#E5E5E5' }, { step: '400', hex: '#C7C7C7' }, { step: '500', hex: '#8F8F8F' }, { step: '600', hex: '#707070' }, { step: '700', hex: '#363636' }, { step: '800', hex: '#191919' }, { step: '900', hex: '#000000' }] },
  ]

  const lightSwatchBorder = new Set(['#FFFFFF', '#F7F7F7', '#FEF6FA', '#FFF5F5', '#FFF7F5', '#FFFAF5', '#FFFBF5', '#FFFCF5', '#FFFDF5', '#FDFEF6', '#FBFEF6', '#F6FEF6', '#F7FDFB', '#F7FDFD', '#F5FBFF', '#F5F9FF', '#F6F5FE', '#FAF5FE'])

  return (
    <>
      {BRAND_COLORS.map(family => (
        <div key={family.name} style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 700, color: 'var(--fg-primary)', marginBottom: 12, textTransform: 'capitalize' }}>{family.name}</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {family.shades.map(shade => (
              <div key={shade.step} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{
                  width: 72,
                  height: 48,
                  background: shade.hex,
                  borderRadius: 8,
                  border: lightSwatchBorder.has(shade.hex.toUpperCase()) ? '1px solid var(--border-subtle)' : 'none',
                }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-family-primary)', fontSize: 11, fontWeight: 700, color: 'var(--fg-primary)', lineHeight: '16px' }}>{family.name}-{shade.step}</div>
                  <div style={{ fontFamily: 'var(--font-family-primary)', fontSize: 11, color: 'var(--fg-secondary)', lineHeight: '16px' }}>{shade.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function StoryFoundationsColors() {
  type Swatch = {
    token: string
    value: string
    darkValue?: string
    /** How to render: fill=solid bg, border=outline on white, state-light=overlay on bg-disabled, state-fill=overlay on bg-accent */
    mode?: 'fill' | 'border' | 'state-light' | 'state-fill'
  }

  type ColorGroup = {
    title: string
    swatches: Swatch[]
  }

  const groups: ColorGroup[] = [
    {
      title: 'Background — Surface',
      swatches: [
        { token: '--bg-primary',        value: '#ffffff',           darkValue: '#000000' },
        { token: '--bg-primary-bright',   value: '#ffffff',           darkValue: '#282828' },
        { token: '--bg-secondary',        value: '#f7f7f7',           darkValue: '#191919' },
        { token: '--bg-secondary-bright', value: '#f7f7f7',           darkValue: '#363636' },
        { token: '--bg-on-primary',     value: '#f7f7f7',           darkValue: '#191919' },
        { token: '--bg-on-secondary',   value: '#ffffff',           darkValue: '#191919' },
        { token: '--bg-tertiary',       value: 'rgba(0,0,0,0.10)', darkValue: 'rgba(255,255,255,0.16)' },
        { token: '--bg-elevated',       value: '#ffffff',           darkValue: '#282828' },
        { token: '--bg-on-elevated',    value: '#f7f7f7',           darkValue: '#282828' },
        { token: '--bg-menu',           value: '#ffffff',           darkValue: '#191919' },
      ],
    },
    {
      title: 'Background — Structural',
      swatches: [
        { token: '--bg-disabled', value: '#c7c7c7', darkValue: '#707070' },
        { token: '--bg-inverse',  value: '#363636', darkValue: '#e5e5e5' },
        { token: '--bg-strong',   value: '#191919', darkValue: '#f7f7f7' },
      ],
    },
    {
      title: 'Background — Accent & Status',
      swatches: [
        { token: '--bg-accent',                  value: '#0968f6', darkValue: '#4d93fc' },
        { token: '--bg-accent-subtle',           value: '#d4e5fe', darkValue: '#002a69' },
        { token: '--bg-destructive',             value: '#d50b0b', darkValue: '#ff5c5c' },
        { token: '--bg-status-attention-subtle', value: '#ffdede', darkValue: '#570303' },
        { token: '--bg-status-success-subtle',   value: '#e0fae0', darkValue: '#1b561a' },
        { token: '--bg-status-warning-subtle',   value: '#fff8d5', darkValue: '#855f00' },
      ],
    },
    {
      title: 'Foreground — Text',
      swatches: [
        { token: '--fg-primary',   value: '#191919', darkValue: '#f7f7f7' },
        { token: '--fg-secondary', value: '#707070', darkValue: '#8f8f8f' },
        { token: '--fg-disabled',  value: '#c7c7c7', darkValue: '#707070' },
      ],
    },
    {
      title: 'Foreground — On-surface',
      swatches: [
        { token: '--fg-on-disabled',    value: '#ffffff', darkValue: '#191919' },
        { token: '--fg-on-inverse',     value: '#ffffff', darkValue: '#191919' },
        { token: '--fg-on-strong',      value: '#ffffff', darkValue: '#191919' },
        { token: '--fg-on-accent',      value: '#ffffff', darkValue: '#191919' },
        { token: '--fg-on-destructive', value: '#ffffff', darkValue: '#191919' },
      ],
    },
    {
      title: 'Foreground — Semantic & Status',
      swatches: [
        { token: '--fg-information',      value: '#0968f6', darkValue: '#84b4fb' },
        { token: '--fg-destructive',      value: '#d50b0b' },
        { token: '--fg-status-attention', value: '#d50b0b', darkValue: '#ffa0a0' },
        { token: '--fg-status-success',   value: '#288034', darkValue: '#a6f0a5' },
        { token: '--fg-status-warning',   value: '#ffa800', darkValue: '#ffe58a' },
      ],
    },
    {
      title: 'Border',
      swatches: [
        { token: '--border-subtle',      value: '#e5e5e5', darkValue: '#363636', mode: 'border' },
        { token: '--border-medium',      value: '#8f8f8f', darkValue: '#707070', mode: 'border' },
        { token: '--border-strong',      value: '#191919', darkValue: '#ffffff', mode: 'border' },
        { token: '--border-accent',      value: '#0968f6', darkValue: '#4d93fc', mode: 'border' },
        { token: '--border-disabled',    value: '#c7c7c7', darkValue: '#363636', mode: 'border' },
        { token: '--border-on-disabled', value: '#ffffff', darkValue: '#191919', mode: 'border' },
      ],
    },
    {
      title: 'State — Default (on light / dark surfaces)',
      swatches: [
        { token: '--state-hover',    value: 'rgba(0,0,0,0.04)', darkValue: 'rgba(255,255,255,0.12)', mode: 'state-light' },
        { token: '--state-pressed',  value: 'rgba(0,0,0,0.08)', darkValue: 'rgba(255,255,255,0.16)', mode: 'state-light' },
        { token: '--state-selected', value: 'rgba(0,0,0,0.12)', darkValue: 'rgba(255,255,255,0.20)', mode: 'state-light' },
        { token: '--state-focused',  value: 'rgba(0,0,0,0.04)',                                      mode: 'state-light' },
      ],
    },
    {
      title: 'State — Heavy',
      swatches: [
        { token: '--state-hover-heavy',    value: 'rgba(0,0,0,0.08)', mode: 'state-light' },
        { token: '--state-pressed-heavy',  value: 'rgba(0,0,0,0.12)', mode: 'state-light' },
        { token: '--state-selected-heavy', value: 'rgba(0,0,0,0.16)', mode: 'state-light' },
      ],
    },
    {
      title: 'State — On Fill (on accent/colored surfaces)',
      swatches: [
        { token: '--state-hover-on-fill',    value: 'rgba(255,255,255,0.08)', mode: 'state-fill' },
        { token: '--state-pressed-on-fill',  value: 'rgba(255,255,255,0.12)', mode: 'state-fill' },
        { token: '--state-selected-on-fill', value: 'rgba(255,255,255,0.16)', mode: 'state-fill' },
      ],
    },
    {
      title: 'Scrim',
      swatches: [
        { token: '--scrim-overlay', value: 'rgba(0,0,0,0.32)', darkValue: 'rgba(0,0,0,0.64)' },
        { token: '--scrim-image',   value: 'rgba(0,0,0,0.16)' },
      ],
    },
  ]

  function ColorSwatch({ token, mode = 'fill', displayValue }: Swatch & { displayValue: string }) {
    const swatchStyle: React.CSSProperties = {
      width: 96,
      height: 56,
      borderRadius: 8,
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
    }

    let inner: React.ReactNode

    if (mode === 'border') {
      inner = (
        <div style={{
          ...swatchStyle,
          background: 'var(--bg-primary)',
          boxShadow: `inset 0 0 0 3px var(${token}), inset 0 0 0 1px rgba(0,0,0,0.06)`,
        }} />
      )
    } else if (mode === 'state-light') {
      inner = (
        <div style={{ ...swatchStyle, background: 'var(--bg-disabled)' }}>
          <div style={{ position: 'absolute', inset: 0, background: `var(${token})` }} />
        </div>
      )
    } else if (mode === 'state-fill') {
      inner = (
        <div style={{ ...swatchStyle, background: 'var(--bg-accent)' }}>
          <div style={{ position: 'absolute', inset: 0, background: `var(${token})` }} />
        </div>
      )
    } else {
      inner = (
        <div style={{
          ...swatchStyle,
          background: `var(${token})`,
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)',
        }} />
      )
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {inner}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--fg-primary)', fontFamily: 'monospace', lineHeight: 1.4 }}>
            {token}
          </span>
          <span style={{ fontSize: 10, color: 'var(--fg-secondary)', lineHeight: 1.4 }}>
            {displayValue}
          </span>
        </div>
      </div>
    )
  }

  const modeLabel: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: 12,
    display: 'block',
  }

  // ── Color in Context ──────────────────────────────────────────
  const ctxLabel: React.CSSProperties = {
    fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '24px',
    color: 'var(--fg-primary)',
  }
  const ctxCaption: React.CSSProperties = {
    fontSize: 12, color: 'var(--fg-secondary)', lineHeight: '16px',
  }
  const ctxBody: React.CSSProperties = {
    fontSize: 16, color: 'var(--fg-secondary)', lineHeight: '24px',
  }
  const iconRow = (style: 'borderless' | 'secondary', bgOverride?: string) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['default', 'disabled', 'loading'] as const).map(state => (
        <div key={state} style={bgOverride ? { background: bgOverride, borderRadius: '50%' } : undefined}>
          <IconButton
            icon={<Icon name="edit" size={16} />}
            aria-label="edit"
            style={style}
            disabled={state === 'disabled'}
            loading={state === 'loading'}
          />
        </div>
      ))}
    </div>
  )

  return (
    <>
      {groups.map(group => (
        <div key={group.title} className="preview-section">
          <p className="preview-section__title">{group.title}</p>

          {/* Light */}
          <span style={{ ...modeLabel, color: 'var(--fg-secondary)' }}>Light</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
            {group.swatches.map(s => (
              <ColorSwatch key={s.token} {...s} displayValue={s.value} />
            ))}
          </div>

          {/* Dark */}
          <span style={{ ...modeLabel, color: '#8f8f8f' }}>Dark</span>
          <div
            data-dark="true"
            style={{ background: '#191919', borderRadius: 12, padding: '20px 20px 16px', display: 'flex', flexWrap: 'wrap', gap: 16 }}
          >
            {group.swatches.map(s => (
              <ColorSwatch key={s.token} {...s} displayValue={s.darkValue ?? s.value} />
            ))}
          </div>
        </div>
      ))}

      {/* ── Background — Color in Context ── */}
      <div className="preview-section">
        <p className="preview-section__title">Background — Color in Context</p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          {([false, true] as const).map(dark => (
            <div
              key={dark ? 'dark' : 'light'}
              data-dark={dark ? 'true' : undefined}
              style={{ flex: 1, minWidth: 0, borderRadius: 24, background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
            >
              {/* Header */}
              <div style={{ padding: '24px 40px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '40px', color: 'var(--fg-primary)' }}>
                  primary-bg
                </span>
                <ul style={{ margin: 0, paddingLeft: 24 }}>
                  <li style={ctxBody}>page background</li>
                </ul>
              </div>

              {/* Inner cards */}
              <div style={{ padding: '12px 40px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>

                {/* secondary-bg label card */}
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>secondary-bg</span>
                  <span style={ctxBody}>for sections on primary-bg</span>
                </div>

                {/* Icon Buttons on primary-bg */}
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on primary-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    {iconRow('borderless')}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>secondary</span>
                    {iconRow('secondary')}
                  </div>
                </div>

                {/* Icon Buttons on secondary-bg */}
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on secondary-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={ctxLabel}>transparent</span>
                    <span style={ctxCaption}>uses overlay fills for hover/pressed states</span>
                  </div>
                  {iconRow('borderless')}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={ctxLabel}>primary-bright</span>
                    <span style={ctxCaption}>uses static fills for hover/pressed states</span>
                  </div>
                  {iconRow('borderless', 'var(--bg-primary-bright)')}
                  {/* primary-bright nested label card */}
                  <div style={{ background: 'var(--bg-primary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
                    <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '24px', color: 'var(--fg-primary)' }}>primary-bright</span>
                    <span style={{ ...ctxCaption, maxWidth: 240 }}>For sections on secondary-bg. If main page background is primary-bg, use sparingly.</span>
                  </div>
                </div>

                {/* menu-bg card */}
                <div style={{
                  background: 'var(--bg-menu)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 16,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.07)',
                  padding: '16px 24px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>menu-bg</span>
                  <ul style={{ margin: 0, paddingLeft: 24 }}>
                    <li style={ctxBody}><strong>border:</strong> border-subtle 1px</li>
                    <li style={ctxBody}><strong>elevation:</strong> subtle</li>
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── secondary-bg row ── */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 16 }}>
          {([false, true] as const).map(dark => (
            <div
              key={dark ? 'dark' : 'light'}
              data-dark={dark ? 'true' : undefined}
              style={{ flex: 1, minWidth: 0, borderRadius: 24, background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
            >
              {/* Header */}
              <div style={{ padding: '24px 40px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '40px', color: 'var(--fg-primary)' }}>
                  secondary-bg
                </span>
                <ul style={{ margin: 0, paddingLeft: 24 }}>
                  <li style={ctxBody}>page background</li>
                  <li style={ctxBody}>(usually for pages with tables)</li>
                </ul>
              </div>

              {/* Inner cards */}
              <div style={{ padding: '12px 40px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>

                {/* primary-bright label card */}
                <div style={{ background: 'var(--bg-primary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>primary-bright</span>
                  <span style={ctxBody}>for sections on secondary-bg</span>
                </div>

                {/* Icon Buttons on secondary-bg */}
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on secondary-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    {iconRow('borderless')}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>primary-bright</span>
                    {iconRow('borderless', 'var(--bg-primary-bright)')}
                  </div>
                </div>

                {/* Icon Buttons on primary-bright */}
                <div style={{ background: 'var(--bg-primary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on primary-bright</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    {iconRow('borderless')}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={ctxLabel}>secondary-bright</span>
                  </div>
                  {iconRow('borderless', 'var(--bg-secondary-bright)')}
                  {/* secondary-bright nested label card */}
                  <div style={{ background: 'var(--bg-secondary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
                    <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '24px', color: 'var(--fg-primary)' }}>secondary-bright</span>
                    <span style={{ ...ctxCaption, maxWidth: 240 }}>For sections on secondary-container. If main page background is secondary-bg, use sparingly.</span>
                  </div>
                </div>

                {/* menu-bg card */}
                <div style={{
                  background: 'var(--bg-menu)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 16,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.07)',
                  padding: '16px 24px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>menu-bg</span>
                  <ul style={{ margin: 0, paddingLeft: 24 }}>
                    <li style={ctxBody}><strong>border:</strong> border-subtle 1px</li>
                    <li style={ctxBody}><strong>elevation:</strong> subtle</li>
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── elevated-bg row ── */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 16 }}>
          {([false, true] as const).map(dark => (
            <div
              key={dark ? 'dark' : 'light'}
              data-dark={dark ? 'true' : undefined}
              style={{ flex: 1, minWidth: 0, borderRadius: 24, background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
            >
              {/* Header */}
              <div style={{ padding: '24px 40px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '40px', color: 'var(--fg-primary)' }}>
                  elevated-bg
                </span>
                <ul style={{ margin: 0, paddingLeft: 24 }}>
                  <li style={ctxBody}>modal / panel / popover background</li>
                </ul>
              </div>

              {/* Inner cards */}
              <div style={{ padding: '12px 40px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>

                {/* Icon Buttons on elevated-bg */}
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on elevated-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    {iconRow('borderless')}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>secondary-bright</span>
                    {iconRow('borderless', 'var(--bg-secondary-bright)')}
                  </div>
                </div>

                {/* menu-bg card */}
                <div style={{
                  background: 'var(--bg-menu)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 16,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.07)',
                  padding: '16px 24px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>menu-bg</span>
                  <ul style={{ margin: 0, paddingLeft: 24 }}>
                    <li style={ctxBody}><strong>border:</strong> border-subtle 1px</li>
                    <li style={ctxBody}><strong>elevation:</strong> subtle</li>
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function StoryFoundationsTypography() {
  type TypeStyle = {
    name: string
    className: string
    size: string
    weight: string
    lineHeight: string
    tracking?: string
    sample: string
  }

  type TypeGroup = { title: string; styles: TypeStyle[] }

  const groups: TypeGroup[] = [
    {
      title: 'Display',
      styles: [
        { name: 'Display 1', className: 'itss-display-1', size: '46px', weight: '700', lineHeight: '52px', tracking: '-0.02em', sample: 'Display 1' },
        { name: 'Display 2', className: 'itss-display-2', size: '36px', weight: '700', lineHeight: '46px', tracking: '-0.02em', sample: 'Display 2' },
        { name: 'Display 3', className: 'itss-display-3', size: '30px', weight: '700', lineHeight: '40px', tracking: '-0.02em', sample: 'Display 3' },
      ],
    },
    {
      title: 'Title',
      styles: [
        { name: 'Title 1', className: 'itss-title-1', size: '24px', weight: '700', lineHeight: '32px', tracking: '-0.02em', sample: 'Title 1 — The quick brown fox' },
        { name: 'Title 2', className: 'itss-title-2', size: '20px', weight: '700', lineHeight: '28px', tracking: '-0.02em', sample: 'Title 2 — The quick brown fox' },
        { name: 'Title 3', className: 'itss-title-3', size: '16px', weight: '700', lineHeight: '24px', tracking: '-0.02em', sample: 'Title 3 — The quick brown fox jumps over the lazy dog' },
      ],
    },
    {
      title: 'Subtitle',
      styles: [
        { name: 'Subtitle 1', className: 'itss-subtitle-1', size: '20px', weight: '400', lineHeight: '28px', sample: 'Subtitle 1 — The quick brown fox jumps over the lazy dog' },
        { name: 'Subtitle 2', className: 'itss-subtitle-2', size: '16px', weight: '400', lineHeight: '24px', sample: 'Subtitle 2 — The quick brown fox jumps over the lazy dog' },
      ],
    },
    {
      title: 'Body',
      styles: [
        { name: 'Body', className: 'itss-body', size: '14px', weight: '400', lineHeight: '20px', sample: 'Body — The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.' },
        { name: 'Body Bold', className: 'itss-body-bold', size: '14px', weight: '700', lineHeight: '20px', sample: 'Body Bold — The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.' },
      ],
    },
    {
      title: 'Caption',
      styles: [
        { name: 'Caption', className: 'itss-caption', size: '12px', weight: '400', lineHeight: '16px', sample: 'Caption — The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.' },
        { name: 'Caption Bold', className: 'itss-caption-bold', size: '12px', weight: '700', lineHeight: '16px', sample: 'Caption Bold — The quick brown fox jumps over the lazy dog.' },
      ],
    },
    {
      title: 'Signal',
      styles: [
        { name: 'Signal 1', className: 'itss-signal-1', size: '14px', weight: '400', lineHeight: '20px', tracking: '0.05em', sample: 'Signal 1' },
        { name: 'Signal 2', className: 'itss-signal-2', size: '10px', weight: '700', lineHeight: '12px', tracking: '0.05em', sample: 'Signal 2' },
      ],
    },
    {
      title: 'Link',
      styles: [
        { name: 'Link Large',       className: 'itss-link-large',       size: '16px', weight: '400', lineHeight: '24px', sample: 'Link Large — Click here to learn more' },
        { name: 'Link Medium',      className: 'itss-link-medium',      size: '14px', weight: '400', lineHeight: '20px', sample: 'Link Medium — Click here to learn more' },
        { name: 'Link Medium Bold', className: 'itss-link-medium-bold', size: '14px', weight: '700', lineHeight: '20px', sample: 'Link Medium Bold — Click here to learn more' },
        { name: 'Link Small',       className: 'itss-link-small',       size: '12px', weight: '400', lineHeight: '16px', sample: 'Link Small — Click here to learn more' },
      ],
    },
  ]

  return (
    <>
      <div className="preview-section">
        <p className="preview-section__title">Font family</p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)', display: 'block', marginBottom: 6 }}>--font-family-primary</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 28, fontWeight: 400, lineHeight: 1 }}>Market Sans · Inter</span>
          </div>
        </div>
      </div>

      {groups.map(group => (
        <div key={group.title} className="preview-section">
          <p className="preview-section__title">{group.title}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {group.styles.map((style, i) => (
              <div
                key={style.name}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 24,
                  padding: '16px 0',
                  borderTop: i === 0 ? '1px solid var(--border-subtle)' : 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {/* Sample text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span className={style.className} style={{ color: 'var(--fg-primary)', display: 'block' }}>
                    {style.sample}
                  </span>
                </div>

                {/* Specs */}
                <div style={{ flexShrink: 0, display: 'flex', gap: 16, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--fg-secondary)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                    .itss-{style.name.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[
                      style.size,
                      style.weight === '700' ? 'Bold' : 'Regular',
                      `${style.lineHeight} lh`,
                      ...(style.tracking ? [style.tracking] : []),
                    ].map(spec => (
                      <span
                        key={spec}
                        style={{
                          fontSize: 11,
                          color: 'var(--fg-secondary)',
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 4,
                          padding: '1px 6px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function StoryFoundationsSpacing() {
  type SpacingToken = {
    token: string
    label: string   // e.g. "p-4"
    value: number   // px
    scale: number   // n in n×4
  }

  type SpacingGroup = { title: string; prefix: string; tokens: SpacingToken[] }

  const groups: SpacingGroup[] = [
    {
      title: 'Padding',
      prefix: 'p',
      tokens: [
        { token: '--spacing-p-0',  label: 'p-0',  value: 0,  scale: 0 },
        { token: '--spacing-p-1',  label: 'p-1',  value: 4,  scale: 1 },
        { token: '--spacing-p-2',  label: 'p-2',  value: 8,  scale: 2 },
        { token: '--spacing-p-3',  label: 'p-3',  value: 12, scale: 3 },
        { token: '--spacing-p-4',  label: 'p-4',  value: 16, scale: 4 },
        { token: '--spacing-p-5',  label: 'p-5',  value: 20, scale: 5 },
        { token: '--spacing-p-6',  label: 'p-6',  value: 24, scale: 6 },
        { token: '--spacing-p-8',  label: 'p-8',  value: 32, scale: 8 },
        { token: '--spacing-p-10', label: 'p-10', value: 40, scale: 10 },
        { token: '--spacing-p-12', label: 'p-12', value: 48, scale: 12 },
        { token: '--spacing-p-20', label: 'p-20', value: 80, scale: 20 },
      ],
    },
    {
      title: 'Margin',
      prefix: 'm',
      tokens: [
        { token: '--spacing-m-2',  label: 'm-2',  value: 8,  scale: 2 },
        { token: '--spacing-m-3',  label: 'm-3',  value: 12, scale: 3 },
        { token: '--spacing-m-10', label: 'm-10', value: 40, scale: 10 },
      ],
    },
    {
      title: 'Gap',
      prefix: 'gap',
      tokens: [
        { token: '--spacing-gap-0',  label: 'gap-0',  value: 0,  scale: 0 },
        { token: '--spacing-gap-1',  label: 'gap-1',  value: 4,  scale: 1 },
        { token: '--spacing-gap-2',  label: 'gap-2',  value: 8,  scale: 2 },
        { token: '--spacing-gap-3',  label: 'gap-3',  value: 12, scale: 3 },
        { token: '--spacing-gap-4',  label: 'gap-4',  value: 16, scale: 4 },
        { token: '--spacing-gap-5',  label: 'gap-5',  value: 20, scale: 5 },
        { token: '--spacing-gap-6',  label: 'gap-6',  value: 24, scale: 6 },
        { token: '--spacing-gap-8',  label: 'gap-8',  value: 32, scale: 8 },
        { token: '--spacing-gap-10', label: 'gap-10', value: 40, scale: 10 },
      ],
    },
  ]

  const MAX_PX = 80 // p-20 is the largest — all bars scale relative to it

  return (
    <>
      <div className="preview-section" style={{ marginBottom: 16 }}>
        <p className="preview-section__title">Scale</p>
        <p style={{ fontSize: 13, color: 'var(--fg-secondary)', margin: '0 0 8px' }}>
          4px base grid — each step is <code style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 4, padding: '1px 5px', fontSize: 12 }}>n × 4px</code>
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, paddingTop: 8 }}>
          {[0,1,2,3,4,5,6,8,10,12,20].map(n => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 24,
                height: n * 4,
                background: 'var(--bg-accent)',
                borderRadius: 3,
                opacity: 0.7 + (n / 20) * 0.3,
              }} />
              <span style={{ fontSize: 9, color: 'var(--fg-secondary)' }}>{n * 4}</span>
            </div>
          ))}
        </div>
      </div>

      {groups.map(group => (
        <div key={group.title} className="preview-section">
          <p className="preview-section__title">{group.title}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {group.tokens.map((t, i) => (
              <div
                key={t.token}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '10px 0',
                  borderTop: i === 0 ? '1px solid var(--border-subtle)' : 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {/* Metadata */}
                <div style={{ width: 180, flexShrink: 0, display: 'flex', gap: 12, alignItems: 'center' }}>
                  <code style={{ fontSize: 11, color: 'var(--fg-primary)', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 4, padding: '2px 6px', whiteSpace: 'nowrap' }}>
                    {t.token}
                  </code>
                </div>
                <span style={{ fontSize: 11, color: 'var(--fg-secondary)', width: 36, textAlign: 'right', flexShrink: 0 }}>
                  {t.value}px
                </span>
                <span style={{ fontSize: 11, color: 'var(--border-medium)', width: 36, flexShrink: 0 }}>
                  ×{t.scale}
                </span>

                {/* Visual bar */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    height: 20,
                    width: `${(t.value / MAX_PX) * 100}%`,
                    minWidth: 4,
                    background: 'var(--bg-accent)',
                    borderRadius: 4,
                    opacity: 0.75,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function StoryFoundationsLogos() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Logos</p>
      <div className="preview-row" style={{ flexWrap: 'wrap', gap: 32 }}>
        {[
          { component: <EbayLogo />,       label: 'ebay-logo' },
          { component: <HubLogo />,        label: 'hub-logo' },
          { component: <HubLogoStacked />, label: 'hub-logo-stacked' },
          { component: <HubFavicon />,     label: 'hub-favicon' },
          { component: <HubGPTLogo />,     label: 'hubgpt-logo' },
          { component: <HubGPTFavicon />,  label: 'hubgpt-favicon' },
          { component: <PeopleXLogo />,    label: 'peoplex-logo' },
        ].map(({ component, label }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
            {component}
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{label}</span>
          </div>
        ))}
      </div>
      <div className="preview-row" style={{ marginTop: 24, background: 'var(--bg-strong)', borderRadius: 8, padding: 24, flexWrap: 'wrap', gap: 32 }}>
        {[
          { component: <EbayMonoLogo />, label: 'ebay-mono-logo' },
          { component: <HubLogoDark />,  label: 'hub-logo-dark' },
        ].map(({ component, label }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
            {component}
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryFoundationsIcons() {
  return (
    <>
      {ICON_CATEGORIES.map(({ title, icons }) => (
        <div className="preview-section" key={title}>
          <p className="preview-section__title">Icons — {title}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {icons.flatMap((name) =>
              getAvailableSizes(name).map(size => (
                <div key={`${name}-${size}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 72 }}>
                  <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={name} size={size} />
                  </div>
                  <span style={{ fontSize: 9, color: 'var(--fg-secondary)', textAlign: 'center', lineHeight: 1.3 }}>
                    {name.replace(/-/g, ' ')} {size}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      ))}

      <div className="preview-section">
        <p className="preview-section__title">Icons — Scalable</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {getScalableIconNames().map(name => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 80 }}>
              <ScalableIcon name={name} size={48} />
              <span style={{ fontSize: 9, color: 'var(--fg-secondary)', textAlign: 'center', lineHeight: 1.3 }}>
                {name.replace(/-/g, ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function StoryFoundationsStateLayer() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">State Layer — node 124:1967</p>
      {STATE_LAYER_TYPES.map((type) => (
        <div key={type} style={{ marginBottom: 16 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>{type}</p>
          <div className="preview-row">
            {STATE_LAYER_STATES.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  position: 'relative',
                  width: 120,
                  height: 40,
                  borderRadius: 100,
                  background: type === 'on-fill' ? 'var(--bg-accent)' : 'var(--bg-secondary)',
                  overflow: state === 'focused' ? 'visible' : 'hidden',
                }}>
                  <StateLayer state={state} type={type} />
                </div>
                <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{state}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function StoryComponentsPopover() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Popover</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
        <div>
          <div className="preview-label">With title</div>
          <Popover title="Title goes here">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Popover>
        </div>

        <div>
          <div className="preview-label">No title</div>
          <Popover>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Popover>
        </div>

        <div>
          <div className="preview-label">Not dismissable</div>
          <Popover title="Title goes here" dismissable={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Popover>
        </div>
      </div>
    </div>
  )
}

function StoryComponentsHorizontalTabGroup() {
  const [medIdx, setMedIdx] = useState(0)
  const [lgIdx, setLgIdx] = useState(0)
  const tabs = [
    { label: 'Overview' },
    { label: 'Activity' },
    { label: 'Settings' },
    { label: 'Disabled', disabled: true },
    { label: 'Reports' },
  ]
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Horizontal Tab Group</h2>

      <div className="preview-label">Medium</div>
      <HorizontalTabGroup tabs={tabs} selectedIndex={medIdx} size="medium" onTabChange={setMedIdx} />

      <div className="preview-label" style={{ marginTop: 24 }}>Medium with divider</div>
      <HorizontalTabGroup tabs={tabs} selectedIndex={medIdx} size="medium" divider onTabChange={setMedIdx} />

      <div className="preview-label" style={{ marginTop: 24 }}>Large</div>
      <HorizontalTabGroup tabs={tabs} selectedIndex={lgIdx} size="large" onTabChange={setLgIdx} />

      <div className="preview-label" style={{ marginTop: 24 }}>Large with divider</div>
      <HorizontalTabGroup tabs={tabs} selectedIndex={lgIdx} size="large" divider onTabChange={setLgIdx} />
    </div>
  )
}

function StoryComponentsProgressStep() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Progress Step</h2>

      <div className="preview-label">Horizontal — all states (center layout)</div>
      <div style={{ display: 'flex' }}>
        <ProgressStep state="incomplete" layout="start" title="Pending" />
        <ProgressStep state="complete"   layout="center" title="Verified" />
        <ProgressStep state="latest"     layout="center" title="In Review" />
        <ProgressStep state="blocked"    layout="center" title="Blocked" />
        <ProgressStep state="incomplete" layout="end"    title="Shipped" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Horizontal — with subtitle</div>
      <div style={{ display: 'flex' }}>
        <ProgressStep state="complete"   layout="start"  title="Account" subtitle="Step 1 of 4" />
        <ProgressStep state="latest"     layout="center" title="Payment" subtitle="Step 2 of 4" />
        <ProgressStep state="incomplete" layout="center" title="Review"  subtitle="Step 3 of 4" />
        <ProgressStep state="incomplete" layout="end"    title="Confirm" subtitle="Step 4 of 4" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Vertical — all states</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ProgressStep state="complete"   layout="start"  vertical title="Account created" />
        <ProgressStep state="complete"   layout="center" vertical title="Identity verified" />
        <ProgressStep state="latest"     layout="center" vertical title="Payment processing" />
        <ProgressStep state="blocked"    layout="center" vertical title="Blocked" subtitle="Action required" />
        <ProgressStep state="incomplete" layout="end"    vertical title="Order shipped" />
      </div>
    </div>
  )
}

function StoryComponentsProgressStepper() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Progress Stepper</h2>

      <div className="preview-label">Horizontal — 5 steps</div>
      <ProgressStepper
        summaryTitle="Application status"
        steps={[
          { title: 'Submitted',  state: 'complete' },
          { title: 'Reviewing',  state: 'complete' },
          { title: 'Approved',   state: 'latest' },
          { title: 'Processing', state: 'incomplete' },
          { title: 'Complete',   state: 'incomplete' },
        ]}
      />

      <div className="preview-label" style={{ marginTop: 32 }}>Horizontal — with blocked step</div>
      <ProgressStepper
        summaryTitle="Verification"
        steps={[
          { title: 'Account',  state: 'complete' },
          { title: 'Identity', state: 'blocked', subtitle: 'Action required' },
          { title: 'Payment',  state: 'incomplete' },
          { title: 'Confirm',  state: 'incomplete' },
        ]}
      />

      <div className="preview-label" style={{ marginTop: 32 }}>Vertical — 5 steps</div>
      <ProgressStepper
        summaryTitle="Order status"
        vertical
        steps={[
          { title: 'Order placed',   state: 'complete' },
          { title: 'Processing',     state: 'complete' },
          { title: 'Shipped',        state: 'latest', subtitle: 'In transit' },
          { title: 'Out for delivery', state: 'incomplete' },
          { title: 'Delivered',      state: 'incomplete' },
        ]}
      />
    </div>
  )
}

function StoryComponentsSegmentedButtons() {
  const [sel2, setSel2] = useState(0)
  const [sel3, setSel3] = useState(1)
  const [sel2sm, setSel2sm] = useState(0)
  const [selIcon, setSelIcon] = useState(0)
  const addIcon = <Icon name="add" size={16} />
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Segmented Buttons</h2>

      <div className="preview-label">Large — 2 items</div>
      <SegmentedButtons
        items={[{ label: 'Option 1' }, { label: 'Option 2' }]}
        selectedIndex={sel2}
        size="large"
        onSelect={setSel2}
      />

      <div className="preview-label" style={{ marginTop: 20 }}>Large — 3 items</div>
      <SegmentedButtons
        items={[{ label: 'Day' }, { label: 'Week' }, { label: 'Month' }]}
        selectedIndex={sel3}
        size="large"
        onSelect={setSel3}
      />

      <div className="preview-label" style={{ marginTop: 20 }}>Small — 2 items</div>
      <SegmentedButtons
        items={[{ label: 'Option 1' }, { label: 'Option 2' }]}
        selectedIndex={sel2sm}
        size="small"
        onSelect={setSel2sm}
      />

      <div className="preview-label" style={{ marginTop: 20 }}>Large — with icons</div>
      <SegmentedButtons
        items={[{ label: 'One', icon: addIcon }, { label: 'Two', icon: addIcon }, { label: 'Three', icon: addIcon }]}
        selectedIndex={selIcon}
        size="large"
        onSelect={setSelIcon}
      />
    </div>
  )
}

function StoryComponentsSegmentedButton() {
  const [sel, setSel] = useState(0)
  const [selIcon, setSelIcon] = useState(1)
  const labels = ['Day', 'Week', 'Month', 'Year']
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Segmented Button</h2>

      <div className="preview-label">Label only (interactive)</div>
      <div style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: 32, padding: 4, gap: 4 }}>
        {labels.map((l, i) => (
          <SegmentedButton key={l} label={l} selected={i === sel} onClick={() => setSel(i)} />
        ))}
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Icon + label (interactive)</div>
      <div style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: 32, padding: 4, gap: 4 }}>
        <SegmentedButton label="List" icon={<Icon name="add" size={16} />} selected={selIcon === 0} onClick={() => setSelIcon(0)} />
        <SegmentedButton label="Grid" icon={<Icon name="add" size={16} />} selected={selIcon === 1} onClick={() => setSelIcon(1)} />
        <SegmentedButton label="Map" icon={<Icon name="add" size={16} />} selected={selIcon === 2} onClick={() => setSelIcon(2)} />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Individual states</div>
      <div style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: 32, padding: 4, gap: 4 }}>
        <SegmentedButton label="Selected" selected />
        <SegmentedButton label="Unselected" />
        <SegmentedButton label="Disabled" disabled />
        <SegmentedButton label="Disabled" selected disabled />
      </div>
    </div>
  )
}

function StoryComponentsVerticalTabGroup() {
  const [idx, setIdx] = useState(0)
  const [idxD, setIdxD] = useState(0)
  const tabs = [
    { label: 'Overview' },
    { label: 'Activity' },
    { label: 'Settings' },
    { label: 'Reports' },
    { label: 'Disabled', disabled: true },
  ]
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Vertical Tab Group</h2>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <div>
          <div className="preview-label">Without divider</div>
          <VerticalTabGroup tabs={tabs} selectedIndex={idx} onTabChange={setIdx} />
        </div>
        <div>
          <div className="preview-label">With divider</div>
          <VerticalTabGroup tabs={tabs} selectedIndex={idxD} divider onTabChange={setIdxD} />
        </div>
      </div>
    </div>
  )
}

function StoryComponentsVerticalTab() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Vertical Tab</h2>

      <div className="preview-label">Tab group</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: 180, borderRight: '1px solid var(--border-subtle)' }}>
        <VerticalTab label="Overview" selected />
        <VerticalTab label="Activity" />
        <VerticalTab label="Settings" />
        <VerticalTab label="Disabled" disabled />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Individual states</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <VerticalTab label="Selected" selected />
        <VerticalTab label="Unselected" />
        <VerticalTab label="Disabled selected" selected disabled />
        <VerticalTab label="Disabled" disabled />
      </div>
    </div>
  )
}

function StoryComponentsTab() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Tab</h2>

      <div className="preview-label">Medium — tab bar</div>
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border-subtle)' }}>
        <Tab label="Overview" selected size="medium" />
        <Tab label="Activity" size="medium" />
        <Tab label="Settings" size="medium" />
        <Tab label="Disabled" size="medium" disabled />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Large — tab bar</div>
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border-subtle)' }}>
        <Tab label="Overview" selected size="large" />
        <Tab label="Activity" size="large" />
        <Tab label="Settings" size="large" />
        <Tab label="Disabled" size="large" disabled />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Individual states (medium)</div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        <Tab label="Selected" selected size="medium" />
        <Tab label="Unselected" size="medium" />
        <Tab label="Disabled selected" selected size="medium" disabled />
        <Tab label="Disabled" size="medium" disabled />
      </div>
    </div>
  )
}

function StoryComponentsSnackbar() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Snackbar</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="preview-label">Description only</div>
        <Snackbar description="Your changes have been saved successfully." />
        <div className="preview-label">With title</div>
        <Snackbar title="Success" description="Your changes have been saved." />
        <div className="preview-label">With action</div>
        <Snackbar description="File moved to archive." action="Undo" />
        <div className="preview-label">Title + action</div>
        <Snackbar title="Saved" description="All changes have been saved." action="View" />
      </div>
    </div>
  )
}

function StoryComponentsToast() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Toast</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="preview-label">Success</div>
        <Toast variant="success" title="Changes saved" content="Your changes have been saved successfully." />

        <div className="preview-label">Warning</div>
        <Toast variant="warning" title="Low storage" content="You're running out of available storage space." />

        <div className="preview-label">Error</div>
        <Toast variant="error" title="Upload failed" content="Something went wrong. Please try again." />

        <div className="preview-label">Update</div>
        <Toast variant="update" title="Update available" content="A new version is ready to install." />

        <div className="preview-label">With action</div>
        <Toast variant="success" title="File moved" content="Your file was moved to the archive." action="Undo" />

        <div className="preview-label">Dismissable</div>
        <Toast variant="error" title="Connection lost" content="Check your network and try again." dismissable />
      </div>
    </div>
  )
}

function StoryComponentsAccordion() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Accordion</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 668 }}>
        <div>
          <div className="preview-label">Closed</div>
          <Accordion title="Accordion Title">
            Content goes here
          </Accordion>
        </div>

        <div>
          <div className="preview-label">Open</div>
          <Accordion title="Accordion Title" defaultOpen>
            Content goes here
          </Accordion>
        </div>

        <div>
          <div className="preview-label">Stacked group</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Accordion title="What is an accordion?">
              An accordion is a vertically stacked set of interactive headings that each contain a title and a piece of content.
            </Accordion>
            <Accordion title="When should I use one?" defaultOpen>
              Use accordions to progressively disclose content, reducing cognitive load by hiding sections until the user needs them.
            </Accordion>
            <Accordion title="Can I nest accordions?">
              Nesting is generally discouraged. Keep accordions at a single level for the best user experience.
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

function StoryComponentsCtaButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">CTA Button — node 124:1999</p>
      {(['primary', 'secondary', 'tertiary', 'borderless'] as const).map(variant => (
        <div key={variant} style={{ marginBottom: 24 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>{variant}</p>
          <div className="preview-row" style={{ marginBottom: 8 }}>
            {(['large', 'medium', 'small'] as const).map(size => (
              <CtaButton key={size} variant={variant} size={size} />
            ))}
            {(['large', 'medium', 'small'] as const).map(size => (
              <CtaButton key={`${size}-disabled`} variant={variant} size={size} disabled />
            ))}
            {variant !== 'borderless' && (['large', 'medium', 'small'] as const).map(size => (
              <CtaButton key={`${size}-loading`} variant={variant} size={size} loading />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function StoryComponentsDestructiveButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Destructive Button — node 870:603</p>
      {(['primary', 'secondary', 'tertiary', 'borderless'] as const).map(variant => (
        <div key={variant} style={{ marginBottom: 24 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>{variant}</p>
          <div className="preview-row">
            {(['large', 'medium', 'small'] as const).map(size => (
              <DestructiveButton key={size} variant={variant} size={size} />
            ))}
            {(['large', 'medium', 'small'] as const).map(size => (
              <DestructiveButton key={`${size}-disabled`} variant={variant} size={size} disabled />
            ))}
            {variant !== 'borderless' && (['large', 'medium', 'small'] as const).map(size => (
              <DestructiveButton key={`${size}-loading`} variant={variant} size={size} loading />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function StoryComponentsIconButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Icon Button — node 102:457</p>
      {(['primary', 'secondary', 'tertiary', 'borderless'] as const).map(style => (
        <div key={style} style={{ marginBottom: 24 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>{style}</p>
          <div className="preview-row" style={{ gap: 12 }}>
            {(['large', 'medium', 'small'] as const).map(size => (
              <IconButton key={size} style={style} size={size} icon={<Icon name="edit" size={16} />} aria-label="Edit" />
            ))}
            {(['large', 'medium', 'small'] as const).map(size => (
              <IconButton key={`${size}-disabled`} style={style} size={size} icon={<Icon name="edit" size={16} />} aria-label="Edit" disabled />
            ))}
            {(['large', 'medium', 'small'] as const).map(size => (
              <IconButton key={`${size}-loading`} style={style} size={size} icon={<Icon name="edit" size={16} />} aria-label="Edit" loading />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function StoryComponentsLinkButton() {
  return (
    <>
      <div className="preview-section">
        <p className="preview-section__title">Link Button — node 263:1595</p>
        {LEVELS.map((level) => (
          <div key={level} style={{ marginBottom: 24 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>{level}</p>
            <div className="preview-row">
              {SIZES.map((size) => (
                <LinkButton key={size} level={level} size={size} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--bg-strong)', borderRadius: 8, padding: 24, marginBottom: 48 }}>
        {INVERSE_LEVELS.map((level) => (
          <div key={level} style={{ marginBottom: 16 }}>
            <p className="preview-section__title" style={{ color: 'var(--fg-secondary)' }}>{level}</p>
            <div className="preview-row">
              {SIZES.map((size) => (
                <LinkButton key={size} level={level} size={size} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="preview-section">
        <p className="preview-section__title">with icons</p>
        <div className="preview-row">
          <LinkButton level="strong" size="large" leadingIcon={<Icon name="edit" size={16} />} />
          <LinkButton level="strong" size="large" trailingIcon={<Icon name="chevron-right" size={12} />} />
          <LinkButton level="strong" size="large" leadingIcon={<Icon name="edit" size={16} />} trailingIcon={<Icon name="chevron-right" size={12} />} />
          <LinkButton level="subtle-primary" size="large" trailingIcon={<Icon name="chevron-right" size={12} />} />
        </div>
      </div>
    </>
  )
}

function StoryComponentsDivider() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Divider — node 5349:32935</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>horizontal — full</p>
          <Divider type="horizontal" inset="full" />
        </div>

        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>horizontal — 16 inset</p>
          <Divider type="horizontal" inset="16" />
        </div>

        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>horizontal — free inset (48px)</p>
          <Divider type="horizontal" inset="free" freeInset={48} />
        </div>

        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>vertical — full / 16 inset / free inset</p>
          <div style={{ display: 'flex', gap: 32, height: 80, alignItems: 'stretch' }}>
            <Divider type="vertical" inset="full" />
            <Divider type="vertical" inset="16" />
            <Divider type="vertical" inset="free" freeInset={16} />
          </div>
        </div>

      </div>
    </div>
  )
}

function StoryComponentsAlerts() {
  return (
    <>
      {/* Page Notice */}
      <div className="preview-section">
        <p className="preview-section__title">Page Notice — node 1221:1536</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {([
            { label: 'Action + Dismiss', actionable: true,  dismissable: true,  hideTitle: false },
            { label: 'Action only',      actionable: true,  dismissable: false, hideTitle: false },
            { label: 'Dismiss only',     actionable: false, dismissable: true,  hideTitle: false },
            { label: 'Body only',        actionable: false, dismissable: false, hideTitle: true  },
          ]).map(({ label, actionable, dismissable, hideTitle }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <p className="preview-section__title" style={{ fontSize: 11 }}>{label}</p>
              {(['attention', 'information', 'confirmation', 'general'] as const).map(type => (
                <PageNotice key={type} type={type} actionable={actionable} dismissable={dismissable} title={hideTitle ? '' : undefined} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section Notice */}
      <div className="preview-section">
        <p className="preview-section__title">Section Notice — node 265:632</p>

        {/* All types */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start', marginBottom: 32 }}>
          {(['attention', 'warning', 'confirmation', 'information', 'general'] as const).map(type => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 343 }}>
              <p className="preview-section__title" style={{ fontSize: 11 }}>{type}</p>
              <SectionNotice type={type} level="strong" actionable dismissable />
              <SectionNotice type={type} level="subtle" actionable dismissable />
            </div>
          ))}
        </div>

        {/* General — variations */}
        <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>General — variations (strong / subtle)</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {([
            { label: 'Action + Dismiss', actionable: true,  dismissable: true,  hideTitle: false },
            { label: 'Action only',      actionable: true,  dismissable: false, hideTitle: false },
            { label: 'Dismiss only',     actionable: false, dismissable: true,  hideTitle: false },
            { label: 'Body only',        actionable: false, dismissable: false, hideTitle: true  },
          ]).map(({ label, actionable, dismissable, hideTitle }) => (
            <div key={label}>
              <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 6 }}>{label}</p>
              <div style={{ display: 'flex', gap: 16 }}>
                <SectionNotice type="general" level="strong" actionable={actionable} dismissable={dismissable} title={hideTitle ? '' : undefined} />
                <SectionNotice type="general" level="subtle" actionable={actionable} dismissable={dismissable} title={hideTitle ? '' : undefined} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Dialog */}
      <div className="preview-section">
        <p className="preview-section__title">Alert Dialog — node 1182:1559</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {(['confirmation', 'warning', 'attention', 'general', 'destructive'] as const).map(type => (
            <div key={type} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 16px',
              background: 'var(--scrim-overlay)',
              borderRadius: 8,
            }}>
              <AlertDialog type={type} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function StoryComponentsDialog() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Dialog — node 759:7042</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {([
          { label: 'small — default',                    node: <Dialog size="small" /> },
          { label: 'small — subtitle + back button',     node: <Dialog size="small" subtitle="Subtitle" showBackBtn /> },
          { label: 'small — additional link, no cancel', node: <Dialog size="small" additionalLinkLabel="Button title" showCancel={false} /> },
          { label: 'medium',                             node: <Dialog size="medium" /> },
          { label: 'large',                              node: <Dialog size="large" /> },
        ]).map(({ label, node }) => (
          <div key={label}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>{label}</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 16px',
              background: 'var(--scrim-overlay)',
              borderRadius: 8,
            }}>
              {node}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryComponentsFilter() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Filter — node 2175:5971</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* single-select */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>single-select — small · default / pressed / applied / applied+pressed / disabled</p>
          <Filter type="single-select" size="small" label="Month" />
          <Filter type="single-select" size="small" label="Month" pressed />
          <Filter type="single-select" size="small" label="Month" applied />
          <Filter type="single-select" size="small" label="Month" applied pressed />
          <Filter type="single-select" size="small" label="Month" disabled />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>single-select — medium · default / pressed / applied / applied+pressed / disabled</p>
          <Filter type="single-select" size="medium" label="Month" />
          <Filter type="single-select" size="medium" label="Month" pressed />
          <Filter type="single-select" size="medium" label="Month" applied />
          <Filter type="single-select" size="medium" label="Month" applied pressed />
          <Filter type="single-select" size="medium" label="Month" disabled />
        </div>

        {/* multi-select */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>multi-select — small · default / open / pressed / applied / applied+open / disabled</p>
          <Filter type="multi-select" size="small" label="Status" />
          <Filter type="multi-select" size="small" label="Status" open />
          <Filter type="multi-select" size="small" label="Status" pressed />
          <Filter type="multi-select" size="small" label="Status" applied count={2} />
          <Filter type="multi-select" size="small" label="Status" applied count={2} open />
          <Filter type="multi-select" size="small" label="Status" disabled />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>multi-select — medium · default / open / pressed / applied / applied+open / disabled</p>
          <Filter type="multi-select" size="medium" label="Status" />
          <Filter type="multi-select" size="medium" label="Status" open />
          <Filter type="multi-select" size="medium" label="Status" pressed />
          <Filter type="multi-select" size="medium" label="Status" applied count={3} />
          <Filter type="multi-select" size="medium" label="Status" applied count={3} open />
          <Filter type="multi-select" size="medium" label="Status" disabled />
        </div>

        {/* button */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>button — small · default / pressed / applied / applied+pressed / disabled</p>
          <Filter type="button" size="small" label="Filters" />
          <Filter type="button" size="small" label="Filters" pressed />
          <Filter type="button" size="small" label="Filters" applied count={2} />
          <Filter type="button" size="small" label="Filters" applied count={2} pressed />
          <Filter type="button" size="small" label="Filters" disabled />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>button — medium · default / pressed / applied / applied+pressed / disabled</p>
          <Filter type="button" size="medium" label="Filters" />
          <Filter type="button" size="medium" label="Filters" pressed />
          <Filter type="button" size="medium" label="Filters" applied count={4} />
          <Filter type="button" size="medium" label="Filters" applied count={4} pressed />
          <Filter type="button" size="medium" label="Filters" disabled />
        </div>

      </div>
    </div>
  )
}

function StoryComponentsSelectionControls() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Selection Controls — node 3:1028</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Radio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>Radio — small · default / pressed / focused / disabled (unselected + selected)</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Radio size="small" />
            <Radio size="small" pressed />
            <Radio size="small" focused />
            <Radio size="small" disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Radio size="small" selected />
            <Radio size="small" selected pressed />
            <Radio size="small" selected focused />
            <Radio size="small" selected disabled />
          </div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>Radio — large · default / pressed / focused / disabled (unselected + selected)</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Radio size="large" />
            <Radio size="large" pressed />
            <Radio size="large" focused />
            <Radio size="large" disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Radio size="large" selected />
            <Radio size="large" selected pressed />
            <Radio size="large" selected focused />
            <Radio size="large" selected disabled />
          </div>
        </div>

        {/* Checkbox */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>Checkbox — small · default / pressed / focused / disabled (unselected + selected + indeterminate)</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Checkbox size="small" />
            <Checkbox size="small" pressed />
            <Checkbox size="small" focused />
            <Checkbox size="small" disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Checkbox size="small" selected />
            <Checkbox size="small" selected pressed />
            <Checkbox size="small" selected focused />
            <Checkbox size="small" selected disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Checkbox size="small" indeterminate />
            <Checkbox size="small" indeterminate pressed />
            <Checkbox size="small" indeterminate focused />
            <Checkbox size="small" indeterminate disabled />
          </div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>Checkbox — large · default / pressed / focused / disabled (unselected + selected + indeterminate)</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Checkbox size="large" />
            <Checkbox size="large" pressed />
            <Checkbox size="large" focused />
            <Checkbox size="large" disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Checkbox size="large" selected />
            <Checkbox size="large" selected pressed />
            <Checkbox size="large" selected focused />
            <Checkbox size="large" selected disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Checkbox size="large" indeterminate />
            <Checkbox size="large" indeterminate pressed />
            <Checkbox size="large" indeterminate focused />
            <Checkbox size="large" indeterminate disabled />
          </div>
        </div>

        {/* Switch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>Switch · enabled / pressed / focused / disabled (off + on)</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Switch />
            <Switch pressed />
            <Switch focused />
            <Switch disabled />
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />
            <Switch selected />
            <Switch selected pressed />
            <Switch selected focused />
            <Switch selected disabled />
          </div>
        </div>

        {/* Selection Items */}
        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>SelectionItem — radio</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <SelectionItem type="radio" label="Unselected" selected={false} />
            <SelectionItem type="radio" label="Selected" selected />
            <SelectionItem type="radio" label="Disabled" disabled />
            <SelectionItem type="radio" label="Selected + disabled" selected disabled />
          </div>
        </div>

        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>SelectionItem — checkbox</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <SelectionItem type="checkbox" label="Unselected" selected={false} />
            <SelectionItem type="checkbox" label="Selected" selected />
            <SelectionItem type="checkbox" label="Indeterminate" indeterminate />
            <SelectionItem type="checkbox" label="Disabled" disabled />
          </div>
        </div>

        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 4 }}>SelectionItem — switch</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <SelectionItem type="switch" label="Off" selected={false} />
            <SelectionItem type="switch" label="On" selected />
            <SelectionItem type="switch" label="Disabled" disabled />
          </div>
        </div>

      </div>
    </div>
  )
}

function StoryComponentsDropdownButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Dropdown Button — node 2393:5830</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>large — bordered</p>
          <DropdownButton size="large" border label="Label" />
          <DropdownButton size="large" border label="Month" value="January" />
          <DropdownButton size="large" border label="Month" value="January" secondaryText="3 left" />
          <DropdownButton size="large" border label="Month" value="January" disabled />
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>small — bordered</p>
          <DropdownButton size="small" border label="Label" />
          <DropdownButton size="small" border label="Year" value="2024" />
          <DropdownButton size="small" border label="Year" value="2024" disabled />
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>large — borderless</p>
          <DropdownButton size="large" border={false} label="Label" />
          <DropdownButton size="large" border={false} label="Month" value="January" />
          <DropdownButton size="large" border={false} label="Month" value="January" disabled />
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="preview-section__title" style={{ fontSize: 11, width: '100%', marginBottom: 0 }}>small — borderless</p>
          <DropdownButton size="small" border={false} label="Label" />
          <DropdownButton size="small" border={false} label="Year" value="2024" />
          <DropdownButton size="small" border={false} label="Year" value="2024" disabled />
        </div>
      </div>
    </div>
  )
}

function StoryComponentsMenuItem() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Menu Item — node 908:3159</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>

        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>default</p>
          <MenuItem type="default" label="Option" />
          <MenuItem type="default" label="With subtitle" subtitle="Secondary text" />
          <MenuItem type="default" label="With icon" leadingIcon={<Icon name="edit" size={16} />} />
          <MenuItem type="default" label="With signal" signal="New" />
        </div>

        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>single-select</p>
          <MenuItem type="single-select" label="Unchecked option" />
          <MenuItem type="single-select" label="Checked option" checked />
          <MenuItem type="single-select" label="With icon" leadingIcon={<Icon name="folder" size={16} />} />
          <MenuItem type="single-select" label="With icon + checked" leadingIcon={<Icon name="folder" size={16} />} checked />
        </div>

        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>multi-select</p>
          <MenuItem type="multi-select" label="Unchecked option" />
          <MenuItem type="multi-select" label="Checked option" checked />
          <MenuItem type="multi-select" label="With icon" leadingIcon={<Icon name="star" size={16} />} />
        </div>

        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>category + clearable</p>
          <MenuItem type="category" label="Category item" />
          <MenuItem type="category" label="With icon" leadingIcon={<Icon name="folder" size={16} />} />
          <MenuItem type="clearable" label="Clearable item" />
          <MenuItem type="clearable" label="With icon" leadingIcon={<Icon name="search" size={16} />} />
        </div>

        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>person</p>
          <MenuItem type="person" name="Jane Smith" jobTitle="Product Designer" avatarInitials="JS" />
          <MenuItem type="person" name="Alex Johnson" jobTitle="Engineer" avatarSrc="https://i.pravatar.cc/80?img=5" />
        </div>

        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>section-title</p>
          <MenuItem type="section-title" label="Section A" />
          <MenuItem type="default" label="Item one" />
          <MenuItem type="default" label="Item two" />
          <MenuItem type="section-title" label="Section B" divider />
          <MenuItem type="default" label="Item three" />
        </div>

      </div>
    </div>
  )
}

function StoryComponentsMenu() {
  return (
    <>
      {/* Menu */}
      <div className="preview-section">
        <p className="preview-section__title">Menu — node 2823:5798</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>

          <div>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>basic</p>
            <Menu items={[
              { type: 'default', label: 'Option one' },
              { type: 'default', label: 'Option two' },
              { type: 'default', label: 'Option three' },
              { type: 'default', label: 'Option four' },
              { type: 'default', label: 'Option five' },
              { type: 'default', label: 'Option six' },
            ]} />
          </div>

          <div>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>with search bar</p>
            <Menu
              searchBar
              items={[
                { type: 'default', label: 'Option one' },
                { type: 'default', label: 'Option two' },
                { type: 'default', label: 'Option three' },
                { type: 'default', label: 'Option four' },
                { type: 'default', label: 'Option five' },
              ]}
            />
          </div>

          <div>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>with title + back button</p>
            <Menu
              titleBar
              items={[
                { type: 'single-select', label: 'Option one' },
                { type: 'single-select', label: 'Option two', checked: true },
                { type: 'single-select', label: 'Option three' },
                { type: 'single-select', label: 'Option four' },
              ]}
            />
          </div>

          <div>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 12 }}>complex — all features</p>
            <Menu
              titleBar
              title="Filter by"
              searchBar
              selectAllBar
              applyOrClearBar
              items={[
                { type: 'multi-select', label: 'Option one' },
                { type: 'multi-select', label: 'Option two', checked: true },
                { type: 'multi-select', label: 'Option three', checked: true },
                { type: 'multi-select', label: 'Option four' },
                { type: 'multi-select', label: 'Option five' },
                { type: 'multi-select', label: 'Option six' },
                { type: 'multi-select', label: 'Option seven' },
                { type: 'multi-select', label: 'Option eight' },
              ]}
              selectAllIndeterminate
              maxHeight={240}
            />
          </div>

        </div>
      </div>

      {/* Menu Options */}
      <div className="preview-section">
        <p className="preview-section__title">Menu Options — node 2816:10480</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>

          <div style={{ width: 200 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>default</p>
            <MenuOptions items={[
              { type: 'default', label: 'Option' },
              { type: 'default', label: 'Option' },
              { type: 'default', label: 'Option' },
              { type: 'default', label: 'Option with subtitle', subtitle: 'Secondary text' },
              { type: 'default', label: 'Option with signal', signal: 'New' },
            ]} />
          </div>

          <div style={{ width: 200 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>single-select</p>
            <MenuOptions items={[
              { type: 'single-select', label: 'Option one' },
              { type: 'single-select', label: 'Option two', checked: true },
              { type: 'single-select', label: 'Option three' },
              { type: 'single-select', label: 'Option four' },
            ]} />
          </div>

          <div style={{ width: 200 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>multi-select</p>
            <MenuOptions items={[
              { type: 'multi-select', label: 'Option one' },
              { type: 'multi-select', label: 'Option two', checked: true },
              { type: 'multi-select', label: 'Option three', checked: true },
              { type: 'multi-select', label: 'Option four' },
            ]} />
          </div>

          <div style={{ width: 200 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>with section-title</p>
            <MenuOptions items={[
              { type: 'section-title', label: 'Group A' },
              { type: 'default', label: 'Option one' },
              { type: 'default', label: 'Option two' },
              { type: 'section-title', label: 'Group B', divider: true },
              { type: 'default', label: 'Option three' },
              { type: 'default', label: 'Option four' },
            ]} />
          </div>

          <div style={{ width: 220 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>person</p>
            <MenuOptions items={[
              { type: 'person', name: 'Alice Martin', jobTitle: 'Product Designer', avatarInitials: 'AM' },
              { type: 'person', name: 'Bob Chen', jobTitle: 'Engineer', avatarSrc: 'https://i.pravatar.cc/80?img=7' },
              { type: 'person', name: 'Carol Davis', jobTitle: 'Marketing', avatarInitials: 'CD' },
            ]} />
          </div>

        </div>
      </div>

      {/* Section Label */}
      <div className="preview-section">
        <p className="preview-section__title">Section Label — node 3580:3663</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 280, background: 'var(--bg-secondary)', borderRadius: 8 }}>
          <SectionLabel label="Section Title" />
          <SectionLabel label="Recent searches" />
          <SectionLabel label="Suggested" />
        </div>
      </div>

      {/* Select All Bar */}
      <div className="preview-section">
        <p className="preview-section__title">Select All Bar — node 3128:6606</p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ width: 280 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>unchecked</p>
            <SelectAllBar checked={false} />
          </div>
          <div style={{ width: 280 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>checked</p>
            <SelectAllBar checked={true} />
          </div>
          <div style={{ width: 280 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>indeterminate</p>
            <SelectAllBar indeterminate={true} />
          </div>
        </div>
      </div>

      {/* Apply or Clear Selection Bar */}
      <div className="preview-section">
        <p className="preview-section__title">Apply or Clear Selection Bar — node 3128:6446</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ width: 280 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>apply + clear (default)</p>
            <ApplyOrClearSelectionBar />
          </div>
          <div style={{ width: 280 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>clear only (applyButton=false)</p>
            <ApplyOrClearSelectionBar applyButton={false} />
          </div>
          <div style={{ width: 280 }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>custom labels</p>
            <ApplyOrClearSelectionBar applyLabel="Save" clearLabel="Reset" />
          </div>
        </div>
      </div>
    </>
  )
}

function StoryComponentsContactButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Contact Button — node 3510:1865</p>
      <div className="preview-row" style={{ paddingBottom: 48 }}>
        <ContactButton name="Email" email="designer@ebay.com" />
        <ContactButton name="Manager" email="manager@ebay.com" />
      </div>
    </div>
  )
}

function StoryComponentsTooltip() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Tooltip — node 235:710</p>
      <div className="preview-row" style={{ paddingTop: 40, paddingBottom: 40 }}>
        {(['on-top', 'on-bottom', 'on-left', 'on-right', 'free'] as const).map(placement => (
          <Tooltip key={placement} content="Tooltip content" placement={placement}>
            <span style={{ padding: '6px 12px', border: '1px solid var(--border-subtle)', borderRadius: 6, fontSize: 13, cursor: 'default' }}>
              {placement}
            </span>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

function StoryComponentsBottomSheets() {
  return (
    <div className="preview-section" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 400,
      gap: 16,
      textAlign: 'center',
    }}>
      <Illustration type="coming-soon" size={120} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>
          Coming Soon
        </span>
        <span style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: '20px', maxWidth: 320 }}>
          Bottom Sheets component is in progress and will be added here.
        </span>
      </div>
    </div>
  )
}

function StoryComponentsPagination() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(44)
  const [page3, setPage3] = useState(3)
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Pagination</h2>

      <div className="preview-label">No overflow (4 pages)</div>
      <Pagination totalPages={4} currentPage={page1} onPageChange={setPage1} />

      <div className="preview-label" style={{ marginTop: 24 }}>Leading + trailing overflow (80 pages)</div>
      <Pagination totalPages={80} currentPage={page2} onPageChange={setPage2} />

      <div className="preview-label" style={{ marginTop: 24 }}>Near start — trailing overflow only (20 pages)</div>
      <Pagination totalPages={20} currentPage={page3} onPageChange={setPage3} />
    </div>
  )
}

function StoryAtomsPaginationDots() {
  const [sel, setSel] = useState(0)
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Pagination Dots</h2>

      <div className="preview-label">6 dots — first selected</div>
      <PaginationDots count={6} selectedIndex={0} />

      <div className="preview-label">Interactive</div>
      <PaginationDots count={6} selectedIndex={sel} onSelect={setSel} />
    </div>
  )
}

function StoryAtomsPaginationDot() {
  const [active, setActive] = useState(2)
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Pagination Dot</h2>

      <div className="preview-label">States</div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <PaginationDot selected={false} />
        <PaginationDot selected />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Interactive</div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {[0, 1, 2, 3, 4].map(i => (
          <PaginationDot key={i} selected={i === active} onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  )
}

function StoryAtomsPaginationPageOverflow() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Pagination Page Overflow</h2>

      <div className="preview-label">Default</div>
      <PaginationPageOverflow />

      <div className="preview-label" style={{ marginTop: 24 }}>In context with page tabs</div>
      <div style={{ display: 'flex', gap: 0, alignItems: 'center' }}>
        <PaginationPageTab page={1} active />
        <PaginationPageTab page={2} active={false} />
        <PaginationPageOverflow />
        <PaginationPageTab page={8} active={false} />
        <PaginationPageTab page={9} active={false} />
      </div>
    </div>
  )
}

function StoryAtomsPaginationPageTab() {
  const [active, setActive] = useState(3)
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Pagination Page Tab</h2>

      <div className="preview-label">Active state</div>
      <div style={{ display: 'flex', gap: 0 }}>
        <PaginationPageTab page={1} active={false} />
        <PaginationPageTab page={2} active={false} />
        <PaginationPageTab page={3} active />
        <PaginationPageTab page={4} active={false} />
        <PaginationPageTab page={5} active={false} />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Interactive</div>
      <div style={{ display: 'flex', gap: 0 }}>
        {[1, 2, 3, 4, 5].map(n => (
          <PaginationPageTab key={n} page={n} active={n === active} onClick={() => setActive(n)} />
        ))}
      </div>
    </div>
  )
}

function StoryAtomsSpinner() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Spinner — node 125:980</p>
      <div className="preview-row">
        {([16, 20, 24] as const).map(size => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Spinner size={size} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{size}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsAvatar() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Avatar — node 1326:2805</p>
      <div className="preview-row" style={{ gap: 24, flexWrap: 'wrap' }}>
        {(['normal', 'small'] as const).map(size => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 0 }}>{size}</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar type="no-photo" size={size} />
              <Avatar type="initials" size={size} initials="NN" />
              <Avatar type="photo" size={size} src="https://i.pravatar.cc/80" alt="Example user" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsBadge() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Badge — node 1094:767</p>
      <div className="preview-row" style={{ gap: 24, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge size="single" count={9} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>single</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge size="double" count={42} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>double</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge size="max" count="99+" />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>max</span>
        </div>
      </div>
    </div>
  )
}

function StoryAtomsChip() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Chip — node 2345:10408</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>avatar type</p>
          <div className="preview-row" style={{ gap: 12 }}>
            <Chip type="avatar" label="Text Label" avatarSrc="https://i.pravatar.cc/80" avatarAlt="User" />
            <Chip type="avatar" label="Text Label" avatarSrc="https://i.pravatar.cc/80" avatarAlt="User" removable={false} />
            <Chip type="avatar" label="No photo" avatarInitials="NN" />
          </div>
        </div>
        <div>
          <p className="preview-section__title" style={{ fontSize: 11, marginBottom: 8 }}>default type</p>
          <div className="preview-row" style={{ gap: 12 }}>
            <Chip type="default" label="Text Label" />
            <Chip type="default" label="With Icon" showIcon />
            <Chip type="default" label="No remove" removable={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

function StoryAtomsStatus() {
  const variants: StatusVariant[] = ['pending', 'canceled', 'draft', 'rejected', 'submitted']

  return (
    <div className="preview-section">
      <p className="preview-section__title">Status — node 1358:3613</p>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
        {variants.map(status => (
          <div key={status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Status status={status} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsProgressDonut() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Progress Donut — node 1423:4958</p>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
        {[0, 25, 50, 75, 100].map(pct => (
          <div key={pct} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <ProgressDonut progress={pct} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{pct}%</span>
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ProgressDonut progress={60} size={48} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>48px</span>
        </div>
      </div>
    </div>
  )
}

function StoryComponentsTableCellProgressDonut() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Table Cell Progress Donut — node 258004:15049</p>
      <div style={{ display: 'flex', flexDirection: 'column', width: 280, border: '1px solid var(--border-subtle)', borderBottom: 'none' }}>
        <TableCellProgressDonut progress={75} label="Default state" />
        <TableCellProgressDonut progress={50} label="Selected state" selected />
        <TableCellProgressDonut progress={25} label="Disabled state" disabled />
      </div>
    </div>
  )
}

function StoryComponentsTableCell() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Table Cell — node 954:7784</p>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Header */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Header</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 200 }}>
            <TableCell type="header" label="Cell header" />
            <TableCell type="header" label="Sort default" sortState="default" />
            <TableCell type="header" label="Sort up" sortState="up" />
            <TableCell type="header" label="Sort down" sortState="down" />
            <TableCell type="header" label="Disabled" disabled />
          </div>
        </div>

        {/* Text */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Text</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 200 }}>
            <TableCell type="text" label="Text label" subtitle="Subtitle" />
            <TableCell type="text" label="No subtitle" />
            <TableCell type="text" label="Selected" subtitle="Sub" selected />
            <TableCell type="text" label="Error" subtitle="Sub" error />
            <TableCell type="text" label="Disabled" subtitle="Sub" disabled />
          </div>
        </div>

        {/* Avatar + text */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Avatar + text</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 220 }}>
            <TableCell type="avatar-text" label="Jane Smith" subtitle="Designer" />
            <TableCell type="avatar-text" label="JD" avatarInitials="JD" subtitle="Engineer" />
            <TableCell type="avatar-text" label="Disabled" subtitle="Sub" disabled />
          </div>
        </div>

        {/* Element + text */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Element + text</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 200 }}>
            <TableCell type="element-text" label="Pending" />
            <TableCell type="element-text" label="Selected" selected />
            <TableCell type="element-text" label="Disabled" disabled />
          </div>
        </div>

        {/* Dropdown */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Dropdown</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 200 }}>
            <TableCell type="dropdown" label="Text label" />
            <TableCell type="dropdown" label="Selected" selected />
            <TableCell type="dropdown" label="Disabled" disabled />
          </div>
        </div>

        {/* Checkbox */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Checkbox</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 176 }}>
            <TableCell type="checkbox" />
            <TableCell type="checkbox" checked />
            <TableCell type="checkbox" disabled />
          </div>
        </div>

        {/* Toggle */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Toggle</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 176 }}>
            <TableCell type="toggle" />
            <TableCell type="toggle" checked />
            <TableCell type="toggle" disabled />
          </div>
        </div>

        {/* Actions — Icons */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Actions — Icons</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 176 }}>
            <TableCell type="actions-icons" />
            <TableCell type="actions-icons" selected />
            <TableCell type="actions-icons" disabled />
          </div>
        </div>

        {/* Actions — Link Button */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Actions — Link Button</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 200 }}>
            <TableCell type="actions-link-button" label="Button title" />
            <TableCell type="actions-link-button" label="Selected" selected />
            <TableCell type="actions-link-button" label="Disabled" disabled />
          </div>
        </div>

        {/* Image */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Image</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 176 }}>
            <TableCell type="image" />
            <TableCell type="image" selected />
          </div>
        </div>

        {/* Chips */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Chips</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 240 }}>
            <TableCell type="chips" chips={['Chip 1', 'Chip 2']} />
            <TableCell type="chips" chips={['Chip 1', 'Chip 2']} selected />
          </div>
        </div>

        {/* Empty */}
        <div>
          <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>Empty</p>
          <div style={{ border: '1px solid var(--border-subtle)', width: 176 }}>
            <TableCell type="empty" />
          </div>
        </div>

      </div>
    </div>
  )
}

function StoryComponentsTableSortButton() {
  const states: TableSortState[] = ['default', 'up', 'down']
  return (
    <div className="preview-section">
      <p className="preview-section__title">Table Sort Button — node 954:7570</p>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {states.map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <TableSortButton state={s} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryComponentsTableColumn() {
  const densities: TableColumnDensity[] = ['compact', 'cozy', 'relaxed']
  const rows = [
    { label: 'Alice Johnson', subtitle: 'Designer' },
    { label: 'Bob Smith', subtitle: 'Engineer' },
    { label: 'Carol White', subtitle: 'Manager' },
    { label: 'David Lee', subtitle: 'Analyst' },
  ]

  return (
    <div className="preview-section">
      <p className="preview-section__title">Table Column — node 1326:7220</p>

      <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 8 }}>Density × Text</p>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', marginBottom: 32 }}>
        {densities.map(density => (
          <div key={density}>
            <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 4 }}>{density}</p>
            <div style={{ border: '1px solid var(--border-subtle)', display: 'inline-flex' }}>
              <TableColumn
                type="text"
                density={density}
                header="Full name"
                sortState="default"
                rows={rows}
              />
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, color: 'var(--fg-secondary)', marginBottom: 8 }}>Content types — Compact</p>
      <div style={{ border: '1px solid var(--border-subtle)', overflowX: 'auto' }}>
      <div style={{ display: 'flex', gap: 0, alignItems: 'flex-start' }}>
        <TableColumn type="checkbox" header="Select" rows={rows.map(() => ({}))} />
        <TableColumn type="toggle"   header="Active" rows={rows.map(() => ({}))} />
        <TableColumn
          type="text"
          header="Name"
          sortState="default"
          rows={rows.map(r => ({ label: r.label, subtitle: r.subtitle }))}
        />
        <TableColumn
          type="avatar-text"
          header="User"
          sortState="up"
          rows={rows.map(r => ({ label: r.label, subtitle: r.subtitle }))}
        />
        <TableColumn
          type="element-text"
          header="Status"
          rows={[
            { label: 'Pending' },
            { label: 'Submitted' },
            { label: 'Rejected' },
            { label: 'Draft', disabled: true },
          ]}
        />
        <TableColumn
          type="dropdown"
          header="Category"
          rows={rows.map(r => ({ label: r.label }))}
        />
        <TableColumn
          type="actions-link-button"
          header="Action"
          rows={rows.map(() => ({ label: 'View' }))}
        />
        <TableColumn
          type="actions-icons"
          header="Actions"
          rows={rows.map(() => ({}))}
        />
        <TableColumn type="image"  header="Photo"  rows={rows.map(() => ({}))} />
        <TableColumn type="empty"  header="—"      rows={rows.map(() => ({}))} />
      </div>
      </div>
    </div>
  )
}

function StoryComponentsSearchBar() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Search Bar — node 6770:20000</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Large</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <SearchBar size="large" placeholder="Search" />
            <SearchBar size="large" placeholder="Search" defaultValue="Input Text" />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Small</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <SearchBar size="small" placeholder="Search" />
            <SearchBar size="small" placeholder="Search" defaultValue="Input Text" />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Full width</p>
          <SearchBar size="large" placeholder="Search anything..." fullWidth />
        </div>

      </div>
    </div>
  )
}

function StoryComponentsDateField() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Field — node 5624:35237</p>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 343 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Large</p>
          <DateField title="Inactive" size="large" tooltip optional />
          <DateField title="With value" size="large" defaultValue={new Date(2025, 8, 3)} tooltip optional />
          <DateField title="Error" size="large" state="error" helpText="Please enter a valid date." showHelpText tooltip optional />
          <DateField title="Error + value" size="large" state="error" defaultValue={new Date(2025, 8, 3)} helpText="Date is outside allowed range." showHelpText tooltip optional />
          <DateField title="Disabled" size="large" state="disabled" tooltip optional />
          <DateField title="Read only" size="large" state="readonly" defaultValue={new Date(2025, 8, 3)} tooltip optional />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 343 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Small</p>
          <DateField title="Inactive" size="small" tooltip optional />
          <DateField title="With value" size="small" defaultValue={new Date(2025, 8, 3)} tooltip optional />
          <DateField title="Error" size="small" state="error" helpText="Please enter a valid date." showHelpText tooltip optional />
          <DateField title="Error + value" size="small" state="error" defaultValue={new Date(2025, 8, 3)} helpText="Date is outside allowed range." showHelpText tooltip optional />
          <DateField title="Disabled" size="small" state="disabled" tooltip optional />
          <DateField title="Read only" size="small" state="readonly" defaultValue={new Date(2025, 8, 3)} tooltip optional />
        </div>

      </div>
    </div>
  )
}

function StoryComponentsSingleDatePicker() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Single Date Picker — node 2464:1519</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Day view (uncontrolled)</p>
          <SingleDatePicker />
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>With selected date</p>
          <SingleDatePicker defaultValue={new Date(2025, 8, 3)} />
        </div>

      </div>
    </div>
  )
}

function StoryComponentsLookupField() {
  const suggestions = [
    { type: 'default' as const, label: 'Alice Johnson' },
    { type: 'default' as const, label: 'Bob Smith' },
    { type: 'default' as const, label: 'Carol White' },
    { type: 'default' as const, label: 'David Brown' },
  ]

  const sampleChips = [
    { id: '1', label: 'Alice Johnson' },
    { id: '2', label: 'Bob Smith' },
  ]

  return (
    <div className="preview-section">
      <p className="preview-section__title">Lookup Field — node 2944:2445</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Large</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <LookupField title="Inactive" placeholder="Text" size="large" tooltip optional />
            <LookupField title="With chips" size="large" chips={sampleChips} />
            <LookupField title="Error" placeholder="Text" state="error" size="large" helpText="No results found." showHelpText />
            <LookupField title="Error with chips" state="error" size="large" chips={sampleChips} helpText="No results found." showHelpText />
            <LookupField title="Disabled" placeholder="Text" state="disabled" size="large" />
            <LookupField title="Read only with chips" state="readonly" size="large" chips={sampleChips} />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Default</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <LookupField title="Inactive" placeholder="Text" size="default" tooltip optional />
            <LookupField title="With chips" size="default" chips={sampleChips} />
            <LookupField title="Error" placeholder="Text" state="error" size="default" helpText="No results found." showHelpText />
            <LookupField title="Disabled" placeholder="Text" state="disabled" size="default" />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>With suggestions menu</p>
          <LookupField title="Type to search" placeholder="Search..." size="large" suggestions={suggestions} />
        </div>

      </div>
    </div>
  )
}

function StoryComponentsDropdownField() {
  const options = [
    { value: 'apple',  label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date',   label: 'Date' },
  ]

  return (
    <div className="preview-section">
      <p className="preview-section__title">Dropdown Field — node 439:2600</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Large — single select</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <DropdownField title="Enabled" size="large" tooltip optional options={options} />
            <DropdownField title="With value" size="large" defaultValue="apple" options={options} />
            <DropdownField title="With color dot" size="large" defaultValue="cherry" colorDot options={options} />
            <DropdownField title="Error" size="large" state="error" options={options} helpText="Please select a valid option." showHelpText />
            <DropdownField title="Disabled" size="large" state="disabled" defaultValue="banana" options={options} />
            <DropdownField title="Read only" size="large" state="readonly" defaultValue="cherry" options={options} />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Large — multi select (chip)</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <DropdownField title="Multi-select (empty)" size="large" multiSelect options={options} />
            <DropdownField title="Multi-select (with chips)" size="large" multiSelect defaultValues={['apple', 'cherry']} options={options} />
            <DropdownField title="Multi-select disabled" size="large" multiSelect state="disabled" defaultValues={['banana']} options={options} />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Small (default)</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <DropdownField title="Enabled" size="small" tooltip optional options={options} />
            <DropdownField title="With value" size="small" defaultValue="apple" options={options} />
            <DropdownField title="Error" size="small" state="error" options={options} helpText="Please select a valid option." showHelpText />
            <DropdownField title="Disabled" size="small" state="disabled" options={options} />
          </div>
        </div>

      </div>
    </div>
  )
}

function StoryComponentsTextAreaField() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Text Area Field — node 567:2139</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Large</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextAreaField title="Enabled" placeholder="Text" size="large" tooltip optional />
            <TextAreaField title="With value (resizable)" defaultValue="User input value" size="large" />
            <TextAreaField title="No resize handle" placeholder="Text" size="large" resizable={false} />
            <TextAreaField title="Error" placeholder="Text" state="error" size="large" helpText="This field has an error." showHelpText showCount maxLength={100} />
            <TextAreaField title="Disabled" placeholder="Text" state="disabled" size="large" />
            <TextAreaField title="Read only" defaultValue="Read only value" state="readonly" size="large" helpText="Read-only" showHelpText />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Small</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextAreaField title="Enabled" placeholder="Text" size="small" tooltip optional />
            <TextAreaField title="With value" defaultValue="User input value" size="small" />
            <TextAreaField title="Error" placeholder="Text" state="error" size="small" helpText="This field has an error." showHelpText showCount maxLength={100} />
            <TextAreaField title="Disabled" placeholder="Text" state="disabled" size="small" />
          </div>
        </div>

      </div>
    </div>
  )
}

function StoryComponentsInputField() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Input Field — node 438:1080</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Large</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <InputField title="Enabled" placeholder="Placeholder text" size="large" tooltip optional />
            <InputField title="With value" subtitle="Field subtitle can go here" placeholder="Placeholder text" defaultValue="User input value" size="large" />
            <InputField title="With icons" placeholder="Search…" size="large" leadingIcon={<Icon name="search" size={16} />} trailingIcon={<Icon name="arrow-right" size={16} />} />
            <InputField title="With prefix / suffix" placeholder="0.00" size="large" prefix="$" suffix="USD" />
            <InputField title="Error" placeholder="Placeholder text" state="error" size="large" helpText="This field has an error." showHelpText showCount maxLength={100} />
            <InputField title="Disabled" placeholder="Placeholder text" state="disabled" size="large" />
            <InputField title="Read only" defaultValue="Read only value" state="readonly" size="large" helpText="Read-only" showHelpText />
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Small (default)</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <InputField title="Enabled" placeholder="Placeholder text" size="small" />
            <InputField title="With value" placeholder="Placeholder text" defaultValue="User input value" size="small" />
            <InputField title="Error" placeholder="Placeholder text" state="error" size="small" helpText="This field has an error." showHelpText showCount maxLength={100} />
            <InputField title="Disabled" placeholder="Placeholder text" state="disabled" size="small" />
          </div>
        </div>

      </div>
    </div>
  )
}

function StoryAtomsSignal() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Signal — node 3042:3458</p>
      <div className="preview-row" style={{ gap: 12, flexWrap: 'wrap' }}>
        {['New', 'Hot', 'Beta', 'Sale', 'Limited', 'Tag'].map(label => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Signal label={label} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsEmptyState() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Empty State — node 2015:27971</p>
      <div className="preview-row" style={{ gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <EmptyState type="upload-file" />
        <EmptyState type="no-records" />
        <EmptyState type="ufo-oops" />
        <EmptyState type="no-records" message="Custom message override." />
      </div>
    </div>
  )
}

function StoryAtomsIllustration() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Illustration — node 3504:2148</p>
      <div className="preview-row" style={{ gap: 24, alignItems: 'flex-end' }}>
        {(['page', 'inbox'] as const).map(type => (
          <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <Illustration type={type} size={80} />
              <Illustration type={type} size={56} />
              <Illustration type={type} size={40} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{type}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsFileIcon() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">File Icon — node 2619:2169</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end' }}>
        {getFileIconNames().map(name => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <FileIcon name={name} size={16} />
              <FileIcon name={name} size={24} />
              <FileIcon name={name} size={32} />
            </div>
            <span style={{ fontSize: 9, color: 'var(--fg-secondary)', textAlign: 'center', lineHeight: 1.3 }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsSourceTypeLogo() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Source Type Logo — node 1496:1993</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {getSourceTypeLogoNames().map(name => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 80 }}>
            <SourceTypeLogo name={name} />
            <span style={{ fontSize: 9, color: 'var(--fg-secondary)', textAlign: 'center', lineHeight: 1.3 }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsToolLogo() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Tool Logo — node 2258:1832</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {getToolLogoNames().map(name => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 72 }}>
            <ToolLogo name={name} />
            <span style={{ fontSize: 9, color: 'var(--fg-secondary)', textAlign: 'center', lineHeight: 1.3 }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAtomsInputDraggable() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Input Draggable — node 7722:18871</p>
      <div style={{ position: 'relative', border: '1px solid var(--border-medium)', borderRadius: 8, background: 'var(--bg-primary)', width: 343, boxSizing: 'border-box' }}>
        <textarea
          style={{ display: 'block', width: '100%', boxSizing: 'border-box', border: 'none', outline: 'none', resize: 'none', padding: '10px 12px', fontFamily: 'var(--font-family-primary)', fontSize: 14, lineHeight: '20px', color: 'var(--fg-secondary)', background: 'transparent', borderRadius: 8 }}
          rows={3}
          defaultValue="Draggable text area value"
          readOnly
        />
        <div style={{ position: 'absolute', bottom: 6, right: 6 }}>
          <InputDraggable />
        </div>
      </div>
    </div>
  )
}

// ── Date Picker Atom Stories ───────────────────────────────────

function StoryAtomsDatePickerDateButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Date Button — node 2439:2463</p>

      <p style={{ fontSize: 12, color: 'var(--fg-secondary)', marginBottom: 8 }}>Types</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <DatePickerDateButton day={15} type="default" />
        <DatePickerDateButton day={15} type="today" />
        <DatePickerDateButton day={15} type="selected" />
        <DatePickerDateButton day={15} type="pre-next" />
        <DatePickerDateButton day={null} type="null" />
      </div>

      <p style={{ fontSize: 12, color: 'var(--fg-secondary)', margin: '16px 0 8px' }}>Range selection</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <DatePickerDateButton day={10} type="selected" rangePosition="start" />
        <DatePickerDateButton day={11} type="default" rangePosition="middle" />
        <DatePickerDateButton day={12} type="default" rangePosition="middle" />
        <DatePickerDateButton day={13} type="default" rangePosition="middle" />
        <DatePickerDateButton day={14} type="selected" rangePosition="end" />
      </div>

      <p style={{ fontSize: 12, color: 'var(--fg-secondary)', margin: '16px 0 8px' }}>States</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <DatePickerDateButton day={7} type="default" state="enabled" />
        <DatePickerDateButton day={7} type="default" state="disabled" />
      </div>
    </div>
  )
}

function StoryAtomsDatePickerDayLabel() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Day Label — node 2439:2505</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
          <DatePickerDayLabel key={d} label={d} />
        ))}
      </div>
    </div>
  )
}

function StoryAtomsDatePickerYearMonthButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Year/Month Button — node 2534:7018</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <DatePickerYearMonthButton label="2023" />
        <DatePickerYearMonthButton label="2024" />
        <DatePickerYearMonthButton label="2025" selected />
        <DatePickerYearMonthButton label="2026" disabled />
      </div>
    </div>
  )
}

function StoryAtomsDatePickerDropdownButton() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Dropdown Button — node 2581:2276</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DatePickerDropdownButton label="September 2025" open={false} />
        <DatePickerDropdownButton label="September 2025" open={true} />
      </div>
    </div>
  )
}

function StoryAtomsDatePickerHeader() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Header — node 2439:2515</p>
      <div style={{ width: 311 }}>
        <DatePickerHeader label="September 2025" />
      </div>
    </div>
  )
}

function StoryAtomsDatePickerFooter() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Footer — node 2439:2521</p>
      <div style={{ width: 375, background: 'var(--bg-primary)', padding: '0 32px', boxSizing: 'border-box' }}>
        <DatePickerFooter />
      </div>
    </div>
  )
}

function StoryAtomsDatePickerRangeSelector() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Date Picker Range Selector — node 2439:2494</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <DatePickerRangeSelector width={141} />
        <DatePickerRangeSelector width={241} />
        <DatePickerRangeSelector width={336} />
      </div>
    </div>
  )
}

function StoryAtomsInputValueField() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Input Value Field — node 6184:20000</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
        <InputValueField title="Title" value="Value" tooltip optional />
        <InputValueField title="Full Name" value="John Smith" required />
        <InputValueField title="Department" value="Engineering" />
        <InputValueField title="Email" value="john.smith@example.com" tooltip />
      </div>
    </div>
  )
}

function StoryAtomsInputHelpText() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Input Help Text — node 5653:35428</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
        <InputHelpText helpText="Helper text goes here" showCount characterCount="5/100" />
        <InputHelpText helpText="Helper text goes here" showCount characterCount="5/100" error />
        <InputHelpText helpText="This field is required for form submission." showCount characterCount="42/100" />
        <InputHelpText helpText="Please enter a valid value." showCount characterCount="42/100" error />
        <InputHelpText helpText="Help text only" showCount={false} />
        <InputHelpText helpText="Error, no count" showCount={false} error />
        <InputHelpText showHelpText={false} showCount characterCount="0/200" />
        <InputHelpText showHelpText={false} showCount characterCount="0/200" error />
      </div>
    </div>
  )
}

function StoryAtomsInputTitle() {
  return (
    <div className="preview-section">
      <p className="preview-section__title">Input Title — node 5624:36382</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <InputTitle title="Title" tooltip optional />
        <InputTitle title="Label" required />
        <InputTitle title="No extras" />
        <InputTitle title="Required + Tooltip" required tooltip />
        <InputTitle title="All variants" required optional tooltip />
      </div>
    </div>
  )
}

// ── Hub ───────────────────────────────────────────────────────

function StoryHubHeader() {
  return (
    <div className="preview-section" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <h2 className="preview-section__title">Header</h2>

      <div>
        <div className="preview-label">Mobile (375px)</div>
        <div style={{ width: 375, boxSizing: 'content-box', border: '1px solid var(--border-subtle)', borderRadius: 4, overflow: 'hidden' }}>
          <HubHeader
            avatarSrc="https://i.pravatar.cc/80"
            avatarProgress={50}
            notificationCount={1}
          />
        </div>
      </div>

      <div>
        <div className="preview-label">Tablet (768px)</div>
        <div style={{ width: 768, boxSizing: 'content-box', border: '1px solid var(--border-subtle)', borderRadius: 4, overflow: 'hidden' }}>
          <HubHeader
            avatarSrc="https://i.pravatar.cc/80"
            avatarProgress={50}
            notificationCount={1}
          />
        </div>
      </div>

      <div>
        <div className="preview-label">Desktop (1200px)</div>
        <div style={{ width: 1200, boxSizing: 'content-box', border: '1px solid var(--border-subtle)', borderRadius: 4, overflow: 'hidden' }}>
          <HubHeader
            avatarSrc="https://i.pravatar.cc/80"
            avatarProgress={50}
            notificationCount={1}
          />
        </div>
      </div>

    </div>
  )
}

function StoryHubNavBarAvatar() {
  const src = 'https://i.pravatar.cc/80'
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Nav Bar Avatar</h2>

      <div className="preview-label">Complete (no ring)</div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: 16 }}>
        <NavBarAvatar src={src} alt="Example user" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>0% progress</div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: 24 }}>
        <NavBarAvatar src={src} alt="Example user" progress={0} />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>50% progress</div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: 24 }}>
        <NavBarAvatar src={src} alt="Example user" progress={50} />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>All states</div>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', paddingBottom: 24 }}>
        <NavBarAvatar src={src} alt="Example user" progress={0} />
        <NavBarAvatar src={src} alt="Example user" progress={25} />
        <NavBarAvatar src={src} alt="Example user" progress={50} />
        <NavBarAvatar src={src} alt="Example user" progress={75} />
        <NavBarAvatar src={src} alt="Example user" progress={100} />
        <NavBarAvatar src={src} alt="Example user" />
      </div>
    </div>
  )
}

function StoryHubSidebar() {
  return (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', padding: 24 }}>
      <div>
        <p className="preview-label" style={{ marginBottom: 8 }}>Expanded</p>
        <Sidebar layout="expanded" />
      </div>
      <div>
        <p className="preview-label" style={{ marginBottom: 8 }}>Collapsed</p>
        <Sidebar layout="collapsed" />
      </div>
      <div>
        <p className="preview-label" style={{ marginBottom: 8 }}>Interactive (hover to expand)</p>
        <div style={{ position: 'relative', height: 600, width: 240 }}>
          <Sidebar layout="interactive" />
        </div>
      </div>
    </div>
  )
}

function StoryHubOverview() {
  return (
    <div className="preview-section" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 400,
      gap: 16,
      textAlign: 'center',
    }}>
      <Illustration type="coming-soon" size={120} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>
          Coming Soon
        </span>
        <span style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: '20px', maxWidth: 320 }}>
          Hub components are in progress and will be added here.
        </span>
      </div>
    </div>
  )
}

// ── Hub Sitebuilder ───────────────────────────────────────────

function StoryHubSitebuilderNavigation() {
  const [active, setActive] = useState(0)
  const links = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Events' },
    { label: 'Contact' },
  ]
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Sitebuilder Navigation</h2>

      <div className="preview-label">Default (3 links)</div>
      <SitebuilderNavigation
        siteName="My Site"
        links={[{ label: 'Home', active: true }, { label: 'About' }, { label: 'Events' }]}
      />

      <div className="preview-label" style={{ marginTop: 24 }}>Interactive</div>
      <SitebuilderNavigation
        siteName="My Site"
        links={links.map((l, i) => ({ ...l, active: i === active }))}
        onLinkClick={setActive}
      />
    </div>
  )
}

function StoryHubSitebuilderNavigationLink() {
  const [active, setActive] = useState(0)
  const pages = ['Home', 'About', 'Events', 'Contact']
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Sitebuilder Navigation Link</h2>

      <div className="preview-label">States</div>
      <div style={{ display: 'flex', gap: 24 }}>
        <SitebuilderNavigationLink label="Default" />
        <SitebuilderNavigationLink label="Active" active />
        <SitebuilderNavigationLink label="With chevron" showChevron />
        <SitebuilderNavigationLink label="Active + chevron" active showChevron />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Interactive nav bar</div>
      <div style={{ display: 'flex', gap: 8, borderBottom: '1px solid var(--border-subtle)' }}>
        {pages.map((p, i) => (
          <SitebuilderNavigationLink key={p} label={p} active={i === active} onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  )
}

function StoryHubSitebuilderAdminButtons() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Sitebuilder Admin Buttons</h2>

      <div className="preview-label">Feed Setup variant</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminButtons primaryLabel="Feed Setup" primaryIcon="edit" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Calendar Setup variant</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminButtons primaryLabel="Calendar Setup" primaryIcon="edit" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Edit Page variant</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminButtons primaryLabel="Edit Page" primaryIcon="edit" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Custom secondary label</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminButtons primaryLabel="Edit Page" primaryIcon="edit" secondaryLabel="View Site" />
      </div>
    </div>
  )
}

function StoryHubSitebuilderAdminAdditionalButtons() {
  return (
    <div className="preview-section">
      <h2 className="preview-section__title">Sitebuilder Admin Additional Buttons</h2>

      <div className="preview-label">Default — Follow Site (no follower count)</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminAdditionalButtons variant="default" />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Followers — Follow Site with follower count</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminAdditionalButtons variant="followers" followerCount={300} />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Member — checkmark + "Member" CTA</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminAdditionalButtons variant="member" followerCount={300} />
      </div>

      <div className="preview-label" style={{ marginTop: 24 }}>Member Admin — checkmark + "Member" + settings</div>
      <div style={{ background: 'var(--bg-accent-subtle)', padding: 24, borderRadius: 12 }}>
        <SitebuilderAdminAdditionalButtons variant="memberAdmin" followerCount={300} />
      </div>
    </div>
  )
}

function StoryHubSitebuilderOverview() {
  return (
    <div className="preview-section" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 400,
      gap: 16,
      textAlign: 'center',
    }}>
      <Illustration type="coming-soon" size={120} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>
          Coming Soon
        </span>
        <span style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: '20px', maxWidth: 320 }}>
          Hub Sitebuilder components are in progress and will be added here.
        </span>
      </div>
    </div>
  )
}

function StoryHubSidebarMenuItem() {
  return (
    <>
      <div className="preview-section">
        <p className="preview-section__title">Sidebar Menu Items — Site</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="preview-label">Desktop Collapsed</div>
          <SidebarMenuItem layout="collapsed" type="site" />

          <div className="preview-label" style={{ marginTop: 8 }}>Desktop Expanded — Default</div>
          <SidebarMenuItem layout="expanded" type="site" name="My Sites" />

          <div className="preview-label" style={{ marginTop: 8 }}>Desktop Expanded — Hover</div>
          <SidebarMenuItem layout="expanded" type="site" name="My Sites" forceHover />

          <div className="preview-label" style={{ marginTop: 8 }}>Desktop Expanded — With Chevron</div>
          <SidebarMenuItem layout="expanded" type="site" name="My Sites" showChevron />

          <div className="preview-label" style={{ marginTop: 8 }}>Mobile — Default</div>
          <SidebarMenuItem layout="mobile" type="site" name="My Sites" />
        </div>
      </div>

      <div className="preview-section">
        <p className="preview-section__title">Sidebar Menu Items — Tool</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="preview-label">Desktop Expanded — Default</div>
          <SidebarMenuItem layout="expanded" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} />

          <div className="preview-label" style={{ marginTop: 8 }}>Desktop Expanded — Hover</div>
          <SidebarMenuItem layout="expanded" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} forceHover />

          <div className="preview-label" style={{ marginTop: 8 }}>Desktop Expanded — With Chevron</div>
          <SidebarMenuItem layout="expanded" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} showChevron />

          <div className="preview-label" style={{ marginTop: 8 }}>Mobile — Default</div>
          <SidebarMenuItem layout="mobile" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} />
        </div>
      </div>
    </>
  )
}

function StoryHubScaffolding() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <HubHeader
          avatarSrc="https://i.pravatar.cc/80"
          avatarProgress={50}
          notificationCount={1}
        />
        <SitebuilderNavigation
          siteName="Company"
          links={[{ label: 'Home', active: true }, { label: 'About' }, { label: 'Events' }, { label: 'Contact' }]}
        />
      </div>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Sidebar layout="interactive" />
        <div style={{ width: 64, flexShrink: 0 }} />
        <main className="hub-grid" style={{ flex: 1 }}>
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 0' }}>
            <EmptyState type="no-records" />
          </div>
        </main>
      </div>
    </div>
  )
}

// ── Stories registry ──────────────────────────────────────────

type Story = {
  id: string
  category: string
  subCategory?: string
  label: string
  Component: () => JSX.Element
}

const STORIES: Story[] = [
  // Foundations
  { id: 'foundations/colors',        category: 'Foundations', subCategory: 'Colors', label: 'Colors',         Component: StoryFoundationsColors },
  { id: 'foundations/hubgpt-colors',  category: 'Foundations', subCategory: 'Colors', label: 'HubGPT Colors', Component: StoryFoundationsHubGPTColors },
  { id: 'foundations/brand-colors',   category: 'Foundations', subCategory: 'Colors', label: 'Brand Colors',  Component: StoryFoundationsBrandColors },
  { id: 'foundations/elevation',     category: 'Foundations', label: 'Elevation',       Component: StoryFoundationsElevation },
  { id: 'foundations/grid-layout',   category: 'Foundations', label: 'Grid and Layout', Component: StoryFoundationsGridLayout },
  { id: 'foundations/typography',    category: 'Foundations', label: 'Typography',      Component: StoryFoundationsTypography },
  { id: 'foundations/spacing',     category: 'Foundations', label: 'Spacing',     Component: StoryFoundationsSpacing },
  { id: 'foundations/logos',       category: 'Foundations', label: 'Logos',       Component: StoryFoundationsLogos },
  { id: 'foundations/icons',       category: 'Foundations', label: 'Icons',       Component: StoryFoundationsIcons },
  { id: 'foundations/state-layer',   category: 'Foundations', label: 'State Layer',   Component: StoryFoundationsStateLayer },

  // Components — Buttons
  { id: 'components/cta-button',          category: 'Components', subCategory: 'Buttons', label: 'CTA Button',          Component: StoryComponentsCtaButton },
  { id: 'components/destructive-button',  category: 'Components', subCategory: 'Buttons', label: 'Destructive Button',  Component: StoryComponentsDestructiveButton },
  { id: 'components/icon-button',         category: 'Components', subCategory: 'Buttons', label: 'Icon Button',         Component: StoryComponentsIconButton },
  { id: 'components/link-button',         category: 'Components', subCategory: 'Buttons', label: 'Link Button',         Component: StoryComponentsLinkButton },
  { id: 'components/contact-button',      category: 'Components', subCategory: 'Buttons', label: 'Contact Button',      Component: StoryComponentsContactButton },
  { id: 'components/dropdown-button',     category: 'Components', subCategory: 'Buttons', label: 'Dropdown Button',     Component: StoryComponentsDropdownButton },

  // Components — Form Fields
  { id: 'components/input-field',         category: 'Components', subCategory: 'Form Fields', label: 'Input Field',         Component: StoryComponentsInputField },
  { id: 'components/text-area-field',     category: 'Components', subCategory: 'Form Fields', label: 'Text Area Field',     Component: StoryComponentsTextAreaField },
  { id: 'components/dropdown-field',      category: 'Components', subCategory: 'Form Fields', label: 'Dropdown Field',      Component: StoryComponentsDropdownField },
  { id: 'components/lookup-field',        category: 'Components', subCategory: 'Form Fields', label: 'Lookup Field',        Component: StoryComponentsLookupField },
  { id: 'components/search-bar',          category: 'Components', subCategory: 'Form Fields', label: 'Search Bar',          Component: StoryComponentsSearchBar },
  { id: 'components/date-field',          category: 'Components', subCategory: 'Form Fields', label: 'Date Field',          Component: StoryComponentsDateField },
  { id: 'components/single-date-picker',  category: 'Components', subCategory: 'Form Fields', label: 'Single Date Picker',  Component: StoryComponentsSingleDatePicker },

  // Components — Selection
  { id: 'components/selection-controls',  category: 'Components', subCategory: 'Selection', label: 'Selection Controls',  Component: StoryComponentsSelectionControls },
  { id: 'components/filter',              category: 'Components', subCategory: 'Selection', label: 'Filter',              Component: StoryComponentsFilter },

  // Components — Navigation
  { id: 'components/horizontal-tab-group', category: 'Components', subCategory: 'Navigation', label: 'Horizontal Tab Group', Component: StoryComponentsHorizontalTabGroup },
  { id: 'components/vertical-tab-group',   category: 'Components', subCategory: 'Navigation', label: 'Vertical Tab Group',   Component: StoryComponentsVerticalTabGroup },
  { id: 'components/tab',                  category: 'Components', subCategory: 'Navigation', label: 'Tab',                  Component: StoryComponentsTab },
  { id: 'components/vertical-tab',         category: 'Components', subCategory: 'Navigation', label: 'Vertical Tab',         Component: StoryComponentsVerticalTab },
  { id: 'components/segmented-buttons',    category: 'Components', subCategory: 'Navigation', label: 'Segmented Buttons',    Component: StoryComponentsSegmentedButtons },
  { id: 'components/segmented-button',     category: 'Components', subCategory: 'Navigation', label: 'Segmented Button',     Component: StoryComponentsSegmentedButton },
  { id: 'components/pagination',           category: 'Components', subCategory: 'Navigation', label: 'Pagination',           Component: StoryComponentsPagination },

  // Components — Overlays
  { id: 'components/alerts',              category: 'Components', subCategory: 'Overlays', label: 'Alerts',              Component: StoryComponentsAlerts },
  { id: 'components/dialog',              category: 'Components', subCategory: 'Overlays', label: 'Dialog',              Component: StoryComponentsDialog },
  { id: 'components/snackbar',            category: 'Components', subCategory: 'Overlays', label: 'Snackbar',            Component: StoryComponentsSnackbar },
  { id: 'components/toast',              category: 'Components', subCategory: 'Overlays', label: 'Toast',              Component: StoryComponentsToast },
  { id: 'components/popover',            category: 'Components', subCategory: 'Overlays', label: 'Popover',            Component: StoryComponentsPopover },
  { id: 'components/accordion',          category: 'Components', subCategory: 'Overlays', label: 'Accordion',          Component: StoryComponentsAccordion },
  { id: 'components/tooltip',            category: 'Components', subCategory: 'Overlays', label: 'Tooltip',            Component: StoryComponentsTooltip },
  { id: 'components/bottom-sheets',      category: 'Components', subCategory: 'Overlays', label: 'Bottom Sheets',      Component: StoryComponentsBottomSheets },

  // Components — Menu & Lists
  { id: 'components/menu-item',           category: 'Components', subCategory: 'Menu & Lists', label: 'Menu Item',       Component: StoryComponentsMenuItem },
  { id: 'components/menu',                category: 'Components', subCategory: 'Menu & Lists', label: 'Menu',            Component: StoryComponentsMenu },
  { id: 'components/progress-stepper',    category: 'Components', subCategory: 'Menu & Lists', label: 'Progress Stepper', Component: StoryComponentsProgressStepper },
  { id: 'components/progress-step',       category: 'Components', subCategory: 'Menu & Lists', label: 'Progress Step',   Component: StoryComponentsProgressStep },
  { id: 'components/divider',             category: 'Components', subCategory: 'Menu & Lists', label: 'Divider',         Component: StoryComponentsDivider },

  // Components — Table
  { id: 'components/table-cell',                category: 'Components', subCategory: 'Table', label: 'Table Cell',                Component: StoryComponentsTableCell },
  { id: 'components/table-sort-button',         category: 'Components', subCategory: 'Table', label: 'Table Sort Button',         Component: StoryComponentsTableSortButton },
  { id: 'components/table-column',              category: 'Components', subCategory: 'Table', label: 'Table Column',              Component: StoryComponentsTableColumn },
  { id: 'components/table-cell-progress-donut', category: 'Components', subCategory: 'Table', label: 'Table Cell Progress Donut', Component: StoryComponentsTableCellProgressDonut },

  // Atoms — Identity
  { id: 'atoms/avatar',           category: 'Atoms', subCategory: 'Identity', label: 'Avatar',   Component: StoryAtomsAvatar },
  { id: 'atoms/badge',            category: 'Atoms', subCategory: 'Identity', label: 'Badge',    Component: StoryAtomsBadge },
  { id: 'atoms/chip',             category: 'Atoms', subCategory: 'Identity', label: 'Chip',     Component: StoryAtomsChip },
  { id: 'atoms/spinner',          category: 'Atoms', subCategory: 'Identity', label: 'Spinner',  Component: StoryAtomsSpinner },

  // Atoms — Status & Progress
  { id: 'atoms/signal',           category: 'Atoms', subCategory: 'Status & Progress', label: 'Signal',         Component: StoryAtomsSignal },
  { id: 'atoms/status',           category: 'Atoms', subCategory: 'Status & Progress', label: 'Status',         Component: StoryAtomsStatus },
  { id: 'atoms/progress-donut',   category: 'Atoms', subCategory: 'Status & Progress', label: 'Progress Donut', Component: StoryAtomsProgressDonut },

  // Atoms — Media & Icons
  { id: 'atoms/illustration',     category: 'Atoms', subCategory: 'Media & Icons', label: 'Illustration',     Component: StoryAtomsIllustration },
  { id: 'atoms/empty-state',      category: 'Atoms', subCategory: 'Media & Icons', label: 'Empty State',      Component: StoryAtomsEmptyState },
  { id: 'atoms/file-icon',        category: 'Atoms', subCategory: 'Media & Icons', label: 'File Icon',        Component: StoryAtomsFileIcon },
  { id: 'atoms/source-type-logo', category: 'Atoms', subCategory: 'Media & Icons', label: 'Source Type Logo', Component: StoryAtomsSourceTypeLogo },
  { id: 'atoms/tool-logo',        category: 'Atoms', subCategory: 'Media & Icons', label: 'Tool Logo',        Component: StoryAtomsToolLogo },

  // Atoms — Form Atoms
  { id: 'atoms/input-title',        category: 'Atoms', subCategory: 'Form Atoms', label: 'Input Title',       Component: StoryAtomsInputTitle },
  { id: 'atoms/input-help-text',    category: 'Atoms', subCategory: 'Form Atoms', label: 'Input Help Text',   Component: StoryAtomsInputHelpText },
  { id: 'atoms/input-value-field',  category: 'Atoms', subCategory: 'Form Atoms', label: 'Input Value Field', Component: StoryAtomsInputValueField },
  { id: 'atoms/input-draggable',    category: 'Atoms', subCategory: 'Form Atoms', label: 'Input Draggable',   Component: StoryAtomsInputDraggable },

  // Atoms — Date Picker Atoms
  { id: 'atoms/dp-date-button',     category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Date Button',       Component: StoryAtomsDatePickerDateButton },
  { id: 'atoms/dp-day-label',       category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Day Label',         Component: StoryAtomsDatePickerDayLabel },
  { id: 'atoms/dp-ym-button',       category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Year/Month Button', Component: StoryAtomsDatePickerYearMonthButton },
  { id: 'atoms/dp-dropdown-button', category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Dropdown Button',   Component: StoryAtomsDatePickerDropdownButton },
  { id: 'atoms/dp-header',          category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Header',            Component: StoryAtomsDatePickerHeader },
  { id: 'atoms/dp-footer',          category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Footer',            Component: StoryAtomsDatePickerFooter },
  { id: 'atoms/dp-range-selector',  category: 'Atoms', subCategory: 'Date Picker Atoms', label: 'DP Range Selector',    Component: StoryAtomsDatePickerRangeSelector },

  // Atoms — Pagination Atoms
  { id: 'atoms/pagination-dots',          category: 'Atoms', subCategory: 'Pagination Atoms', label: 'Pagination Dots',          Component: StoryAtomsPaginationDots },
  { id: 'atoms/pagination-dot',           category: 'Atoms', subCategory: 'Pagination Atoms', label: 'Pagination Dot',           Component: StoryAtomsPaginationDot },
  { id: 'atoms/pagination-page-overflow', category: 'Atoms', subCategory: 'Pagination Atoms', label: 'Pagination Page Overflow', Component: StoryAtomsPaginationPageOverflow },
  { id: 'atoms/pagination-page-tab',      category: 'Atoms', subCategory: 'Pagination Atoms', label: 'Pagination Page Tab',      Component: StoryAtomsPaginationPageTab },

  // Hub
  { id: 'hub/header',               category: 'Hub', label: 'Header',               Component: StoryHubHeader },
  { id: 'hub/sidebar-menu-items',   category: 'Hub', label: 'Sidebar Menu Items',   Component: StoryHubSidebarMenuItem },
  { id: 'hub/nav-bar-avatar',       category: 'Hub', label: 'Nav Bar Avatar',       Component: StoryHubNavBarAvatar },
  { id: 'hub/sidebar',        category: 'Hub', label: 'Sidebar',        Component: StoryHubSidebar },
  { id: 'hub/overview',       category: 'Hub', label: 'Overview',       Component: StoryHubOverview },
  { id: 'hub/scaffolding',    category: 'Hub', label: 'Scaffolding',    Component: StoryHubScaffolding },

  // Hub Sitebuilder
  { id: 'hub-sitebuilder/navigation',      category: 'Hub Sitebuilder', label: 'Sitebuilder Navigation',      Component: StoryHubSitebuilderNavigation },
  { id: 'hub-sitebuilder/navigation-link', category: 'Hub Sitebuilder', label: 'Sitebuilder Navigation Link', Component: StoryHubSitebuilderNavigationLink },
  { id: 'hub-sitebuilder/admin-buttons',            category: 'Hub Sitebuilder', label: 'Sitebuilder Admin Buttons',            Component: StoryHubSitebuilderAdminButtons },
  { id: 'hub-sitebuilder/admin-additional-buttons', category: 'Hub Sitebuilder', label: 'Sitebuilder Admin Additional Buttons', Component: StoryHubSitebuilderAdminAdditionalButtons },
  { id: 'hub-sitebuilder/overview',                 category: 'Hub Sitebuilder', label: 'Overview',                             Component: StoryHubSitebuilderOverview },
]

// ── App ───────────────────────────────────────────────────────

function Library({ onBack }: { onBack: () => void }) {
  const defaultId = STORIES[0].id

  const [collapsed, setCollapsed] = useState<Set<string>>(
    () => new Set(STORIES.map(s => s.category))
  )
  const [collapsedSubs, setCollapsedSubs] = useState<Set<string>>(
    () => new Set(STORIES.flatMap(s => s.subCategory ? [`${s.category}/${s.subCategory}`] : []))
  )

  const toggleCategory = (cat: string) => {
    setCollapsed(prev => {
      const next = new Set(prev)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return next
    })
  }

  const toggleSub = (key: string) => {
    setCollapsedSubs(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const allCategoryKeys = [...new Set(STORIES.map(s => s.category))]
  const allSubKeys = [...new Set(STORIES.flatMap(s => s.subCategory ? [`${s.category}/${s.subCategory}`] : []))]

  const expandAll = () => {
    setCollapsed(new Set())
    setCollapsedSubs(new Set())
  }

  const collapseAll = () => {
    setCollapsed(new Set(allCategoryKeys))
    setCollapsedSubs(new Set(allSubKeys))
  }

  const [activeId, setActiveId] = useState<string>(() => {
    const page = new URLSearchParams(window.location.search).get('page')
    return page && STORIES.some(s => s.id === page) ? page : defaultId
  })

  useEffect(() => {
    const handler = () => {
      const page = new URLSearchParams(window.location.search).get('page')
      setActiveId(page && STORIES.some(s => s.id === page) ? page : defaultId)
    }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [defaultId])

  const active = STORIES.find(s => s.id === activeId) ?? STORIES[0]
  const categories = [...new Set(STORIES.map(s => s.category))]
  const { Component: StoryComponent } = active

  return (
    <div className="shell">
      <nav className="shell__sidebar">
        <button
          type="button"
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-gap-1)',
            width: '100%',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid var(--border-subtle)',
            padding: 'var(--spacing-p-2) var(--spacing-p-3)',
            cursor: 'pointer',
            color: 'var(--fg-secondary)',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--type-caption-bold-size)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--type-caption-bold-line-height)',
            letterSpacing: 'var(--type-caption-bold-tracking)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M8 10L4 6l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Welcome
        </button>
        <div className="shell__brand">
          <div className="shell__brand-text">
            ITSS Pipeline V2
            <div className="shell__brand-sub">Figma → React via MCP</div>
          </div>
          <div className="shell__brand-actions">
            <button
              type="button"
              className="shell__expand-btn"
              onClick={collapsed.size === allCategoryKeys.length && collapsedSubs.size === allSubKeys.length ? expandAll : collapseAll}
              title={collapsed.size === allCategoryKeys.length && collapsedSubs.size === allSubKeys.length ? 'Expand all' : 'Collapse all'}
            >
              {collapsed.size === allCategoryKeys.length && collapsedSubs.size === allSubKeys.length ? '+' : '−'}
            </button>
          </div>
        </div>
        <div className="shell__nav">
          {categories.map(cat => {
            const catStories = STORIES.filter(s => s.category === cat)
            const subcats = [...new Set(catStories.map(s => s.subCategory).filter((s): s is string => !!s))]
            const unsorted = catStories.filter(s => !s.subCategory)
            return (
              <div key={cat} className="shell__category">
                <button
                  type="button"
                  className="shell__category-header"
                  onClick={() => toggleCategory(cat)}
                  aria-expanded={!collapsed.has(cat)}
                >
                  <span>{cat}</span>
                  <svg
                    className={['shell__category-chevron', collapsed.has(cat) && 'shell__category-chevron--collapsed'].filter(Boolean).join(' ')}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {!collapsed.has(cat) && (
                  <>
                    {subcats.map(sub => {
                      const subKey = `${cat}/${sub}`
                      const isOpen = !collapsedSubs.has(subKey)
                      const subStories = catStories.filter(s => s.subCategory === sub)
                      return (
                        <div key={sub} className="shell__subcat">
                          <button
                            type="button"
                            className="shell__subcat-header"
                            onClick={() => toggleSub(subKey)}
                            aria-expanded={isOpen}
                          >
                            <span className="shell__subcat-icon">{isOpen ? '−' : '+'}</span>
                            <span>{sub}</span>
                          </button>
                          {isOpen && subStories.map(s => (
                            <a
                              key={s.id}
                              href={`?view=library&page=${s.id}`}
                              className={['shell__item', 'shell__item--indented', s.id === activeId && 'shell__item--active'].filter(Boolean).join(' ')}
                              onClick={(e) => { e.preventDefault(); window.history.pushState(null, '', `?view=library&page=${s.id}`); setActiveId(s.id) }}
                            >
                              {s.label}
                            </a>
                          ))}
                        </div>
                      )
                    })}
                    {unsorted.map(s => (
                      <a
                        key={s.id}
                        href={`?view=library&page=${s.id}`}
                        className={['shell__item', s.id === activeId && 'shell__item--active'].filter(Boolean).join(' ')}
                        onClick={(e) => { e.preventDefault(); window.history.pushState(null, '', `?view=library&page=${s.id}`); setActiveId(s.id) }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </nav>

      <main className="shell__content">
        <div className={['preview-page', active.id === 'hub/header' && 'preview-page--flex', active.id === 'hub/scaffolding' && 'preview-page--fullscreen'].filter(Boolean).join(' ')}>
          <div className="preview-header">
            <h1>{active.label}</h1>
            <p>{active.id}</p>
          </div>
          <StoryComponent />
        </div>
      </main>
    </div>
  )
}

function App() {
  const getViewFromParams = (): 'welcome' | 'library' | 'playground' | 'docs' => {
    const params = new URLSearchParams(window.location.search)
    const v = params.get('view')
    if (v === 'playground') return 'playground'
    if (v === 'docs')       return 'docs'
    if (v === 'library' || params.get('page')) return 'library'
    return 'welcome'
  }

  const [view, setView] = useState<'welcome' | 'library' | 'playground' | 'docs'>(getViewFromParams)

  useEffect(() => {
    const handler = () => setView(getViewFromParams())
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  const goToWelcome = () => {
    window.history.pushState(null, '', window.location.pathname)
    setView('welcome')
  }

  const goToLibrary = () => {
    window.history.pushState(null, '', '?view=library')
    setView('library')
  }

  const goToPlayground = () => {
    window.history.pushState(null, '', '?view=playground')
    setView('playground')
  }

  const goToDocs = () => {
    window.history.pushState(null, '', '?view=docs')
    setView('docs')
  }

  if (view === 'library')    return <Library    onBack={goToWelcome} />
  if (view === 'playground') return <Playground onBack={goToWelcome} />
  if (view === 'docs')       return <Docs       onBack={goToWelcome} />
  return <Welcome onLibrary={goToLibrary} onPlayground={goToPlayground} onDocs={goToDocs} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
