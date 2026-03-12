/**
 * ITSS Hub Icon Exporter
 *
 * Exports Hub-specific icons from the eBay Internal Design System Figma file.
 * These icons live in a different file from the main ITSS icon set.
 *
 * Usage:
 *   node scripts/export-hub-icons.mjs --token YOUR_FIGMA_TOKEN
 *
 * Get your token at: https://www.figma.com/settings → Personal access tokens
 *
 * Output: src/icons/hub-*.svg  (e.g. hub-truck-24.svg, hub-legal-24.svg)
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ── Config ───────────────────────────────────────────────────────────────────
const FILE_KEY   = 'lOksIFmGcCiPGekofQprrW'
const OUTPUT_DIR = join(ROOT, 'src', 'icons')
const DELAY_MS   = 250

// ── Hub icon node list ────────────────────────────────────────────────────────
// Node IDs from Figma frame 129799:16910, all 24×24px.
// Names use hub- prefix to avoid collisions with the main icon set.
// preserveColors: true  → skip currentColor replacement (illustrated/multi-color icons)
const HUB_ICONS = [
  { id: '7787:16671', name: 'hub-truck-24' },
  { id: '7787:16558', name: 'hub-arrow-right-circle-24' },
  { id: '8453:18557', name: 'hub-org-sites-24' },
  { id: '7913:1684',  name: 'hub-handshake-24' },
  { id: '7787:16617', name: 'hub-briefcase-24' },
  { id: '7787:16628', name: 'hub-legal-24' },
  { id: '7787:16636', name: 'hub-workplace-24' },
  { id: '7792:1303',  name: 'hub-bookspace-24', preserveColors: true },
  { id: '7792:1333',  name: 'hub-yjmmd-24',     preserveColors: true },
  { id: '7722:18871', name: 'hub-draggable-10' },
]

// ── Args ─────────────────────────────────────────────────────────────────────
const tokenArg = process.argv.findIndex(a => a === '--token')
if (tokenArg === -1 || !process.argv[tokenArg + 1]) {
  console.error('Usage: node scripts/export-hub-icons.mjs --token YOUR_FIGMA_TOKEN')
  console.error('')
  console.error('Get your token at: https://www.figma.com/settings → Personal access tokens')
  process.exit(1)
}
const TOKEN = process.argv[tokenArg + 1]

// ── Helpers ──────────────────────────────────────────────────────────────────
const sleep = ms => new Promise(r => setTimeout(r, ms))

async function figmaFetch(url) {
  const res = await fetch(url, { headers: { 'X-Figma-Token': TOKEN } })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Figma API ${res.status}: ${text.slice(0, 200)}`)
  }
  return res.json()
}

async function downloadText(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download failed ${res.status}`)
  return res.text()
}

// ── Main ─────────────────────────────────────────────────────────────────────
console.log(`Exporting ${HUB_ICONS.length} Hub icons from Figma...`)
mkdirSync(OUTPUT_DIR, { recursive: true })

const ids = HUB_ICONS.map(i => i.id).join(',')
const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_include_id=false`

let data
try {
  data = await figmaFetch(url)
} catch (err) {
  console.error('Figma request failed:', err.message)
  process.exit(1)
}

if (data.err) {
  console.error('Figma error:', data.err)
  process.exit(1)
}

let exported = 0
let failed = 0

await Promise.all(HUB_ICONS.map(async icon => {
  const key = icon.id.replace(':', ';')
  const svgUrl = data.images?.[key] ?? data.images?.[icon.id]

  if (!svgUrl) {
    console.warn(`  ✗ No URL for ${icon.name}`)
    failed++
    return
  }

  try {
    let svg = await downloadText(svgUrl)

    // Illustrated icons keep their own colors; regular icons use currentColor
    if (!icon.preserveColors) {
      svg = svg
        .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"')
        .replace(/fill="black"/gi, 'fill="currentColor"')
        .replace(/fill="white"/gi, 'fill="currentColor"')
        .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"')
        .replace(/stroke="black"/gi, 'stroke="currentColor"')
    }

    writeFileSync(join(OUTPUT_DIR, `${icon.name}.svg`), svg, 'utf8')
    console.log(`  ✓ ${icon.name}.svg`)
    exported++
  } catch (err) {
    console.warn(`  ✗ ${icon.name}: ${err.message}`)
    failed++
  }
}))

await sleep(DELAY_MS)

console.log(`\nDone: ${exported} exported, ${failed} failed`)
if (exported > 0) {
  console.log('Icons saved to: src/icons/')
}
