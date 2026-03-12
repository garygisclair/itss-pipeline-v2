import React from 'react'
import './NavBarAvatar.css'

const RADIUS = 24
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export interface NavBarAvatarProps {
  src?: string
  initials?: string
  alt?: string
  /** 0–100. Shows the progress ring + percentage label. Omit for complete state (no ring). */
  progress?: number
  className?: string
}

export const NavBarAvatar: React.FC<NavBarAvatarProps> = ({
  src,
  initials,
  alt = '',
  progress,
  className,
}) => {
  const showRing = progress != null
  const dashOffset = showRing ? CIRCUMFERENCE * (1 - progress! / 100) : 0
  const classes = ['itss-nav-avatar', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {/* Progress ring — 52×52 SVG offset -2px from 48px avatar */}
      {showRing && (
        <svg
          className="itss-nav-avatar__ring"
          width={52}
          height={52}
          viewBox="0 0 52 52"
          aria-hidden="true"
        >
          <circle
            cx={26} cy={26} r={RADIUS}
            fill="none"
            className="itss-nav-avatar__ring-track"
            strokeWidth={2}
          />
          <circle
            cx={26} cy={26} r={RADIUS}
            fill="none"
            className="itss-nav-avatar__ring-fill"
            strokeWidth={2}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 26 26)"
          />
        </svg>
      )}

      {/* Avatar circle */}
      <div className="itss-nav-avatar__photo">
        {src ? (
          <img src={src} alt={alt} className="itss-nav-avatar__img" />
        ) : initials ? (
          <span className="itss-nav-avatar__initials">{initials.slice(0, 2).toUpperCase()}</span>
        ) : (
          <svg className="itss-nav-avatar__fallback" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        )}
      </div>

      {/* Percent label pill */}
      {showRing && (
        <span className="itss-nav-avatar__label" aria-hidden="true">
          {progress!}%
        </span>
      )}
    </div>
  )
}
