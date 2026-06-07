## Mini-Workflow Boxen deutlicher hervorheben

Die Boxen sind aktuell nur sehr schwach magenta getönt (8% Deckkraft). Ich fülle sie mit einer kräftigen Brand-Farbe, damit sie als Inhaltsverzeichnis klar hervorstechen — aber so, dass sie nicht mit dem Back-to-Top-Button (volles Magenta) konkurrieren.

### Änderung in `src/routes/handout.tsx` (Zeilen 230–248)

**Hintergrund:** Statt `rgba(167,6,173,0.08)` ein satter Magenta-zu-Dunkel-Verlauf aus dem Brandspektrum:
- `background: linear-gradient(135deg, #a706ad 0%, #6b0470 100%)`
- `border: 1px solid rgba(255,255,255,0.15)`
- stärkerer Schatten beim Hover

**Textfarben anpassen für Kontrast auf magenta Fläche:**
- Nummer (01, 02, …): von Cyan auf `var(--brand-white)` mit leicht reduzierter Deckkraft (z. B. `rgba(255,255,255,0.85)`) — Cyan auf Magenta wäre zu grell.
- Label: bleibt weiß (`var(--brand-white)`), wirkt jetzt aber kräftiger durch den dunklen Hintergrund.
- Pfeil-Icon: weiß statt magenta, damit es auf der magenta Fläche sichtbar ist.

**Hover:** zusätzlich leicht hellerer Verlauf (z. B. via Tailwind `hover:brightness-110`), damit die Interaktivität spürbar bleibt.

### Was sich nicht ändert
- Verlinkung zu `#abschnitt-*` bleibt.
- Grid-Layout, Spacing, Icons-Position bleiben.
- Back-to-Top-Button und alle anderen Sektionen bleiben unberührt.
