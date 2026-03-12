// ── ITSS Playground ───────────────────────────────────────────────────────
// Edit this file to build your UI using ITSS design system components.
// Import any component: import { Name } from './components/Name/Name'
// Design tokens are CSS variables: --bg-*, --fg-*, --spacing-*, etc.
// ─────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import './playground.css'
import { HubHeader } from './components/HubHeader/HubHeader'
import { SitebuilderNavigation } from './components/SitebuilderNavigation/SitebuilderNavigation'
import { Sidebar } from './components/Sidebar/Sidebar'
import { SectionNotice } from './components/SectionNotice/SectionNotice'
import { IconButton } from './components/IconButton/IconButton'
import { Icon } from './components/Icon/Icon'

const SAMPLE_PROMPT =
  `I'm working in the ITSS Pipeline V2 project. Edit src/playground.tsx to build [describe your UI here]. ` +
  `All components are in src/components/ — import them with relative paths. ` +
  `Use design tokens from src/tokens.css for all colors, spacing, and typography. No hardcoded values.`

export function Playground({ onBack }: { onBack: () => void }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_PROMPT).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

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
          <div className="pg-instruction">
            <SectionNotice
              type="information"
              level="strong"
              title="Ready to build?"
              body="Point your AI assistant at src/playground.tsx and start building something amazing with the ITSS component library."
            />
            <div className="pg-prompt-block">
              <p className="itss-caption pg-prompt-label">Sample prompt — paste into your AI</p>
              <div className="pg-prompt-body">
                <p className="itss-body pg-prompt-text">{SAMPLE_PROMPT}</p>
                <div className={copied ? 'pg-copy-btn--copied' : undefined}>
                  <IconButton
                    icon={<Icon name={copied ? 'tick' : 'copy'} size={16} />}
                    aria-label={copied ? 'Copied' : 'Copy prompt'}
                    style="borderless"
                    size="small"
                    onClick={handleCopy}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  )
}
