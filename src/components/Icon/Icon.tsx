import './Icon.css'

export type IconSize = 12 | 16 | 20 | 24

export type IconProps = {
  /** Icon name without size suffix, e.g. "edit", "chevron-right", "ai-fill" */
  name: string
  size?: IconSize
  className?: string
  /** Falls back to currentColor if not set */
  color?: string
}

// Load all icons eagerly at build time via glob.
// Key format: '../../icons/{name}-{size}.svg'
const modules = import.meta.glob<{ default: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }>(
  '../../icons/*.svg',
  { query: '?react', eager: true }
)

function getIcon(name: string, size: IconSize) {
  const key = `../../icons/${name}-${size}.svg`
  if (modules[key]) return modules[key].default
  // Fall back to nearest available size
  const fallbacks: IconSize[] = size <= 16 ? [20, 24, 12] : size === 20 ? [24, 16, 12] : [20, 16, 12]
  for (const s of fallbacks) {
    const fallbackKey = `../../icons/${name}-${s}.svg`
    if (modules[fallbackKey]) return modules[fallbackKey].default
  }
  return null
}

const ALL_SIZES: IconSize[] = [12, 16, 20, 24]

/** Returns all sizes available for a given icon name. */
export function getAvailableSizes(name: string): IconSize[] {
  return ALL_SIZES.filter(s => `../../icons/${name}-${s}.svg` in modules)
}

// ── Scalable icons ────────────────────────────────────────────
// Named {name}-scalable.svg, designed for 48×48 display.

const scalableModules = import.meta.glob<{ default: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }>(
  '../../icons/*-scalable.svg',
  { query: '?react', eager: true }
)

/** Returns all available scalable icon names (without the -scalable suffix). */
export function getScalableIconNames(): string[] {
  return Object.keys(scalableModules)
    .map(k => k.replace('../../icons/', '').replace('-scalable.svg', ''))
    .sort()
}

export type ScalableIconProps = {
  name: string
  size?: number
  className?: string
}

export function ScalableIcon({ name, size = 48, className }: ScalableIconProps) {
  const key = `../../icons/${name}-scalable.svg`
  const SvgIcon = scalableModules[key]?.default ?? null

  if (!SvgIcon) {
    return (
      <span
        className={['itss-icon', 'itss-icon--missing', className].filter(Boolean).join(' ')}
        style={{ width: size, height: size }}
        title={`Scalable icon not found: ${name}`}
      />
    )
  }

  return (
    <SvgIcon
      className={['itss-icon', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      aria-hidden="true"
    />
  )
}

export function Icon({ name, size = 16, className, color }: IconProps) {
  const SvgIcon = getIcon(name, size)

  if (!SvgIcon) {
    // Render a placeholder box in dev so missing icons are obvious
    return (
      <span
        className={['itss-icon', 'itss-icon--missing', className].filter(Boolean).join(' ')}
        style={{ width: size, height: size }}
        title={`Icon not found: ${name}-${size}`}
      />
    )
  }

  return (
    <SvgIcon
      className={['itss-icon', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      style={color ? { color } : undefined}
      aria-hidden="true"
    />
  )
}
