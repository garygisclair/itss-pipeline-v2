import './StateLayer.css'

export type StateLayerState = 'enabled' | 'hover' | 'pressed' | 'selected' | 'focused'
export type StateLayerType = 'default' | 'heavy' | 'on-fill'

export type StateLayerProps = {
  state?: StateLayerState
  type?: StateLayerType
}

/**
 * StateLayer — absolute overlay applied inside interactive components.
 * Parent must have `position: relative` and `overflow: hidden` (or matching border-radius).
 *
 * Usage:
 *   <button style={{ position: 'relative' }}>
 *     <StateLayer state="hover" />
 *     Label
 *   </button>
 */
export function StateLayer({ state = 'enabled', type = 'default' }: StateLayerProps) {
  return (
    <span
      className={[
        'itss-state-layer',
        `itss-state-layer--${type}`,
        `itss-state-layer--${state}`,
      ].join(' ')}
      aria-hidden="true"
    />
  )
}
