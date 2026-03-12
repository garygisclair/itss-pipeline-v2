import './Divider.css'

interface DividerProps {
  type?: 'horizontal' | 'vertical'
  /** full = no inset | 16 = 16px each side | free = custom freeInset px */
  inset?: 'full' | '16' | 'free'
  /** Inset in px on each side, used when inset="free" */
  freeInset?: number
  className?: string
}

export function Divider({
  type = 'horizontal',
  inset = 'full',
  freeInset = 0,
  className,
}: DividerProps) {
  const classes = [
    'itss-divider',
    `itss-divider--${type}`,
    inset !== 'full' && `itss-divider--inset-${inset}`,
    className,
  ].filter(Boolean).join(' ')

  const freeInsetStyle = inset === 'free'
    ? type === 'horizontal'
      ? { paddingLeft: freeInset, paddingRight: freeInset }
      : { paddingTop: freeInset, paddingBottom: freeInset }
    : undefined

  return (
    <div
      role="separator"
      aria-orientation={type}
      className={classes}
      style={freeInsetStyle}
    >
      <div className="itss-divider__line" />
    </div>
  )
}
