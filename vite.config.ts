// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// If you deploy this to a GitHub project page (https://<user>.github.io/<repo>/),
// set the BASE_PATH env var in the GitHub Actions workflow to "/<repo>/".
// For user/org pages (<user>.github.io) or a custom domain, leave it unset.
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  tanstackStart: {
    // Prerender routes to static HTML so the output in dist/client/ is a
    // fully static site suitable for GitHub Pages.
    pages: [
      { path: "/", prerender: { enabled: true, crawlLinks: true } },
      { path: "/handout", prerender: { enabled: true } },
    ],
  },
  vite: {
    base: basePath,
  },
});
