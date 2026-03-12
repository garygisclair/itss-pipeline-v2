# ITSS Pipeline V2

A React component library for the eBay Hub design system, built with Figma MCP and Claude Code. Browse all components in the UI Library, prototype new experiences in the Playground, or read about the project in the About page.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/garygisclair/itss-pipeline-v2.git
cd itss-pipeline-v2

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173/itss-pipeline-v2/](http://localhost:5173/itss-pipeline-v2/) in your browser.

## What's inside

| Section | Description |
|---------|-------------|
| **UI Library** | Browse 70+ ITSS components, 200+ design tokens, and patterns |
| **Playground** | Build and prototype new Hub experiences using the component library |
| **About** | The goal, how we built it, and the pipeline that powers it |

## How it was built

This project uses a Figma-to-React pipeline driven entirely by [Claude Code](https://claude.ai/claude-code) and the [Figma MCP](https://www.figma.com/developers/mcp):

1. **Design tokens** extracted from Figma via `get_variable_defs` → `src/tokens.css`
2. **Components** implemented from `get_design_context` → TSX + CSS, no scripts or intermediate specs
3. **Zero magic numbers** — all colors, spacing, typography, and radii reference CSS custom properties

## Using the Playground

1. Open the Playground from the welcome screen
2. Copy the sample prompt and paste it into your AI assistant (Claude Code, Copilot, etc.)
3. Replace `[describe your UI here]` with what you want to build
4. Edit `src/playground.tsx` — the browser hot-reloads instantly

All components live in `src/components/`. Design tokens are in `src/tokens.css`.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) for SVG icons
- Plain CSS with design tokens — no Tailwind, no CSS-in-JS
- [Figma MCP](https://www.figma.com/developers/mcp) + [Claude Code](https://claude.ai/claude-code) as the build pipeline

## Other commands

```bash
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Troubleshooting

**`npm install` errors or `npm run dev` fails with "vite: not found"**

This usually means your npm version is too old. The repo requires **npm v9+**:

```bash
node --version   # should be v18 or higher
npm --version    # should be v9 or higher

# Upgrade npm if needed:
npm install -g npm@latest
```

Then delete any partial install and start fresh:

```bash
rm -rf node_modules
npm install
npm run dev
```

Do **not** run `npm audit fix --force` — it can silently upgrade packages to incompatible major versions and break the build.
