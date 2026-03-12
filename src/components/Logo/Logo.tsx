import './Logo.css'

// ── Brand logos ──────────────────────────────────────────────
import EbayLogoSvg        from '../../logos/ebay-logo.svg?react'
import EbayMonoLogoSvg    from '../../logos/ebay-mono-logo.svg?react'
import HubLogoSvg         from '../../logos/hub-logo.svg?react'
import HubLogoDarkSvg     from '../../logos/hub-logo-dark.svg?react'
import HubLogoStackedSvg  from '../../logos/hub-logo-stacked.svg?react'
import HubFaviconSvg      from '../../logos/hub-favicon.svg?react'
import HubGPTLogoSvg      from '../../logos/hubgpt-logo.svg?react'
import HubGPTFaviconSvg   from '../../logos/hubgpt-favicon.svg?react'
import PeopleXLogoSvg     from '../../logos/peoplex-logo.svg?react'

export type LogoProps = {
  className?: string
  width?: number | string
  height?: number | string
}

function makeLogoComponent(Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>) {
  return function LogoComponent({ className, width, height }: LogoProps) {
    return (
      <Svg
        className={['itss-logo', className].filter(Boolean).join(' ')}
        width={width}
        height={height}
      />
    )
  }
}

export const EbayLogo       = makeLogoComponent(EbayLogoSvg)
export const EbayMonoLogo   = makeLogoComponent(EbayMonoLogoSvg)
export const HubLogo        = makeLogoComponent(HubLogoSvg)
export const HubLogoDark    = makeLogoComponent(HubLogoDarkSvg)
export const HubLogoStacked = makeLogoComponent(HubLogoStackedSvg)
export const HubFavicon     = makeLogoComponent(HubFaviconSvg)
export const HubGPTLogo     = makeLogoComponent(HubGPTLogoSvg)
export const HubGPTFavicon  = makeLogoComponent(HubGPTFaviconSvg)
export const PeopleXLogo    = makeLogoComponent(PeopleXLogoSvg)
