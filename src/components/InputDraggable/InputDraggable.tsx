import React from 'react'
import './InputDraggable.css'

const modules = import.meta.glob<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>(
  '../../icons/hub-draggable-10.svg',
  { query: '?react', eager: true }
)

const DraggableSvg = modules['../../icons/hub-draggable-10.svg']?.default

export type InputDraggableProps = {
  className?: string
  style?: React.CSSProperties
}

export function InputDraggable({ className, style }: InputDraggableProps) {
  return (
    <div className={`itss-input-draggable${className ? ` ${className}` : ''}`} style={style} aria-hidden="true">
      {DraggableSvg && <DraggableSvg />}
    </div>
  )
}
