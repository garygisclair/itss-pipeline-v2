# ITSS Pipeline V2 — Claude Code Instructions

## Purpose

Figma → React.js via **Figma MCP**. No scripts. No Storybook. **Claude Code is the pipeline.**
Output is portable TSX + CSS that can be dropped into any React project.

A lightweight Vite dev server handles browser preview.

---

## How It Works

```
User: "implement <ComponentName> from Figma node <nodeId>"
Claude:
  1. get_design_context(nodeId, fileKey: "Hs9ISm2qKK4uN32U4Tti4C")
     → if output too large: get_metadata first, then get_design_context on individual child nodes
  2. Review reference code + screenshot
  3. Adapt to ITSS CSS conventions (plain CSS, itss- prefix, BEM)
  4. Write src/components/<Name>/<Name>.tsx + <Name>.css
  5. Update src/main.tsx to include the component
User: npm run dev  →  preview in browser
```

No Figma token management, no intermediate JSON, no templates. The MCP call replaces
the entire extract → spec → generate pipeline.

---

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite dev server for browser preview |
| `node scripts/export-icons.mjs --token TOKEN` | Export all icons from Figma → `src/icons/*.svg` |

---

## Project Structure

```
ITSS Pipeline V2/
├─ CLAUDE.md
├─ package.json
├─ vite.config.ts             ← react() + svgr() plugins
├─ tsconfig.json
├─ index.html                 ← Vite entry (loads src/main.tsx)
├─ scripts/
│  └─ export-icons.mjs        ← auto-discovers icons from Figma tree
└─ src/
   ├─ main.tsx                ← preview entry; Foundations → Components → Atoms
   ├─ preview.css             ← preview page layout styles only
   ├─ tokens.css              ← all design tokens as CSS custom properties
   ├─ vite-env.d.ts           ← /// <reference types="vite-plugin-svgr/client" />
   ├─ icons/                  ← SVG icons (exported by export-icons.mjs)
   │  └─ {name}-{size}.svg    ← e.g. edit-16.svg, chevron-right-12.svg
   │  └─ {name}-scalable.svg  ← scalable variants (48×48 display)
   ├─ logos/                  ← SVG logos (manually exported from Figma)
   │  └─ *.svg
   └─ components/
      ├─ Icon/Icon.tsx         ← Icon + ScalableIcon + helper fns
      ├─ StateLayer/StateLayer.tsx
      ├─ Logo/Logo.tsx         ← factory pattern, named logo exports
      ├─ Spinner/Spinner.tsx
      ├─ Button/CtaButton.tsx
      ├─ DestructiveButton/DestructiveButton.tsx
      ├─ LinkButton/LinkButton.tsx
      └─ <ComponentName>/<ComponentName>.tsx + .css
```

---

## CSS Conventions

- Class prefix: `itss-` for all component classes
- BEM modifier pattern: `itss-cta-btn--primary`, `itss-cta-btn--large`
- Token names: `--bg-*`, `--fg-*`, `--border-*`, `--shadow-*`, `--radius-*`, `--state-*`
- Dark mode: `data-dark="true"` attribute on a wrapper element
- No Tailwind, no CSS-in-JS — plain CSS files co-located with components
- **Component names match Figma exactly** — e.g. "CTA Button" → `CtaButton`, not `Button`

---

## Token Extraction (get_variable_defs)

Token values live in two Figma nodes — call each separately:

| Mode | Node ID |
|------|---------|
| Light | `55:148` |
| Dark | `55:142` |

Light values go in `:root { }`, dark values in `[data-dark="true"] { }`.

**Letter-spacing gotcha:** Figma reports tracking in **percent** (e.g. `-2`, `5`).
Convert to `em`: `-2` → `-0.02em`, `5` → `0.05em`. Never use `px` for letter-spacing.

**State layer tokens** are at node `199:4325`. They map to `--state-hover`, `--state-hover-heavy`,
`--state-hover-on-fill`, `--state-pressed`, `--state-focused`, etc.

**Spacing tokens:** Node `55:148` has a partial set. Scale is 4px-based (`n × 4 = px`).
Confirmed tokens so far: `p-2`=8, `p-3`=12, `p-4`=16, `p-5`=20, `p-6`=24, `p-12`=48, `p-20`=80,
`m-2`=8, `m-3`=12, `m-10`=40, `gap-2`=8, `gap-6`=24.
CSS vars: `--spacing-{type}-{n}`. **Check for new spacing tokens when implementing each component**
— Figma reference code will reveal any missing from `tokens.css`.

**Spacing token limitation:** Figma names tokens by usage type (`padding/p-2`, `margin/m-2`, `gap/gap-6`)
rather than a unified scale. Only apply a spacing token when the property type matches the token type.
When no matching token exists, use a raw `px` value and add a comment:
`/* TODO: spacing token when confirmed from Figma */`.

**Dark mode inverse wrapper:** When showing inverse-colored components on a dark background
for preview purposes, do NOT put `data-dark="true"` on the wrapper. Use a CSS background
(`var(--bg-strong)`) only — keeping light mode tokens active so `--fg-on-inverse` = white.

---

## SVG / Icon Infrastructure

### vite-plugin-svgr
- Configured in `vite.config.ts` — import SVGs as React components via `?react` suffix
- Type declarations in `src/vite-env.d.ts`

### import.meta.glob pattern (Icon component)
```ts
const modules = import.meta.glob<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>(
  '../../icons/*.svg',
  { query: '?react', eager: true }
)
```

### Icon naming conventions
- Fixed-size icons: `{name}-{size}.svg` → e.g. `edit-16.svg`, `arrow-up-24.svg`
- Scalable icons: `{name}-scalable.svg` → e.g. `rocket-scalable.svg` (displayed at 48×48)
- Icon names are lowercase with hyphens; sizes are `12 | 16 | 20 | 24`

---

## Component Patterns

### Large frame workflow
When `get_design_context` output is too large (>100KB):
1. Call `get_metadata(nodeId)` to get all child node IDs and names
2. Call `get_design_context` on individual variant nodes (e.g. default large per style)
3. Compare variants to identify color/sizing differences — don't pull every state

### Button sizing (confirmed across CTA + Destructive)
| Size | Height | Padding | Max-width | Font | Tracking |
|------|--------|---------|-----------|------|----------|
| large | 48px | `p-6` (24px) | 480px | 16px/24px | -0.02em |
| medium | 40px | `p-5` (20px) | 400px | 14px/20px | none |
| small | 32px | `p-4` (16px) | 320px | 14px/20px (same as medium!) | none |

- `min-width: 80px` on all sizes
- Borderless overrides padding: large=`p-3` (12px), medium/small TBD
- Secondary/tertiary borders: `1px solid` (not 1.5px)

### Loading state pattern
**Do NOT use the `disabled` HTML attribute for loading** — it triggers `:disabled` CSS and grays
out the button. Use `pointer-events: none` via the loading class instead.

Keep the label rendered to preserve button width; hide it visually and overlay the spinner:
```tsx
<button className={classes} disabled={disabled}>  {/* NOT disabled={disabled || loading} */}
  <span className="itss-xxx__content">   {/* always rendered — sets button width */}
    <span className="itss-xxx__label">{label}</span>
  </span>
  {loading && (
    <span className="itss-xxx__loading">  {/* position: absolute, centered */}
      <Spinner ... />
    </span>
  )}
</button>
```
```css
.itss-xxx--loading .itss-xxx__content { visibility: hidden; }
.itss-xxx__loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
```

### Spinner color overrides per button variant
- **Primary (on-fill):** white spinner — `border-color: rgba(255,255,255,0.3); border-top-color: #fff`
- **Secondary/tertiary/borderless (on light surface):** match button's brand color
  - CTA: default blue (`--bg-accent`) — no override needed
  - Destructive: red — `border-color: rgba(213,11,11,0.2); border-top-color: var(--fg-destructive)`

### CSS :hover over JS state
Prefer CSS `:hover` for interactive-on-hover behaviors (tooltips, state layers, reveal patterns).
Only use React state when the interaction requires persistence beyond the hover (e.g. copied state,
toggle state). This avoids unnecessary re-renders and works without JavaScript.

### Inline tooltip vs generic Tooltip component
Use the generic `<Tooltip>` component when hover-only activation is sufficient.
Implement an inline tooltip (custom CSS inside the component's own `.css` file) when the tooltip
must also be **forced visible via a state class** (e.g. ContactButton's "Copied" state).
The generic Tooltip only handles CSS hover — it cannot be programmatically pinned open.

### Icon Button sizing
Fixed-square pill buttons — no padding, width = height:

| Size   | Button | Spinner |
|--------|--------|---------|
| large  | 48px   | 20px    |
| medium | 40px   | 16px    |
| small  | 32px   | 16px    |

- Consumer passes `icon` as `React.ReactNode` (they choose icon name + size)
- `aria-label` is required (icon-only buttons must have accessible label)
- No `background` prop — Figma context backgrounds are preview-only, don't affect button

### Duplicate-structure components
When a component shares identical structure with an existing one (e.g. DestructiveButton = CtaButton
with different colors), create a **new self-contained component** with its own CSS file.
Do not import or extend another component's CSS.

### StateLayer
Absolute overlay for interactive states (hover, pressed, selected, focused).
- `position: absolute; inset: 0; border-radius: inherit; pointer-events: none`
- `aria-hidden="true"` — purely visual
- `overflow: visible` needed on parent when `state="focused"` (focus ring extends outside)
- Types: `default` | `heavy` | `on-fill`
- States: `enabled` | `hover` | `pressed` | `selected` | `focused`

### State layer via ::before (buttons)
For buttons, state layer is implemented as a `::before` pseudo-element (no extra DOM node):
```css
.itss-cta-btn::before { content: ''; position: absolute; inset: 0; border-radius: inherit; opacity: 0; pointer-events: none; transition: opacity 0.1s ease; }
.itss-cta-btn--primary::before          { background: #ffffff; }
.itss-cta-btn--primary:hover::before    { opacity: 0.16; }
.itss-cta-btn--primary:active::before   { opacity: 0.24; }
/* Non-primary: background: #000000; hover: 0.04; active: 0.08 */
```

### Badge sizing (confirmed from node 1094:767)
Fixed dimensions — always 24px tall, width varies by digit count:

| Size   | Width | Shape | border-radius |
|--------|-------|-------|---------------|
| single | 24px  | circle | `border-radius: 50%` |
| double | 34px  | pill   | `--radius-large` |
| max    | 40px  | pill   | `--radius-large` |

- Background: `var(--fg-status-attention)` (red)
- Border: `2px solid var(--fg-on-accent)` — design element, not a `--border-*` token. No border-width token exists; use raw `2px`.
- Text: `var(--fg-on-accent)` (white), caption-bold style (12px/700/16px)
- Always `box-sizing: border-box` when element has both border and fixed pixel dimensions

### `::before` state layer inside `overflow: hidden` containers
When a container needs `overflow: hidden` (e.g. to round an avatar photo) AND uses a `::before`
pseudo-element for the hover state layer:
- The `::before` with `inset: 0` is clipped to the container bounds — this is correct behavior
- All content children inside the container must have `position: relative` to stack above the
  `::before` overlay (without it, content sits behind the state layer in the stacking context):
```css
.itss-chip__content { position: relative; } /* stays above ::before */
```

### Sub-component prop prefixing
When a component embeds an existing sub-component (e.g. Chip uses Avatar), expose the
sub-component's variant props with a descriptive prefix rather than duplicating all props or
accepting the component as a slot. The consuming component maps them internally:
```tsx
// Chip exposes:
avatarSrc?: string
avatarInitials?: string
avatarAlt?: string

// Chip maps internally:
<Avatar
  type={avatarSrc ? 'photo' : avatarInitials ? 'initials' : 'no-photo'}
  src={avatarSrc}
  initials={avatarInitials}
  alt={avatarAlt}
/>
```

### Non-submit buttons
Always add `type="button"` to `<button>` elements that are not form submits (e.g. remove/close
buttons inside components). Prevents accidental form submission when the component is used inside
a `<form>`.

### Logo (factory pattern)
```tsx
function makeLogoComponent(Svg) {
  return function LogoComponent({ className, width, height }) { ... }
}
export const HubLogo = makeLogoComponent(HubLogoSvg)
```
Logos are imported as React components via `?react` suffix — no expiring Figma asset URLs.

---

## Preview Organization (src/main.tsx)

Three top-level sections using `.preview-group`:

1. **Foundations** — Logos, Icons (6 categories + Scalable), State Layer
2. **Components** — composed components (CtaButton, DestructiveButton, LinkButton, etc.)
3. **Atoms** — single-purpose primitives (Spinner, etc.)

Icon categories (matching Figma node `72:1776`):
Navigation, Actions, Objects, Status, Social, Specific, then Scalable.

---

## Known Figma Node IDs (file key: `Hs9ISm2qKK4uN32U4Tti4C`)

| Purpose | Node ID |
|---------|---------|
| Tokens — light mode | `55:148` |
| Tokens — dark mode | `55:142` |
| Tokens — state layer | `199:4325` |
| Typography | `53:2166` |
| Icons frame (root) | `72:1776` |
| Icons — Navigation | `72:2889` |
| Icons — Actions | `74:1613` |
| Icons — Objects | `265:2709` |
| Icons — Status | `333:281` |
| Icons — Social | `715:1049` |
| Icons — Specific | `1181:2472` |
| Icons — Scalable | `1181:7172` |
| State Layer | `124:1967` |
| Logos | `208:2064` |
| Spinner | `125:980` |
| CTA Button | `124:1999` |
| Icon Button | `102:457` |
| Divider | `5349:32935` (file: lOksIFmGcCiPGekofQprrW) |
| Destructive Button | `870:603` |
| Link Button | `263:1595` |
| Tooltip | `235:710` |
| Avatar | `1326:2805` |
| Contact Button | `3510:1865` |
| Badge | `1094:767` |
| Chip | `2345:10408` |
| Signal | `3042:3458` |
| Tool Logo | `2258:1832` |
| Source Type Logo | `1496:1993` |
| File Icon | `2619:2169` |
| Illustration | `3504:2148` |
| Empty State | `2015:27971` (file: lOksIFmGcCiPGekofQprrW) |
| MenuItem | `908:3159` |
| ApplyOrClearSelectionBar | `3128:6446` |
| SelectAllBar | `3128:6606` |
| SectionLabel | `3580:3663` |
| MenuOptions | `2816:10480` |
| Menu | `2823:5798` |
| SectionNotice | `265:632` |
| PageNotice | `1221:1536` |
| AlertDialog | `1182:1559` |
| Dialog | `759:7042` |
| DropdownButton | `2393:5830` |
| Filter | `2175:5971` |
| Selection Controls (parent) | `3:1028` |
| Radio | `869:656` |
| Checkbox | `869:2855` |
| Switch | `2186:6386` |
| SelectionItem | `2237:3073` |
| Status | `1358:3613` |
| ProgressDonut | `1423:4958` |
| TableCellProgressDonut | `258004:15049` |
| TableCell | `954:7784` |
| TableSortButton | `954:7570` |
| TableColumn | `1326:7220` |
| Accordion | `6695:19995` (file: lOksIFmGcCiPGekofQprrW) |
| Popover | `2778:4956` |
| Toast | `5612:32626` (file: lOksIFmGcCiPGekofQprrW) |
| Snackbar | `5835:26942` (file: lOksIFmGcCiPGekofQprrW) |
| Tab | `1624:59` |
| Vertical Tab | `2456:2183` |
| Horizontal Tab Group | `2800:5559` |
| Vertical Tab Group | `2799:11058` |
| SegmentedButton | `1821:3238` |
| SegmentedButtons | `1821:3273` |
| ProgressStep | `1957:1303` |
| ProgressStepper | `1957:1424` |
| PaginationPageTab | `1326:3477` |
| PaginationPageOverflow | `1326:4073` |
| PaginationDot | `1326:3506` |
| PaginationDots | `1326:4087` |
| Pagination | `1326:3431` |
| SitebuilderAdminButtons | `1309:4332` |
| SitebuilderNavigationLink | `1303:1003` |
| SitebuilderNavigation | `1303:1070` |
| SitebuilderAdminAdditionalButtons | `258017:16842` |
| NavBarAvatar | `3318:11446` |
| HubHeader | `3220:13070` |
| InputField (Text field) | `438:1080` |
| DropdownField | `439:2600` |
| TextAreaField | `567:2139` |
| LookupField | `2944:2445` |

---

## Completed Components

| Component | File | Status |
|-----------|------|--------|
| Icon | `src/components/Icon/Icon.tsx` | ✅ done |
| ScalableIcon | `src/components/Icon/Icon.tsx` | ✅ done |
| StateLayer | `src/components/StateLayer/StateLayer.tsx` | ✅ done |
| Logo (all brands) | `src/components/Logo/Logo.tsx` | ✅ done |
| Spinner | `src/components/Spinner/Spinner.tsx` | ✅ done |
| CtaButton | `src/components/Button/CtaButton.tsx` | ✅ done |
| DestructiveButton | `src/components/DestructiveButton/DestructiveButton.tsx` | ✅ done |
| ContactButton | `src/components/ContactButton/ContactButton.tsx` | ✅ done |
| Avatar | `src/components/Avatar/Avatar.tsx` | ✅ done |
| Tooltip | `src/components/Tooltip/Tooltip.tsx` | ✅ done |
| LinkButton | `src/components/LinkButton/LinkButton.tsx` | ✅ done |
| Badge | `src/components/Badge/Badge.tsx` | ✅ done |
| Chip | `src/components/Chip/Chip.tsx` | ✅ done |
| IconButton | `src/components/IconButton/IconButton.tsx` | ✅ done |
| Divider | `src/components/Divider/Divider.tsx` | ✅ done |
| Signal | `src/components/Signal/Signal.tsx` | ✅ done |
| ToolLogo | `src/components/ToolLogo/ToolLogo.tsx` | ✅ done |
| SourceTypeLogo | `src/components/SourceTypeLogo/SourceTypeLogo.tsx` | ✅ done |
| FileIcon | `src/components/FileIcon/FileIcon.tsx` | ✅ done |
| Illustration | `src/components/Illustration/Illustration.tsx` | ✅ done |
| EmptyState | `src/components/EmptyState/EmptyState.tsx` | ✅ done |
| MenuItem | `src/components/MenuItem/MenuItem.tsx` | ✅ done |
| ApplyOrClearSelectionBar | `src/components/ApplyOrClearSelectionBar/ApplyOrClearSelectionBar.tsx` | ✅ done |
| SelectAllBar | `src/components/SelectAllBar/SelectAllBar.tsx` | ✅ done |
| SectionLabel | `src/components/SectionLabel/SectionLabel.tsx` | ✅ done |
| MenuOptions | `src/components/MenuOptions/MenuOptions.tsx` | ✅ done |
| Menu | `src/components/Menu/Menu.tsx` | ✅ done |
| SectionNotice | `src/components/SectionNotice/SectionNotice.tsx` | ✅ done |
| PageNotice | `src/components/PageNotice/PageNotice.tsx` | ✅ done |
| AlertDialog | `src/components/AlertDialog/AlertDialog.tsx` | ✅ done |
| Dialog | `src/components/Dialog/Dialog.tsx` | ✅ done |
| DropdownButton | `src/components/DropdownButton/DropdownButton.tsx` | ✅ done |
| Filter | `src/components/Filter/Filter.tsx` | ✅ done |
| Radio | `src/components/Radio/Radio.tsx` | ✅ done |
| Checkbox | `src/components/Checkbox/Checkbox.tsx` | ✅ done |
| Switch | `src/components/Switch/Switch.tsx` | ✅ done |
| SelectionItem | `src/components/SelectionItem/SelectionItem.tsx` | ✅ done |
| Status | `src/components/Status/Status.tsx` | ✅ done |
| ProgressDonut | `src/components/ProgressDonut/ProgressDonut.tsx` | ✅ done |
| TableCellProgressDonut | `src/components/TableCellProgressDonut/TableCellProgressDonut.tsx` | ✅ done |
| TableCell | `src/components/TableCell/TableCell.tsx` | ✅ done |
| TableSortButton | `src/components/TableSortButton/TableSortButton.tsx` | ✅ done |
| TableColumn | `src/components/TableColumn/TableColumn.tsx` | ✅ done |
| Accordion | `src/components/Accordion/Accordion.tsx` | ✅ done |
| Popover | `src/components/Popover/Popover.tsx` | ✅ done |
| Toast | `src/components/Toast/Toast.tsx` | ✅ done |
| Snackbar | `src/components/Snackbar/Snackbar.tsx` | ✅ done |
| Tab | `src/components/Tab/Tab.tsx` | ✅ done |
| VerticalTab | `src/components/VerticalTab/VerticalTab.tsx` | ✅ done |
| HorizontalTabGroup | `src/components/HorizontalTabGroup/HorizontalTabGroup.tsx` | ✅ done |
| VerticalTabGroup | `src/components/VerticalTabGroup/VerticalTabGroup.tsx` | ✅ done |
| SegmentedButton | `src/components/SegmentedButton/SegmentedButton.tsx` | ✅ done |
| SegmentedButtons | `src/components/SegmentedButtons/SegmentedButtons.tsx` | ✅ done |
| ProgressStep | `src/components/ProgressStep/ProgressStep.tsx` | ✅ done |
| ProgressStepper | `src/components/ProgressStepper/ProgressStepper.tsx` | ✅ done |
| PaginationPageTab | `src/components/PaginationPageTab/PaginationPageTab.tsx` | ✅ done |
| PaginationPageOverflow | `src/components/PaginationPageOverflow/PaginationPageOverflow.tsx` | ✅ done |
| PaginationDot | `src/components/PaginationDot/PaginationDot.tsx` | ✅ done |
| PaginationDots | `src/components/PaginationDots/PaginationDots.tsx` | ✅ done |
| Pagination | `src/components/Pagination/Pagination.tsx` | ✅ done |
| SitebuilderAdminButtons | `src/components/SitebuilderAdminButtons/SitebuilderAdminButtons.tsx` | ✅ done |
| SitebuilderNavigationLink | `src/components/SitebuilderNavigationLink/SitebuilderNavigationLink.tsx` | ✅ done |
| SitebuilderNavigation | `src/components/SitebuilderNavigation/SitebuilderNavigation.tsx` | ✅ done |
| SitebuilderAdminAdditionalButtons | `src/components/SitebuilderAdminAdditionalButtons/SitebuilderAdminAdditionalButtons.tsx` | ✅ done |
| NavBarAvatar | `src/components/NavBarAvatar/NavBarAvatar.tsx` | ✅ done |
| HubHeader | `src/components/HubHeader/HubHeader.tsx` | ✅ done |
| InputField | `src/components/InputField/InputField.tsx` | ✅ done |
| DropdownField | `src/components/DropdownField/DropdownField.tsx` | ✅ done |
| TextAreaField | `src/components/TextAreaField/TextAreaField.tsx` | ✅ done |
| LookupField | `src/components/LookupField/LookupField.tsx` | ✅ done |

---

## What's Different from V1 (itss-storybook)

| V1 | V2 |
|----|-----|
| Vite + React + **Storybook** | Vite + React only |
| Generates `.stories.tsx` files | No story generation |
| `@storybook/react-vite` dependency | No Storybook deps |
| Preview via Storybook UI | Preview via plain Vite dev server |
| `src/stories/` directory | `src/components/` only |
| Custom `extract.mjs` + `generate.mjs` scripts | **Figma MCP** (`get_design_context`) |
| `.env` with `FIGMA_TOKEN` | MCP handles Figma auth |

---

## MCP Tool Reference

| Tool | When to use |
|------|------------|
| `get_variable_defs(nodeId, fileKey)` | Extract design tokens (call for light + dark separately) |
| `get_design_context(nodeId, fileKey)` | Implement a component — returns reference code + screenshot |
| `get_screenshot(nodeId, fileKey)` | Visual inspection when reference code isn't needed |
| `get_metadata(nodeId, fileKey)` | Get child node IDs when frame is too large for get_design_context |

**Large frame strategy:** Call `get_metadata` on the parent frame → get child node IDs →
call `get_design_context` on one representative node per variant. Don't pull every state.

**`get_metadata` error fallback:** If `get_metadata` returns an unexpected error, proceed directly
to `get_design_context` on the parent node — it often succeeds even when metadata fails.

---

## Code Connect (future improvement)

Once Code Connect mappings are set up via `send_code_connect_mappings`, `get_design_context`
will return codebase component references instead of raw generated code — improving fidelity
and reducing the adaptation step.
