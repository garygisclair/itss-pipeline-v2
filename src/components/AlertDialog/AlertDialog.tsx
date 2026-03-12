import { ScalableIcon } from '../Icon/Icon'
import { CtaButton } from '../Button/CtaButton'
import { DestructiveButton } from '../DestructiveButton/DestructiveButton'
import './AlertDialog.css'

export type AlertDialogType = 'confirmation' | 'warning' | 'attention' | 'general' | 'destructive'

export interface AlertDialogProps {
  type?: AlertDialogType
  title?: string
  body?: string
  confirmLabel?: string
  cancelLabel?: string
  /** Show Cancel + Confirm (true) or Confirm only (false) */
  doubleButton?: boolean
  onConfirm?: () => void
  onCancel?: () => void
  className?: string
}

const ICON_MAP: Partial<Record<AlertDialogType, string>> = {
  confirmation: 'confirmation-fill',
  warning:      'warning-fill',
  attention:    'attention-fill',
}

const DEFAULT_TITLES: Record<AlertDialogType, string> = {
  confirmation: 'Success',
  warning:      'Warning',
  attention:    'Attention',
  general:      'Notice',
  destructive:  'Discard Changes?',
}

export function AlertDialog({
  type = 'confirmation',
  title,
  body = 'Use this when there is navigational redirection after confirmation. Otherwise, use a snackbar instead.',
  confirmLabel = 'Continue',
  cancelLabel = 'Cancel',
  doubleButton = true,
  onConfirm,
  onCancel,
  className,
}: AlertDialogProps) {
  const iconName = ICON_MAP[type]
  const resolvedTitle = title ?? DEFAULT_TITLES[type]

  return (
    <div
      className={[
        'itss-alert-dialog',
        `itss-alert-dialog--${type}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Alert body */}
      <div className={['itss-alert-dialog__body', iconName && 'itss-alert-dialog__body--with-icon'].filter(Boolean).join(' ')}>
        {iconName && (
          <span className="itss-alert-dialog__icon">
            <ScalableIcon name={iconName} size={48} />
          </span>
        )}
        <div className="itss-alert-dialog__content">
          <span className="itss-alert-dialog__title">{resolvedTitle}</span>
          <p className="itss-alert-dialog__description">{body}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="itss-alert-dialog__footer">
        {doubleButton && (
          <CtaButton
            variant="secondary"
            size="medium"
            label={cancelLabel}
            onClick={onCancel}
            className="itss-alert-dialog__btn"
          />
        )}
        {type === 'destructive' ? (
          <DestructiveButton
            variant="primary"
            size="medium"
            label={confirmLabel}
            onClick={onConfirm}
            className="itss-alert-dialog__btn"
          />
        ) : (
          <CtaButton
            variant="primary"
            size="medium"
            label={confirmLabel}
            onClick={onConfirm}
            className="itss-alert-dialog__btn"
          />
        )}
      </div>
    </div>
  )
}
