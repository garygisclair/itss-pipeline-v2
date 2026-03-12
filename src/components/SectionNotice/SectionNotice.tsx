import { Icon } from '../Icon/Icon'
import './SectionNotice.css'

export type SectionNoticeType = 'attention' | 'warning' | 'confirmation' | 'information' | 'general'
export type SectionNoticeLevel = 'strong' | 'subtle'

export interface SectionNoticeProps {
  type?: SectionNoticeType
  level?: SectionNoticeLevel
  title?: string
  body?: string
  actionLabel?: string
  actionable?: boolean
  dismissable?: boolean
  onAction?: () => void
  onDismiss?: () => void
  className?: string
}

const ICON_MAP: Record<SectionNoticeType, string | null> = {
  attention:    'attention-fill',
  warning:      'warning-fill',
  confirmation: 'confirmation-fill',
  information:  'information-fill',
  general:      null,
}

export function SectionNotice({
  type = 'attention',
  level = 'strong',
  title = 'Notice title',
  body = 'Alert notice body content goes here.',
  actionLabel = 'Action',
  actionable = false,
  dismissable = false,
  onAction,
  onDismiss,
  className,
}: SectionNoticeProps) {
  const iconName = ICON_MAP[type]

  return (
    <div
      className={[
        'itss-section-notice',
        `itss-section-notice--${type}`,
        `itss-section-notice--${level}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {iconName && (
        <span className="itss-section-notice__icon-wrap">
          <Icon name={iconName} size={16} />
        </span>
      )}

      <div className="itss-section-notice__content-area">
        <div className="itss-section-notice__content">
          {title && (
            <span className="itss-section-notice__title">{title}</span>
          )}
          {body && (
            <span className="itss-section-notice__body">{body}</span>
          )}
        </div>

        {actionable && (
          <button
            type="button"
            className="itss-section-notice__action"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
      </div>

      {dismissable && (
        <button
          type="button"
          className="itss-section-notice__dismiss"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  )
}
