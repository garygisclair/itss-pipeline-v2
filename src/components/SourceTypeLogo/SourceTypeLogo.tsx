import './SourceTypeLogo.css'

export type SourceTypeLogoProps = {
  /** Source type name — kebab-case filename without extension, e.g. "wiki", "gdrive", "googledoc" */
  name: string
  /** Display size in px. Figma native size is 48. */
  size?: number
  className?: string
}

// Load all source type logos eagerly at build time via glob.
// Key format: '../../logos/source-types/{name}.svg'
const modules = import.meta.glob<{ default: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }>(
  '../../logos/source-types/*.svg',
  { query: '?react', eager: true }
)

/** Returns all available source type logo names (kebab-case, no extension). */
export function getSourceTypeLogoNames(): string[] {
  return Object.keys(modules)
    .map(k => k.replace('../../logos/source-types/', '').replace('.svg', ''))
    .sort()
}

export function SourceTypeLogo({ name, size = 48, className }: SourceTypeLogoProps) {
  const key = `../../logos/source-types/${name}.svg`
  const SvgLogo = modules[key]?.default ?? null

  if (!SvgLogo) {
    return (
      <span
        className={['itss-source-type-logo', 'itss-source-type-logo--missing', className].filter(Boolean).join(' ')}
        style={{ width: size, height: size }}
        title={`Source type logo not found: ${name}`}
      />
    )
  }

  return (
    <SvgLogo
      className={['itss-source-type-logo', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      aria-hidden="true"
    />
  )
}
