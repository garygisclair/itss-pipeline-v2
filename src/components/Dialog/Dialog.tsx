import React from 'react'
import { Icon } from '../Icon/Icon'
import { CtaButton } from '../Button/CtaButton'
import { LinkButton } from '../LinkButton/LinkButton'
import './Dialog.css'

export type DialogSize = 'small' | 'medium' | 'large'

export interface DialogProps {
  size?: DialogSize
  title?: string
  subtitle?: string
  showBackBtn?: boolean
  showGrabber?: boolean
  showCancel?: boolean
  cancelLabel?: string
  submitLabel?: string
  additionalLinkLabel?: string
  onClose?: () => void
  onBack?: () => void
  onCancel?: () => void
  onSubmit?: () => void
  onAdditionalLink?: () => void
  children?: React.ReactNode
  className?: string
}

export function Dialog({
  size = 'small',
  title = 'Modal title',
  subtitle,
  showBackBtn = false,
  showGrabber = false,
  showCancel = true,
  cancelLabel = 'Cancel',
  submitLabel = 'Submit',
  additionalLinkLabel,
  onClose,
  onBack,
  onCancel,
  onSubmit,
  onAdditionalLink,
  children,
  className,
}: DialogProps) {
  return (
    <div
      className={[
        'itss-dialog',
        `itss-dialog--${size}`,
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Header */}
      <div className="itss-dialog__header">
        {showGrabber && <div className="itss-dialog__grabber" />}
        <div className="itss-dialog__header-content">
          <div className="itss-dialog__title-frame">
            {showBackBtn && (
              <button
                type="button"
                className="itss-dialog__icon-btn"
                aria-label="Go back"
                onClick={onBack}
              >
                <Icon name="chevron-left" size={16} />
              </button>
            )}
            <div className="itss-dialog__title-wrap">
              <span className="itss-dialog__title">{title}</span>
              {subtitle && (
                <span className="itss-dialog__subtitle">{subtitle}</span>
              )}
            </div>
          </div>
          <button
            type="button"
            className="itss-dialog__icon-btn"
            aria-label="Close"
            onClick={onClose}
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="itss-dialog__body">
        {children ?? (
          <div className="itss-dialog__body-placeholder">
            <span>Replace with modal content</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="itss-dialog__footer">
        {additionalLinkLabel && (
          <LinkButton
            level="strong"
            size="medium"
            label={additionalLinkLabel}
            onClick={onAdditionalLink}
          />
        )}
        <div className="itss-dialog__footer-actions">
          {showCancel && (
            <CtaButton
              variant="secondary"
              size="medium"
              label={cancelLabel}
              onClick={onCancel}
            />
          )}
          <CtaButton
            variant="primary"
            size="medium"
            label={submitLabel}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
