## Ziel

Das hochgeladene HTML-Handout („Social Media with AI – In 90 Minutes From Idea to Post") wird ins Deutsche übersetzt, im Brand-Look von **AI & Beyond Consulting** neu gestaltet und als Route `/handout` in der Lovable-App ausgeliefert. Optimiert für Bildschirm **und** Druck (PDF-Export per Browser-Druck).

## Brand-Umsetzung

**Farben** (in `src/styles.css` als Tokens):
- Hintergrund: Gradient `#000000 → #023259` (Schwerpunkt ~70 % Schwarz)
- Primär: `#023259`, Weiß: `#FEFEFE`, Fließtext auf hellen Flächen: `#000000`
- Akzente: `#A706AD` (Magenta) und `#0FC0DF` (Cyan) – sparsam für Hervorhebungen
- Maximal 3–4 Farben gleichzeitig pro Sektion

**Typografie**: Raleway (Headlines + Body) via Google Fonts, geladen über `<link>` in `src/routes/__root.tsx`
- H1: 48 px, H2: 32 px, Body: 17 px, klare Hierarchie, viel Weißraum

**Ton**: ruhig, strategisch, reduziert. Keine Stockfotos, keine visuelle Unruhe.

## Inhaltsstruktur (übersetzt aus dem Original)

1. Titel-Hero auf Gradient-Hintergrund: „Social Media mit KI – In 90 Minuten von der Idee zum Post" + Untertitel + Logo-Slot oben links
2. Einleitung
3. Fünf nummerierte Schritte (Tool-Karten weiß auf Gradient, Prompt-Boxen in `#023259`):
   - NotebookLM (Recherche)
   - ChatGPT (Content-Strategie)
   - Gemini Nano Banana (Visuals)
   - usw. – Texte 1:1 aus dem Original übernommen und übersetzt
4. „Deep Dive" Sektion mit Akzent-Cyan/Magenta statt Indigo
5. Trainer-Info-Footer (bleibt: Beate Roos / EWMD – sofern du das beibehalten willst; sonst sag Bescheid)

## Technische Umsetzung

```text
src/routes/handout.tsx        ← neue Route, deutsche Inhalte, Brand-Styling
src/styles.css                ← Brand-Tokens: --brand-primary, --brand-accent-magenta,
                                --brand-accent-cyan, --gradient-brand
src/routes/__root.tsx         ← Raleway via <link> einbinden, head() Meta für /handout
```

- Print-Stylesheet: `@media print` setzt Gradient auf Solid, blendet Navigation aus, optimiert Seitenumbrüche → sauberer PDF-Export via Browser-Druck
- Logo: wenn du es hochgeladen hast, lade ich es via `lovable-assets` hoch und binde es im Hero ein. Bis dahin Platzhalter-Slot in Brand-Typografie
- Keine Backend-Logik nötig (reine Präsentationsseite)

## Offene Punkte

- **Logo** – noch nicht hochgeladen; bitte als nächstes ins Chatfenster ziehen (PNG/SVG)
- **Trainer-Info im Footer**: Beate Roos / EWMD beibehalten oder durch deine Daten ersetzen?
