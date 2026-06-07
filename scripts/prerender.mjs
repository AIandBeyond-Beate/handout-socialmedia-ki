// Post-build prerender for static hosting (GitHub Pages).
// Imports the built SSR bundle and writes static index.html files for each route.
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const routes = ["/", "/handout"];
const basePath = (process.env.BASE_PATH || "/").replace(/\/+$/, "") + "/";
const outDir = "dist/client";
const serverEntry = pathToFileURL(
  join(process.cwd(), "dist/server/index.mjs"),
).toString();

const mod = await import(serverEntry);
const handler = mod.default ?? mod;

for (const route of routes) {
  const url = `http://localhost${basePath.replace(/\/$/, "")}${route}`;
  const req = new Request(url);
  const env = {};
  const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };
  const res = await handler.fetch(req, env, ctx);
  if (res.status >= 400) {
    console.error(`Prerender ${route} -> ${res.status}`);
    process.exit(1);
  }
  const html = await res.text();
  const target =
    route === "/"
      ? join(outDir, "index.html")
      : join(outDir, route.replace(/^\//, ""), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
  console.log(`Prerendered ${route} -> ${target}`);
}
