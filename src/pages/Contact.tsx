import { ROWS } from "../data/contact";

export default function Contact() {
  return (
    <section className="pb-16">
      <div className="ticker">OPEN CHANNEL</div>
      <h1 className="page-title">CONTACT</h1>
      <p className="text-ink-muted text-sm mb-8 max-w-115">
        Open to frontend roles and freelance projects.
      </p>

      <div className="max-w-105">
        {ROWS.map(({ label, value, href, Icon }) => (
          <div
            key={label}
            className="flex items-start gap-3.5 py-4 border-b border-subtle"
          >
            <div className="w-8.5 h-8.5 rounded-full bg-accent-pink/15 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-accent-pink" />
            </div>
            <div>
              <div className="font-space text-[11px] tracking-wide text-accent-cyan mb-0.5">
                {label}
              </div>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-ink-primary hover:text-accent-pink transition-colors"
                >
                  {value}
                </a>
              ) : (
                <div className="text-sm text-ink-primary">{value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
