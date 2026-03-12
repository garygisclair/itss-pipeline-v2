import './InputValueField.css'
import { InputTitle } from '../InputTitle/InputTitle'

export type InputValueFieldProps = {
  title?: string
  required?: boolean
  optional?: boolean
  tooltip?: boolean
  value?: string
}

export function InputValueField({
  title = 'Title',
  required = false,
  optional = false,
  tooltip = false,
  value = 'Value',
}: InputValueFieldProps) {
  return (
    <div className="itss-input-value-field">
      <InputTitle title={title} required={required} optional={optional} tooltip={tooltip} />
      <span className="itss-input-value-field__value">{value}</span>
    </div>
  )
}
