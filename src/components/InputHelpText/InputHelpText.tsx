import './InputHelpText.css'
import { Icon } from '../Icon/Icon'

export type InputHelpTextProps = {
  helpText?: string
  showHelpText?: boolean
  characterCount?: string
  showCount?: boolean
  error?: boolean
}

export function InputHelpText({
  helpText = 'Helper text goes here',
  showHelpText = true,
  characterCount = '0/100',
  showCount = true,
  error = false,
}: InputHelpTextProps) {
  return (
    <div className={`itss-input-help-text${error ? ' itss-input-help-text--error' : ''}`}>
      {showHelpText && (
        <div className={`itss-input-help-text__helper${error ? ' itss-input-help-text__helper--error' : ''}`}>
          {error && (
            <Icon name="attention-fill" size={16} className="itss-input-help-text__error-icon" />
          )}
          <span className="itss-input-help-text__help">{helpText}</span>
        </div>
      )}
      {showCount && (
        <span className="itss-input-help-text__count">{characterCount}</span>
      )}
    </div>
  )
}
