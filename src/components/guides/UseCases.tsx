import type { UseCase } from "@/types";

interface UseCasesProps {
  useCases: UseCase[];
}

export function UseCases({ useCases }: UseCasesProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          AI Use Cases
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="rounded-xl border p-6"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {useCase.title}
              </h3>
              <p className="mt-2" style={{ color: "var(--text-secondary)" }}>{useCase.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {useCase.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
