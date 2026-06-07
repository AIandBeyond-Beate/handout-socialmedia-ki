## Ziel

Dein Repository `handout-socialmedia-ki` soll über GitHub Pages eine echte Startseite (`index.html`) ausliefern. Aktuell ist der Code im Branch `docs`, aber der vorhandene Deploy-Workflow ist auf `main` eingestellt. Dadurch erscheint bzw. startet der GitHub-Pages-Deploy nicht wie erwartet.

## Was ich ändern werde

1. **GitHub Actions Workflow auf deinen Branch anpassen**
   - Der Workflow soll nicht nur auf `main`, sondern auch auf `docs` reagieren.
   - Damit startet der Deploy, wenn Lovable in deinen aktuellen GitHub-Branch pusht.

2. **GitHub Pages Base Path fest einstellen**
   - Für GitHub Pages unter:

   ```text
   https://DEIN-GITHUB-NAME.github.io/handout-socialmedia-ki/
   ```

   braucht die App den Basis-Pfad:

   ```text
   /handout-socialmedia-ki/
   ```

   - Ich passe den Workflow so an, dass dieser Pfad automatisch korrekt gesetzt wird.
   - Dann musst du die Variable `BASE_PATH` nicht manuell in GitHub anlegen.

3. **Sicherstellen, dass eine `index.html` entsteht**
   - Die bestehende statische Build-Konfiguration bleibt erhalten.
   - Die Startseite `/` bleibt als Einstiegspunkt vorhanden und leitet intern zum Handout weiter.
   - GitHub Pages bekommt dadurch eine auslieferbare Startseite.

4. **Kurze Anleitung für dich danach**
   Nach der Änderung musst du in GitHub nur noch prüfen:
   - Repo ist **Public**: ist laut Screenshot bereits erledigt.
   - Unter **Settings → Pages** steht **Source = GitHub Actions**.
   - Danach öffnest du den Tab **Actions** und wartest, bis der neue Deploy-Lauf grün ist.

## Technische Details

Ich werde voraussichtlich nur diese Dateien anfassen:

```text
.github/workflows/deploy.yml
.lovable/plan.md
```

Die wichtigste Anpassung im Workflow ist ungefähr:

```yaml
on:
  push:
    branches: [main, docs]

env:
  BASE_PATH: /handout-socialmedia-ki/
```

Damit passt der Workflow zu deinem Screenshot, wo aktuell nur der Branch `docs` sichtbar ist.