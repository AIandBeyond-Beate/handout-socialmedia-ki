import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ai-beyond-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI & Beyond Consulting" },
      {
        name: "description",
        content:
          "AI & Beyond Consulting – Klarheit vor Komplexität. Strategische KI-Beratung und Workshops.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="font-brand flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{
        background: "var(--brand-gradient)",
        color: "var(--brand-white)",
      }}
    >
      <img
        src={logoAsset.url}
        alt="AI & Beyond Consulting & Coaching"
        className="mb-10 h-24 w-auto md:h-32"
      />
      <h1 className="font-brand max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Klarheit vor Komplexität.
      </h1>
      <p className="mt-6 max-w-xl text-lg font-light text-white/75">
        Strategische KI-Beratung, Workshops und Materialien.
      </p>
      <Link
        to="/handout"
        className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:opacity-90"
        style={{
          background: "var(--brand-accent-cyan)",
          color: "var(--brand-primary)",
        }}
      >
        Workshop-Handout ansehen →
      </Link>
    </div>
  );
}
