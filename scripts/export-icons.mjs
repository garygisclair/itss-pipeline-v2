/**
 * ITSS Icon Exporter — V2
 *
 * Discovers ALL icons by walking the Figma file tree from the icons frame,
 * then exports them as SVGs. No static node list needed.
 *
 * Usage:
 *   node scripts/export-icons.mjs --token YOUR_FIGMA_TOKEN
 *
 * Get your token at: https://www.figma.com/settings → Personal access tokens
 *
 * Output: src/icons/*.svg
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ── Config ───────────────────────────────────────────────────────────────────
const FILE_KEY       = 'Hs9ISm2qKK4uN32U4Tti4C'
const ICONS_NODE_ID  = '72:1776'   // "Icons" frame in the design system
const OUTPUT_DIR     = join(ROOT, 'src', 'icons')
const BATCH_SIZE     = 50          // Figma API limit per request
const DELAY_MS       = 250         // throttle between batches

// ── Args ─────────────────────────────────────────────────────────────────────
const tokenArg = process.argv.findIndex(a => a === '--token')
if (tokenArg === -1 || !process.argv[tokenArg + 1]) {
  console.error('Usage: node scripts/export-icons.mjs --token YOUR_FIGMA_TOKEN')
  process.exit(1)
}
const TOKEN = process.argv[tokenArg + 1]

// ── Helpers ──────────────────────────────────────────────────────────────────
const sleep = ms => new Promise(r => setTimeout(r, ms))

function chunks(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

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

// ── Convert Figma node name → file name ──────────────────────────────────────
// Figma names icons like "edit-16", "chevron-right-12", "AI-fill-16"
// Output: lowercase, spaces → hyphens
function toFileName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// ── Discover icon leaf nodes from the Figma tree ──────────────────────────────
// Icon components are COMPONENT nodes (type === 'COMPONENT') inside the icons frame.
// We walk the subtree and collect them.
function collectComponents(node, results = []) {
  if (node.type === 'COMPONENT') {
    results.push({ id: node.id, name: toFileName(node.name) })
  }
  for (const child of node.children ?? []) {
    collectComponents(child, results)
  }
  return results
}

// ── Main ─────────────────────────────────────────────────────────────────────
console.log('Fetching icon tree from Figma...')

const nodeId = ICONS_NODE_ID.replace(':', '-')
const treeData = await figmaFetch(
  `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(ICONS_NODE_ID)}&depth=10`
)

const rootNode = treeData.nodes?.[ICONS_NODE_ID]?.document
  ?? treeData.nodes?.[nodeId]?.document

if (!rootNode) {
  console.error('Could not find icons node in response. Keys:', Object.keys(treeData.nodes ?? {}))
  process.exit(1)
}

const icons = collectComponents(rootNode)
console.log(`Found ${icons.length} icon components.`)

if (icons.length === 0) {
  console.error('No icon components found — check ICONS_NODE_ID.')
  process.exit(1)
}

// Deduplicate by name (keep first occurrence)
const seen = new Set()
const unique = icons.filter(i => {
  if (seen.has(i.name)) return false
  seen.add(i.name)
  return true
})
console.log(`Unique icons after dedup: ${unique.length}`)

mkdirSync(OUTPUT_DIR, { recursive: true })

let exported = 0
let failed = 0

for (const batch of chunks(unique, BATCH_SIZE)) {
  const ids = batch.map(i => i.id).join(',')
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_include_id=false`

  let data
  try {
    data = await figmaFetch(url)
  } catch (err) {
    console.error('Batch failed:', err.message)
    failed += batch.length
    continue
  }

  if (data.err) {
    console.error('Figma error:', data.err)
    failed += batch.length
    continue
  }

  await Promise.all(batch.map(async icon => {
    const key = icon.id.replace(':', ';')
    const svgUrl = data.images?.[key] ?? data.images?.[icon.id]

    if (!svgUrl) {
      console.warn(`  ✗ No URL for ${icon.name}`)
      failed++
      return
    }

    try {
      let svg = await downloadText(svgUrl)

      // Make icons CSS-styleable via currentColor
      svg = svg
        .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"')
        .replace(/fill="black"/gi, 'fill="currentColor"')
        .replace(/fill="white"/gi, 'fill="currentColor"')
        .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"')
        .replace(/stroke="black"/gi, 'stroke="currentColor"')

      writeFileSync(join(OUTPUT_DIR, `${icon.name}.svg`), svg, 'utf8')
      console.log(`  ✓ ${icon.name}.svg`)
      exported++
    } catch (err) {
      console.warn(`  ✗ ${icon.name}: ${err.message}`)
      failed++
    }
  }))

  await sleep(DELAY_MS)
}

console.log(`\nDone: ${exported} exported, ${failed} failed`)
console.log(`Icons saved to: src/icons/`)
