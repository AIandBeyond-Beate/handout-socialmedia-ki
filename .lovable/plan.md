Änderung: CSS-Gradient von diagonal/oben-nach-unten auf horizontal links-nach-rechts drehen.

Betroffene Stelle: `--brand-gradient` in `src/styles.css`.
Aktuell: `linear-gradient(160deg, …)` (diagonal).
Neu: `linear-gradient(90deg, …)` bzw. `linear-gradient(to right, …)` für rein horizontalen Verlauf von links nach rechts.