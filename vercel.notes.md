# Vercel setup notes (for this repo)

## 1) Root directory
- Use `Pos/` as the Vercel project root (the folder that contains `package.json`).
- In Vercel UI, set **Root Directory** to `/`.

## 2) Build command
This repo’s `package.json` defines:
- `build`: `NITRO_PRESET=vercel-edge vite build`

On Vercel, set **Install Command** + **Build Command** to match your chosen package manager:
- If using **npm**:
  - Install: `npm ci`
  - Build: `npm run build`
- If using **bun**:
  - Install: `bun install`
  - Build: `bun run build`

## 3) Framework / Output
- Leave output as framework-managed (do not set a static output directory).

## 4) Routing
- `vercel.json` currently rewrites all routes to `/` so SPA/SSR routing works.

