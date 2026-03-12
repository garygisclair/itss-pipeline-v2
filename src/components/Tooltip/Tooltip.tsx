import './Tooltip.css'

export type TooltipPlacement = 'on-top' | 'on-bottom' | 'on-left' | 'on-right' | 'free'

export type TooltipProps = {
  /** Text shown inside the tooltip bubble */
  content: string
  placement?: TooltipPlacement
  /** The element that triggers the tooltip on hover */
  children: React.ReactNode
  className?: string
}

export function Tooltip({
  content,
  placement = 'on-top',
  children,
  className,
}: TooltipProps) {
  const showArrow = placement !== 'free'
  const arrowFirst = placement === 'on-bottom' || placement === 'on-right'

  return (
    <span className={['itss-tooltip-wrapper', className].filter(Boolean).join(' ')}>
      {children}
      <span className={`itss-tooltip itss-tooltip--${placement}`} role="tooltip">
        {showArrow && arrowFirst && <span className="itss-tooltip__arrow" aria-hidden="true" />}
        <span className="itss-tooltip__bubble">{content}</span>
        {showArrow && !arrowFirst && <span className="itss-tooltip__arrow" aria-hidden="true" />}
      </span>
    </span>
  )
}
