import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import logoAsset from "@/assets/ai-beyond-logo.png.asset.json";
import communityAsset from "@/assets/community-titelbild.png.asset.json";

export const Route = createFileRoute("/handout")({
  head: () => ({
    meta: [
      { title: "Social Media mit KI – Handout | AI & Beyond Consulting" },
      {
        name: "description",
        content:
          "Training-Handout: In 90 Minuten von der Idee zum Post. Schritt-für-Schritt-Anleitung mit Prompts und Tools.",
      },
      { property: "og:title", content: "Social Media mit KI – Handout" },
      {
        property: "og:description",
        content:
          "Training-Handout von AI & Beyond Consulting: In 90 Minuten von der Idee zum Post.",
      },
    ],
  }),
  component: HandoutPage,
});

/* ---------- Building Blocks ---------- */

function PromptBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="print-avoid-break mt-3 rounded-lg p-4 font-mono text-[13.5px] leading-relaxed shadow-inner"
      style={{
        background: "var(--brand-primary)",
        color: "var(--brand-white)",
        border: "1px solid rgba(15,192,223,0.25)",
      }}
    >
      {children}
    </div>
  );
}

function ToolCard({
  tool,
  url,
  children,
}: {
  tool: string;
  url: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="print-avoid-break mb-6 rounded-xl p-6 shadow-sm"
      style={{
        background: "var(--brand-white)",
        border: "1px solid rgba(2,50,89,0.12)",
      }}
    >
      <h3
        className="mb-2 text-xl font-semibold"
        style={{ color: "var(--brand-primary)" }}
      >
        Tool: {tool}
      </h3>
      <p className="mb-2 text-[15px] text-black">
        🔗 <strong>Zum Tool:</strong>{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: "var(--brand-accent-magenta)" }}
        >
          {url}
        </a>
      </p>
      {children && <div className="text-[15px] text-neutral-700">{children}</div>}
    </div>
  );
}

function SectionHeading({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span
        className="font-brand text-5xl font-light leading-none"
        style={{ color: "var(--brand-accent-cyan)" }}
      >
        {String(number).padStart(2, "0")}
      </span>
      <h2
        className="font-brand text-2xl font-semibold tracking-tight md:text-3xl"
        style={{ color: "var(--brand-white)" }}
      >
        {children}
      </h2>
    </div>
  );
}

function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="print-avoid-break rounded-2xl p-8 shadow-lg"
      style={{
        background: "var(--brand-white)",
        color: "var(--brand-ink)",
      }}
    >
      {children}
    </div>
  );
}

/* Unified "Wichtig"-style note box (cyan accent) — reuse across the page */
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="print-avoid-break mt-6 rounded-lg p-4 text-[14.5px]"
      style={{
        background: "rgba(15,192,223,0.08)",
        border: "1px solid rgba(15,192,223,0.35)",
        color: "var(--brand-primary)",
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Page ---------- */

function HandoutPage() {
  const miniWorkflow = [
    "Themen recherchieren (NotebookLM)",
    "Post-Ideen generieren (KI deiner Wahl)",
    "Redaktionsplan erstellen",
    "Schreibstil sichern",
    "Bilder ergänzen",
    "Post veröffentlichen",
  ];

  return (
    <div
      className="font-brand min-h-screen"
      style={{
        background: "var(--brand-gradient)",
        color: "var(--brand-white)",
      }}
    >
      {/* Print / Action Bar */}
      <div className="no-print sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <img
            src={logoAsset.url}
            alt="AI & Beyond Consulting & Coaching"
            className="h-7 w-auto opacity-80"
          />
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/5"
          >
            <Printer className="h-4 w-4" /> Als PDF speichern
          </button>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-4xl px-6 pb-12 pt-12 text-center md:pt-20">
        {/* Community banner – kompakt, zentriert, als gerahmte Karte */}
        <div className="mx-auto mb-12 w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
          <img
            src={communityAsset.url}
            alt="Von 0 nach KI – Für Frauen. Praxisnah, verständlich & persönlich begleitet. Von und mit Beate Roos."
            className="block h-auto w-full"
          />
        </div>

        <p
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em]"
          style={{ color: "var(--brand-accent-cyan)" }}
        >
          Training-Handout
        </p>
        <h1 className="font-brand text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Social Media mit KI
        </h1>
        <h2 className="font-brand mt-2 text-3xl font-light leading-tight tracking-tight text-white/90 md:text-5xl">
          In 90 Minuten – von der Idee zum Post.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/75">
          Dieses Handout begleitet das Training und unterstützt dich dabei, alle
          Schritte nach der Session eigenständig zu wiederholen. Es geht nicht
          um Perfektion, sondern um Geschwindigkeit, Klarheit und praktische
          Anwendung.
        </p>
      </header>


      {/* Sections */}
      <main className="mx-auto max-w-4xl space-y-20 px-6 pb-24">
        {/* Mini-Workflow (now upfront) */}
        <section>
          <h2 className="font-brand mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
            Dein Mini-Workflow auf einen Blick
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {miniWorkflow.map((label, i) => (
              <div
                key={i}
                className="print-avoid-break rounded-xl p-4 text-left shadow-sm"
                style={{
                  background: "var(--brand-white)",
                  border: "1px solid rgba(2,50,89,0.12)",
                }}
              >
                <span
                  className="font-brand block text-2xl font-light"
                  style={{ color: "var(--brand-accent-cyan)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 1 */}
        <section>
          <SectionHeading number={1}>
            Themen finden – am leeren Blatt vorbei
          </SectionHeading>
          <ContentCard>
            <ToolCard tool="NotebookLM" url="https://notebooklm.google.com">
              <p>
                NotebookLM eignet sich, um Themen strukturiert zu identifizieren,
                die tatsächlich für den Arbeitsalltag relevant sind.
              </p>
            </ToolCard>

            <p className="font-semibold text-black">Vorgehen:</p>
            <ol className="mt-3 list-decimal space-y-4 pl-6 text-[15px] text-neutral-800">
              <li>
                Lasse NotebookLM aktuelle, arbeitsbezogene KI-Themen recherchieren:
                <PromptBox>
                  Zeige mir 20 aktuelle Themen, die für Menschen im Arbeitsalltag
                  beim Einsatz von KI relevant sind. Das können sowohl Probleme
                  als auch Chancen sein.
                </PromptBox>
              </li>
              <li>
                Lasse dir die Ergebnisse als <strong>Mindmap</strong> darstellen.
              </li>
              <li>
                Gehe anschließend in die Tiefe:
                <PromptBox>
                  Was sind die Top 20 Probleme oder Chancen, die Menschen für
                  sich beim Umgang mit KI sehen?
                </PromptBox>
              </li>
              <li>Kopiere dir die Ergebnisse raus.</li>
            </ol>

            <NoteBox>
              <p className="mb-2">
                ➡️ Dieser Output ist dein inhaltliches Fundament.
              </p>
              <p className="mb-2">
                <strong>Wichtig:</strong> Die obigen Prompts sind{" "}
                <strong>Beispiel-Prompts</strong>. Du kannst und solltest sie an
                deine eigenen Fragen, Branchen und Zielgruppen anpassen.
              </p>
              <p>
                <strong>Qualitäts-Hinweis:</strong> Für besonders fundierte oder
                strategische Inhalte solltest du{" "}
                <strong>Deep Research</strong> statt der schnellen Recherche
                nutzen. Im Training haben wir bewusst die schnelle Variante
                gewählt, um Tempo und Workflow zu zeigen.
              </p>
            </NoteBox>
          </ContentCard>
        </section>

        {/* 2 */}
        <section>
          <SectionHeading number={2}>
            Von der Recherche zu Post-Ideen
          </SectionHeading>
          <ContentCard>
            <ToolCard
              tool="ChatGPT (oder eine andere KI deiner Wahl)"
              url="https://chatgpt.com"
            >
              <p>
                <strong>Hinweis:</strong> Nutze die KI, mit der du bisher am
                meisten gearbeitet hast. Die Logik ist tool-unabhängig.
              </p>
            </ToolCard>

            <p className="font-semibold text-black">Vorgehen:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] text-neutral-800">
              <li>Füge den kopierten Text aus NotebookLM in die KI ein.</li>
              <li>Wenn der Text zu lang ist, erstelle ein Dokument und lade es hoch.</li>
            </ul>

            <p className="mt-5 font-semibold text-black">
              Prompt zur Ideen-Generierung:
            </p>
            <PromptBox>
              Erstelle aus folgendem Text mindestens 10 verschiedene
              thematische Content-Blöcke für LinkedIn Social-Media-Posts.
            </PromptBox>

            <p
              className="mt-4 text-[14.5px]"
              style={{ color: "var(--brand-accent-magenta)" }}
            >
              ➡️ Diese Vorschläge dienen als Rohmaterial für deinen
              Redaktionsplan.
            </p>
          </ContentCard>
        </section>

        {/* 3 */}
        <section>
          <SectionHeading number={3}>
            Redaktionsplan erstellen – ohne Ziel geht Content nirgendwo hin
          </SectionHeading>
          <ContentCard>
            <p className="text-[15px] text-neutral-800">
              Definiere vor der Planung dein <strong>primäres Ziel</strong>.
              Ohne Ziel produziert die KI beliebigen Output.
            </p>
            <p className="mt-4 font-semibold text-black">Mögliche Ziele:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-[15px] text-neutral-800">
              <li>Sichtbarkeit & Reichweite</li>
              <li>Lead-Generierung / Anfragen</li>
              <li>Expertise aufbauen</li>
              <li>Vertrauen aufbauen</li>
              <li><em>Dein Ziel</em></li>
            </ul>

            <h3 className="mt-8 font-brand text-xl font-semibold text-black">
              Aufbau des Redaktionsplan-Prompts
            </h3>
            <p className="mt-2 text-[15px] text-neutral-800">
              Dieser Prompt besteht aus klaren Bausteinen, die du jederzeit an
              deinen Bedarf anpassen kannst:
            </p>

            <ol className="mt-5 list-decimal space-y-5 pl-6 text-[15px] text-neutral-800">
              <li>
                <strong>Zieldefinition</strong>
                <PromptBox>
                  Erstelle nun einen Redaktionsplan für einen Monat mit dem Ziel{" "}
                  {"{{ZIEL}}"}.
                </PromptBox>
              </li>
              <li>
                <strong>Frequenz & Umfang</strong>
                <PromptBox>
                  Ich möchte {"{{ANZAHL}}"} Posts pro Woche / pro Monat
                  veröffentlichen.
                </PromptBox>
              </li>
              <li>
                <strong>Timing (optional, aber empfohlen)</strong>
                <PromptBox>
                  Meine besten Tage und Zeiten zum Veröffentlichen sind{" "}
                  {"{{TAG/ZEITRAUM + ZEIT/ZEITRAUM}}"}, z. B.
                  Dienstagvormittag und Donnerstagnachmittag.
                </PromptBox>
              </li>
              <li>
                <strong>Ausgabeformat</strong>
                <PromptBox>
                  Bitte stelle den Redaktionsplan als Tabelle dar und mache ihn
                  als Download verfügbar, damit ich ihn als Excel-Datei nutzen
                  kann.
                </PromptBox>
              </li>
            </ol>

            <NoteBox>
              <p className="mb-2">
                <strong>Wichtig:</strong> Du kannst im Prompt zusätzliche
                Spalten explizit anfordern, zum Beispiel:
              </p>
              <ul className="mb-2 list-disc pl-6 text-sm">
                <li>Veröffentlichungsdatum</li>
                <li>Kanal / Plattform (z. B. LinkedIn, Instagram, Facebook)</li>
                <li>Status (geplant, veröffentlicht, überarbeitet)</li>
                <li>Call-to-Action</li>
              </ul>
              <p>
                Wenn du diese im Prompt nicht angibst, kannst du sie auch
                problemlos später mit deiner KI ergänzen oder direkt in Excel.
              </p>
            </NoteBox>
          </ContentCard>
        </section>

        {/* 4 */}
        <section>
          <SectionHeading number={4}>
            Stil ist kein Zufall – er ist eine Entscheidung
          </SectionHeading>
          <ContentCard>
            <p className="text-[15px] text-neutral-800">
              Bevor du Inhalte finalisierst, lege deinen Stil bewusst fest –
              nicht nach Bauchgefühl, sondern systematisch.
            </p>

            <div className="mt-6">
              <ToolCard
                tool="ChatGPT (oder eine andere KI deiner Wahl)"
                url="https://chatgpt.com"
              >
                <p>
                  <strong>Hinweis:</strong> Nutze auch hier die KI, mit der du
                  am vertrautesten bist.
                </p>
              </ToolCard>
            </div>

            <h3 className="font-brand mt-4 text-xl font-semibold text-black">
              Vollständiger Prompt zur Stilanalyse (nicht kürzen)
            </h3>
            <p className="mt-2 text-[15px] font-medium text-neutral-800">
              Verwende diesen Prompt <strong>vollständig und ohne Änderungen
              oder Auslassungen</strong>. Jeder Satz ist relevant.
            </p>

            <div
              className="print-avoid-break mt-4 overflow-x-auto rounded-lg p-6 font-mono text-[13px] leading-relaxed shadow-inner"
              style={{
                background: "var(--brand-primary)",
                color: "var(--brand-white)",
              }}
            >
              <p
                className="mb-3 font-bold uppercase tracking-wide"
                style={{ color: "var(--brand-accent-cyan)" }}
              >
                Prompt:
              </p>
              <p className="mb-4">
                Du bist ein KI-Coach für Schreibstil und Tone of Voice. Deine
                Aufgabe ist es, den Stil des folgenden Textes so präzise zu
                analysieren, dass daraus ein wiederverwendbarer Stil-Prompt
                entsteht, mit dem konsistent neue Texte im gleichen Stil
                erzeugt werden können.
              </p>

              <p
                className="mb-2 font-bold"
                style={{ color: "var(--brand-accent-cyan)" }}
              >
                Vorgehen:
              </p>
              <p className="mb-2">
                1. Stilanalyse
                <br />
                Analysiere den Text nach folgenden Merkmalen:
                <br />
                kommunikative Haltung (z. B. erklärend, erzählend, motivierend, meinungsstark)
                <br />
                Zielgruppe und Sprachniveau (z. B. fachlich, nahbar, gemischt)
                <br />
                Tone of Voice (z. B. direkt, emotional, sachlich, inspirierend)
                <br />
                Satzstil (z. B. kurze Impulse vs. komplexe Satzgefüge)
                <br />
                sprachlicher Rhythmus (z. B. Pausen, Betonung, rhetorische Fragen)
                <br />
                Wortwahl (z. B. aktiv vs. passiv, starke Verben vs. Substantive)
                <br />
                Struktur (Absätze, Listen, Beispiele, Dramaturgie)
                <br />
                persönliche Sprach-Signaturen (z. B. wiederkehrende Begriffe, Anglizismen, typische Phrasen, Signature-Wörter wie „Ja", „Nope", „Genau", Verstärker wie „ganz ehrlich", Emojis)
                <br />
                sprachliche Tabus oder bewusst vermiedene Wörter
              </p>

              <p className="mb-2">
                Falls persönliche Sprach-Signaturen im Text nicht eindeutig
                erkennbar sind, stelle bis zu drei gezielte Rückfragen:
                <br />
                Nutzt du bestimmte Lieblingswörter oder wiederkehrende Phrasen?
                <br />
                Verwendest du häufig Anglizismen oder markenspezifische Begriffe?
                <br />
                Gibt es Wörter oder Ausdrücke, die du bewusst vermeidest?
              </p>

              <p className="mb-2">
                2. Stil-Fingerprint
                <br />
                Fasse den Stil in 8–10 gut ausgearbeiteten Punkten zusammen.
                Struktur:
                <br />
                – Perspektive und Anrede
                <br />
                – Tone of Voice
                <br />
                – Satzstil
                <br />
                – sprachlicher Rhythmus
                <br />
                – Wortwahl und Muster
                <br />
                – Struktur und Aufbau
                <br />
                – persönliche Sprach-Signaturen
                <br />
                – Do's und Don'ts für den Stil
              </p>

              <p className="mb-2">
                3. Stil-Prompt erstellen
                <br />
                Entwickle auf Basis des Stil-Fingerprints einen
                wiederverwendbaren Prompt (200–300 Wörter), mit dem Texte im
                analysierten Stil generiert werden können.
                <br />
                Der Prompt soll:
                <br />
                in der Sprache des Originaltextes geschrieben sein
                <br />
                Platzhalter enthalten (z. B. {"{{Thema}}"}, {"{{Ziel}}"},{" "}
                {"{{Format}}"}, {"{{Zielgruppe}}"}, {"{{Tonalität}}"})
                <br />
                klare Stil-Regeln definieren
                <br />
                persönliche Sprach-Signaturen berücksichtigen
                <br />
                einen kurzen Qualitätscheck (Checkliste) enthalten
              </p>

              <p className="mb-4">
                4. Ausgabeformat
                <br />
                Liefere genau diese beiden Teile:
                <br />
                A) Stil-Fingerprint (Listenformat, prägnant)
                <br />
                B) Stil-Prompt
              </p>

              <p>
                Hier ist der zu analysierende Text:
                <br />
                &lt;&lt;&lt;
                <br />
                {"{{TEXT}}"}
                <br />
                &gt;&gt;&gt;
              </p>
            </div>

            <NoteBox>
              <p className="mb-2">
                <strong>Tipp:</strong> Je mehr persönliche Texte du der KI
                gibst, desto präziser wird die Stilanalyse. Statt nur eines
                Textes zwischen den Pfeilen kannst du innerhalb von{" "}
                <code>&lt;&lt;&lt; … &gt;&gt;&gt;</code> mehrere Texte sauber
                kennzeichnen:
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-white/60 p-3 text-[13px] leading-relaxed">
{`<<<
Text 1:
… dein erster Text …

Text 2:
… dein zweiter Text …

Text 3:
… dein dritter Text …
>>>`}
              </pre>
              <p className="mt-2">
                Schon zwei bis drei Texte liefern ein deutlich stabileres
                Stil-Profil als ein einzelner.
              </p>
            </NoteBox>

            <div className="mt-8">
              <h3 className="font-brand text-lg font-bold text-black">
                Woher kommt der Text?
              </h3>
              <p className="mt-2 text-[15px] text-neutral-800">
                Nutze <strong>deinen eigenen, bereits erfolgreichen Content</strong>,
                zum Beispiel:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-[15px] text-neutral-800">
                <li>gut performende LinkedIn-Posts</li>
                <li>Newsletter-Texte</li>
                <li>Blog-Artikel</li>
              </ul>
              <p className="mt-2 text-[15px] text-neutral-800">
                Das kann auch ein erfolgreicher Post von jeder anderen
                Plattform sein. Entscheidend ist, dass der Stil bereits
                funktioniert und reproduzierbar ist.
              </p>
            </div>
          </ContentCard>
        </section>

        {/* 5 */}
        <section>
          <SectionHeading number={5}>
            Bilder – die Botschaft unterstützen, nicht ablenken
          </SectionHeading>
          <ContentCard>
            <p className="text-[15px] text-neutral-800">
              Gute Bilder verstärken deine Botschaft. Sie ersetzen keinen guten
              Inhalt.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Tool 1: ChatGPT */}
              <div
                className="print-avoid-break rounded-xl p-6"
                style={{
                  background: "var(--brand-white)",
                  border: "1px solid rgba(2,50,89,0.12)",
                }}
              >
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Tool 1: ChatGPT
                </h3>
                <p className="mb-3 text-[14.5px] text-black">
                  🔗{" "}
                  <a
                    href="https://chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: "var(--brand-accent-magenta)" }}
                  >
                    chatgpt.com
                  </a>
                </p>
                <p className="font-semibold text-black">Anwendungsfälle:</p>
                <ul className="mt-1 list-disc pl-6 text-[14.5px] text-neutral-800">
                  <li>Neue Bilder durch Beschreibung erstellen</li>
                  <li>Bestehende Bilder anpassen</li>
                </ul>
              </div>

              {/* Tool 2: Gemini – Nano Banana */}
              <div
                className="print-avoid-break rounded-xl p-6"
                style={{
                  background: "var(--brand-white)",
                  border: "1px solid rgba(2,50,89,0.12)",
                }}
              >
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Tool 2: Gemini – Nano Banana
                </h3>
                <p className="mb-3 text-[14.5px] text-black">
                  🔗{" "}
                  <a
                    href="https://gemini.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: "var(--brand-accent-magenta)" }}
                  >
                    gemini.google.com
                  </a>
                </p>
                <p className="font-semibold text-black">Anwendungsfälle:</p>
                <ul className="mt-1 list-disc pl-6 text-[14.5px] text-neutral-800">
                  <li>Neue Bilder durch Beschreibung erstellen</li>
                  <li>Bestehende Bilder anpassen</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-[15px] text-neutral-800">
              <p className="font-semibold text-black">Typische Szenarien:</p>
              <ul className="list-disc pl-6">
                <li>
                  <em>Noch kein Bild vorhanden</em> → Bild detailliert beschreiben
                </li>
                <li>
                  <em>Bild existiert bereits</em> → hochladen und per Prompt verfeinern
                </li>
              </ul>

              <NoteBox>
                <p className="font-semibold">
                  Wichtig – Unterstützung für gute Prompts:
                </p>
                <p className="mt-2">
                  Für meine Community habe ich explizit einen{" "}
                  <a
                    href="https://chatgpt.com/g/g-6946dd11dba881919bd5d4e910659855-von-0-nach-ki-bildpromptgenerator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
                  >
                    Bild-Prompt-Generator
                  </a>{" "}
                  gebaut. Den kannst du gerne zur Unterstützung nutzen, damit
                  du die Prompts nicht selbst schreiben musst – einfach dein
                  Bildmotiv beschreiben, der Generator formuliert daraus einen
                  belastbaren Prompt für ChatGPT oder Gemini.
                </p>
              </NoteBox>
            </div>
          </ContentCard>
        </section>

        {/* Closing quote */}
        <section>
          <p
            className="text-center text-2xl font-light italic"
            style={{ color: "var(--brand-accent-cyan)" }}
          >
            „Done is better than perfect."
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t border-white/10 px-6 py-10 text-center"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <img
          src={logoAsset.url}
          alt="AI & Beyond Consulting & Coaching"
          className="mx-auto h-12 w-auto opacity-90"
        />
        <p className="mt-4 text-sm text-white/60">
          Social Media mit KI – Training-Handout
        </p>
      </footer>
    </div>
  );
}
