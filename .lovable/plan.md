## Problem

GitHub Pages hostet nur statische Dateien (HTML/CSS/JS). TanStack Start läuft aber standardmäßig als SSR-App auf Cloudflare Workers — dabei entsteht keine `index.html`, daher die leere Seite auf GitHub Pages.

## Lösung

Den Build auf **statisches Prerendering** umstellen und einen GitHub Actions Workflow einrichten, der bei jedem Push automatisch deployed.

## Änderungen

### 1. `vite.config.ts` — Static Preset + Prerender

Nitro auf das `static` Preset umstellen und alle Routen prerendern lassen, sodass echte `index.html` und `handout/index.html` Dateien entstehen:

```ts
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/handout"],
    },
  },
});
```

### 2. `src/routes/index.tsx` — Redirect anpassen

Der aktuelle `throw redirect()` im `beforeLoad` funktioniert beim Prerender nicht sauber (würde nur einen Redirect-Status statt HTML erzeugen). Stattdessen Client-seitiger Redirect, damit eine echte `index.html` entsteht:

```tsx
import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Navigate to="/handout" replace />,
});
```

### 3. `.github/workflows/deploy.yml` — Auto-Deploy

Neuer Workflow, der bei Push auf `main`:
- Bun installiert, `bun install` und `bun run build` ausführt
- Den generierten statischen Output (`.output/public` bei Nitro static preset) hochlädt
- Auf GitHub Pages deployed via `actions/deploy-pages@v4`

Inklusive `permissions: pages: write, id-token: write` und `404.html`-Fallback (Kopie der `index.html`) für Deep-Links.

### 4. Base Path (falls Projekt-Repo, kein User-Repo)

Wenn die Seite unter `username.github.io/<repo>/` läuft, muss in `vite.config.ts` `vite: { base: "/<repo>/" }` gesetzt werden. Das klären wir nach dem Repo-Namen — oder du nutzt eine Custom Domain / ein `<user>.github.io` Repo, dann bleibt base auf `/`.

## Setup-Schritte für dich (einmalig)

1. In GitHub: **Settings → Pages → Source = "GitHub Actions"** setzen.
2. Push auf `main` → Workflow läuft automatisch, Seite ist live.

## Hinweis

Server Functions (`createServerFn`) und API-Routen funktionieren auf GitHub Pages **nicht**, weil dort kein Server läuft. Da dein Handout aktuell rein statisch ist, ist das kein Problem. Falls später Backend-Logik dazukommt, müsstest du auf Lovable Hosting / Cloudflare / Vercel wechseln.
