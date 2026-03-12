import './InputTitle.css'
import { Icon } from '../Icon/Icon'

export type InputTitleProps = {
  title?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
}

export function InputTitle({
  title = 'Title',
  required = false,
  optional = false,
  tooltip = false,
}: InputTitleProps) {
  return (
    <div className="itss-input-title">
      <div className="itss-input-title__label">
        <span className="itss-input-title__text">{title}</span>
        {required && <span className="itss-input-title__required">*</span>}
      </div>
      {tooltip && <Icon name="information" size={16} className="itss-input-title__tooltip-icon" />}
      {optional && <span className="itss-input-title__optional">(optional)</span>}
    </div>
  )
}
