import React from 'react'
import './Illustration.css'

export type IllustrationType = 'page' | 'inbox' | 'upload-file' | 'no-records' | 'ufo-oops' | 'coming-soon'

export interface IllustrationProps {
  type: IllustrationType
  /** Container size in px. Figma native size is 80. */
  size?: number
  className?: string
}

// Reuse the icon glob — SVGs scale to any size as vectors.
const iconModules = import.meta.glob<{ default: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }>(
  '../../icons/*.svg',
  { query: '?react', eager: true }
)

// Maps each illustration type to the closest existing library icon.
// page         → page-16.svg    (document shape)
// inbox        → mail-24.svg    (inbox is where mail lives)
// upload-file  → upload-24.svg  (cloud/upload action)
// no-records   → file-24.svg    (empty document = no records)
// ufo-oops     → rocket-16.svg  (space-themed whimsy for "nothing here")
const TYPE_ICON: Record<IllustrationType, string> = {
  page:          '../../icons/page-16.svg',
  inbox:         '../../icons/mail-24.svg',
  'upload-file': '../../icons/upload-24.svg',
  'no-records':  '../../icons/file-24.svg',
  'ufo-oops':    '../../icons/rocket-16.svg',
  'coming-soon': '../../icons/responsive-24.svg',
}

export function Illustration({ type, size = 80, className }: IllustrationProps) {
  const SvgIcon = iconModules[TYPE_ICON[type]]?.default ?? null
  const iconSize = Math.round(size * 0.45)

  return (
    <div
      className={['itss-illustration', `itss-illustration--${type}`, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {SvgIcon && (
        <SvgIcon
          className="itss-illustration__icon"
          width={iconSize}
          height={iconSize}
        />
      )}
    </div>
  )
}
