# Mini-Workflow als farbiges Inhaltsverzeichnis + Back-to-Top

Nur `src/routes/handout.tsx` wird angefasst. Keine Inhalte ändern.

## 1. Boxen farblich deutlicher (Akzent #A706AD)

Aus den dezenten weißen Karten werden klar erkennbare, klickbare Kacheln im Magenta-Ton:

- Hintergrund: leicht magenta-getönt (`rgba(167,6,173,0.08)`)
- Rahmen: `1px solid rgba(167,6,173,0.45)`
- Hover/Focus: Hintergrund kräftiger (`rgba(167,6,173,0.18)`), Rahmen voll magenta, leichter Lift (`translate-y-[-2px]`) + Shadow
- Label-Text: weiß statt dunkelblau, damit es auf dem dunklen Hintergrund funktioniert
- Die Ziffern (01, 02, …) bleiben **cyan** wie bisher (so gewünscht)
- Dezenter Pfeil ↓ rechts oben in jeder Box als visueller Hinweis „springt zum Abschnitt"

## 2. Boxen werden Sprungmarken (Inhaltsverzeichnis)

- Jede Section bekommt eine stabile ID: `id="abschnitt-1"` … `id="abschnitt-5"` direkt am `<section>`-Element.
- Boxen werden zu `<a href="#abschnitt-N">` statt `<div>`. Klick → scrollt sanft zum Kapitel (`scroll-behavior: smooth` global, plus `scroll-margin-top` an den Sections, damit die sticky Top-Bar nicht überdeckt).

**Offener Punkt – Box 6 „Post veröffentlichen":**
Es gibt aktuell nur 5 Kapitel (01–05). Für Box 6 habe ich zwei Optionen:
  (a) Box 6 verlinkt zum Schluss/Footer der Seite (z.B. ein Anker am Seitenende), oder
  (b) Box 6 bleibt ohne Link (rein visuell).
Ich nehme **(a)** als Default, sag Bescheid, wenn du (b) lieber hast.

## 3. Back-to-Top-Pfeil

- Fixierter, runder Button unten rechts (`fixed bottom-6 right-6`), `no-print`, `z-50`.
- Erscheint erst nach ~400 px Scroll (kleiner `useEffect` mit Scroll-Listener + `useState`).
- Klick → `window.scrollTo({ top: 0, behavior: "smooth" })`.
- Styling im Markenton: magenta Hintergrund (#A706AD), weißer `ChevronUp` aus `lucide-react`, dezenter Shadow, Hover etwas heller.
- A11y: `aria-label="Nach oben"`.

## Technische Notizen

- `lucide-react` ist bereits im Projekt verfügbar.
- Reiner Frontend-Change in `handout.tsx`; keine neuen Dateien, keine neuen Dependencies, keine Logikänderungen.
