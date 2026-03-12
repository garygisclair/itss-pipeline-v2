import React from 'react'
import './Signal.css'

interface SignalProps {
  label: string
  className?: string
}

export const Signal: React.FC<SignalProps> = ({ label, className }) => {
  return (
    <div className={`itss-signal${className ? ` ${className}` : ''}`}>
      <span className="itss-signal__label">{label}</span>
    </div>
  )
}
