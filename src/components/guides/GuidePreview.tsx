interface GuidePreviewProps {
  tableOfContents: string[];
  professionTitle: string;
}

export function GuidePreview({
  tableOfContents,
  professionTitle,
}: GuidePreviewProps) {
  return (
    <section className="bg-brand-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-brand-900">
          What&apos;s Inside the Guide
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-brand-500">
          Your complete AI workflow setup guide for {professionTitle} includes:
        </p>
        <div className="mt-8 rounded-xl border border-brand-200 bg-white p-8">
          <ol className="space-y-4">
            {tableOfContents.map((chapter, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-brand-700"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600">
                  {index + 1}
                </span>
                <span className="pt-1 text-brand-600">{chapter}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
