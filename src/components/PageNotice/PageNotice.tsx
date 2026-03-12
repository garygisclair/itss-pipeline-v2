import { Icon } from '../Icon/Icon'
import './PageNotice.css'

export type PageNoticeType = 'attention' | 'information' | 'confirmation' | 'general'

export interface PageNoticeProps {
  type?: PageNoticeType
  title?: string
  body?: string
  actionLabel?: string
  actionable?: boolean
  dismissable?: boolean
  onAction?: () => void
  onDismiss?: () => void
  className?: string
}

const ICON_MAP: Record<PageNoticeType, string> = {
  attention:    'attention-fill',
  information:  'information-fill',
  confirmation: 'confirmation-fill',
  general:      'information-fill',
}

export function PageNotice({
  type = 'attention',
  title = 'Notice title',
  body = 'Alert notice body content goes here.',
  actionLabel = 'Action',
  actionable = false,
  dismissable = false,
  onAction,
  onDismiss,
  className,
}: PageNoticeProps) {
  return (
    <div
      className={[
        'itss-page-notice',
        `itss-page-notice--${type}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="itss-page-notice__icon-wrap">
        <Icon name={ICON_MAP[type]} size={16} />
      </span>

      <div className="itss-page-notice__content-area">
        <div className="itss-page-notice__content">
          {title && (
            <span className="itss-page-notice__title">{title}</span>
          )}
          {body && (
            <span className="itss-page-notice__body">{body}</span>
          )}
        </div>

        {actionable && (
          <button
            type="button"
            className="itss-page-notice__action"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
      </div>

      {dismissable && (
        <button
          type="button"
          className="itss-page-notice__dismiss"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  )
}
