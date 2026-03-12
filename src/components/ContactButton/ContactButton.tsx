import { useState } from 'react'
import './ContactButton.css'
import { Icon } from '../Icon/Icon'

export type ContactButtonProps = {
  /** Label shown before the email, e.g. "Email" or "Manager" */
  name: string
  email: string
  className?: string
}

export function ContactButton({ name, email, className }: ContactButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // clipboard API unavailable — fail silently
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={['itss-contact-btn', className].filter(Boolean).join(' ')}>
      <div className="itss-contact-btn__content">
        <span className="itss-contact-btn__name">{name}:</span>
        <a className="itss-contact-btn__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>

      <button
        className={[
          'itss-contact-btn__icon-btn',
          copied && 'itss-contact-btn__icon-btn--copied',
        ].filter(Boolean).join(' ')}
        onClick={handleCopy}
        type="button"
        aria-label={copied ? 'Copied' : 'Copy email address'}
      >
        <Icon name={copied ? 'tick' : 'copy'} size={16} />
        <span className="itss-contact-btn__tooltip" aria-hidden="true">
          {copied ? 'Copied' : 'Copy Email'}
        </span>
      </button>
    </div>
  )
}
