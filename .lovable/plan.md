# Hero-Bereich neu komponieren

Ziel: Der Community-Banner „Von 0 nach KI – Für Frauen" wird das erste, was man sieht – aber in einer angemessenen Größe. Dein AI & Beyond Logo tritt in die Rolle des dezenten Absenders.

## Mein Vorschlag

```text
┌──────────────────────────────────────────────────────┐
│ [AI & Beyond Logo, klein, oben links]                │
│                                                      │
│        ┌─────────────────────────────────┐           │
│        │   Community-Banner (gerahmt,    │           │
│        │   max. ~520 px breit, zentriert)│           │
│        └─────────────────────────────────┘           │
│                                                      │
│              TRAINING-HANDOUT  (Eyebrow)             │
│                                                      │
│            Social Media mit KI                       │
│         In 90 Minuten – von der Idee zum Post.       │
│                                                      │
│         Einleitungstext …                            │
└──────────────────────────────────────────────────────┘
```

### Konkret

1. **AI & Beyond Logo**
   - rutscht nach **ganz oben links** in die bestehende sticky Top-Bar (ersetzt dort die Textzeile „AI & Beyond Consulting").
   - klein gehalten (Höhe ca. 28 px), leicht reduziert (Opacity 80 %) – wirkt wie ein klassisches Absender-Branding, ohne Konkurrenz zum Banner.
   - im Footer bleibt das Logo wie gehabt (dort darf es wieder etwas größer als Signatur stehen).

2. **Community-Banner**
   - wird **das erste Element im Hero**, **zentriert**, mit **max. ~520 px Breite** (statt full width). Auf Mobil etwas schmaler, auf Desktop bleibt es kompakt.
   - leicht abgerundet (`rounded-2xl`), feiner Rahmen + dezenter Schatten, damit es wie eine eingerahmte „Karte" wirkt und nicht wie ein Banner-Cover.
   - Abstand darunter angenehm großzügig, sodass es klar als visueller Anker fungiert.

3. **Reihenfolge im Hero (neu)**
   1. Community-Banner (zentriert, kompakt)
   2. Eyebrow „TRAINING-HANDOUT" (cyan, gesperrt)
   3. H1 „Social Media mit KI"
   4. Untertitel „In 90 Minuten – von der Idee zum Post."
   5. Einleitungstext
   - Die Headlines werden ebenfalls **zentriert**, damit die Komposition unter dem zentrierten Banner ruhig bleibt. (Falls du linksbündig bevorzugst, sag Bescheid – beides geht.)

## Geändert wird ausschließlich

- `src/routes/handout.tsx` (Top-Bar + Hero-Block)

Keine Logik, keine Inhalte ändern sich – nur Anordnung, Größe und Ausrichtung.

## Offene Frage

- **Ausrichtung der Headlines unter dem Banner**: zentriert (mein Vorschlag, harmoniert mit dem zentrierten Banner) oder weiterhin linksbündig?

Soll ich so loslegen?
