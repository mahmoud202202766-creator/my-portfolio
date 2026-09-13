const CV_PATH = "/Mahmoud-El-Sayed-CV.pdf";

export default function Resume() {
  return (
    <section className="pb-16">
      <div className="ticker">DOCUMENT ARCHIVE</div>
      <h1 className="page-title">RESUME</h1>
      <p className="text-ink-muted text-sm mb-8 max-w-115">
        Downloadable resume access here.
      </p>

      <div className="max-w-105 rounded-card p-7 bg-panel-light">
        <div className="font-space font-semibold text-sm text-ink-dark mb-1.5">
          Mahmoud-El-Sayed-CV.pdf
        </div>
        <div className="text-xs text-ink-dark-muted mb-5">
          Updated Sep 2026 · 1 page
        </div>

        <a
          href={CV_PATH}
          download="Mahmoud-El-Sayed-CV.pdf"
          className="inline-block font-space text-sm font-semibold text-white bg-ink-dark px-6 py-3 rounded-lg transition-transform hover:-translate-y-0.5"
        >
          Download CV ↓
        </a>
      </div>
    </section>
  );
}
