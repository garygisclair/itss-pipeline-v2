import React, { useState } from 'react'
import './Accordion.css'
import { Icon } from '../Icon/Icon'

export interface AccordionProps {
  /** Header title text */
  title: string
  /** Body content shown when open */
  children: React.ReactNode
  /** Whether the accordion starts open */
  defaultOpen?: boolean
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const classes = [
    'itss-accordion',
    isOpen ? 'itss-accordion--open' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <button
        type="button"
        className="itss-accordion__header"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        <span className="itss-accordion__title">{title}</span>
        <span className="itss-accordion__toggle" aria-hidden="true">
          <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={16} />
        </span>
      </button>

      {isOpen && (
        <div className="itss-accordion__content">
          {children}
        </div>
      )}
    </div>
  )
}
