import './LinkButton.css'

export type LinkButtonLevel =
  | 'strong'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'inverse'
  | 'subtle-inverse'
  | 'disabled'

export type LinkButtonSize = 'large' | 'medium' | 'small'

export type LinkButtonProps = {
  label?: string
  level?: LinkButtonLevel
  size?: LinkButtonSize
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function LinkButton({
  label = 'Button title',
  level = 'strong',
  size = 'large',
  leadingIcon,
  trailingIcon,
  href,
  onClick,
  className = '',
}: LinkButtonProps) {
  const cls = [
    'itss-link-btn',
    `itss-link-btn--${size}`,
    `itss-link-btn--${level}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const disabled = level === 'disabled'

  const content = (
    <>
      {leadingIcon && (
        <span className="itss-link-btn__icon itss-link-btn__icon--leading">
          {leadingIcon}
        </span>
      )}
      <span className="itss-link-btn__label">{label}</span>
      {trailingIcon && (
        <span className="itss-link-btn__icon itss-link-btn__icon--trailing">
          {trailingIcon}
        </span>
      )}
    </>
  )

  if (href && !disabled) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={cls} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
