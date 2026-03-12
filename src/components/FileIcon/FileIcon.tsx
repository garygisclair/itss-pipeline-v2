import './FileIcon.css'

export type FileIconProps = {
  /** File type name — one of: "excel", "file", "pdf", "powerpoint", "word" */
  name: string
  /** Display size in px. Figma native size is 16. */
  size?: number
  className?: string
}

// Load all file icons eagerly at build time via glob.
// Key format: '../../logos/file-types/{name}.svg'
const modules = import.meta.glob<{ default: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }>(
  '../../logos/file-types/*.svg',
  { query: '?react', eager: true }
)

/** Returns all available file icon names (kebab-case, no extension). */
export function getFileIconNames(): string[] {
  return Object.keys(modules)
    .map(k => k.replace('../../logos/file-types/', '').replace('.svg', ''))
    .sort()
}

export function FileIcon({ name, size = 16, className }: FileIconProps) {
  const key = `../../logos/file-types/${name}.svg`
  const SvgIcon = modules[key]?.default ?? null

  if (!SvgIcon) {
    return (
      <span
        className={['itss-file-icon', 'itss-file-icon--missing', className].filter(Boolean).join(' ')}
        style={{ width: size, height: size }}
        title={`File icon not found: ${name}`}
      />
    )
  }

  return (
    <SvgIcon
      className={['itss-file-icon', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      aria-hidden="true"
    />
  )
}
