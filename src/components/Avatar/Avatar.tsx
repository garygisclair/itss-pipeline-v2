import './Avatar.css'
import { Icon } from '../Icon/Icon'

export type AvatarType = 'no-photo' | 'initials' | 'photo'
export type AvatarSize = 'normal' | 'small'

export type AvatarProps = {
  type?: AvatarType
  size?: AvatarSize
  /** Required when type="initials" */
  initials?: string
  /** Required when type="photo" */
  src?: string
  alt?: string
  className?: string
}

export function Avatar({
  type = 'no-photo',
  size = 'normal',
  initials,
  src,
  alt,
  className,
}: AvatarProps) {
  const classes = [
    'itss-avatar',
    `itss-avatar--${type}`,
    `itss-avatar--${size}`,
    className,
  ].filter(Boolean).join(' ')

  const iconSize = size === 'normal' ? 20 : 16

  return (
    <div className={classes}>
      {type === 'no-photo' && (
        <Icon name="profile" size={iconSize} />
      )}
      {type === 'initials' && (
        <span className="itss-avatar__initials" aria-hidden="true">
          {initials}
        </span>
      )}
      {type === 'photo' && (
        <img className="itss-avatar__photo" src={src} alt={alt ?? ''} />
      )}
    </div>
  )
}
