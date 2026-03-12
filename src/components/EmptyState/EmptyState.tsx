import { Illustration, IllustrationType } from '../Illustration/Illustration'
import './EmptyState.css'

export type EmptyStateType = 'upload-file' | 'no-records' | 'ufo-oops'

const DEFAULT_MESSAGES: Record<EmptyStateType, string> = {
  'upload-file': 'Select a file to upload',
  'no-records':  'No Records Found',
  'ufo-oops':    "Oops! There's nothing here.",
}

export interface EmptyStateProps {
  type: EmptyStateType
  /** Override the default message for this type. */
  message?: string
  /** Size of the Illustration in px. Default 60. */
  illustrationSize?: number
  className?: string
}

export function EmptyState({ type, message, illustrationSize = 60, className }: EmptyStateProps) {
  return (
    <div className={['itss-empty-state', className].filter(Boolean).join(' ')}>
      <Illustration type={type as IllustrationType} size={illustrationSize} />
      <p className="itss-empty-state__message">
        {message ?? DEFAULT_MESSAGES[type]}
      </p>
    </div>
  )
}
