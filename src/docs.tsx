import { useState } from 'react'
import thumbsUp from './thumbs-up.png'
import './docs.css'
import { ProgressStepper } from './components/ProgressStepper/ProgressStepper'
import { CtaButton } from './components/Button/CtaButton'
import { Dialog } from './components/Dialog/Dialog'

const STEPS = [
  {
    state: 'complete' as const,
    title: 'Extract design tokens',
    subtitle: 'Connected Figma via MCP and pulled all color, typography, spacing, and state tokens into tokens.css.',
  },
  {
    state: 'complete' as const,
    title: 'Implement components',
    subtitle: 'Used get_design_context to translate each Figma component directly into TSX + CSS — no scripts, no intermediate specs.',
  },
  {
    state: 'complete' as const,
    title: 'Build the UI Library',
    subtitle: 'Assembled a preview shell with sidebar navigation so every component can be browsed and inspected in one place.',
  },
  {
    state: 'complete' as const,
    title: 'Add the Playground',
    subtitle: 'Created a Hub-scaffolded sandbox where anyone can prototype new experiences using the component library.',
  },
  {
    state: 'latest' as const,
    title: 'Ship and iterate',
    subtitle: 'Hosted on GitHub. Teams can clone, branch, and build — using their AI assistant with the included sample prompt.',
  },
]

interface DocsProps {
  onBack: () => void
}

export function Docs({ onBack }: DocsProps) {
  const [showSummary, setShowSummary] = useState(false)

  return (
    <div className="docs-page">

      {/* ── Back bar ─────────────────────────────────────────── */}
      <div className="docs-back-bar">
        <button type="button" className="docs-back-btn" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Welcome
        </button>
      </div>

      <div className="docs-content">

        {/* Hero */}
        <div className="docs-hero">
          <p className="itss-signal-1 docs-eyebrow">ITSS Pipeline V2</p>
          <div className="docs-hero__title-row">
            <h1 className="itss-title-1 docs-title">About this project</h1>
            <CtaButton variant="tertiary" size="small" label="Summarize" onClick={() => setShowSummary(true)} />
          </div>
          <p className="itss-subtitle-2 docs-lead">
            A Figma-to-React pipeline that uses Claude Code and the Figma MCP to turn
            design components into production-ready TSX and CSS — without scripts,
            tokens files, or Storybook overhead.
          </p>
        </div>

        {/* The goal */}
        <div className="docs-section">
          <h2 className="itss-title-2 docs-section__heading">The goal</h2>
          <p className="itss-body docs-section__body">
            The Hub design system lives in Figma. Getting it into React historically meant
            exporting assets, writing specs, and hand-coding components one by one. This project
            collapses that entire pipeline into a single workflow: point Claude Code at a Figma node,
            and get a fully-styled, token-compliant React component back — ready to use.
          </p>
          <p className="itss-body docs-section__body">
            The result is a living component library that stays in sync with Figma by design,
            plus a Playground where anyone on the team can prototype new Hub experiences
            using those same components.
          </p>
        </div>

        {/* What's inside */}
        <div className="docs-section">
          <h2 className="itss-title-2 docs-section__heading">What's inside</h2>
          <div className="docs-stats">
            <div className="docs-stat">
              <p className="itss-title-1 docs-stat__number">70+</p>
              <p className="itss-body docs-stat__label">Components</p>
            </div>
            <div className="docs-stat">
              <p className="itss-title-1 docs-stat__number">200+</p>
              <p className="itss-body docs-stat__label">Design tokens</p>
            </div>
            <div className="docs-stat">
              <p className="itss-title-1 docs-stat__number">0</p>
              <p className="itss-body docs-stat__label">Magic numbers</p>
            </div>
          </div>
        </div>

        {/* How we built it */}
        <div className="docs-section">
          <h2 className="itss-title-2 docs-section__heading">How we built it</h2>
          <ProgressStepper steps={STEPS} vertical />
        </div>

        {/* Conventions */}
        {/* <div className="docs-section">
          <h2 className="itss-title-2 docs-section__heading">Conventions</h2>
          <div className="docs-conventions">
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">Class prefix</p>
              <p className="itss-body docs-section__body">All component classes use the <code className="docs-code">itss-</code> prefix with BEM modifiers — e.g. <code className="docs-code">itss-cta-btn--primary</code>.</p>
            </div>
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">Plain CSS</p>
              <p className="itss-body docs-section__body">No Tailwind, no CSS-in-JS. Each component has a co-located <code className="docs-code">.css</code> file. Styles are scoped by class prefix.</p>
            </div>
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">Tokens only</p>
              <p className="itss-body docs-section__body">All colors, spacing, typography, and radii reference CSS custom properties from <code className="docs-code">tokens.css</code>. No hardcoded values.</p>
            </div>
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">Token discipline</p>
              <p className="itss-body docs-section__body">Tokens are only added when confirmed from Figma — never inferred from patterns or guessed from neighboring values.</p>
            </div>
          </div>
        </div> */}

        {/* For contributors */}
        {/* <div className="docs-section">
          <h2 className="itss-title-2 docs-section__heading">For contributors</h2>
          <p className="itss-body docs-section__body">
            New components are added by pointing Claude Code at a Figma node. Four MCP tools drive the entire workflow:
          </p>
          <div className="docs-conventions">
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">get_design_context</p>
              <p className="itss-body docs-section__body">Primary tool. Returns reference code and a screenshot for a given Figma node — replaces the entire extract → spec → generate pipeline.</p>
            </div>
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">get_variable_defs</p>
              <p className="itss-body docs-section__body">Extracts design tokens. Call separately for light and dark modes — light values go in <code className="docs-code">:root</code>, dark in <code className="docs-code">[data-dark="true"]</code>.</p>
            </div>
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">get_metadata</p>
              <p className="itss-body docs-section__body">Returns child node IDs for large frames. Use when <code className="docs-code">get_design_context</code> output is too large — fetch metadata first, then call on individual variants.</p>
            </div>
            <div className="docs-convention">
              <p className="itss-body-bold docs-convention__title">get_screenshot</p>
              <p className="itss-body docs-section__body">Visual inspection without code. Useful for checking layout and spacing when reference code isn't needed.</p>
            </div>
          </div>
        </div> */}

      </div>
      {/* Summary modal */}
      {showSummary && (
        <div className="docs-scrim" onClick={() => setShowSummary(false)}>
          <div onClick={e => e.stopPropagation()}>
            <Dialog
              size="small"
              title=" "
              showCancel={false}
              submitLabel="Nice"
              onClose={() => setShowSummary(false)}
              onSubmit={() => setShowSummary(false)}
            >
              <div className="docs-summary-body">
                <p className="docs-retro-title">It's Awesome!</p>
                <div className="docs-thumb-circle">
                  <img src={thumbsUp} alt="Thumbs up" className="docs-thumb-img" />
                </div>
                <p className="itss-body">
                  A fully token-compliant ITSS component library, built directly from Figma
                  using Claude Code and the Figma MCP. Zero magic numbers. Zero scripts.
                  Just great components, ready to use.
                </p>
              </div>
            </Dialog>
          </div>
        </div>
      )}

    </div>
  )
}
