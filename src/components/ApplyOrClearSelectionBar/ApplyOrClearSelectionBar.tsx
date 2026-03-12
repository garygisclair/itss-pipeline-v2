import { CtaButton } from '../Button/CtaButton'
import { LinkButton } from '../LinkButton/LinkButton'
import './ApplyOrClearSelectionBar.css'

export interface ApplyOrClearSelectionBarProps {
  /** Show the Apply CTA button (default: true). When false only the Clear link renders. */
  applyButton?: boolean
  applyLabel?: string
  clearLabel?: string
  onApply?: () => void
  onClear?: () => void
  className?: string
}

export function ApplyOrClearSelectionBar({
  applyButton = true,
  applyLabel = 'Apply',
  clearLabel = 'Clear all',
  onApply,
  onClear,
  className,
}: ApplyOrClearSelectionBarProps) {
  return (
    <div
      className={[
        'itss-apply-clear-bar',
        className,
      ].filter(Boolean).join(' ')}
    >
      {applyButton && (
        <CtaButton
          variant="primary"
          size="small"
          label={applyLabel}
          onClick={onApply}
        />
      )}
      <span className="itss-apply-clear-bar__clear-wrap">
        <LinkButton
          level="subtle-primary"
          size="medium"
          label={clearLabel}
          onClick={onClear}
        />
      </span>
    </div>
  )
}
