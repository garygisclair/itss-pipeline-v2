# ITSS Pipeline V2

A React component library for the eBay Hub design system, built with Figma MCP. Browse all components in the UI Library or use the Playground to prototype new experiences.

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
| **UI Library** | Browse all ITSS components, design tokens, and patterns |
| **Playground** | Build and prototype using the component library |

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

## Other commands

```bash
npm run build    # Production build
npm run preview  # Preview production build locally
```
