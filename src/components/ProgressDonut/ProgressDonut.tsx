import './ProgressDonut.css'

export interface ProgressDonutProps {
  /** 0–100 */
  progress: number
  /** diameter in px — default 24 (Figma spec) */
  size?: number
  className?: string
}

export function ProgressDonut({ progress, size = 24, className }: ProgressDonutProps) {
  const strokeWidth = size / 8                           // 3px @ 24px, scales with size
  const r = (size - strokeWidth) / 2                    // radius keeps stroke inside viewBox
  const circumference = 2 * Math.PI * r
  const clamped = Math.min(Math.max(progress, 0), 100)
  const offset = circumference - (clamped / 100) * circumference
  const center = size / 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={['itss-progress-donut', className].filter(Boolean).join(' ')}
      aria-label={`${Math.round(clamped)}% complete`}
      role="img"
    >
      {/* Track */}
      <circle
        className="itss-progress-donut__track"
        cx={center}
        cy={center}
        r={r}
        strokeWidth={strokeWidth}
      />
      {/* Progress arc — starts at 12 o'clock via rotate(-90) */}
      <circle
        className="itss-progress-donut__fill"
        cx={center}
        cy={center}
        r={r}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
    </svg>
  )
}
