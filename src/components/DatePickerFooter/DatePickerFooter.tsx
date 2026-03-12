import './DatePickerFooter.css'

export type DatePickerFooterProps = {
  cancelLabel?: string
  applyLabel?: string
  applyDisabled?: boolean
  onCancel?: () => void
  onApply?: () => void
}

export function DatePickerFooter({
  cancelLabel = 'Cancel',
  applyLabel = 'Apply',
  applyDisabled = false,
  onCancel,
  onApply,
}: DatePickerFooterProps) {
  return (
    <div className="itss-dp-footer">
      <button
        type="button"
        className="itss-dp-footer__cancel"
        onClick={onCancel}
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        className="itss-dp-footer__apply"
        onClick={onApply}
        disabled={applyDisabled}
      >
        {applyLabel}
      </button>
    </div>
  )
}
