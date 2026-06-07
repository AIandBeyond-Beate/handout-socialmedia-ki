# Anpassungen am Handout (`/handout`)

Alle Änderungen erfolgen ausschließlich in `src/routes/handout.tsx`. Keine Logik, nur Inhalte & Styling.

## 1. Community-Logo am Anfang
Direkt im Hero – oberhalb (oder neben) des AI & Beyond Logos – wird ein zweites Logo eingefügt: das Logo der Community, für die das Training gehalten wurde.

**Offen:** Bitte das Community-Logo (PNG/SVG) noch hochladen. Sobald es da ist, binde ich es analog zum bestehenden Logo über die Asset-Pipeline ein.

## 2. Begriff „Workshop" → „Training"
Im gesamten Text wird jedes Vorkommen von *Workshop* durch *Training* ersetzt (Hero-Untertitel „Workshop-Handout", Intro-Absatz, Footer-Zeile, Meta-Title/Description/OG-Tags).

## 3. Abschnitt 01 – NotebookLM
Vorgehen, Punkt 4 wird zu:
> „Kopiere dir die Ergebnisse raus."
(Der Rest des Satzes über Report/Blogpost entfällt.)

## 4. Abschnitt 02 – Von der Recherche zu Post-Ideen
Vorgehen, erster Bullet wird zu:
> „Füge den kopierten Text aus NotebookLM in die KI ein."

## 5. Abschnitt 03 – Redaktionsplan
- **Mögliche Ziele:** neuer 5. Bulletpoint *„Dein Ziel"* (kursiv).
- **Timing-PromptBox:** `{{TAG + UHRZEIT}}` → `{{TAG + ZEIT}}` bzw. `{{ZEITRAUM + ZEITRAUM}}`. Konkret nehmen wir `{{TAG + ZEIT}}` bzw. `{{ZEITRAUM}}` – ich formuliere den Platzhalter sauber als `{{TAG/ZEITRAUM + ZEIT/ZEITRAUM}}`.
- **Wichtig-Box unten:** Schlusssatz wird erweitert zu:
  > „Wenn du diese im Prompt nicht angibst, kannst du sie auch problemlos später mit deiner KI ergänzen oder direkt in Excel."

## 6. Abschnitt 04 – Stilanalyse
Neuer Tipp-Block (unter dem Prompt, optisch als kleiner Hinweis): mehrere Texte erhöhen die Qualität. Empfehlung: innerhalb der `<<< … >>>` mehrere Texte sauber labeln:
```
Text 1:
…
Text 2:
…
```
Je mehr persönliche Texte, desto besser die Stilanalyse.

## 7. Abschnitt 05 – Bilder
- Reihenfolge & Inhalt der Tool-Karten:
  - **Tool 1: ChatGPT** – Anwendungsfälle: neue Bilder per Beschreibung erstellen / bestehende Bilder anpassen.
  - **Tool 2: Gemini – Nano Banana** – gleiche Anwendungsfälle.
- „Typische Szenarien"-Block bleibt; passt zu beiden Tools.
- **Wichtig-Box (Bildprompt-Generator):**
  - Farbe an die anderen „Wichtig"-Boxen angleichen (eine einheitliche Variante verwenden – ich nehme die cyan/türkise Variante, die in Abschnitt 01 schon für „Wichtig" genutzt wird, damit es konsistent ist).
  - Text wird erweitert: ich habe für meine Community explizit einen Bild-Prompt-Generator gebaut, der gerne zur Unterstützung genutzt werden kann, um Prompts nicht selbst schreiben zu müssen.
  - Der Hinweis „auf Deutsch / auch für englische Prompts nutzbar" entfällt.

## 8. Mini-Workflow (bisher Abschnitt 06)
- **Position:** wird **nach oben** verschoben – direkt nach dem Hero, **vor** Abschnitt 01.
- **Inhalt reduzieren auf 6 Schritte** (alte 02 „Inhalte verdichten" und alte 04 „Ziel definieren" entfallen):
  1. Themen recherchieren (NotebookLM)
  2. Post-Ideen generieren (KI deiner Wahl)
  3. Redaktionsplan erstellen
  4. Schreibstil sichern
  5. Bilder ergänzen
  6. Post veröffentlichen
- **Farben:** Boxen werden **weiß** mit **dunkelblauer Schrift** (`var(--brand-primary)`); die großen Ziffern 01–06 bleiben in der bisherigen Akzentfarbe (cyan).
- Da der Mini-Workflow jetzt vorne steht, ist er kein nummerierter Abschnitt „06" mehr, sondern bekommt eine eigene Überschrift „Dein Mini-Workflow auf einen Blick" ohne Ziffer. Die nachfolgenden Abschnitte behalten 01–05.
- Das Schlusszitat „Done is better than perfect." wandert ans Ende des Handouts (nach Abschnitt 05), damit es weiterhin als Abschluss wirkt.

## Offene Punkte vor Umsetzung
1. **Community-Logo** noch hochladen.
2. Soll der **Hero-Begriff „Workshop-Handout"** (kleine Überzeile über dem Titel) ebenfalls zu **„Training-Handout"** werden? (Vorschlag: ja – konsequent.)

Sobald du bestätigst (und das Logo da ist), setze ich alles in einem Durchgang um.
