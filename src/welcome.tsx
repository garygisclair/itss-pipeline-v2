import './welcome.css'
// import { HubLogo } from './components/Logo/Logo'
import { Icon } from './components/Icon/Icon'
import { IconButton } from './components/IconButton/IconButton'
import { CtaButton } from './components/Button/CtaButton'

interface WelcomeProps {
  onLibrary:    () => void
  onPlayground: () => void
  onDocs:       () => void
}

export function Welcome({ onLibrary, onPlayground, onDocs }: WelcomeProps) {
  return (
    <div className="wl-page">

      <div className="wl-hero">
        {/* <div className="wl-logo">
          <HubLogo width={120} />
        </div> */}
        <h1 className="itss-title-1 wl-title">ITSS Design System</h1>
        <p className="itss-subtitle-2 wl-subtitle">
          Component library and playground for the Hub
        </p>
      </div>

      <div className="wl-cards">

        {/* UI Library */}
        <div className="wl-card" onClick={onLibrary}>
          <IconButton
            icon={<Icon name="book" size={20} />}
            aria-label="UI Library"
            style="tertiary"
            size="medium"
            onClick={onLibrary}
          />
          <div className="wl-card__body">
            <h2 className="itss-title-3 wl-card__title">UI Library</h2>
            <p className="itss-body wl-card__desc">
              Browse all components, tokens, and design patterns.
            </p>
          </div>
          <div className="wl-card__footer">
            <CtaButton
              variant="secondary"
              size="small"
              label="Open library"
              trailingIcon={<Icon name="arrow-right" size={16} />}
              onClick={onLibrary}
            />
          </div>
        </div>

        {/* Playground */}
        <div className="wl-card" onClick={onPlayground}>
          <IconButton
            icon={<Icon name="code" size={20} />}
            aria-label="Playground"
            style="tertiary"
            size="medium"
            onClick={onPlayground}
          />
          <div className="wl-card__body">
            <h2 className="itss-title-3 wl-card__title">Playground</h2>
            <p className="itss-body wl-card__desc">
              Build and prototype using ITSS components.
            </p>
          </div>
          <div className="wl-card__footer">
            <CtaButton
              variant="secondary"
              size="small"
              label="Open playground"
              trailingIcon={<Icon name="arrow-right" size={16} />}
              onClick={onPlayground}
            />
          </div>
        </div>

        {/* Docs */}
        <div className="wl-card" onClick={onDocs}>
          <IconButton
            icon={<Icon name="page" size={20} />}
            aria-label="About"
            style="tertiary"
            size="medium"
            onClick={onDocs}
          />
          <div className="wl-card__body">
            <h2 className="itss-title-3 wl-card__title">About</h2>
            <p className="itss-body wl-card__desc">
              The goal, how we built it, and what's inside.
            </p>
          </div>
          <div className="wl-card__footer">
            <CtaButton
              variant="secondary"
              size="small"
              label="Read more"
              trailingIcon={<Icon name="arrow-right" size={16} />}
              onClick={onDocs}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
