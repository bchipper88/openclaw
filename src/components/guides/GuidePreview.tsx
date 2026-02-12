interface GuidePreviewProps {
  tableOfContents: string[];
  professionTitle: string;
}

export function GuidePreview({
  tableOfContents,
  professionTitle,
}: GuidePreviewProps) {
  return (
    <section className="py-16" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          What&apos;s Inside the Guide
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          Your complete AI workflow setup guide for {professionTitle} includes:
        </p>
        <div
          className="mt-8 rounded-xl border p-8"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <ol className="space-y-4">
            {tableOfContents.map((chapter, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {index + 1}
                </span>
                <span className="pt-1" style={{ color: "var(--text-secondary)" }}>{chapter}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
