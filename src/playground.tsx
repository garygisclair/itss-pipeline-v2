// ── ITSS Playground ───────────────────────────────────────────────────────
// Edit this file to build your UI using ITSS design system components.
// Import any component: import { Name } from './components/Name/Name'
// Design tokens are CSS variables: --bg-*, --fg-*, --spacing-*, etc.
// ─────────────────────────────────────────────────────────────────────────

import './playground.css'
import { HubHeader } from './components/HubHeader/HubHeader'
import { SitebuilderNavigation } from './components/SitebuilderNavigation/SitebuilderNavigation'
import { Sidebar } from './components/Sidebar/Sidebar'
import { EmptyState } from './components/EmptyState/EmptyState'

export function Playground({ onBack }: { onBack: () => void }) {
  return (
    <div className="pg-page">

      {/* ── Back bar ───────────────────────────────────────── */}
      <div className="pg-back-bar">
        <button type="button" className="pg-back-btn" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Welcome
        </button>
      </div>

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="pg-header-stack">
        <HubHeader
          avatarSrc="https://i.pravatar.cc/80"
          avatarProgress={50}
          notificationCount={1}
        />
        <SitebuilderNavigation
          siteName="Company"
          links={[
            { label: 'Home', active: true },
            { label: 'About' },
            { label: 'Events' },
            { label: 'Contact' },
          ]}
        />
      </div>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="pg-body">
        <Sidebar layout="interactive" />
        <div className="pg-sidebar-spacer" />

        {/* ── Main content — edit below ───────────────────── */}
        <main className="pg-main pg-main--grid">
          <div className="pg-empty-center">
            <EmptyState type="no-records" />
          </div>
        </main>
      </div>

    </div>
  )
}
