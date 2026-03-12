import './ToolLogo.css'

export type ToolLogoProps = {
  /** Tool name — kebab-case filename without extension, e.g. "workday", "jira", "google-drive" */
  name: string
  /** Display size in px. Figma native size is 48. */
  size?: number
  className?: string
}

// Load all tool logos eagerly at build time via glob.
// Key format: '../../logos/tools/{name}.svg'
const modules = import.meta.glob<{ default: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }>(
  '../../logos/tools/*.svg',
  { query: '?react', eager: true }
)

/** Returns all available tool logo names (kebab-case, no extension). */
export function getToolLogoNames(): string[] {
  return Object.keys(modules)
    .map(k => k.replace('../../logos/tools/', '').replace('.svg', ''))
    .sort()
}

export function ToolLogo({ name, size = 48, className }: ToolLogoProps) {
  const key = `../../logos/tools/${name}.svg`
  const SvgLogo = modules[key]?.default ?? null

  if (!SvgLogo) {
    return (
      <span
        className={['itss-tool-logo', 'itss-tool-logo--missing', className].filter(Boolean).join(' ')}
        style={{ width: size, height: size }}
        title={`Tool logo not found: ${name}`}
      />
    )
  }

  return (
    <SvgLogo
      className={['itss-tool-logo', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      aria-hidden="true"
    />
  )
}
