import { createFileRoute, Navigate } from "@tanstack/react-router";

// Client-side redirect so the prerender step produces a real index.html
// (a server-side `throw redirect()` would emit an HTTP redirect, not HTML,
// which static hosts like GitHub Pages cannot serve as a landing page).
export const Route = createFileRoute("/")({
  component: RedirectToHandout,
});

function RedirectToHandout() {
  return <Navigate to="/handout" replace />;
}
